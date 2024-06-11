import React from 'react';
import Order from '../Order/Order';
interface Product {
  productImage: string,
  name: string;
  price: number;
}
interface OrderData {
  restaurantName: string;
  restaurantImage: string;
  products: Product[];
  date: string;
  status: 'completed' | 'canceled';
  reviewed: boolean;
}
interface OrderListProps {
  orders: OrderData[];
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => (
  <div>
    {orders.map((order, index) => (
      <Order key={index} order={order} />
    ))}
  </div>
);

export default OrderList;
