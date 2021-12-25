import { Component, Input, OnInit } from "@angular/core";
import { User } from "src/app/models";

@Component({
  selector: "app-card-social-traffic",
  templateUrl: "./card-social-traffic.component.html",
})
export class CardSocialTrafficComponent implements OnInit {

  @Input() users: User[]

  constructor() {}

  ngOnInit(): void {}
}
