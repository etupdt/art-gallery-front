import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { ProductsService } from '../../services/products.service';
import { Product } from '../product.class'
import { Subscription } from 'rxjs';
import { ObjectCloneService } from '../../services/object-clone.service';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'art-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService, private navbarService: NavbarService, private objectCloneService: ObjectCloneService) { 
    this.clickEventsubscription = this.navbarService.getClickEvent().subscribe((res)=>{
      this.getAllSearchProducts(res);
    })
      
  }

  clickEventsubscription:Subscription;

  products: Product[] = [];

  ngOnInit(): void {
    this.productsService.getAllBackProducts().subscribe((ret: Product[])=>{
      this.products = cloneDeep(ret);
    })  
  }

  getAllSearchProducts(searchString: string): void {
    this.products =  []
    this.productsService.getAllFrontProducts().forEach(item => {
      if (item.name.indexOf(searchString) >=  0) {
        this.products.push(this.selectSearchString(item, searchString))
      }
    })
  }

  private selectSearchString = (product: Product, searchString: string) => {
    let modifiedProduct = cloneDeep(product)
    modifiedProduct.name = modifiedProduct.name.replace(searchString, '<span class="yellow">' + searchString + '</span>')
    return modifiedProduct
  }

}
