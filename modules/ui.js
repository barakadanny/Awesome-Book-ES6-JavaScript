import Store from './store.js';

class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  // add the book to the list
  static addBookToList(book) {
    const list = document.querySelector('.books-list');

    const bookDisplay = document.createElement('div');
    bookDisplay.classList.add('book');
    bookDisplay.innerHTML = `
    <p class="bookTitle"><b>${book.title}</b></p>
        <p>by &nbsp; &nbsp;<span></span><b>${book.author}.</b></p>
        <button class="delete">Remove</button>
     `;
    list.appendChild(bookDisplay);
  }

  // delete book from local storage
  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('.book-title').value = '';
    document.querySelector('.book-author').value = '';
  }
}

export default UI;
