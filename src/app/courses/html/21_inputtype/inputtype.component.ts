import { Component } from '@angular/core';
import { DarkthemeService } from '../../../darktheme.service';
import { MobilemenuService } from '../../mobilemenu.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VertnavComponent } from '../vertnav/vertnav.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-inputtype',
  standalone: true,
  imports: [CommonModule, RouterLink, VertnavComponent, ClipboardModule],
  templateUrl: './inputtype.component.html',
})
export class InputtypeComponent {
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
  code1 = `<input 
  type="text" 
  name="username" 
  placeholder="Enter your username"
>`
code2 = `<input 
  type="password" 
  name="password" 
  placeholder="Enter your password"
>`
code3 = `<input 
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
</label>`
code4 = `<input 
  type="checkbox" 
  id="subscribe" 
  name="subscribe" 
  value="yes"
>
<label for="subscribe">
  Subscribe to newsletter
</label>`
}
