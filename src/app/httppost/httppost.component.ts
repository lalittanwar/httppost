import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Emp } from '../emp';

@Component({
  selector: 'app-httppost',
  templateUrl: './httppost.component.html',
  styleUrls: ['./httppost.component.css']
})
export class HttppostComponent implements OnInit {

  public emps:any= [];

 emp=new Emp('','',0);


  constructor(private users : UserService, private router: Router ) {}

  ngOnInit() {

  this.users.getuser()
   .subscribe(emps => this.emps = emps);
  }

  onSelect(n){
  this.router.navigate(['/userlist',n.id]); 
  }

  onSubmit(){
    this.users.postuser(this.emp).subscribe(data=>{this.emps.unshift(data)});
    console.log(this.emps);
    
    
    }
  
}


