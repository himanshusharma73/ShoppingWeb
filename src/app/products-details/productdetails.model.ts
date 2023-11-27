
export interface Product {
selectedQuantity: any;
    id: number;
    name: string;
    description: string; // min 10, max 200 char
    mrp: number;
    discountPercentage: number;
    tax: number; // Assuming it's a number
    mfgDate: Date; // Assuming it's a Date
    expDate: Date; // Assuming it's a Date
    quantity: number; // at least 1
  }
  