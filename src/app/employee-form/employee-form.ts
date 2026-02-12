import { Component , Output , Input,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss',
})
export class EmployeeForm {

  /* child receive data.. */
  @Input() employeeData: any;
  @Input() editMode: boolean = false; 

  @Output() save = new EventEmitter<any>();

  employee = {
    
    name: '',
    email: '',
    phone: ''
  };

  //  Very Important for Edit life cycle hook ngOnChanges..
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['employeeData'] && this.employeeData) {
      this.employee = { ...this.employeeData };
      
    }
  }

  submitForm() {

    /* emit data to parent , send employee object , parent receives it  */
    this.save.emit(this.employee); 

    this.employee = {
    
      name: '',
      email: '',
      phone: ''
    };
  }
}
