import { CartItem } from "./cartInterface";

 export interface Order {   
    id: string;
    customer: string;
    phone: string;
    address: string;
    priority: boolean;
    estimatedDelivery: string;
    cart: CartItem[];
    position: string;
    orderPrice: number;
    priorityPrice: number;
    status: string;
}