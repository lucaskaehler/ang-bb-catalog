import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/@shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(public authService: AuthService) { }

  form!: FormGroup;

  // get email() {
  //   return this.form.get('email');
  // }
  // get password() {
  //   return this.form.get('password');
  // }

  ngOnInit(): void {
  }

}
