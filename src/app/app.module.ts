import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { SearchPropertyFormComponent } from './search-property-form/search-property-form.component';
import { FooterComponent } from './footer/footer.component';
import { MinPropertyDisplayComponent } from './min-property-display/min-property-display.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TopNavigationComponent,
    HomeBannerComponent,
    SearchPropertyFormComponent,
    FooterComponent,
    MinPropertyDisplayComponent,
    ContactUsFormComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
