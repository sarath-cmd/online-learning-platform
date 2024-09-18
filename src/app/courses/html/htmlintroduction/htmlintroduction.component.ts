import { Component } from '@angular/core';
import { VertnavComponent } from '../vertnav/vertnav.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DarkthemeService } from '../../../darktheme.service';

@Component({
  selector: 'app-htmlintroduction',
  standalone: true,
  imports: [VertnavComponent, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './htmlintroduction.component.html',
  styleUrl: './htmlintroduction.component.css'
})
export class HtmlintroductionComponent {
  isDark: boolean = false;
  constructor(private themeService: DarkthemeService) {}
  ngOnInit() {
    this.themeService.isDark$.subscribe(isDark => {
      this.isDark = isDark;
    });
  }
  
}
