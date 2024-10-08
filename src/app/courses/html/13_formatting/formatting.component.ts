import { Component } from '@angular/core';
import { DarkthemeService } from '../../../darktheme.service';
import { MobilemenuService } from '../../mobilemenu.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VertnavComponent } from '../vertnav/vertnav.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-formatting',
  standalone: true,
  imports: [CommonModule, RouterLink, VertnavComponent, ClipboardModule],
  templateUrl: './formatting.component.html',
})
export class FormattingComponent {
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
  code1 = `<b>
  This text is bold
</b>`
code2 = `<strong>
  This text is important!
</strong>`
code3 = `<i>
  This text is italic
</i>`
code4 = `<em>
  This text is emphasized
</em>`
code5 = `<small>
  This is some smaller text.
</small>`
code6= `<p>
  Do not forget to buy 
  <mark>
    milk
  </mark> today.
</p>`
code7 = `<p>
  My favorite color is 
  <del>
    red
  </del> 
  blue.
</p>`
code8 = `<p>
  My favorite color is 
  <del>
    blue
  </del>
  <ins>
    red
  </ins>.
</p>`
code9 = `<p>This is a 
  <sub>
    subscripted
  </sub> 
  text.
</p>`
code10 = `<p>
  This is 
  <sup>
    superscripted
  </sup> 
  text.
</p>`
}
