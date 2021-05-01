**Backend for @news-api**
----
This is a service where you can find news on demand and save it in your account.
Backend part.
 
*latest ver. v 0.1.1*

* **Used technologies**

  - REST API
  - node.js, express 
  - Webpack
  - MONGO, mongoose

* **Links**

  http://api.olehadash.xyz/ <br />
  https://api.olehadash.xyz/ <br />
  http://www.api.olehadash.xyz/ <br />
  https://www.api.olehadash.xyz/

* **Local deploy**

  1. Clone repository
  2. Install official node.js from here https://nodejs.org/en/
  3. npm i install
  4. npm run start || npm run dev (hot reload)

* **Method:**          `POST` 
  * **URL Params:**    /signup
  * **Data Params:**   `{ "email":"", "password":"", "name":"" }`
  * **Success Response:**
    * **Code:**        201 <br />
      **Content:**     `{ "email":"", "name":"" }` 
  * **Error Response:**
    * **Code:**        400 BAD REQUEST | 409 CONFLICT  <br />
      **Content:**     `{ "message": "depends on error" }`

* **Method:**          `POST`
  * **URL Params**     /signin
  * **Data Params**    `{ "email":"", "name":"" }`
  * **Success Response:**
    * **Code:**        200 <br />
      **Content:**     `{ "message":"Hello, UserName" }`
  * **Error Response:**
    * **Code:**        400 BAD REQUEST | 401 UNAUTHORIZED  <br />
      **Content:**     `{ "message": "depends on error" }`

* **Method:**          `GET`
  * **URL Params**     /users/me
  * **Success Response:**
    * **Code:**        200 <br />
      **Content:**     `{ "user": { "_id": "", "email": "", "name": "", "__v": 0 } }`
  * **Error Response:**
    * **Code:**        401 UNAUTHORIZED  <br />
      **Content:**     `{ "message": "" }`

* **Method:**          `GET`
  * **URL Params**     /articles
  * **Success Response:**
    * **Code:**        200 <br />
      **Content:**     `{ "data": [] }`
  * **Error Response:**
    * **Code:**        401 UNAUTHORIZED  <br />
      **Content:**     `{ "message": "" }` 

* **Method:**          `POST`
  * **URL Params**     /articles
  * **Data Params**    `{ "keyword": "", "title": "", "text": "", "date": "", "source": "", "link": "", "image": "" }`
   **Success Response:**
    * **Code:**        201 <br />
      **Content:**     `{ "keyword": "", "title": "", "text": "", "date": "", "source": "", "link": "", "image": "" }`
  * **Error Response:**
    * **Code:**        400 BAD REQUEST <br />
      **Content:**     `{ "message": "" }`

* **Method:**          `DELETE`
  * **URL Params**     /articles/articleId
  * **Success Response:**
    * **Code:**        200 <br />
      **Content:**     `{ "message": "" }`
  * **Error Response:**
    * **Code:**        400 BAD REQUEST | 403 FORBIDDEN | 404 NOT FOUND  <br />
    * **Content:**      `{ "message": "" }`

**For suggestions and errors:**
  4923920@gmail.com
