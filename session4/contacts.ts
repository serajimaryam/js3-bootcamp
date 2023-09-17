const contacts ={
    cName : "mary",
    phoneNum : 123456789,
}
function updateContacts(name,phone) {
 contacts.cName=name;
 contacts.phoneNum=phone;   

}
// updateContacts("roza",321654987);
// cosole.log(contacts);

function addContact(family,number){
     contacts["f_name"]=family
     contacts["number"]=number
    
    return contacts
}
// addContact("seraji",321321321);
console.log(addContact("seraji",321321321))