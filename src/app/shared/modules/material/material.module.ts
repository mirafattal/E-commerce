import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [

  ],
  exports: [MatButtonModule,
     MatInputModule,
     FormsModule,
     ReactiveFormsModule,
     CommonModule
    ],
})
export class MaterialModule {}