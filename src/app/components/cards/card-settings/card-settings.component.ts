import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "src/app/models";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-card-settings",
  templateUrl: "./card-settings.component.html",
})
export class CardSettingsComponent implements OnInit {

  @Input() user: User
  form: FormGroup

  constructor(
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)] ),
      email: new FormControl('', [Validators.required, Validators.email])
    })
    this.form.patchValue(this.user)
  }

  onSubmit() {
    this.userService.edit(this.user.id, this.form.value.name).then(
      res => console.log(res)
    )
  }


}
