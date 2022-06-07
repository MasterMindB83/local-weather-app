import { UIService } from './../ui.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
  //styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  city:string="";
  country:string="";
  constructor(private ui:UIService) { }
  @Output() 
  ngOnInit(): void {
  }
  onSearch(){
    this.ui.citySearched.emit({city: this.city, country: this.country});
  }
}
