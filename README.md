# Wanderlust Backend

## Server and Database

### To run locally:

Use npm install to install dependencies. (_**npm run start**_)

The default port is 3000.

## Contents

**Tables**
[Users](#Users) |
[Trips](#Trips)

**Endpoints**
[Users](#users-1) |
[Trips](#trips) |
[Accounts](#accounts) |

# Schemata

### Users    

There are three kinds of users, 'guide', 'tourist' and admin. A guide has access to the full CRUD functionality for all tripRoutes; a user has read-only access, except for their own account information. Admin has access to all routes. All fields are required:

-   Each user has a unique, auto-incremented id. This is done for you.

-   A **_username_** has maximum length of 255 characters, and must be unique.

-   **_Password_** also has maximum length of 255 characters.

-   The user's **_name_**  has a maximum length 255 characters.

-   The user's **_role_** must be specified as either 'guide' or 'tourist'.

-   The user's **_email_**  can be up to 255 characters.

-   A user **_phone_**  is also required, having a maximum length of 128 characters.

_Example of a User row:_

| id  | username |  password  |       name      |   role    | email                |    phone     |
| --- | -------- | ---------- | --------------- | --------- | -------------------- | ------------ |
| 133 |  dgarcia | _password_ | Dietrich Garcia |   user    | dgarcia@fakemail.com | 555-555-5555 |

---

### Trips

The fields for trips give the registered guides flexibility so they can tailor descriptions to suit their own needs. As with the users, all fields are required.

-   Each has a unique id that auto-increments. This is done for you.

-   The trip **_location_** must be unique, and has a maximum length of 255 characters.

-   The **_quantity_** refers to how many units of time, e.g. if a trip is 3 days, then **_quantity_** would hold the 3, and the next field, **_units_** would hold 'days'. Quantity defaults to 0.

-   **_unit_** refers to the time-unit of a trip's duration. This is 100% flexible, but a front-end implementation might include a drop-down with 'hours', 'days', 'weeks', etc, and then get that value and include it in the body of the request. This field has a maximum of 255 characters.

-   The **_trip_type_** has a maximum of 255 characters, and can be specified by the person creating the trip.

-   The **_service_type_** refers to whether the trip is 'private' or 'professional'. Like **_unit_**, this is actually 100% flexible, but the project description limits the options to 'private' or 'professional'. so this can be done from the front end.

-   The **_user_id_** is the id of the guide providing the experience/trip.


_Example of a Trip Row:_

| id  |    location   | quantity |    unit   |  trip_type  | service_type |
| --- | ------------- | ---------| --------- | ----------- | ------------ |
| 3   | New York City |     4    |    hours  | guided tour | professional |
---

[^Back to Top^](#wanderlust-backend)

# **App Endpoints**

## Trips

### /api/Trips

#### GET

A successful GET request gives HTTP code of 200 and returns an array with a list of all trips as JSON objects.

#### POST

The request body must include all fields:

```javascript
{
	location:  "Grand Canyon", //required
	quantity:  1,
	units:  "day",
  trip_type: "sightseeing",
  service_type: "professional",
  user_id: 38
},
```

Success: Returns a status of 201 and a JSON object with a success message and the id number of the new item. A user must be registered as a 'guide' to access this endpoint.

---

### /api/trips/_{id}_

#### GET

A successful GET request to this endpoint returns a JSON object with the id specified and status 200. Both roles may access this endpoint.

#### PUT

The request body must contain the information needed to update the trip object. A user must be a 'guide' to access this endpoint.

Success: Returns a status of 201 and a JSON object with a success message and the count of updated items.

#### DELETE

This permanently removes the trip from the database. You may want to give the logged-in guide an opportunity to confirm before finalizing the request to this endpoint. A successful DELETE request to the endpoint returns a status 201 and a message that the trip was deleted.

### /api/trips/byGuide/_{id}_


### GET

This route takes the id of a guide and returns all trips provided by that guide.

---

[^Back to Top^]()

## Users

### /api/users

#### GET

A successful GET request to the endpoint returns an array with all user objects with role 'user' in JSON format.



---

### /api/users/_{id}_

#### GET

Returns a JSON object with the corresponding 'tourist'. User must be logged in to access.

```javascript
{
    "id": 4,
    "username": "bmaverick",
    "name": "Bret Maverick",
    "role": "tourist",
    "email": "bm1872@zmail.com",
    "phone": "3388976777"
}
```

Success: Returns a status of 200 and a JSON object containing the requested user.

#### PUT

The request body must contain the information needed to update the user object. A user must be logged in to access this endpoint, which allows them to update their account information.

Success: Returns a status of 201 and a JSON object with a success message and the count of updated items.

#### DELETE

This permanently removes the user from the database. You may want to give the logged-in user an opportunity to confirm before finalizing the request to this endpoint. A successful DELETE request to the endpoint returns a status 201 and a message that the account was deleted.

---

[^Back to Top^](#wanderlust-backend)

## Accounts

### /api/accounts/   

#### GET  

Brings up a list of all tourists, complete with passwords

### /api/accounts/:id

#### GET   

Brings up the complete profile (i.e., including password) of the tourist with the specified id. Maybe useful for (for example) letting tourist change password.

### /api/account/guides   


#### GET

Brings up a list of all guides, complete with their passwords

### /api/account/guides/:id


#### GET

Brings up a complete profile of the guide with the specified id. Maybe useful for (for example) letting guide change password.


### /api/accounts/register

#### POST

The username

```javascript
{
	username:  "",
	password:  "",
	name:  "",
	role:  "",
	email:  "",
	phone:  "",
}
```

Success: Returns a status of 201 and a JSON object with a success message and the id number of the new user.

---

### /api/accounts/login

#### POST

The request body must include a unique username and a password matching what is on the database. Returns a success message and a token which is required to pass to be able access restricted routes.

```javascript
{
	username:  "",
	password:  "",
	name:  "",
	role:  "",
	email:  "",
	phone:  "",
}
```


Success: Returns a status of 201 and a JSON object with the token.

---

[^Back to Top^](#wanderlust-backend)



```
