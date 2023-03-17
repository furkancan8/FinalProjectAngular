export interface Order{
    orderId:number,
    productId:number,
    quantity:number,
    userId:number,
    customerId:number,
    employeeId:number,
    orderDate:Date,
    requiredDate:Date,
    shipName:string,
    shipAddress:string,
    shipCity:string,
    shipCountry:string
}
