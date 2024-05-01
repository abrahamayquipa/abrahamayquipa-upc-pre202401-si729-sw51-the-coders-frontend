export class ProductEntity {
  title: string;
  product_description: string;
  model: string;
  price: number;
  manufacturer: string;
  image: string;
  isFavorite: boolean;

  constructor(
    title = '',
    product_description = '',
    model = '',
    price = 0,
    manufacturer = '',
    image = ''
  ) {
    this.title = title;
    this.product_description = product_description;
    this.model = model;
    this.price = price;
    this.manufacturer = manufacturer;
    this.image = image;
    this.isFavorite= false;
  }
}
