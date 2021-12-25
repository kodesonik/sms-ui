import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api_url: string;
  headers = new HttpHeaders()
  options: any;
  
  constructor(private http: HttpClient) {
    this.headers = this.headers.append('enctype', 'multipart/form-data');
    this.headers = this.headers.append('Content-Type', 'Application/json');
    this.headers = this.headers.append('X-Request-With', 'XMLHttpRequest');
    this.options = { headers: this.headers };
    console.log(this.options)
    this.api_url = environment.API_URL
   }

   setToken(token: string) {
     this.headers = this.headers.append('Authorization', 'Bearer '+ token)
     this.options = { headers: this.headers };

   }

   get(path: string, data) {
     this.options.params = data
     console.log(this.options)
    return this.http.get(this.api_url + path, this.options).toPromise()
   }

   post(path: string, data) {
     return this.http.post(this.api_url + path, data, this.options).toPromise()
   }

   put(path: string, data) {
    return this.http.patch(this.api_url + path, data, this.options).toPromise()
  }

   patch(path: string, data) {
     return this.http.patch(this.api_url + path, data, this.options).toPromise()
   }

   delete(path: string, data) {
    this.options.params = data
     return this.http.delete(this.api_url + path, this.options).toPromise()
   }
}
