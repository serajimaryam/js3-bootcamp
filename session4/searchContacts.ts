const contacts={
    cName : "mary",
    number :"987654321",

}
let index =object.keys(contacts).length;
console.log(index); 
 function searchContacts(contName){
   for(i=0 ; i<index ; i++)
    {
        if (contacts[i].cName==="mary"){
            console.log("contact is found");
        }else{
            console.log("contact is not found")
        }
    }
}