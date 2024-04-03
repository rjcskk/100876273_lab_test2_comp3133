import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// Import your components, services, and modules here

@NgModule({
  declarations: [
    AppComponent,
    // List other components here but make sure they are not standalone
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Other module imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
