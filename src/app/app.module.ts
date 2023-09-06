import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RegionsComponent } from './components/regions/regions.component';
import { SiteComponent } from './components/site/site.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    RegionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
