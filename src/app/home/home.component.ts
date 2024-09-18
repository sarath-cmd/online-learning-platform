import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkthemeService } from '../darktheme.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  isDark: boolean = false;
  constructor(private themeService: DarkthemeService) {}
  ngOnInit() {
    this.themeService.isDark$.subscribe(isDark => {
      this.isDark = isDark;
    });
  }
}
