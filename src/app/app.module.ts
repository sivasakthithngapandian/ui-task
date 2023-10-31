import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { PopularComponent } from './popular/popular.component';
import { FeaturedComponent } from './featured/featured.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'featured', component: FeaturedComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PopularComponent,
    FeaturedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
