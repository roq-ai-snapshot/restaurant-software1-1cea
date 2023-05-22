import { Menu_itemsInterface } from 'interfaces/menu_items';
import { OrdersInterface } from 'interfaces/orders';
import { ReservationsInterface } from 'interfaces/reservations';
import { StaffInterface } from 'interfaces/staff';

export interface RestaurantsInterface {
  name: string;
  location: string;
  contact_details: string;
  operating_hours: string;
  menu_items: Menu_itemsInterface[];
  orders: OrdersInterface[];
  reservations: ReservationsInterface[];
  staff: StaffInterface[];
}
