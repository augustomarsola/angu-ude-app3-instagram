import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [BannerComponent, LoginComponent, RegisterComponent],
  templateUrl: './access.component.html',
})
export class AccessComponent {}
