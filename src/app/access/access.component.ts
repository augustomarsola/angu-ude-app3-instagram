import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [BannerComponent, LoginComponent],
  templateUrl: './access.component.html',
})
export class AccessComponent {}
