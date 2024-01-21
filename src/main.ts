import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from 'app/app.module';
import { environment } from 'environments/environment';

if (environment.production) {
  console.error = console.info = console.log = console.warn = () => { };
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
