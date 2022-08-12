import { DateTime } from './modules/luxon.js';
import Book from './modules/book.js';
import UI from './modules/ui.js';
import Store from './modules/store.js';

// define the current local time
const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('current-date').innerHTML = currentDate;

document.addEventListener('DOMContentLoaded', UI.displayBooks);

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // get form values here
  const title = document.querySelector('.book-title').value;
  const author = document.querySelector('.book-author').value;

  const book = new Book(title, author);

  UI.addBookToList(book);

  Store.addBook(book);

  UI.clearFields();
});

// remove book
document.querySelector('.books-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  Store.removeBook(
    e.target.previousElementSibling.previousElementSibling.textContent,
  );
});

// Don't touch unless you want to break this code 💀⚠
// select tabs
const list = document.querySelector('#list');
const add = document.querySelector('#add-new');
const contact = document.querySelector('#contact');

// select sections
const books = document.querySelector('#books');
const addBook = document.querySelector('#addBooks');
const contactSection = document.querySelector('#contact-section');

// add event listener on list
list.addEventListener('click', (e) => {
  e.preventDefault();
  books.style.display = 'flex';
  addBook.style.display = 'none';
  contactSection.style.display = 'none';
});

// add event listener on add
add.addEventListener('click', (e) => {
  e.preventDefault();
  books.style.display = 'none';
  addBook.style.display = 'flex';
  contactSection.style.display = 'none';
});

// add event listener on contact
contact.addEventListener('click', (e) => {
  e.preventDefault();
  books.style.display = 'none';
  addBook.style.display = 'none';
  contactSection.style.display = 'flex';
});

// change tabs js function
// function openTab(e)
const openTab = (e) => {
  let i;
  const tabLinks = document.getElementsByClassName('menu-item');
  for (i = 0; i < tabLinks.length; i += 1) {
    tabLinks[i].className = tabLinks[i].className.replace('active', '');
  }
  e.currentTarget.className += ' active';
};

const menuItem = document.querySelectorAll('.menu-item');

// add event listener on menu items
menuItem.forEach((item) => {
  item.addEventListener('click', openTab);
});
