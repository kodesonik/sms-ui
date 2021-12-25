import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-navbar",
  templateUrl: "./admin-navbar.component.html",
})
export class AdminNavbarComponent implements OnInit {
  @Input() name: string
  constructor() {}

  ngOnInit(): void {
    console.log(this.name)
  }
}
