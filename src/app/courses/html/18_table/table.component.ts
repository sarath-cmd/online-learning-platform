import { Component } from '@angular/core';
import { DarkthemeService } from '../../../darktheme.service';
import { MobilemenuService } from '../../mobilemenu.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VertnavComponent } from '../vertnav/vertnav.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, RouterLink, VertnavComponent, ClipboardModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
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
  code1 = `<table>
  <tr>
    <th>Name</th>
  </tr>
  <tr>
    <td>Harry</td>
  </tr>
</table>`
code2 = `<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Harry</td>
    <td>100</td>
  </tr>
</table>`
code3 = `<td rowspan="value">`
code4 = `<td colspan="value">`
code5 = `<table border="1">
  <tr>
    <td colspan="2">
      Merged Columns
    </td>
  </tr>
  <tr>
    <td>
      Column 1
    </td>
    <td>
      Column 2
    </td>
  </tr>
</table>`
code6 = `<table border="1">
  <tr>
    <td>
      Row 1, Column 1
    </td>
    <td rowspan="2">
      Merged Rows
    </td>
  </tr>
  <tr>
    <td>
      Row 2, Column 1
    </td>
  </tr>
</table>`
}