import { Component } from '@angular/core';
import { DarkthemeService } from '../../../darktheme.service';
import { MobilemenuService } from '../../mobilemenu.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VertnavComponent } from '../vertnav/vertnav.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-hrtag',
  standalone: true,
  imports: [CommonModule, RouterLink, VertnavComponent, ClipboardModule],
  templateUrl: './hrtag.component.html',
})
export class HrtagComponent {
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
  code1 = `<hr>`
  code2 = `<h1>
  This is heading 1
</h1>
<p>
  This is some text.
</p>
<hr>
<h2>
  This is heading 2
</h2>
<p>
  This is some other text.
</p>
<hr>`
}
