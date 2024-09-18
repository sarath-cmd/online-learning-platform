import { Component } from '@angular/core';
import { DarkthemeService } from '../../../darktheme.service';
import { MobilemenuService } from '../../mobilemenu.service';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VertnavComponent } from '../vertnav/vertnav.component';

@Component({
  selector: 'app-htmlintroduction',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, VertnavComponent],
  templateUrl: './htmlintroduction.component.html',
  styleUrl: './htmlintroduction.component.css'
})
export class HtmlintroductionComponent {
  isDark: boolean = false;
  ismenuo = false
  constructor(private themeService: DarkthemeService, private menuService: MobilemenuService) {}
  ngOnInit() {
    this.themeService.isDark$.subscribe(isDark => {
      this.isDark = isDark;
    });
    this.menuService.ismenuo$.subscribe(ismenuo => {
      this.ismenuo = ismenuo;
    });
  }
  
  mest() {
    this.menuService.cms();
  }
}
