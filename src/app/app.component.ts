import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as data from '../assets/cars_data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'UI-task';
navBaricon = true;
navBarContent = true;
cars: any = (data as any).default;
  constructor(private router: Router) {
    router.events.subscribe((event) => {
      console.log(event);
    })
  }

  goToPage(pageName:string):void {
    this.router.navigate([`${pageName}`]);
  }
goToAbout(){
  this.router.navigate(['./about']);
}
goToHome(){
  this.router.navigate(['./home']);
}
goToPopular(){
  this.router.navigate(['./popular']);
}
goToFeatured(){
  this.router.navigate(['./featured']);
}

navebarefale(){
  this.navBarContent = !this.navBarContent
  this.navBaricon=!this.navBaricon

}
 menuclick(){
  this.navBaricon=!this.navBaricon
 }
}
