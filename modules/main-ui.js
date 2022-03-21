import createBook from './create-book.js';
import Store from './store.js';
const form = document.querySelector('.input-form');
class MainUI {
    populateBooks = () => {
      const store = new Store();
      const books = store.getBooks();
      books.forEach((book) => {
        createBook(book);
      });
    }
  
    addBook = (book) => {
     createBook(book);
    }
  
    removeBook = (button) => {
      const parentDiv = button.parentNode;
      parentDiv.remove();
    }
  
    clearInputs = () => {
      form.elements.title.value = '';
      form.elements.author.value = '';
    }
  }
  const store = new Store();
export {store,MainUI,form}