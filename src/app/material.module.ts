import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule, MatIconModule, MatListModule } from '@angular/material';


@NgModule({
  // imports: [
  //   MatTableModule,
  //   MatCheckboxModule,
  //   MatButtonModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatSidenavModule,
  //   MatToolbarModule,
  //   MatIconModule,
  //   MatListModule,
  // ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ]
})
export class MaterialModule { }
