import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit {
  user: User

  constructor(
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.auth.$user.subscribe( res => {
      this.user = res
    })
  }
}
