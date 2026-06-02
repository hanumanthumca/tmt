import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ViewRequestComponent } from './view-request.component';
import { ViewStatusComponent } from './view-status.component';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe, DialogModule, TableModule, ButtonModule, ViewRequestComponent, ViewStatusComponent],
  templateUrl: './request.html',
  styleUrls: ['./request.css']
})
export class RequestComponent {
  displayNewRequestDialog = false;
  displayDialog: boolean = false;
  displayStatusDialog = false;
  selectedRequest: any = null;
  selectedStatusRequest: any = null;
//  viewRequest(request: any) {
//     this.selectedRequest = request;
//     this.displayDialog = true;
//   }
  viewRequest1() {
    //this.selectedRequest = request;
    this.displayDialog = true;
  }
onSaveRequest(form?: NgForm) {
  if (form && form.invalid) {
    form.control.markAllAsTouched();
    return;
  }
  console.log('Updated request:', this.selectedRequest);
  this.displayDialog = false;
}
onDataInFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    console.log('Data In file selected:', file.name);
    // You can store it in selectedRequest or upload to backend
    this.selectedRequest.dataInFile = file;
  }
}

onDataOutFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    console.log('Data Out file selected:', file.name);
    this.selectedRequest.dataOutFile = file;
  }
}


  viewRequest(request: any) {
    this.selectedRequest = request;
    this.displayDialog = true;
  }

  viewStatus(request: any) {
    this.selectedStatusRequest = request;
    this.displayStatusDialog = true;
  }
  requestsData = [
    { esrNo: 'ESR001', name: 'John Smith', oem: 'BMW', zfProjectNumber: '8600000163' },
    { esrNo: 'ESR002', name: 'Sarah Johnson', oem: 'MB', zfProjectNumber: '8600000164' },
    { esrNo: 'ESR003', name: 'Michael Brown', oem: 'STELLANTIS', zfProjectNumber: '8600000165' },
    { esrNo: 'ESR004', name: 'Emily Davis', oem: 'BMW', zfProjectNumber: '8600000166' },
    { esrNo: 'ESR005', name: 'Robert Wilson', oem: 'MB', zfProjectNumber: '8600000167' },
    { esrNo: 'ESR006', name: 'Lisa Anderson', oem: 'STELLANTIS', zfProjectNumber: '8600000168' },
    { esrNo: 'ESR007', name: 'James Miller', oem: 'BMW', zfProjectNumber: '8600000169' },
    { esrNo: 'ESR008', name: 'Jennifer Taylor', oem: 'MB', zfProjectNumber: '8600000170' },
    { esrNo: 'ESR009', name: 'David Martinez', oem: 'BMW', zfProjectNumber: '8600000171' },
    { esrNo: 'ESR010', name: 'Patricia Thomas', oem: 'STELLANTIS', zfProjectNumber: '8600000172' },
    { esrNo: 'ESR011', name: 'Charles Garcia', oem: 'MB', zfProjectNumber: '8600000173' },
    { esrNo: 'ESR012', name: 'Mary Rodriguez', oem: 'BMW', zfProjectNumber: '8600000174' },
    { esrNo: 'ESR013', name: 'Christopher Lee', oem: 'STELLANTIS', zfProjectNumber: '8600000175' },
    { esrNo: 'ESR014', name: 'Linda White', oem: 'MB', zfProjectNumber: '8600000176' },
    { esrNo: 'ESR015', name: 'Daniel Harris', oem: 'BMW', zfProjectNumber: '8600000177' },
    { esrNo: 'ESR016', name: 'Barbara Clark', oem: 'STELLANTIS', zfProjectNumber: '8600000178' },
    { esrNo: 'ESR017', name: 'Matthew Lewis', oem: 'MB', zfProjectNumber: '8600000179' },
    { esrNo: 'ESR018', name: 'Susan Walker', oem: 'BMW', zfProjectNumber: '8600000180' },
    { esrNo: 'ESR019', name: 'Andrew Hall', oem: 'STELLANTIS', zfProjectNumber: '8600000181' },
    { esrNo: 'ESR020', name: 'Karen Young', oem: 'MB', zfProjectNumber: '8600000182' },
    { esrNo: 'ESR021', name: 'Mark King', oem: 'BMW', zfProjectNumber: '8600000183' },
    { esrNo: 'ESR022', name: 'Elizabeth Wright', oem: 'STELLANTIS', zfProjectNumber: '8600000184' },
    { esrNo: 'ESR023', name: 'Donald Lopez', oem: 'MB', zfProjectNumber: '8600000185' },
    { esrNo: 'ESR024', name: 'Dorothy Hill', oem: 'BMW', zfProjectNumber: '8600000186' },
    { esrNo: 'ESR025', name: 'Steven Scott', oem: 'STELLANTIS', zfProjectNumber: '8600000187' },
    { esrNo: 'ESR026', name: 'Angela Green', oem: 'MB', zfProjectNumber: '8600000188' }
  ];

  requestModel = {
    esrNo: '',
    name: '',
    location: '',
    oem: '',
    programName: '',
    reqId: '',
    zfProjectNumber: '',
    requestedDeliveryDate: '',
    productType: '',
    typeOfWork: 'Volume & Coverage',
    numberOfDesigns: 'NA',
    estimatedHours: '',
    otherDetails: ''
  };

  newRequestModel = {
    esrNo: '',
    name: '',
    location: '',
    oem: '',
    programName: '',
    reqId: '',
    zfProjectNumber: '',
    requestedDeliveryDate: '',
    productType: '',
    typeOfWork: 'Volume & Coverage',
    numberOfDesigns: 'NA',
    estimatedHours: '',
    otherDetails: ''
  };

  submitted = false;

  openNewRequestDialog(): void {
    this.displayNewRequestDialog = true;
  }

  closeNewRequestDialog(): void {
    this.displayNewRequestDialog = false;
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      this.submitted = false;
      return;
    }

    this.submitted = true;
  }

  onCreateNewRequest(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.requestModel = { ...this.newRequestModel };
    this.displayNewRequestDialog = false;
    this.submitted = true;
  }
}
