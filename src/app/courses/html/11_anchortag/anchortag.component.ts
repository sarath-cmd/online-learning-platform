import { Component } from '@angular/core';
import { DarkthemeService } from '../../../darktheme.service';
import { MobilemenuService } from '../../mobilemenu.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VertnavComponent } from '../vertnav/vertnav.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-anchortag',
  standalone: true,
  imports: [CommonModule, RouterLink, VertnavComponent, ClipboardModule],
  templateUrl: './anchortag.component.html',
})
export class AnchortagComponent {
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
  code1 = `<a href="Your specified path">
    content
</a>`
 code2 = `<!--Link at the top-->
<a href="#gardening-tips">
 Go to Gardening Tips
</a>

<!--Some content-->
<p>
 Here is some other content.
</p>

<!--Gardening Tips Section-->
<h2 id="gardening-tips">
 Gardening Tips
</h2>
<p>
 This section provides
 tips on how to garden.
</p>`
}
