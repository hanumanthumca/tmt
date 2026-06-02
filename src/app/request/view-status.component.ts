import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-view-status',
  standalone: true,
  imports: [CommonModule, ButtonModule, TableModule],
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.css']
})
export class ViewStatusComponent {
  @Input() request: any;
  @Output() close = new EventEmitter<void>();

  get statusText(): string {
    return this.request?.status || 'Pending';
  }

  get statusDate(): string {
    return this.request?.statusDate || 'Not recorded';
  }

  timelineRows = [
    { person: 'Gobind Kant', status: 'Received', details: 'Request received', when: '17/9/2025 5:44:22 pm', action: '' },
    { person: 'Kumar Gourab', status: 'Assigned', details: 'Assigned to engineer', when: '17/9/2025 5:44:29 pm', action: '' },
    { person: 'Kumar Gourab', status: 'In Progress', details: 'Quote: 20 h; Planned: 2025-09-24', when: '17/9/2025 6:13:57 pm', action: '' },
    { person: 'Harish N.', status: 'QC', details: 'QC assigned', when: '17/9/2025 6:14:01 pm', action: '' },
    { person: 'Kumar Gourab', status: 'In Progress', details: 'QC done -> back to engineer', when: '17/9/2025 6:16:09 pm', action: 'Assign QC' }
  ];
}
