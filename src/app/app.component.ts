import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'UI-task';
navBaricon = true;
navBarContent = true;

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      console.log(event);
    })
  }

  goToPage(pageName:string):void {
    this.router.navigate([`${pageName}`]);
  }
goToServices(){
  this.router.navigate(['./services']);
}
goToAbout(){
  this.router.navigate(['./about']);
}
goToHome(){
  this.router.navigate(['./home']);
}
goToContact(){
  this.router.navigate(['./contact']);
}
goToAppointment(){
  this.router.navigate(['./appointment']);
}

navebarefale(){
  this.navBarContent = !this.navBarContent
  this.navBaricon=!this.navBaricon

}
 menuclick(){
  this.navBaricon=!this.navBaricon
 }
}
