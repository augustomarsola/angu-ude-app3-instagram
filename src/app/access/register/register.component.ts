import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  @Output() openLogin = new EventEmitter();

  public openLoginClick() {
    this.openLogin.emit('');
  }
}
