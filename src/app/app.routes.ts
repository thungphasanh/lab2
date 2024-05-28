import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { UserComponent } from './pages/user/user.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FormComponent } from './pages/form/form.component';
import { ReactiveformComponent } from './pages/reactiveform/reactiveform.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'user/:id',component:UserComponent},
    {path:'form',component:FormComponent},
    {path:'rform',component:ReactiveformComponent},
    {path:'**',component:NotfoundComponent}
];
