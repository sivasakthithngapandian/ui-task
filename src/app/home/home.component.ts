import { Component } from '@angular/core';
/*import * as data from '../../assets/data.json';*/
import * as data from '../../assets/cars_data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  dental: any = (data as any).default;
  cars: any = (data as any).default;
}
