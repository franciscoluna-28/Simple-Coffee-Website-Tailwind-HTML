// Creación de la interfaz para simular un schema usando TypeScript
interface AvailableCoffee {
  coffeeName: string;
  id: number | string;
  price: number;
  description: string;
  imageURL: string;
}

// Creación de los cafés existentes para simular una base de datos
export const AVAILABLE_COFFEES: AvailableCoffee[] = [
  {
    coffeeName: "Cuban Capuccino",
    id: 1,
    price: 0.99,
    description:
      "Taste the tropics for $0.99! Would you like to try this Cuban Capuccino?",
    imageURL: "/resources/capuccino.png",
  },
  {
    coffeeName: "Brown Coffee",
    id: 2,
    price: 0.99,
    description:
      "Brew up your morning for $0.99! An amazing way to start your day.",
    imageURL: "/resources/coffee.png",
  },
  {
    coffeeName: "Coffee Ice Cream",
    id: 3,
    price: 0.99,
    description:
      "Taste the coffee, love the ice cream for $0.99! What's better than acoffee ice cream?",
    imageURL: "/resources/coffee-ice-cream.png",
  },
];
