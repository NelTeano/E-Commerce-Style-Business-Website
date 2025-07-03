import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideAuth0 } from '@auth0/auth0-angular';


bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideAuth0({
      domain: 'dev-m051ksckbf8nu4k3.us.auth0.com',
      clientId: 'BAoDhesJuj1986ZoA2IAq5UIGE3UisPh',
      authorizationParams: {
        audience: 'https://localhost:7251/api', 
        redirect_uri: window.location.origin
      }
    })
  ]
});

