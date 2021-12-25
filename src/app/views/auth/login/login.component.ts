import { Component, OnInit } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { AuthService } from "src/app/services/auth.service"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

  form:  FormGroup
  serverErrorResponse: string

  constructor(
    private auth: AuthService,
    private router: Router
    ) {}
  
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [ Validators.required, Validators.email]),
      password: new FormControl('', [ Validators.required, Validators.minLength(7)]),
      rememberMe: new FormControl(false)
    })
  }

  onSubmit() {
    console.log('submited')
    this.auth.signin(this.form.value.email, this.form.value.password, this.form.value.rememberMe).then(
      (res: any ) => {
        // { isAuth: boolean, message?: string}
        if(res.isAuth)  {
          this.router.navigate(['/admin'])
        } else this.serverErrorResponse = res.message
      }
    )
  }



}
