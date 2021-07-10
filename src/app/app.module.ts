import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstadosComponent } from './components/estados/estados.component';
import { PilaComponent } from './components/pila/pila.component';

@NgModule({
  declarations: [
    AppComponent,
    EstadosComponent,
    PilaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
