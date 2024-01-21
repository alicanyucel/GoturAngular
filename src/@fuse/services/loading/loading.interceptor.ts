import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { FuseLoadingService } from '@fuse/services/loading/loading.service';

@Injectable()
export class FuseLoadingInterceptor implements HttpInterceptor {
    handleRequestsAutomatically: boolean;

    /**
     * Constructor
     */
    constructor(
        private _fuseLoadingService: FuseLoadingService
    ) {
        // Subscribe to the auto
        this._fuseLoadingService.auto$
            .subscribe((value) => {
                this.handleRequestsAutomatically = value;
            });
    }

    /**
     * Intercept
     *
     * @param req
     * @param next
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // If the Auto mode is turned off, do nothing
        if (!this.handleRequestsAutomatically) {
            return next.handle(req);
        }

        // If the request does not want to trigger loading then do nothing. 
        if (req.headers.has("fuse-request-silent")) {
            req.headers.delete("fuse-request-silent");
            
            return next.handle(req);
        }

        // Set the loading status to true
        this._fuseLoadingService._setLoadingStatus(true, req.url);

        return next.handle(req).pipe(
            finalize(() => {
                // Set the status to false if there are any errors or the request is completed
                this._fuseLoadingService._setLoadingStatus(false, req.url);
            }));
    }
}
