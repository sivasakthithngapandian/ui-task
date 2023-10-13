import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
 


];

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    AppointmentComponent,
    HomeComponent
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
