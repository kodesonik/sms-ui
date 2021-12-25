import { Injectable } from '@angular/core'
import { Message } from '../models'
import { ApiService } from './api.service'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[]

  constructor(private api: ApiService) { }

  load() {
    return this.api.get('message',{}).then(
      (res: any) => {
        this.messages = res
        console.log(this.messages)
        return this.messages
      }
    )
  }


  sendOne(senderName: string, receiverName: string, content: string) {
    return this.api.post('message', { senderName, receiverName, content }).then(
      res => {
        console.log(res)
        return res
      }
    ).catch(({ error }) => {
      console.log(error)
      window.alert(error)
    })
  }
}
