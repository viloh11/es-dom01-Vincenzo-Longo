//Esercizio 1
let person = {
  name: "Gesù",
  surname: "Di Nazareth",
  age: 33,
  sayHello: function () {
    console.log(
      `Ciao sono ${this.name}, il mio congome è ${this.surname} e ho ${this.age} anni.`
    );
  },
};

//person.sayHello()

//Esercizio 2
let addressBook = {
  contacts: [
    { name: "Dario Ladisa", phone: "3332224545" },
    { name: "Sergio Cofano", phone: "4447775454" },
    { name: "Marianna Rizzi", phone: "7772221212" },
  ],
  showContacts: function () {
    this.contacts.forEach((element) => {
      console.log(element.name, element.phone);
    });
  },
  deleteContact: function (i) {
    this.contacts = this.contacts.filter((index) => index !== i);
  },
  addContact: function (name, phone) {
    this.contacts.push({ name: name, phone: phone });
  },
  editContact: function (i, edit) {
    if (this.contacts[i]) {
      this.contacts[i] = { ...this.contacts[i], ...edit };
    }
  },
  showContact: function (i) {
    if (this.contacts[i]) {
      let contact = this.contacts[i];
      console.log(contact.name, contact.phone);
    } else {
      console.log("Contatto non trovato");
    }
  },
};

// addressBook.deleteContact(1);
// addressBook.showContacts();
// addressBook.addContact("Vincenzo Longo", "6667778989");
// console.log("----------------");
// addressBook.showContacts();
// addressBook.editContact(1, { name: "Sergio Rossi", phone: "5556667777" });
// console.log("----------------");
// addressBook.showContacts();
// console.log("----------------");
// addressBook.showContact(0)


//Esercizio 3
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    let headers = document.querySelectorAll('p');
    headers.forEach(header => {
        header.style.color = getRandomColor();
    });
}

function changeFontWeight() {
    let headers = document.querySelectorAll('p');
    headers.forEach(header => {
        if (header.style.fontWeight === 'bold') {
            header.style.fontWeight = 'normal';
        } else {
            header.style.fontWeight = 'bold';
        }
    });
}


function toggleVisibility() {
    let headers = document.querySelectorAll('p');
    headers.forEach(header => {
        header.style.display = header.style.display === 'none' ? 'block' : 'none';
    });
}

document.getElementById('changeColorBtn').addEventListener('click', changeColor);
document.getElementById('changeFontWeightBtn').addEventListener('click', changeFontWeight);
document.getElementById('toggleVisibilityBtn').addEventListener('click', toggleVisibility);

//Esercizio 5
document.getElementById('createArticleBtn').addEventListener('click', function() {
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;

    if (title === '' || content === '') {
        alert('Titolo e paragrafo non possono essere vuoti');
        return;
    }

    let date = new Date();
    let formatDate = date.toLocaleDateString();

    let article = document.createElement('div');
    article.innerHTML = `<h2>${title}</h2>
                         <p>${content}</p>
                         <small>Pubblicato il: ${formatDate}</small>`;
    document.getElementById('articles').appendChild(article);

    // Pulire gli input
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
});


