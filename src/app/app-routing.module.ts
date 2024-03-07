import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContentComponent } from './pages/content/content.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent
  },
  {
    path:'content/:id',
    component: ContentComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
