import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/core/modules/product';
import { ActionState } from 'src/app/core/enums/ActionState';

@Component({
  selector: 'app-person-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent {
  actionState: ActionState = ActionState.Preview;
  formInstance: FormGroup;
  readonly: boolean = false;
  constructor(public dialogRef: MatDialogRef<ProductManagementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
    this.formInstance = new FormGroup({
      "id":  new FormControl('', Validators.required),
      "ProductName": new FormControl('', Validators.required),
      "Quantity": new FormControl('', Validators.required),
      "ProductBrand": new FormControl('', Validators.required),
      "ProductDepartment": new FormControl('', Validators.required),
      "Price": new FormControl('', Validators.required),
    });
    this.actionState = data.action

    if(this.actionState !== ActionState.Add) {
      this.formInstance.setValue(data.source);
    }

    if(this.actionState === ActionState.Preview) {
      this.readonly = true;
    }
  }

  ngOnInit(): void {

  }

  save(): void {
    this.dialogRef.close(Object.assign(new Product(), this.formInstance.value));
  }

}
