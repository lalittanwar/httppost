import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttppostComponent } from './httppost/httppost.component';


const routes: Routes = [
  {path:'',component:HttppostComponent,pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


