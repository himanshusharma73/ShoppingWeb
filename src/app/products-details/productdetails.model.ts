
export interface Product {
   
    id: number;
    name: string;
    description: string;
    mrp: number;
    discountPercentage: number;
    tax: number; 
    mfgDate: Date; 
    expDate: Date;
    quantity: number;
    selectedQuantity: 1;
  }
  