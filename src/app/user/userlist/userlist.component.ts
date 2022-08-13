import { Component, OnInit } from '@angular/core';
import { UserServise } from 'src/app/servise/user.servise';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: User[];
  tabValue: any = [];
  tabKey: any = [];
  isDesc: boolean = false;
  isAsc: boolean = false;
  constructor(private userservise: UserServise) { }

  ngOnInit(): void {
    this.userservise.userchange.subscribe(
      (user: User[]) => {
        this.users = user;
      }
    )
    this.users = this.userservise.getusers();
    this.getData();
  }
  getData() {
    this.users.forEach((element: any) => {
      this.tabKey = Object.keys(element);
      this.tabValue.push(Object.values(element))
      console.log(this.tabValue)
    })
  }
  onDeleteUser(index) {
    this.userservise.deleteuser(index)
  }
  sortName(property) {
    this.isAsc = false;
    this.isDesc = !this.isDesc;
    let direction = this.isDesc ? 1 : -1;
    this.users.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction
      } else if (a[property] > b[property]) {
        return 1 * direction
      } else {
        return 0;
      }
    })
  }
  sort_Name(property) {
    this.isDesc = false;
    this.isAsc = !this.isAsc;
    let direction = this.isAsc ? 1 : -1;
    this.users.sort(function (a, b) {
      if (a[property] > b[property]) {
        return -1 * direction
      } else if (a[property] < b[property]) {
        return 1 * direction
      } else {
        return 0;
      }
    })
  }

  sortDatebyDateMonthDesc() {
    this.isAsc = false;
    this.isDesc = !this.isDesc;
    this.users.sort(function (a, b) {
      let d1 = new Date(a.dob);
      let d2 = new Date(b.dob);
      if (d1.getUTCMonth() > d2.getUTCMonth()) {
        return 1;
      } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
        return -1;
      } else {
        return d1.getUTCDate() - d2.getUTCDate();
      }
    })
    this.sortDateByYearDesc()
  }

  sortDateByYearDesc() {
    this.isAsc = false;
    this.isDesc = !this.isDesc;
    this.users.sort(function (a, b) {
      let d1 = new Date(a.dob).valueOf();
      let d2 = new Date(b.dob).valueOf();
      return d1 - d2;
    })
  }
  sort_DatebyDateMonthAsc() {
    this.isDesc = false;
    this.isAsc = !this.isAsc;
    this.users.sort(function (a, b) {
      let d1 = new Date(a.dob);
      let d2 = new Date(b.dob);
      if (d1.getUTCMonth() < d2.getUTCMonth()) {
        return 1;
      } else if (d1.getUTCMonth() > d2.getUTCMonth()) {
        return -1;
      } else {
        return d1.getUTCDate() - d2.getUTCDate();
      }
    })
    this.sort_DateByYearAsc()
  }

  sort_DateByYearAsc() {
    this.isDesc = false;
    this.isAsc = !this.isAsc;
    this.users.sort(function (a, b) {
      let d1 = new Date(a.dob).valueOf();
      let d2 = new Date(b.dob).valueOf();
      return d2 - d1;
    })
  }
}
