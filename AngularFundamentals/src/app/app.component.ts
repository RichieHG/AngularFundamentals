import { Component } from '@angular/core';

interface Passenger{
  id: number,
  fullName: string,
  checkedIn: boolean
}

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

  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = false;
  logo: string = "../assets/img/LogoWhite.svg";
  name: string = "";

  passengers: Passenger[] = [
    {
      id: 1,
      fullName: "Ricardo",
      checkedIn: true
    },
    {
      id: 2,
      fullName: "Ricardo2",
      checkedIn: true
    },
    {
      id: 3,
      fullName: "Ricardo3",
      checkedIn: false
    },
    {
      id: 4,
      fullName: "Ricardo4",
      checkedIn: true
    }
  ]
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
