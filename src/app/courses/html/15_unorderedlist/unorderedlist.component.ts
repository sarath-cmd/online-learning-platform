import { Component } from '@angular/core';
import { DarkthemeService } from '../../../darktheme.service';
import { MobilemenuService } from '../../mobilemenu.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VertnavComponent } from '../vertnav/vertnav.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-unorderedlist',
  standalone: true,
  imports: [CommonModule, RouterLink, VertnavComponent, ClipboardModule],
  templateUrl: './unorderedlist.component.html',
})
export class UnorderedlistComponent {
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
  code1 = `<ul>
  <li>Pen</li>
  <li>Pencil</li>
  <li>Eraser</li>
</ul>`
code2 = `<ul type="square">
  <li>Notebook</li>
  <li>Marker</li>
</ul>`
}
