import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TestComponent } from 'app/modules/store/test/test.component';

const homeRoutes: Route[] = [
    {
        path: '',
        component: TestComponent
    }
];

@NgModule({
    declarations: [
        TestComponent
    ],
    imports: [RouterModule.forChild(homeRoutes)]
})
export class TestModule { }
