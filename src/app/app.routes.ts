import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { HtmlintroductionComponent } from './courses/html/htmlintroduction/htmlintroduction.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'courses', component:CoursesComponent},
    {path:'courses/html/htmlintro', component:HtmlintroductionComponent}
];
