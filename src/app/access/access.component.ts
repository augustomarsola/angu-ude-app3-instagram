import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './access.component.html',
})
export class AccessComponent {}
