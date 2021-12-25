import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  form:  FormGroup
  serverErrorResponse: string

  constructor(
    private auth: AuthService,
    private router: Router
    ) {}
  
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      email: new FormControl('', [ Validators.required, Validators.email]),
      password: new FormControl('', [ Validators.required, Validators.minLength(7)]),
      hasAgreedWithConditions: new FormControl(false, Validators.required)
    })
  }

  hasAgreedWithConditions(): boolean {
    return this.form.get('hasAgreedWithConditions').value
  } 
  onSubmit() {
    console.log('submited')
    this.auth.signup( this.form.value.name, this.form.value.email, this.form.value.password).then(
      (res: any ) => {
        // { isAuth: boolean, message?: string}
        if(res.isAuth)  {
          window.alert(res.message)
          this.router.navigate(['/auth/login'])
        } else this.serverErrorResponse = res.message
      }
    )
  }



}
