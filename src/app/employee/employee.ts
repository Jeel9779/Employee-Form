import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeForm } from '../employee-form/employee-form';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, EmployeeForm],
  templateUrl: './employee.html',
  styleUrl: './employee.scss',
})
export class Employee {

  /* Whatever data is inside this array → table will show. */
  employees: any[] = [
    { name: 'Jeel', email: 'jeel@gmail.com', phone: '9999999999' }
  ];


  showPopup: boolean = false; 
  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }


  addEmployee(data: any) {
    this.employees.push(data);
    this.closePopup();
  }
}