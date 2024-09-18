import { Component } from '@angular/core';
import { VertnavComponent } from '../vertnav/vertnav.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-htmlintroduction',
  standalone: true,
  imports: [VertnavComponent, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './htmlintroduction.component.html',
  styleUrl: './htmlintroduction.component.css'
})
export class HtmlintroductionComponent {

}
