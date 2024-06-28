import { Component, OnInit } from '@angular/core';
import { Cart, PriceSummary } from '../../models/dataTypes';
import { Router } from '@angular/router';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',

})
export class CartComponent implements OnInit {

  public cart: Cart[] | undefined
  public isCartEmpty: boolean = true

  public priceSummary: PriceSummary = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }

  constructor(private router: Router, private shopService: ShopService) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.initCardDetails()
  }

  updatePriceSummary(price: number) {
    this.priceSummary.price = price
    this.priceSummary.tax = price / 10
    this.priceSummary.delivery = 100
    this.priceSummary.total = price + price / 10 + 100
  }

  calculatePrice() {
    let price = 0
    this.cart?.forEach((item: any) => {
      if (item.quantity && item.price) {
        price += +item.price * +item.quantity
      }
    })
    this.updatePriceSummary(price)
    if (!this.cart?.length) {
      this.isCartEmpty = true
    } else {
      this.isCartEmpty = false
      this.shopService.getCartCount()
    }
  }

  initCardDetails() {
    this.shopService.getCart().subscribe((res) => {
      this.cart = res.cart.products
      this.loadCardDetails()
    })
  }

  loadCardDetails() {
    this.calculatePrice()
  }


  removeFromCart(productId: string, event: Event) {
    event.preventDefault();
    this.shopService.removeItemFromCart(productId).subscribe((res) => {
      this.cart = this.cart?.filter((item) => item.productId !== productId)
      this.loadCardDetails()
    })
  }

  checkoutOrder() {
    this.router.navigate(['/checkout'])
  }

}
