import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-access',
  standalone: true,
  imports: [BannerComponent, LoginComponent, RegisterComponent],
  templateUrl: './access.component.html',
  animations: [
    trigger('login', [
      state(
        'open',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          transform: 'translateX(100%)',
          opacity: 0,
        })
      ),
      transition('open <=> closed', [animate('0.5s')]),
    ]),
    trigger('register', [
      state(
        'open',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          transform: 'translateX(100%)',
          opacity: 0,
        })
      ),
      transition('open <=> closed', [animate('0.5s')]),
    ]),
  ],
})
export class AccessComponent {
  public loginIsOpen = true;
  public registerIsOpen = false;

  public openRegisterClick() {
    this.loginIsOpen = false;
    this.registerIsOpen = true;
  }

  public openLoginClick() {
    this.loginIsOpen = true;
    this.registerIsOpen = false;
  }
}
