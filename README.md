
# Split & Share

<br>

## Description

Tired of paying extortionate prices for shared flats? Tired of getting scammed by rental moguls who overcharge you for tiny rooms? Find your tribe: pair up with people in the same situation and find your dream home together!

This app will help you find your dream flatmate, and your dream home. Use it to find your perfect flatmate, your perfect place to live, and use it to start chatting with your future flatmate and future landlord right away. 

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Homepage:** As an anon/user can calculate the fair price of the rooms in a shared flat, as well as being assigned to one of the rooms according to their preferences and budget
-  **Signup:** As an anon I can sign up in the platform, either as a flat hunter, either as a flat owner
-  **Login:** As a user I can login to the platform 
-  **Logout:** As a user I can logout from the platform
-  **Dashboard / Flat Hunter:** As a flat hunter user, I can have access to my dashboard in order to improve my profile, check my messages, find the ideal flatmate, check the flatmates that I have saved as favorites, find the ideal flat or access my favorite flats
-  **Improve my profile / Flat Hunter:** As a user I can edit my profile
-  **Ideal Flatmates / Flat Hunter:** As a user I can search for flatmates. In this page, the platform shows us perfect flatmate matches according to our profile but also a list of potential flatmates looking for flat in the same area
-  **Check flatmates' profile / Flat Hunter:** As a user I cam see the flatmates' profile
-  **Ideal flats / Flat Hunter:** As a user I can search for flats. In this page, the platform shows us perfect flat matches according to our profile but also a list of other flats in the same area
-  **Flat Details:** As a user I can see the details of the flat
-  **Dashboard / Flat Owner:** As a flat owner, I can add my flat, check my listings and my messages
-  **Add my flat / Flat Owner:** As a flat owner, I can add my flat details
-  **Edit my flat / Flat Owner:** As a flat owner, I can edit my flat
-  **Check my listings/ Flat Owner:** As a flat owner, I can check my listings




## Backlog

-  **Homepage:** Add additional filters in order to calculate the price based on whether the room has a bathroom or a balcony
-  **Signup: / Login:** Add social media login and signup


<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component            | Permissions                 | Behavior                                                     |
| ------------------------- | -------------------- | --------------------------- | ------------------------------------------------------------ |
| `/`                       | HomePage             | public `<Route>`            | Home page                                                    |
| `/signup`                 | SignupPage           | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to respective dashboard after signup |
| `/login`                  | LoginPage            | anon only `<AnonRoute>`     | Login form, link to signup, navigate to respective dashboard after login |
| `/dashboardFlatHunter`    | DashboardFlatHunter  | user only `<PrivateRoute>`  | Shows the options of improving user's profile, messages, flatmate and flat search and flats/flatmates marked as favorite                              |
| `/improveMyProfile`       | ImproveMyProfile     | user only `<PrivateRoute>`  | Edits flat hunter's profile                                   |
| `/idealFlatmates`         | IdealFlatmates       | user only `<PrivateRoute>`  | Shows the ideal flatmates' matches according to the flat hunter's preferences. Shows also other potential flatmates looking for a flat in the same area                          |
| `/idealFlatmates/:id`     | IdealFlatmatesProfile| user only `<PrivateRoute>`  | Shows the profile of the potential flatmate selected        |
| `/idealFlats`             | IdealFlats           | user only  `<PrivateRoute>` | Shows the ideal flats' matches according to the flat hunter's preferences. Shows also other flats in the same area                               |
| `/idealFlats/:id`         | IdealFlatsDetail     | user only `<PrivateRoute>`  | Shows the details of the flat selected                       |
| `/dashboardFlatOwner`     | DashboardFlatOwner   | user only `<PrivateRoute>`  | Shows the options of adding a flat, checking the listings and messages                                 |
| `/addMyFlat`              | AddMyFlat            | user only  `<PrivateRoute>` | Adds a new flat                                              |
| `/myListings`             | MyListings           | user only  `<PrivateRoute>` | Shows the listings of the flat owner                         |
| `/myListings/edit/:id`    | EditListing          | user only `<PrivateRoute>`  | Edits the listing                                            |





## Components

- HomePage

- LoginPage

- SignupPage

- DashboardFlatHunter

- ImproveMyProfile

- IdealFlatmates

- IdealFlatmatesProfile

- IdealFlats

- IdealFlatsDetail

- DashboardFlatOwner

- AddMyFlat

- MyListings

- EditListing

- Navbar


  

 

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous



<br>

## Wireframes

https://drive.google.com/file/d/16gvGI8caHcQDYwVe4zCJ_kYg1vrxoBkb/view?usp=sharing

<br>

# Server / Backend


## Models

User model

```javascript
{
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  image: {type: String},
  userType: { type: String,  enum : ['Flat Hunter','Flat Owner '] },
  gender: { type: String,  enum : ['female','male', 'other'],  default: 'other' },
  hasPet: Boolean,
  isSmoking: Boolean,
  isStudying: Boolean,
  isWorking: Boolean,
  age: Number,
  maxBudget: Number,
  searchingFor: { Flatmates : Number,
                  gender: { type: String,  enum : ['female','male', 'indifferent'],  default: 'indifferent' },
                  pets: { type: String,  enum : ['I don`t want','I don`t mind'] },
                  location: String,
                  minAge: Number,
                  maxAge: Number
  },
   favoriteFlats: [{type: Schema.Types.ObjectId, ref:'Flat'}]
   favoriteFlatmate: [{type: Schema.Types.ObjectId, ref:'User'}]
}
```




Flat model

```javascript
 {
  title: {type: String, required: true, unique: true},
  description: {type: String, required: true, unique: true},
  images : [{type: String}],
  price: Number,
  contact: String,
  rooms: Number,
  restrooms: Number,
  neighborhood: String,
  aircondition: Boolean,
  elevator: Boolean,
  balcony: Boolean,
  parking: Boolean,
  address: String,
  centralHeating: Boolean,
  squareMeters: Number,
  furnished: Boolean,
  terrace: Boolean,
  swimmingPool: Boolean,
  storeRoom: Boolean,
  builtinWardrobes: Boolean
 }
```

Message model

```javascript
{
    fromUser: [{type: Schema.Types.ObjectId, ref:'User'}],
    toUser: [{type: Schema.Types.ObjectId, ref:'User'}],
    isRead: Boolean,
    message: String,
      {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
};
```



<br>


## API Endpoints (backend routes)

| HTTP Method | URL                           | Request Body                 |  Description                                                  |
| ----------- | ---------------------------   | ---------------------------- | ------------------------------------------------------------- |
| GET         | `/  `                         |                              | Home page                                                    |
| POST        | `/auth/signup`                | {name, email, password}      |  Checks if fields not empty and user not exists, then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | Checks if fields not empty, if user exists, and if password matches, then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | Logs out the user                                            |
| GET         | `/dashboardFlatHunter`        |                              | Shows the flat hunter's dashboard                            |
| POST        | `/improveMyProfile`           | {gender, hasPet, isSmoking, isStudying, isWorking, age, maxBudget, searchingFor}            |    edits flat hunter's profile 
| GET         | `/improveMyProfile`           |                              |    Shows the editing form of the flat hunter's profile       |
| GET         | `/idealFlatmates`             |                              | Shows the ideal flatmates page                               |
| GET         | `/idealFlatmates/:id`         | {name,img,players}           | Shows the profile of the flatmate selected                   |
| GET         | `/idealFlats`                 |                              | Shows the ideal flats page                                   |
| GET         | `/idealFlats/:id`             |                              | Shows the details of the flat selected                       |
| GET         | `/dashboardFlatOwner`         | {id}                         | Shows the flat owner's dashboard                             |
| POST        | `/addMyFlat`                  | {title,description,images, price, contact, rooms, restrooms, neighborhood, aircondition, elevator, balcony, parking, address, centralHeating, squareMeters, furnished,  terrace, swimmingPool, storeRoom, builtinWardrobes     }      | Adds a new flat                                              |
| GET         | `/addMyFlat`                  |                              | Shows the add my flat page                                   |
| GET         | `/myListings`                 |                              | Shows the my listings page                                   |
| POST        | `/myListings/edit/:id`        | {gender, hasPet, isSmoking, isStudying, isWorking, age, maxBudget, searchingFor} | Edits the flat details                                                    |

<br>


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/nTn3UY0B/proyectomodulo3) 

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/RaizaEscobar/splitandshare-frontend)

[Server repository Link](https://github.com/RaizaEscobar/SplitandShare-Backend)

[Deployed App Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)







