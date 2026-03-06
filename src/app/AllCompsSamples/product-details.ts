export class ProductDetails {
     productCode!:string;
     productName!:string;
     price!:number;
     company!:string

    constructor( productCode:string,productName:string,price:number,company:string)
    {
        this.productCode=productCode;
        this.productName=productName;
        this.price=price;
        this.company=company
    }

}
