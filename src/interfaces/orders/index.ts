import { Order_itemsInterface } from 'interfaces/order_items';

export interface OrdersInterface {
  status: string;
  created_at: Date;
  updated_at: Date;
  order_items: Order_itemsInterface[];
}
