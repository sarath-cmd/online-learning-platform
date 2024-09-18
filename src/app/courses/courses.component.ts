import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DarkthemeService } from '../darktheme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterOutlet],
  templateUrl: './courses.component.html',
})
export class CoursesComponent {
  isDark: boolean = false;
  constructor(private themeService: DarkthemeService) {}
  ngOnInit() {
    this.themeService.isDark$.subscribe(isDark => {
      this.isDark = isDark;
    });
  }
}
