import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() name:string = '';
  @Input() price:number = 0;
  @Input() url:string = '';
  
}
