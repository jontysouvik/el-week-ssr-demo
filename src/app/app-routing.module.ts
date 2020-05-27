import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedComponent } from './components/red/red.component';
import { BlueComponent } from './components/blue/blue.component';
import { GreenComponent } from './components/green/green.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'red', component: RedComponent},
  {path: 'blue', component: BlueComponent},
  {path: 'green', component: GreenComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
