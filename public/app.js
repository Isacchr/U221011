var contacts = [];

build = () => {

    /*const XHR = new XMLHttpRequest();

    XHR.onload = () => {


        
    }

    XHR.open();
    XHR.send(); */

}

addContact = () => {

    const name = document.getElementById('name').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const email = document.getElementById('email').value;

    var contactOrder = {name: name, phonenumber: phonenumber, email: email};

    contacts.push(contactOrder);

    console.log(contactOrder);


}