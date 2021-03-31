import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistingComponent } from './booklisting/booklisting.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'booklisting',component:BooklistingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
