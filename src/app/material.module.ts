import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
// import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
   MatTableModule, 
    // CommonModule
    MatButtonModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule
  ]
})
export class MaterialModule { }
