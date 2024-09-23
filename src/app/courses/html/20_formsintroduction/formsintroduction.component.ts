import { Component } from '@angular/core';
import { DarkthemeService } from '../../../darktheme.service';
import { MobilemenuService } from '../../mobilemenu.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VertnavComponent } from '../vertnav/vertnav.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-formsintroduction',
  standalone: true,
  imports: [CommonModule, RouterLink, VertnavComponent, ClipboardModule],
  templateUrl: './formsintroduction.component.html',
})
export class FormsintroductionComponent {
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
  code1 = `<form 
    action="/submit" 
    method="post"
>
  <!-- Text input for username -->
    <label for="username">
      Username:
    </label>
    <input 
      type="text"  
      id="username" 
      name="username" 
      required
    >
    <br><br>

    <!-- Password input -->
    <label for="password">
      Password:
    </label>
    <input 
      type="password" 
      id="password" 
      name="password" 
      required
    >
    <br><br>

  <!-- Radio buttons for gender -->
    <label>
    Gender:
    </label>
    <input 
      type="radio" 
      id="male" 
      name="gender" 
      value="male"
    >
    <label for="male">
      Male
    </label>
    <input 
      type="radio" 
      id="female" 
      name="gender" 
      value="female"
    >
    <label for="female">
      Female
    </label>
    <br><br>

    <!-- Submit button -->
    <input 
      type="submit"
      value="Submit"
    >
  </form>`
  code2 = `<input 
  type="" 
  name="" 
  value=""
>`
}
