/* eslint-disable max-classes-per-file */
import { DateTime } from './node_modules/luxon/src/luxon.js';
import {store,MainUI,form} from './modules/main-ui.js';
class Book {
  constructor (title, author) {
    this.title = title;
    this.author = author;
  }
}
const mainPage = new MainUI();
const addBookSection = document.querySelector('.bottom-container');
const contactSection = document.querySelector('.contact');
const displayBookSection = document.querySelector('.top-container');
// Date
const date = document.querySelector('.date');
setInterval(() => {
  date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}, 1000);

// Display Books
document.addEventListener('DOMContentLoaded', () => {
  mainPage.populateBooks();
  contactSection.style.display = 'none';
  addBookSection.style.display = 'none';
});

// Add Book
const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', () => {
  const title = form.elements.title.value;
  const author = form.elements.author.value;
  const newBook = new Book(title, author);

  mainPage.addBook(newBook);
  store.addBook(newBook);
  mainPage.clearInputs();
});

// Remove Book

document.addEventListener('click', (e) => {
  const button = e.target;
  if (button.className === 'remove-button') {
    mainPage.removeBook(button);
    store.removeBook(button);
  } else if (button.parentNode.id === 'list') {
    displayBookSection.style.display = 'flex';
    contactSection.style.display = 'none';
    addBookSection.style.display = 'none';
  } else if (button.parentNode.id === 'add') {
    addBookSection.style.display = 'flex';
    contactSection.style.display = 'none';
    displayBookSection.style.display = 'none';
  } else if (button.parentNode.id === 'contact') {
    addBookSection.style.display = 'none';
    contactSection.style.display = 'flex';
    displayBookSection.style.display = 'none';
  }
});
