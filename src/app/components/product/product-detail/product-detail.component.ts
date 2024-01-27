import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/core/service/product.service';
import { ConfirmationDialogComponent } from 'src/app/shared/component/confirmation-dialog/confirmation-dialog.component';
import { ProductManagementComponent } from '../product-management/product-management.component';
import { ActionState } from 'src/app/core/enums/ActionState';
import { Product } from 'src/app/core/modules/product';
import { CartService } from 'src/app/core/service/cart.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-person-details',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})


export class ProductDetailsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  product: any;

  public displayedColumns: string[] = ['ProductName', 'Quantity', 'ProductBrand', 'ProductDepartment', 'Price'];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];

  /**
   * it holds a list of active filter for each column.
   * example: {firstName: {contains: 'person 1'}}
   *
   */
  public columnsFilters = {};

  public dataSource: MatTableDataSource<Product>;
  private serviceSubscribe!: Subscription;

  constructor(private productService: ProductService, public dialog: MatDialog, 
    private route: ActivatedRoute,
    private cartService: CartService) {
    this.dataSource = new MatTableDataSource<Product>();
  }   

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  preview(source: Product) {
    const dialogRef = this.dialog.open(ProductManagementComponent, {
      width: '400px',
      data: {
        source: source,
        action: ActionState.Preview
      },
    });
  }


  edit(source: Product) {
    const dialogRef = this.dialog.open(ProductManagementComponent, {
      width: '400px',
      data: {
        source: source,
        action: ActionState.Edit
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.edit(result);
      }
    });
  }

  add() {
    const dialogRef = this.dialog.open(ProductManagementComponent, {
      width: '400px',
      data: {
        action: ActionState.Add
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.add(result);
      }
    });

  }

  delete(id: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.remove(id);
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * initialize data-table by providing persons list to the dataSource.
   */
  ngOnInit(): void {
    this.productService.getAll();
    this.serviceSubscribe = this.productService.product$.subscribe(res => {
      this.dataSource.data = res;
    })
  }

  ngOnDestroy(): void {
    this.serviceSubscribe.unsubscribe();
  }
}
