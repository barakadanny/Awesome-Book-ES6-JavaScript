import Store from './store.js';
// const booksAr = [];
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
    <h3> ${book.title} </h3>
    <div class="book-details">
     <p> by ${book.author}</p>
    </div>
     <button class="delete" >Delete</button>
     `;
    list.appendChild(bookDisplay);
  }

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
