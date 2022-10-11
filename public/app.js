var contacts = [];

build = () => {

    countContacts();

}

addContact = () => {

    const name = document.getElementById('name').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const email = document.getElementById('email').value;

    var contactOrder = {Name: name, Phonenumber: phonenumber, Email: email};

    contacts.push(contactOrder);


    var ulList = document.getElementById('contactUl');
    var listElement = document.createElement('li');
    var removeBtn = document.createElement('button');
    removeBtn.setAttribute('type', 'button');
    removeBtn.setAttribute('id', 'removeBtn');
    removeBtn.innerHTML = 'remove';
    removeBtn.onclick = () => {
        listElement.remove();
        contacts.pop(contacts);
        countContacts();
    }

    var editBtn = document.createElement('button');
    editBtn.setAttribute('type', 'button');
    editBtn.setAttribute('id', 'editBtn');
    editBtn.innerHTML = 'edit';


    listElement.innerHTML = (`${name} - ${phonenumber} - ${email} `);
    ulList.appendChild(listElement);
    listElement.appendChild(removeBtn);
    listElement.appendChild(editBtn);


    document.getElementById('name').value = '';
    document.getElementById('phonenumber').value = '';
    document.getElementById('email').value = '';

    countContacts();
}

countContacts = () => {

    var contactAmount = document.getElementById('contactAmount');
    contactAmount.innerHTML = `There are: ${contacts.length} contacts in the list`;

}