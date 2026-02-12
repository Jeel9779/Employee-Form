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


  //varible
  showPopup: boolean = false; 
  isEditMode: boolean = false;  
  selectedEmployee: any = null; 
  editingIndex: number = -1;


  openPopup() {
    this.isEditMode = false;        // make sure it's not edit
    this.selectedEmployee = null;   // clear selected data
    this.editingIndex = -1;         // reset index
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }


  /* delete row */
  deleteEmployee(index: number){
    this.employees.splice(index, 1);
  }

  /* edit */
  openEdit(emp: any, index: number) {
    this.isEditMode = true;
    this.selectedEmployee = { ...emp }; // copy employee data
    this.editingIndex = index;   // store index 
    this.showPopup = true;
  }

  saveEmployee(data: any) {

    if (this.isEditMode && this.editingIndex > -1) {
      this.employees[this.editingIndex] = data;   // update by index
      this.editingIndex = -1;
    } else {
      this.employees.push(data);   // add new
    }

    this.showPopup = false;
    this.isEditMode = false;
    
  }


} 