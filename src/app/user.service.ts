import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url : string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }
 
  getuser(){
  return this.http.get(this.url);
 }
 
 postuser(emp){
    return this.http.post(this.url,emp);
   }
 }