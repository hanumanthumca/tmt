import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-view-request',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule],
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent {
  @Input() request: any;
  @Output() save = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  onSave(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    this.save.emit(this.request);
  }

  onDataInFileSelected(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      this.request.dataInFile = file;
    }
  }

  onDataOutFileSelected(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      this.request.dataOutFile = file;
    }
  }
}
