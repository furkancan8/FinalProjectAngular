export interface Product{
    productId:number;
    categoryId:number;
    sideCategoryId:number
    productName:string;
    unitsInStock:number;
    unitPrice:number;
    quantityPerUnit:string;
    reviews:number;
    sellCount:number;
    startCount:number;
    discount:number;
    imagePath:string;
    freeCargo:boolean;
    fastCargo:boolean;
}
