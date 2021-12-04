import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'Macbook Air 13"',
      category: 'laptop',
      description: 'Power. It’s in the Air. Now available with Apple-designed M1 chip. Buy direct from Apple. Services: Shop with Specialists, No-contact free delivery, EMI available, Direct from Apple.',
      images: [
        'https://images-eu.ssl-images-amazon.com/images/I/317ZwBbdXLL._SY445_SX342_QL70_FMwebp_.jpg',
        'https://m.media-amazon.com/images/I/41YVPKZsRvL._SL1000_.jpg'
      ],
      price: 199
    },
    {
      id: 2,
      name: 'lenovo ideapad 330',
      category: 'laptop',
      description: 'Lenovo Ideapad 330 15.6-inch FHD Laptop (Intel Core I3 7th Gen/4GB RAM/1TB HDD/Windows 10 Home/2.2 Kg/Onyx Black), 81DE01K2IN.',
      images: [
        'https://www.hilaptop.com/environment/cache/images/500_500_productGfx_10346.jpg',
        'https://www.hilaptop.com/userdata/public/gfx/10348.jpg'
      ],
      price: 99
    }
  ];
  constructor() { }

  get getProduct() {
    return this.products;
  }

  getProductDetails(id: number) {
    return this.products.find(p => p.id === id);
  }
}
