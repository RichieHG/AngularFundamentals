import { Component } from '@angular/core';
import { Nav } from './models/nav.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <div class="app">
  //     {{title}}
  //   </div>
  // `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    },
    {
      link: '/passengers',
      name: 'Passengers',
      exact: false
    }
  ];
  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = false;
  logo: string = "../assets/img/LogoWhite.svg";
  name: string = "";


  constructor() {
    this.title = 'Angular Fundamentals';
  }

  handleBlur(event: any) {
    this.name = event.target.value;
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleClick() {
    this.name = "Richie";
  }

  handleChange(value: string) {
    this.name = value;
  }

  handleClickTemplateRef(value: string) {
    this.name = value;
  }
}
