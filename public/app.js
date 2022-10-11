var contacts = [];

build = () => {



}

addContact = () => {

    var ulList = document.getElementById('contactUl');

    const name = document.getElementById('name').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const email = document.getElementById('email').value;

    var contactOrder = {Name: name, Phonenumber: phonenumber, Email: email};

    contacts.push(contactOrder);


    var listElement = document.createElement('li');

    listElement.innerHTML = (`${name} - ${phonenumber} - ${email}`);

    ulList.appendChild(listElement);

    
    document.getElementById('name').value = '';
    document.getElementById('phonenumber').value = '';
    document.getElementById('email').value = '';

    countContacts();

}

countContacts = () => {

    var contactAmount = document.getElementById('contactAmount');
    contactAmount.innerHTML = (`There are: ${contacts.length} contacts in the list`)

}