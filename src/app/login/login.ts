import { Component, Input } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  @Input() emailID: String;
  @Input() password: String;
  onSubmit() {
    window.alert('Email: ' + this.emailID + ' Password: ' + this.password);
  }
  onClear() {
    this.emailID = '';
    this.password = '';
  }
}
