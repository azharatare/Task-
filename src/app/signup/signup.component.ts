import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  signUpForm!: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    private userService: UserService
    ){}
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["",[Validators.required]]
    })
  }

  public onSubmit(): void {
    const { email, password } = this.signUpForm.value;
      if (this.signUpForm.valid) {
        this.userService.signUp(email, password);
      }
    }
}
