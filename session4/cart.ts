let cartList : string[] = ["milk", "meat","bread"];

function addToCart(item : string) : string[]{
   
   cartList.push(item);
   return cartList;
     
}
// const i : string =prompt("Inter your cart item: ")
addToCart("cake");
addToCart("letter");

console.log(cartList);