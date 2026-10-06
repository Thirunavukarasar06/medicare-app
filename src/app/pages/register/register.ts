import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['../login/login.css'] // Reusing login styles
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dataService: DataService) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Exactly 10 digits
      dob: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, this.strictEmailValidator]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  // 1. Strict Email Validator (No caps, no special chars except @ and .)
  strictEmailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null; 

    // Check for capital letters
    if (/[A-Z]/.test(value)) {
      return { uppercaseFound: true };
    }

    // Check strict format: only lowercase letters, numbers, dots, and @
    const strictRegex = /^[a-z0-9.]+@[a-z0-9.]+\.[a-z]{2,}$/;
    if (!strictRegex.test(value)) {
      return { invalidCharacters: true };
    }

    return null; // Valid
  }

  // 2. Password Match Validator
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value 
      ? null : { mismatch: true };
  }

  // Convenience getter for HTML
  get f() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.valid) {
      // Pass the entire form object to the service
      this.dataService.registerFullUser(this.registerForm.value);
      this.router.navigate(['/dashboard']);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}