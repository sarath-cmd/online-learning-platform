import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { HtmlintroductionComponent } from './courses/html/1_htmlintroduction/htmlintroduction.component';
import { HtmlexecutionComponent } from './courses/html/2_htmlexecution/htmlexecution.component';
import { HtmlelementComponent } from './courses/html/3_htmlelement/htmlelement.component';
import { HtmlattributesComponent } from './courses/html/4_htmlattributes/htmlattributes.component';
import { HtmlcommentsComponent } from './courses/html/5_htmlcomments/htmlcomments.component';
import { HtmlidandclassComponent } from './courses/html/6_htmlidandclass/htmlidandclass.component';
import { HtmlheadingtagComponent } from './courses/html/7_htmlheadingtag/htmlheadingtag.component';
import { ParagraphtagComponent } from './courses/html/8_paragraphtag/paragraphtag.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'courses', component:CoursesComponent},
    {path:'courses/html/htmlintro', component:HtmlintroductionComponent},
    {path:'courses/html/htmlexecution', component:HtmlexecutionComponent},
    {path:'courses/html/htmlelement', component:HtmlelementComponent},
    {path:'courses/html/htmlattributes', component:HtmlattributesComponent},
    {path:'courses/html/htmlcomments', component:HtmlcommentsComponent},
    {path:'courses/html/htmlidandclass', component:HtmlidandclassComponent},
    {path:'courses/html/htmlheadingtag', component:HtmlheadingtagComponent},
    {path:'courses/html/htmlparagraphtag', component:ParagraphtagComponent},
];
