import { Component } from '@angular/core';
import { DarkthemeService } from '../../../darktheme.service';
import { MobilemenuService } from '../../mobilemenu.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VertnavComponent } from '../vertnav/vertnav.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-htmlidandclass',
  standalone: true,
  imports: [CommonModule, RouterLink, VertnavComponent, ClipboardModule],
  templateUrl: './htmlidandclass.component.html',
})
export class HtmlidandclassComponent {
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
  code1 = `< div id="myUniqueID">This is a div with an ID.< /div>`
  code2 = `< div class="myClass">This is a div with a class.< /div>
< p class="myClass">This is a paragraph with the same class.< /p>`
 code3 = `/* CSS for ID */
#myUniqueID {
  background-color: yellow;
}

/* CSS for Class */
.myClass {
  font-size: 18px;
}`
}
