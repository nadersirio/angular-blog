import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { ContentMainComponent } from './components/content-main/content-main.component';
import { FieldMainContentComponent } from './components/banner-content/field-main-content.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ContentMainComponent,
    FieldMainContentComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
