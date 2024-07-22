const myLibrary = [
  {
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    numberOfPages: 1178,
    bookIsRead: true,
  },
  {
    title: "Wheel of Time",
    author: "Robert Jordan",
    numberOfPages: 11898,
    bookIsRead: false,
  },
  {
    title: "Pawn of Prophecy",
    author: "David Eddings",
    numberOfPages: 278,
    bookIsRead: true,
  },
];

function Book(title, author, numberOfPages, bookIsRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.bookIsRead = bookIsRead;

  this.info = function() {
    return title + " by " + author + ", " + numberOfPages + " pages, " + bookIsRead;
  }
}

function addBookToLibrary() {
  // let title = prompt("Enter a book title");
  // let author = prompt("Enter an author");
  // let numberOfPages = prompt("Enter how many pages");
  // let bookIsRead = prompt("Is the book read?")
  // let book = new Book(title, author, numberOfPages, bookIsRead);
  // myLibrary.push(book);
}

function displayLibrary() {
  const bookTable = document.querySelector("#booktable");
  bookTable.innerHTML = "";

  myLibrary.forEach((book) => {

    const tableRow = document.createElement("tr");
    bookTable.appendChild(tableRow);

    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    tableRow.appendChild(titleCell);

    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    tableRow.appendChild(authorCell);

    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.numberOfPages;
    tableRow.appendChild(pagesCell);

    const readCell = document.createElement("td");
    readCell.textContent = book.bookIsRead;
    tableRow.appendChild(readCell);
  })
}

function createBook() {
  const titleInput = document.querySelector("#titleInput");
  const authorInput = document.querySelector("#authorInput");
  const pagesInput = document.querySelector("#pagesInput");
  const readInput = document.querySelector("#readInput");
  const bookInput = {
    title: titleInput.value,
    author: authorInput.value,
    numberOfPages: pagesInput.value,
    bookIsRead: readInput.value
  };
  return bookInput;
}

addBookToLibrary();
displayLibrary();

const form = document.querySelector("form");
const dialog = document.querySelector("#dialog");
const modalBtn = document.querySelector("#newBookBtn");
const submitBtn = document.querySelector("#submitBtn");
const outputBox = document.querySelector("output");


modalBtn.addEventListener("click", () => {
  dialog.showModal();
})

dialog.addEventListener("close", () => {
  form.reset();
})

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const newBook = createBook();
  myLibrary.push(newBook)
  displayLibrary();

  dialog.close();
})
