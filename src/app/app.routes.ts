import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { HtmlintroductionComponent } from './courses/html/1_htmlintroduction/htmlintroduction.component';
import { HtmlexecutionComponent } from './courses/html/2_htmlexecution/htmlexecution.component';
import { HtmlelementComponent } from './courses/html/3_htmlelement/htmlelement.component';
import { HtmlattributesComponent } from './courses/html/4_htmlattributes/htmlattributes.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'courses', component:CoursesComponent},
    {path:'courses/html/htmlintro', component:HtmlintroductionComponent},
    {path:'courses/html/htmlexecution', component:HtmlexecutionComponent},
    {path:'courses/html/htmlelement', component:HtmlelementComponent},
    {path:'courses/html/htmlattributes', component:HtmlattributesComponent},
];
