// Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {this.state *= 1.5}

    set state(newState) {
        if (newState > 100) {
            this._state = 100;
        }
        else if (this.state === 0) {
            this._state = 0;
        }
        else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

// Задача 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
            return true;
        }
        else {
            return false;
        }
    }

    findBookBy(type, value) {
        let book;
        book = this.books.find(item => item[type] === value);

        if (book != undefined) {
            return book;
        }
        else {
            return null;
        }
    }

    giveBookByName(bookName) {
        let index, book;
        index = this.books.findIndex(item => item.name === bookName);
    
        if (index > -1) {
            book = this.books[index];
            this.books.splice(index, 1);

            return book;
        }
        else {
            return null;
        }
    }

}

