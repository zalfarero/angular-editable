import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css']
})
export class EditableComponent implements OnInit {
  @Input() data;
  @Input() type;
  editing = false;
  textVal = this.data;


  constructor() { }
  editingToggle(){
    if(this.editing==true){
      this.editing = false;
    } else {
      this.editing = true;
    }
  }

  textChange(change){
    console.log('text change');
    console.log(change);
    console.log(this.textVal);

  }

  ngOnInit() {
  }

}
