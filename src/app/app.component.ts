import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccessComponent } from './access/access.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AccessComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angu-ude-app3-instagram';
}
