# MyApp API (book & borrower)

Endpoints (base URL `http://localhost:3000` if app started with default Express generator):

- `GET /book` - list all books
- `GET /book/:id` - get one book
- `POST /book` - add book (JSON body `{ "name": "..", "author": "..", "isbn": ".." }`)
- `PUT /book/:id` - update book
- `DELETE /book/:id` - delete book

- `GET /borrower` - list all borrowers
- `GET /borrower/:id` - get one borrower
- `POST /borrower` - add borrower (JSON body `{ "fname":"..","lname":"..","streetaddress":".." }`)
- `PUT /borrower/:id` - update borrower
- `DELETE /borrower/:id` - delete borrower

Testing:
- Start the app (from `viikko7/myapp`) with `npm start` or `DEBUG=myapp:* npm start`.
- Use Postman to send JSON bodies to the POST/PUT endpoints and check responses for GET/DELETE.

Note: The app's `database.js` will create `book` and `borrower` tables if they do not already exist.
