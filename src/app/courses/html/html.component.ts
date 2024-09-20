import { Component } from '@angular/core';
import { DarkthemeService } from '../../darktheme.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-html',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './html.component.html',
})
export class HtmlComponent {
  isDark: boolean = false;
  constructor(private themeService: DarkthemeService) {}
  ngOnInit() {
    this.themeService.isDark$.subscribe(isDark => {
      this.isDark = isDark;
    });
  }
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
