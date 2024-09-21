import { Component } from '@angular/core';
import { DarkthemeService } from '../../../darktheme.service';
import { MobilemenuService } from '../../mobilemenu.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VertnavComponent } from '../vertnav/vertnav.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-imgtag',
  standalone: true,
  imports: [CommonModule, RouterLink, VertnavComponent, ClipboardModule],
  templateUrl: './imgtag.component.html',
})
export class ImgtagComponent {
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
  code1 = `<img src="image's path" />`
  code2m = `<img src="images/profile.jpg" 
  alt="Profile" />`
code2 = `<img src="images/profile.jpg" alt="Profile" />`
  code3m = `<img src="images/profile.jpg" 
  alt="discription" 
  width="30" 
  height="10">`
  code3 = `<img src="images/profile.jpg" alt="discription" width="30" height="10">`
}
