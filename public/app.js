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
    const c = document.getElementById('email').value;

    var contactOrder = {name: name, phonenumber: phonenumber, email: phonenumber};

    contacts.push(contactOrder);

    console.log(contactOrder);


}