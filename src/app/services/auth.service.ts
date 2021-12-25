import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { User } from '../models'
import { ApiService } from './api.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private $_user = new BehaviorSubject<User>(null)

  constructor(private api: ApiService) { 

  }

  isAuth(): string {
   let token = sessionStorage.getItem('sms_api_token')
   if (! token) token = localStorage.getItem('sms_api_token')
    return token
  }

  get $user() {
    return this.$_user.asObservable()
  }

  getMyProfile(): User| any {
    return this.api.get('profile', {}).then(
      (res: any) => {
        this.$_user.next(res)
        return res
      }
    ).catch(
      err => {
        console.log(err.error)
        return 
      }
    )
  }

  signin(email: string, password: string, rememberMe?: boolean) {
   return this.api.post('login', { email, password }).then((res: any) => {
      this.api.setToken(res.token)
     if (rememberMe) localStorage.setItem('sms_api_token', res.token)
     else sessionStorage.setItem('sms_api_token', res.token)
      return { isAuth: true}
    }).catch( (err) => {
      console.log(err)
      return { isAuth: false, message: err.error}
    })
  }

  signup(name: string, email: string, password: string) {
    return this.api.post('register', { name, email, password}).then((res: any) => {
      return { isAuth: true, message: res.message}
    }).catch( (err) => {
      console.log(err)
      return { isAuth: false, message: err.error}
    })
  }

  signout() {
     return this.api.post('logout', {}).then((res: any) => {
      console.log(res)
      return { isAuth: true}
    }).catch( err => console.log(err))
  } 

}
