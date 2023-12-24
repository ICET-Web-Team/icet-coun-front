import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { StatusComponentService } from './service/component/status.component.service';


const serverConfig: ApplicationConfig = {
  providers: [
    // provideServerRendering(),
    StatusComponentService
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
