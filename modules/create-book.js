const createBook = (book) => {
    const booksContainer = document.querySelector('.books-container');
    const bookContainer = document.createElement('div');
    bookContainer.className = 'single-book';
    const authorContainer = document.createElement('div');
    authorContainer.className = 'author-name';
    const span = document.createElement('span');
    span.textContent = 'by';
    const bookTitle = document.createElement('h3');
    bookTitle.className = 'title';
    const bookAuthor = document.createElement('h3');
    bookAuthor.className = 'author';
    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.textContent = 'Remove';
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    authorContainer.append(bookTitle, span, bookAuthor);
    bookContainer.append(authorContainer, removeButton);

    booksContainer.appendChild(bookContainer);
  }
export default createBook