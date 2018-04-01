import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as components from './components';
// import * as rootStore from './store';

@NgModule({
  declarations: [components.AppComponent],
  bootstrap: [components.AppComponent],
  imports: [NativeScriptModule, 
    // StoreModule.forRoot(rootStore.reducers)
],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewerAppModule {}
