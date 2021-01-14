import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";



/// Add your getMaxPrice() function below:
const getMaxPrice = (price: PriceBracket): number => {
  switch(price){
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 20.0;
    default:
      return 0
  }
}


/// Add your getOrders() function below:
const getOrders = (price: PriceBracket, orders: Order[][]) => {
  let filteredOrders: Order[][] = [];


    orders.forEach((restaurant: Order[]) => {
    const result = restaurant.filter((order: Order) => order.price <= getMaxPrice(price))

    filteredOrders.push(result)
  })
  return filteredOrders;
}



/// Add your printOrders() function below:
const printOrders = (restaurants: Restaurant[], orders: Order[][]) => {


//   restaurants.forEach((restaurant, index) => {
//     if()
//   })
}



// / Main
// const elligibleOrders = getOrders(PriceBracket.Low, orders);
// printOrders(restaurants, elligibleOrders);
