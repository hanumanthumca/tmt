import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-my-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule, TabsModule, TableModule, ButtonModule, SelectModule],
  templateUrl: './my-tasks.html',
  styleUrls: ['./my-tasks.css']
})
export class MyTasksComponent {
  managerTasks = [
    {
      esrNo: 'ESR-201001',
      program: 'Tiguan MY26',
      product: 'SBS',
      typeOfWork: 'Integrity Study',
      engineer: 'Gobind Kant',
      reqMonth: 'Sep 2025',
      reqDate: '2025-09-04',
      deliveryDate: '2025-09-22',
      finalHours: 40,
      ftq: 'Yes',
      otd: 'Yes'
    },
    {
      esrNo: 'ESR-201002',
      program: 'Discovery Sport',
      product: 'DAB',
      typeOfWork: 'Static Deployment',
      engineer: 'Akhil',
      reqMonth: 'Oct 2025',
      reqDate: '2025-10-05',
      deliveryDate: '2025-09-18',
      finalHours: 20,
      ftq: 'Yes',
      otd: 'Yes'
    },
    {
      esrNo: 'ESR-201003',
      program: 'Hardcore SBS – Integrity Study',
      product: 'SBS',
      typeOfWork: 'Integrity Study',
      engineer: 'Akhil',
      reqMonth: 'Aug 2025',
      reqDate: '2025-08-06',
      deliveryDate: '-',
      finalHours: 0,
      ftq: '-',
      otd: '-'
    }
  ];

  requesterTasks = [
    {
      esrNo: 'ESR-201004',
      program: 'Tiguan MY26',
      product: 'SAB',
      typeOfWork: 'AK Volume',
      engineer: 'Varun P',
      reqMonth: 'Sep 2025',
      reqDate: '2025-09-07',
      deliveryDate: '2025-09-22',
      finalHours: 0,
      ftq: 'No',
      otd: 'Yes'
    },
    {
      esrNo: 'ESR-201005',
      program: 'Discovery Sport',
      product: 'CAB',
      typeOfWork: 'FMVSS226',
      engineer: 'Vinayak',
      reqMonth: 'Oct 2025',
      reqDate: '2025-10-08',
      deliveryDate: '2025-10-20',
      finalHours: 12,
      ftq: 'Yes',
      otd: 'No'
    },
    {
      esrNo: 'ESR-201006',
      program: 'Alpha Sedan',
      product: 'XYZ',
      typeOfWork: 'Validation',
      engineer: 'Suhas Rao',
      reqMonth: 'Nov 2025',
      reqDate: '2025-11-09',
      deliveryDate: '2025-11-25',
      finalHours: 18,
      ftq: 'Yes',
      otd: 'Yes'
    }
  ];

  yesNoOptions = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' }
  ];

  engineerTasks = [
    {
      esrNo: 'ESR-201007',
      program: 'Civic 2026',
      product: 'CAB',
      typeOfWork: 'Design Study',
      engineer: 'Arun V',
      reqMonth: 'Sep 2025',
      reqDate: '2025-09-10',
      deliveryDate: '2025-09-30',
      finalHours: 15,
      ftq: 'Yes',
      otd: 'Yes'
    },
    {
      esrNo: 'ESR-201008',
      program: 'SUV X',
      product: 'SAB',
      typeOfWork: 'Feasibility',
      engineer: 'Reena S',
      reqMonth: 'Oct 2025',
      reqDate: '2025-10-12',
      deliveryDate: '2025-10-28',
      finalHours: 10,
      ftq: 'No',
      otd: 'Yes'
    }
  ];
}
