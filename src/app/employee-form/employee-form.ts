import { Component, EventEmitter , Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss',
})
export class EmployeeForm {
  @Output() employeeAdded = new EventEmitter<any>();

  employee = {
    name: '',
    email: '',
    phone: ''
  };

  submitForm() {

    /* emit data to parent , send employee object , parent receives it  */
    this.employeeAdded.emit(this.employee); 

    this.employee = {
      name: '',
      email: '',
      phone: ''
    };
  }
}
