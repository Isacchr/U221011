var contacts = [];

build = () => {

    countContacts();

}

addContact = () => {

    const name = document.getElementById('name').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const email = document.getElementById('email').value;
    var i = contacts.length;

    var contactOrder = {Name: name, Phonenumber: phonenumber, Email: email, Id: i};

    contacts.push(contactOrder);

    var ulList = document.getElementById('contactUl');
    var listElement = document.createElement('li');

    var removeBtn = document.createElement('button');
    removeBtn.setAttribute('type', 'button');
    removeBtn.innerHTML = 'remove';
    removeBtn.onclick = () => {
        listElement.remove();
        contacts.splice(i, 1);
        countContacts();
    }
    
    var editBtn = document.createElement('button');
    editBtn.setAttribute('type', 'button');
    editBtn.innerHTML = 'edit';
    editBtn.onclick = () => {
        document.getElementById('name').value = name; 
        document.getElementById('phonenumber').value = phonenumber;
        document.getElementById('email').value = email;
        listElement.remove();
        contacts.splice(i, 1);
    }
    
    
    listElement.innerHTML = (`${name} - ${phonenumber} - ${email} `);
    ulList.appendChild(listElement);
    listElement.appendChild(removeBtn);
    listElement.appendChild(editBtn);
    

    document.getElementById('name').value = '';
    document.getElementById('phonenumber').value = '';
    document.getElementById('email').value = '';

    countContacts();


    //console.log(`${apa.Name} - ${apa.Phonenumber} - ${apa.Email}`);
    //var apa = contacts.find(contacts => contacts.Id === i);

}


countContacts = () => {

    var contactAmount = document.getElementById('contactAmount');
    contactAmount.innerHTML = `There are: ${contacts.length} contacts in the list`;

}

saveList = () => {

    const XHR = new XMLHttpRequest();

    XHR.open('POST', '/contacts')
    XHR.send(JSON.stringify(contacts));

}