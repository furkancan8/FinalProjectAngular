import { NonNullableFormBuilder } from "@angular/forms";

export interface OrderDetails{
    orderId:number,
    productId:number,
    unitPrice:number,
    quantity:number,
    userId:number
}
