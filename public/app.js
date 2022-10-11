var contacts = [];

build = () => {



}

addContact = () => {

    const name = document.getElementById('name').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const email = document.getElementById('email').value;

    var contactOrder = {Name: name, Phonenumber: phonenumber, Email: email};

    contacts.push(contactOrder);

    var ulList = document.getElementById('contactUl');
    ulList.innerHTML = '';


    contacts.forEach(contact => {

        var listElement = document.createElement('li');

        listElement.innerHTML = (`${contact.Name} - ${contact.Phonenumber} - ${contact.Email}`);

        ulList.appendChild(listElement);

    });

}