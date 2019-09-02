# Contact Keeper

Full stack(client & server) application to manage contacts.

Stack: 

-  React, React Hooks, Context
-  JWT authentication
-  Node.js, Express.js, REST API
-  MongoDB
-  styled-components, Semantic UI

Deliverables:
- A React SPA with user authentication and CRUD that interacts with custom RESTful API 
- All contact endpoints are protected and each registered user has their own contacts
- User can create, read, update and delete data in a NoSQL database

Hosted on Heroku: [https://alun-contact-keeper.herokuapp.com](https://alun-contact-keeper.herokuapp.com)

*Please note that the app is connected to a free cloud database on MongoDB so the content may show up slow sometime.*

## Install dependencies

```bash
npm install
npm client-install
```

### Running locally

```bash
npm run dev     # both Client:3000 and Server:5000
npm run server  # http://localhost:5000
npm run client  # http://localhost:3000
```

## Mongo connection and JWT

The MongoDB URI and jwtSecret has been set temporarily in /config/default.json file to ensure a proper demo of this project running on client and will be removed later.

You can also open the config/default.json file and add your onw mongoURI and jwtSecret.

## API Usage & Endpoints

### Register a User [POST /api/users]

- Request: Add user and request JSON web token

  - Headers

        Content-type: application/json

  - Body

            {
              "name": "",
              "email": "",
              "password": ""
            }

- Response: 200 (application/json)

  - Body

          {
            "token": ""
          }

### Login with a User [POST /api/auth]

- Request: Login with credentials to receive a JSON web token

  - Headers

        Content-type: application/json

  - Body

            {
              "email": "",
              "password": ""
            }

- Response: 200 (application/json)

  - Body

          {
            "token": ""
          }

### Get Contacts [GET /api/contacts]

- Request: Get all contacts of a specific user

  - Headers

        x-auth-token: YOURJWT

* Response: 200 (application/json)

  - Body

          {
            "contacts": []
          }

### Add New Contact [POST /api/contacts]

- Request: Add a new contact

  - Headers

        x-auth-token: YOURJWT
        Content-type: application/json

  - Body

            {
              "name": "",
              "email": "",
              "phone": "",
              "type": "" [personal or professional]
            }

- Response: 200 (application/json)

  - Body

          {
            "contact": {}
          }

### Update Contact [PUT /api/contacts/:id]

- Request: Update existing contact

  - Parameters

    - id: 1 (number) - An unique identifier of the contact.

  - Headers

        x-auth-token: YOURJWT
        Content-type: application/json

  - Body

            {
              "name": "",
              "email": "",
              "phone": "",
              "type": "" [personal or professional]
            }

- Response: 200 (application/json)

  - Body

          {
            "contact": {}
          }

### Delete Contact [DELETE /api/contacts/:id]

- Request: Delete existing contact

  - Parameters

    - id: 1 (number) - An unique identifier of the contact.

  - Headers

        x-auth-token: YOURJWT

* Response: 200 (application/json)

  - Body

          {
            "msg": "Contact removed"
          }

#### Author
ChaoYIN, yinchao428@hotmail.com
