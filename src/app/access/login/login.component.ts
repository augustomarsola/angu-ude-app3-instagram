import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @Output() openRegister = new EventEmitter();

  openRegisterClick() {
    this.openRegister.emit('');
  }
}
