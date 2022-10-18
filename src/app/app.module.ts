import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KmiComponent } from './components/kmi/kmi.component';
import {FormsModule} from "@angular/forms";
import { VanduoComponent } from './components/vanduo/vanduo.component';

@NgModule({
  declarations: [
    AppComponent,
    KmiComponent,
    VanduoComponent,

  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
