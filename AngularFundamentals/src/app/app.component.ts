import { Component } from '@angular/core';

interface Passenger{
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children: Child[] | null
}

interface Child{
  name: string,
  age: number
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
      checkedIn: true,
      checkInDate: 1460842000000,
      children: [{name: "Rosa", age: 12}]
    },
    {
      id: 2,
      fullName: "Ricardo2",
      checkedIn: true,
      checkInDate: 1410842000000,
      children: null
    },
    {
      id: 3,
      fullName: "Ricardo3",
      checkedIn: false,
      checkInDate: null,
      children: [{name: "Luisa", age: 12}]

    },
    {
      id: 4,
      fullName: "Ricardo4",
      checkedIn: true,
      checkInDate: 1890722000000,
      children: null
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
