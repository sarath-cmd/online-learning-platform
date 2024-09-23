import { Component } from '@angular/core';
import { DarkthemeService } from '../../../darktheme.service';
import { MobilemenuService } from '../../mobilemenu.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VertnavComponent } from '../vertnav/vertnav.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-moreontable',
  standalone: true,
  imports: [CommonModule, RouterLink, VertnavComponent, ClipboardModule],
  templateUrl: './moreontable.component.html',
})
export class MoreontableComponent {
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
  <caption>
    Student Details
  </caption>
  <!-- Rest of the table here -->
</table>`
code2 = `<table>
  <colgroup>
    <col 
      style="padding:10px;">
  </colgroup>
  <!-- rest of the table -->
</table>`
code3 = `<table>
  <thead>
     <!--  header content -->
  </thead>
  <tfoot>
    <!-- footer content -->
  </tfoot>
  <tbody>
    <!-- body content -->
  </tbody>
</table>`
code4 = `<table border="1">
  <!-- Caption -->
  <caption>
    Employee Information
  </caption>

  <!-- Table Header -->
  <thead>
      <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Salary</th>
      </tr>
  </thead>

  <!-- Table Body -->
  <tbody>
      <tr>
          <td>1</td>
          <td>Alice</td>
          <td>Developer</td>
          <td>$80,000</td>
      </tr>
      <tr>
          <td>2</td>
          <td>Bob</td>
          <td>Designer</td>
          <td>$70,000</td>
      </tr>
      <tr>
          <td>3</td>
          <td>Carol</td>
          <td>Manager</td>
          <td>$90,000</td>
      </tr>
  </tbody>

  <!-- Table Footer -->
  <tfoot>
      <tr>
          <td colspan="3">
            Total Employees
          </td>
          <td>3</td>
      </tr>
  </tfoot>
</table>`
}
