export class Coffee {
  constructor(
    id: number,
    popular: boolean,
    name: string,
    price: string,
    rating: number,
    votes: number,
    image: string,
    available: boolean
  ) {
    this.id = id;
    this.name = name;
    this.popular = popular;
    this.price = price;
    this.rating = rating;
    this.votes = votes;
    this.image = image;
    this.available = available;
  }
  id: number = 0;
  popular: boolean = false;
  name: string = '';
  price: string = '';
  rating: number = 0;
  votes!: number;
  image!: string;
  available!: boolean;
}
