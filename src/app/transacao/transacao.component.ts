import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-transacao',
  imports: [NavbarComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css'
})
export class TransacaoComponent {
savingsForm: FormGroup;
  savingTypes = [
    { label: 'Emergency Fund', value: 'emergency' },
    { label: 'Retirement', value: 'retirement' },
    { label: 'Vacation', value: 'vacation' },
    { label: 'Education', value: 'education' },
    { label: 'Other', value: 'other' }
  ];

  constructor(private fb: FormBuilder) {
    this.savingsForm = this.fb.group({
      type: [''],
      value: [''],
      recurrent: [false]
    });
  }

  onSubmit() {
    if (this.savingsForm.valid) {
      console.log(this.savingsForm.value);
      // Handle saving logic here
    }
  }
}
