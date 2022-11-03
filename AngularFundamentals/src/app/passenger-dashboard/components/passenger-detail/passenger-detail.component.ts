import { Component, OnChanges, OnInit, Input, Output, EventEmitter, SimpleChanges } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span class="status" [class.checked-in]="detail?.checkedIn"></span>
      <div *ngIf="editing">
        <input type="text" #name [value]="detail?.fullName" (input)="onNameChange(name.value)">
      </div>
      <div *ngIf="!editing">
        {{ detail?.fullName }}
      </div>

      <!-- <p> {{detail | json}} </p> -->
      <div class="date">
        Check-In date:
        {{
          detail?.checkInDate
            ? (detail?.checkInDate | date: 'MMM d, y' | uppercase)
            : 'Not Check-In'
        }}
      </div>
      <div class="children">Children : {{ detail?.children?.length || 0 }}</div>
      <button (click)="toogleEdit()">
        {{editing ? 'Done': 'Edit'}}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
    </div>
  `,
})
export class PassengerDetailComponent implements OnChanges {
  @Input()
  detail?: Passenger;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

@Output()
 edit: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;
  constructor() { }

  ngOnChanges(changes: any)  {
    if(changes.detail){
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }
  onNameChange(value: string) {
    this.detail!.fullName = value;
  }

  toogleEdit() {
    if(this.editing) this.edit.emit(this.detail);
    this.editing = !this.editing;
    // if(!this.editing) this.edit.emit(this.detail);
  }

  onRemove(){
    this.remove.emit(this.detail);
  }
}
