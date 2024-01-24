import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { BannerTitleComponent } from './components/banner-title/banner-title.component';
import { BannerContentComponent } from './components/banner-content/banner-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BannerTitleComponent,
    BannerContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
