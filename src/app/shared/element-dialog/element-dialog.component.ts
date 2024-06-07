import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';


import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { PeriodicElement } from '../../models/PeriodicElement';

@Component({
  selector: 'app-element-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormField, MatLabel,FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, NgIf],
  templateUrl: './element-dialog.component.html',
  styleUrl: './element-dialog.component.scss'
})
export class ElementDialogComponent {
  element!: PeriodicElement;
  isChange!: boolean;
  
  constructor(
    public dialogRef: MatDialogRef<ElementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement,
  ) {
    if(this.data.position != null){
      this.isChange= true;
    }
    else{
      this.isChange = false;
    }
  }

  ngOnInit(): void {
    if(this.data.position != null){
      this.isChange= true;
    }
    else{
      this.isChange = false;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
