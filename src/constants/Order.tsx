import { Order } from "@/interface/orderInterface";





 export const order : Order = {
    id: "ABCDEF",
    customer: "Jonas",
    phone: "123456789",
    address: "Arroios, Lisbon , Portugal",
    priority: true,
    estimatedDelivery: "2027-04-25T10:00:00",
    status: "active",
    cart: [
      {
        pizzaId: 7,
        name: "Napoli",
        quantity: 3,
        unitPrice: 16,
        totalPrice: 48,
      },
      {
        pizzaId: 5,
        name: "Diavola",
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32,
      },
      {
        pizzaId: 3,
        name: "Romana",
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
      },
    ],
    position: "-9.000,38.000",
    orderPrice: 95,
    priorityPrice: 19,
  };
  