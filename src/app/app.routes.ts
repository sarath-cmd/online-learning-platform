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
import { HrtagComponent } from './courses/html/9_hrtag/hrtag.component';
import { PnfComponent } from './pnf/pnf.component';
import { BrtagComponent } from './courses/html/10_brtag/brtag.component';
import { AnchortagComponent } from './courses/html/11_anchortag/anchortag.component';
import { ImgtagComponent } from './courses/html/12_imgtag/imgtag.component';
import { FormattingComponent } from './courses/html/13_formatting/formatting.component';
import { ListComponent } from './courses/html/14_list/list.component';
import { UnorderedlistComponent } from './courses/html/15_unorderedlist/unorderedlist.component';
import { OrderedlistComponent } from './courses/html/16_orderedlist/orderedlist.component';
import { DetailedlistComponent } from './courses/html/17_detailedlist/detailedlist.component';
import { TableComponent } from './courses/html/18_table/table.component';
import { MoreontableComponent } from './courses/html/19_moreontable/moreontable.component';
import { FormsintroductionComponent } from './courses/html/20_formsintroduction/formsintroduction.component';
import { InputtypeComponent } from './courses/html/21_inputtype/inputtype.component';
import { TextareaandselectComponent } from './courses/html/22_textareaandselect/textareaandselect.component';
import { MoreonformsComponent } from './courses/html/23_moreonforms/moreonforms.component';
import { VideoandaudioatgComponent } from './courses/html/24_videoandaudioatg/videoandaudioatg.component';
import { SvginhtmlComponent } from './courses/html/25_svginhtml/svginhtml.component';
import { IframeComponent } from './courses/html/26_iframe/iframe.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'courses', component:CoursesComponent},
    { path: 'courses/html', redirectTo: 'courses/html/htmlintro', pathMatch: 'full' },
    {path:'courses/html/htmlintro', component:HtmlintroductionComponent},
    {path:'courses/html/htmlexecution', component:HtmlexecutionComponent},
    {path:'courses/html/htmlelement', component:HtmlelementComponent},
    {path:'courses/html/htmlattributes', component:HtmlattributesComponent},
    {path:'courses/html/htmlcomments', component:HtmlcommentsComponent},
    {path:'courses/html/htmlidandclass', component:HtmlidandclassComponent},
    {path:'courses/html/htmlheadingtag', component:HtmlheadingtagComponent},
    {path:'courses/html/htmlparagraphtag', component:ParagraphtagComponent},
    {path:'courses/html/hrtag', component:HrtagComponent},
    {path:'courses/html/brtag', component:BrtagComponent},
    {path:'courses/html/anchortag', component:AnchortagComponent},
    {path:'courses/html/imagetag', component:ImgtagComponent},
    {path:'courses/html/htmlformatting', component:FormattingComponent},
    {path:'courses/html/list', component:ListComponent},
    {path:'courses/html/unorderedlist', component:UnorderedlistComponent},
    {path:'courses/html/orderedlist', component:OrderedlistComponent},
    {path:'courses/html/detailedlist', component:DetailedlistComponent},
    {path:'courses/html/table', component:TableComponent},
    {path:'courses/html/moreontables', component:MoreontableComponent},
    {path:'courses/html/formsintroduction', component:FormsintroductionComponent},
    {path:'courses/html/inputtype', component:InputtypeComponent},
    {path:'courses/html/textarea_and_select', component:TextareaandselectComponent},
    {path:'courses/html/more_on_forms', component:MoreonformsComponent},
    {path:'courses/html/video_and_audio_tag', component:VideoandaudioatgComponent},
    {path:'courses/html/svg', component:SvginhtmlComponent},
    {path:'courses/html/iframes', component:IframeComponent},
    { path: '**', component:PnfComponent  }
];
