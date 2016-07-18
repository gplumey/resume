import { provideRouter, RouterConfig }  from '@angular/router';
import { CvComponent } from './+cv/';
import { CompanyComponent } from './+company/';
import { SendmailComponent } from './+sendmail/';

const routes: RouterConfig = [
    { path: "", component: CvComponent },
    { path: "company/:id", component: CompanyComponent },
    { path: "sendmail", component: SendmailComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];