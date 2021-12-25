import { Injectable } from '@angular/core';
import { User } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[]

  constructor(private api: ApiService) { }

  load() {
    return this.api.get('user',{}).then(
      (res: any) => {
        this.users = res
        console.log(this.users)
        return this.users
      }
    )
  }

  edit(id: string, name: string) {
    return this.api.patch('user', { id, name}).then(
      res => {
        console.log(res)
      }
    ).catch(({ error }) => console.log(error))
  }

  delete() {

  }


}
