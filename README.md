## **Backend for @news-api**

This is a service where you can find news on demand and save it in your account. <br />
Backend part. <br />

Frontend is <a href="https://github.com/ieffai/news-explorer-frontend" target="_blank">**here**</a>.

### Local Deploy

Install all dependencies, in repo's root:

```

$ npm install

```

And build development version:

```

$ npm run dev

```

- **Used technologies**

  - REST API
  - node.js, express
  - Webpack
  - MONGO, mongoose

## Methods

- **POST**

  - **URL Params:** /signup
  - **Data Params:** `{ "email":"", "password":"", "name":"" }`
  - **Success Response:**
    - **Code:** 201 <br />
      **Content:** `{ "email":"", "name":"" }`
  - **Error Response:**
    - **Code:** 400 BAD REQUEST | 409 CONFLICT <br />
      **Content:** `{ "message": "depends on error" }`

- **POST**

  - **URL Params** /signin
  - **Data Params** `{ "email":"", "name":"" }`
  - **Success Response:**
    - **Code:** 200 <br />
      **Content:** `{ "message":"Hello, UserName" }`
  - **Error Response:**
    - **Code:** 400 BAD REQUEST | 401 UNAUTHORIZED <br />
      **Content:** `{ "message": "depends on error" }`

- **GET**

  - **URL Params** /users/me
  - **Success Response:**
    - **Code:** 200 <br />
      **Content:** `{ "user": { "_id": "", "email": "", "name": "", "__v": 0 } }`
  - **Error Response:**
    - **Code:** 401 UNAUTHORIZED <br />
      **Content:** `{ "message": "" }`

- **GET**

  - **URL Params** /articles
  - **Success Response:**
    - **Code:** 200 <br />
      **Content:** `{ "data": [] }`
  - **Error Response:**
    - **Code:** 401 UNAUTHORIZED <br />
      **Content:** `{ "message": "" }`

- **POST**

  - **URL Params** /articles
  - **Data Params** `{ "keyword": "", "title": "", "text": "", "date": "", "source": "", "link": "", "image": "" }`
    **Success Response:**
    - **Code:** 201 <br />
      **Content:** `{ "keyword": "", "title": "", "text": "", "date": "", "source": "", "link": "", "image": "" }`
  - **Error Response:**
    - **Code:** 400 BAD REQUEST <br />
      **Content:** `{ "message": "" }`

- **DELETE**
  - **URL Params** /articles/articleId
  - **Success Response:**
    - **Code:** 200 <br />
      **Content:** `{ "message": "" }`
  - **Error Response:**
    - **Code:** 400 BAD REQUEST | 403 FORBIDDEN | 404 NOT FOUND <br />
    - **Content:** `{ "message": "" }`

**For suggestions and errors:**
4923920@gmail.com
