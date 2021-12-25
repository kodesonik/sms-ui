import { Component, Input, OnInit } from "@angular/core";
import { Message } from "src/app/models";

@Component({
  selector: "app-card-page-visits",
  templateUrl: "./card-page-visits.component.html",
})
export class CardPageVisitsComponent implements OnInit {

  @Input() messages: Message[]

  constructor() {}

  ngOnInit(): void {}
}
