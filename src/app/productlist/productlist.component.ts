import { Component} from '@angular/core';
import { IProduct } from '../entities/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { StarComponent } from '../star/star.component';
@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule, FormsModule, StarComponent],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
  products: IProduct[]=[ 
    { 
      "productId": 1, 
      "productName": "Leaf Rake", 
      "productCode": "GDN-0011", 
      "releaseDate": "March 19, 2016", 
      "description": "Leaf rake with 48-inch wooden handle.", 
      "price": 19.95, 
      "starRating": 3.2, 
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png" 
  }, 
  { 
      "productId": 2, 
      "productName": "Garden Cart", 
      "productCode": "GDN-0023", 
      "releaseDate": "March 18, 2016", 
      "description": "15 gallon capacity rolling garden cart", 
      "price": 32.99, 
      "starRating": 4.2, 
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png" 
  }, 
  { 
      "productId": 5, 
      "productName": "Hammer", 
      "productCode": "TBX-0048", 
      "releaseDate": "May 21, 2016", 
      "description": "Curved claw steel hammer", 
      "price": 8.9, 
      "starRating": 4.8, 
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png" 
  }, 
  { 
      "productId": 8, 
      "productName": "Saw", 
      "productCode": "TBX-0022", 
      "releaseDate": "May 15, 2016", 
      "description": "15-inch steel blade hand saw", 
      "price": 11.55, 
      "starRating": 3.7, 
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png" 
  }, 
  { 
      "productId": 10, 
      "productName": "Video Game Controller", 
      "productCode": "GMG-0042", 
      "releaseDate": "October 15, 2015", 
      "description": "Standard two-button video game controller", 
      "price": 35.95, 
      "starRating": 4.6, 
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png" 
    } 
  ];
  
  sosao:any
  onRatingClicked(data:any):void{
  this.sosao=data
  }

  listProduct: IProduct[] = [];
  constructor() {}
 
  ngOnInit(): void { 
    this.listProduct=this.products; 
  } 
  
  listFilterr: string = '';
  get listFilter(): string {
    return this.listFilterr;
  }
  set listFilter(value: string) {
    this.listFilterr = value;
    this.products = this.listFilter ? 
    this.performFilter(this.listFilter) : this.listProduct;
  }
   
    performFilter(filterBy: string): IProduct[] { 
        filterBy = filterBy.toLocaleLowerCase(); 
        return this.listProduct.filter((product: IProduct) => 
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1); 
    } 
}
