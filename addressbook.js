const prompt = require("prompt-sync")({ sigint: true });
var contactlist = new Array();
createcontact();
function createcontact()
{

        var Firstname = prompt("Enter the Firstname : ");
        var Lastname = prompt("Enter the Lastname : ");
        var Address = prompt("Enter the Address : ");
        var City = prompt("Enter the City : ");
        var State = prompt("Enter the State : ");
        var Zipcode = prompt("Enter the Zipcode : ");
        var Phonenumber = prompt("Enter the Phonenumber : ");
        var Emailid = prompt("Enter the Emailid : ");

        contactlist.push(Firstname,Lastname,Address,City,State,Zipcode,Phonenumber,Emailid);
        console.log(contactlist);



}