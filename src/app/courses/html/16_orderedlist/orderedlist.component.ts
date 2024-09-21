import { Component } from '@angular/core';
import { DarkthemeService } from '../../../darktheme.service';
import { MobilemenuService } from '../../mobilemenu.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VertnavComponent } from '../vertnav/vertnav.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-orderedlist',
  standalone: true,
  imports: [CommonModule, RouterLink, VertnavComponent, ClipboardModule],
  templateUrl: './orderedlist.component.html',
})
export class OrderedlistComponent {
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
  code1 = `<ol>
  <li>Mango</li>
  <li>Orange</li>
  <li>Litchi</li>
</ol>`
code2 = `<ol type="A" start="3">
  <li>Pen</li>
  <li>Pencil</li>
</ol>`
}
