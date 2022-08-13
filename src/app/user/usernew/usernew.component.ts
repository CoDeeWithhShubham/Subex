import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServise } from 'src/app/servise/user.servise';

@Component({
  selector: 'app-usernew',
  templateUrl: './usernew.component.html',
  styleUrls: ['./usernew.component.css']
})
export class UsernewComponent implements OnInit {
  userForm: FormGroup;
  constructor(private userservise: UserServise) { }

  ngOnInit(): void {
    this.inituser();
  }
  private inituser() {
    let userName: '';
    let userLname: '';
    let userEmail: '';
    let userDob: '';
    let userPhone: '';
    let userAdress: '';
    this.userForm = new FormGroup({
      'name': new FormControl(userName, Validators.required),
      'lastname': new FormControl(userLname, Validators.required),
      'mail': new FormControl(userEmail, [Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      'dob': new FormControl(userDob, Validators.required),
      'phone': new FormControl(userPhone, [Validators.required,Validators.pattern(/^\d{10}$/)]),
      'address': new FormControl(userAdress, Validators.required),
    }
    )
  }
  OnClear() {
    this.userForm.reset();
  }
  onSubmit() {
    this.userservise.adduser(this.userForm.value);
    console.log(this.userservise)
    this.OnClear()
  }
}
