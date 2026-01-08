# MyApp API

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

- `GET /opiskelija` - list all students
- `GET /opiskelija/:id` - get one student
- `POST /opiskelija` - add student (JSON body `{ "etunimi":"..", "sukunimi":"..", "osoite":"..", "luokkatunnus":".." }`)
- `PUT /opiskelija/:id` - update student
- `DELETE /opiskelija/:id` - delete student

- `GET /opintojakso` - list all courses
- `GET /opintojakso/:id` - get one course
- `POST /opintojakso` - add course (JSON body `{ "nimi":"..", "laajuus":"..", "tunnus":".." }`)
- `PUT /opintojakso/:id` - update course
- `DELETE /opintojakso/:id` - delete course

- `GET /arviointi` - list all assessments
- `GET /arviointi/:id` - get one assessment
- `POST /arviointi` - add assessment (JSON body `{ "idopiskelija":1, "idopintojakso":2, "paivamaara":"YYYY-MM-DD", "arvosana": 5 }`)
- `PUT /arviointi/:id` - update assessment
- `DELETE /arviointi/:id` - delete assessment

Testing:
- Start the app (from `viikko7/myapp`) with `npm start` or `DEBUG=myapp:* npm start`.
- Use Postman to send JSON bodies to the POST/PUT endpoints and check responses for GET/DELETE.

Note: The app's `database.js` will create `book` and `borrower` tables if they do not already exist. Other tables (`opiskelija`, `opintojakso`, `arviointi`) are managed by the secondary DB module used by those models; ensure your `database2.js` / environment variables are configured accordingly.
