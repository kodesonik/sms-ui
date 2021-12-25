import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models";
import { ApiService } from "src/app/services/api.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
})
export class AdminComponent implements OnInit {
  profile: User

  constructor(
    private auth: AuthService,
    private api: ApiService,
    private router: Router
    ) {}

  ngOnInit() {
    const token = this.auth.isAuth()
    if(token) {
      this.api.setToken(token)
      this.setProfile()
    }
    else this.router.navigate(['/'])
  }

  setProfile() {
    this.auth.getMyProfile().then(
      user => {
        this.profile = user
      }
    )
  }
}
