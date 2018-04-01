import { platformNativeScript } from 'nativescript-angular/platform-static';
import { ViewerAppModuleNgFactory } from './viewer-app/viewer-app.module.ngfactory';

platformNativeScript().bootstrapModuleFactory(ViewerAppModuleNgFactory);
