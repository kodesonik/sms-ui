import { Component, OnInit } from "@angular/core"
import { Message, Role, User } from "src/app/models";
import { AuthService } from "src/app/services/auth.service";
import { MessageService } from "src/app/services/message.service";
import { UsersService } from "src/app/services/users.service";


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {

  user: User
  users: User[]
  messages: Message[]

  constructor(
    private auth: AuthService,
    private userService: UsersService,
    private messageService: MessageService
    ){}

  ngOnInit(){
    this.auth.$user.subscribe( res => {
      this.user = res
      console.log(this.user )
      if(this.user) {
        this.messageService.load().then(
          messages => this.messages = messages
        )
        if (this.user.role === Role.ADMIN) {
          this.userService.load().then(
            users => this.users = users
          )
        }
      }
     
    })
  }
}
