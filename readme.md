# Entertainment App

The Entertainment App is a full-stack application designed to provide users with access to a vast collection of movies and TV shows, leveraging the TMDB API for fetching media details. It features user authentication, media exploration, and personal bookmarks, offering a comprehensive and personalized media browsing experience.I'm using a VPN to access this website because, in some parts of India, the TMDb API requires a VPN for proper functionality.

## Deployment

- **Frontend:** :- https://entertainment-app-seven.vercel.app/
- **Backend:** :- https://entertainment-app-backend-dgfo.onrender.com

## Important Links

- API Documentation : https://documenter.getpostman.com/view/21317055/2sA3rzLYp9
- Video Explanation: https://drive.google.com/file/d/1DMFSXa3a6qKOty1l6DwJHXfkEvV5ZzI1/view?usp=sharing
- Database Design: [Google Docs Link](https://docs.google.com/document/d/1gioKXju1L94lS_3_knWIMR6thbH7YUL5JWqKYxm1igY/edit?usp=sharing)
- Best Practices : [Google Docs Link](https://docs.google.com/document/d/1HgLKrQlIfHjmAn7uQ_mAIK0DFGnPRlZwH8Gfpv15n9E/edit?usp=sharing)


## Features

- **User Authentication:** Utilizes JWT for secure login and registration, ensuring user data protection.
- **Media Exploration:** Allows users to discover trending movies and TV shows, with detailed views available for each media item.
- **Bookmarks:** Enables users to bookmark their favorite media, creating a personalized list of favorites accessible at any time.
- **Detailed Media Information:** Provides in-depth details about movies and TV shows, including cast, genres, ratings, and more.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB instance (local or remote)
- TMDB API key for fetching media data

## Getting Started For Backend

### Backend Setup

1.  **Clone the Repository:** Start by cloning the Entertainment App repository to your local machine.

    ```sh
    git clone https://github.com/yourusername/entertainment-app.git
    ```

2.  **Navigate to the Backend Directory:** Move into the backend directory of the project.

    ```sh
    cd entertainment-web-app/backend
    ```

3.  **Install Dependencies:** Install the necessary dependencies using npm.

    ```sh
    npm install
    ```

4.  **Configure Environment Variables:** Create a `.env` file based on the provided `.env.example` file. Provide your MongoDB URI and TMDB API key in the `.env` file.

    ```
    MONGODB_URL= "Mongodb connection string our url "
    TOKEN= "Secret token for authentication & cookies"
    TMDB_KEY="TMDB api key "
    FRONTEND_URL="Frontend url"
    ```

5.  **Start the Server:** Run the backend server.

    ```sh
    node index.js
    ```

6.  **Verify Backend Setup:** Confirm that the backend server is running without any errors.

### Backned Technologies
- Node js 
- Express js
- jsonwebtoken
- bcrypt
- MongoDB 
- Mongoose 
- dotenv
- cors
- cookie-parser

### Backend Project Structure

- **Constant:** Contains TMDB api end points
- **Controllers:** Contains logic for handling API requests.
- **Middleware:** Includes middleware for authentication.
- **Models:** Defines the schema for database collections.
- **Routes:** API routes for handling requests to different endpoints.
- **Utils:** Containers Helper Function to fetch media & to generate cookie.

<pre>
|-- src
    |-- constants 
        |-- media.constant.js
    |-- controllers
        |-- bookmark.controllers.js 
        |-- media.controllers.js 
        |-- mediaDetail.controllers.js 
        |-- mediaImage.controllers.js 
        |-- mediaSearch.controllers.js 
        |-- user.controller.js
    |-- middleware
        |-- auth.js 
    |-- models 
        |-- bookmark.models.js 
        |-- user.models.js 
    |-- routes 
        |-- bookmark.routes.js 
        |-- media.routes.js 
        |-- user.routes.js 
    |-- utils
        |-- media.utils.js 
        |-- user.utils.js 
    |-- app.js 
|-- .env
|-- .gitignore
|-- index.js
|-- package.json
|-- package-lock.json
</pre>

## Getting Started For Frontend

### Frontend Setup

1. **Navigate to the Frontend Directory:** Move into the frontend directory of the project.

   ```sh
   cd entertainment-web-app/frontend
   ```

2. **Install Dependencies:** Install the necessary dependencies using npm.

   ```sh
   npm install
   ```

3. **Configure Base Url or API end points :** This is our api endpoins, comming from backend

   ```
   const baseUrl = "Enter Your own backend api endpoints",
   ```

4. **Start the Application:** Run the frontend application.

   ```sh
   npm run dev
   ```

5. **Access the Application:** Open your web browser and navigate to the specified URL (default: http://localhost:5173) to access the Entertainment App.

### Frontend Technologies 

- Vite
- Npm
- HTML
- CSS
- Tailwind CSS
- React.js
- React Query
- Javascript
- Context API
- React hook form
- React Loader Spinner

### Frontend Project Structure

- **Assets:** Contains dummy image .
- **Components:** Reusable components code .
- **Context:** State mangement accross applicaton for authenticatin & bookmark.
- **Pages:** Five main pages, Home, Movie, Tv, Bookmark, Profile.
- **Utils:** Contains baseUrl of api & function to fetch media

<pre>
|-- src
    |-- assets 
    |-- components
        |-- AuthComponents 
            |-- Login.jsx 
            |-- Register.jsx 
        |-- CssComponents
            |-- Loading.jsx
            |-- NavbarMenu.jsx
            |-- Toast.jsx
        |-- FallbackComponents
            |-- fallbackData.jsx
            |-- FallbackMedia.jsx
        |-- HomeMedia
            |-- MediaRecommend.jsx
            |-- MediaTrending.jsx
        |-- MediaComponents
            |-- Media.jsx
            |-- MediaBookmark.jsx
            |-- MediaBookmarked.jsx 
            |-- MediaImage.jsx
            |-- MediaInfo.jsx
            |-- MediaPlay.jsx
        |-- MediaDetails
            |-- Details.jsx
            |-- MediaCast.jsx
            |-- MediaGenre.jsx 
            |-- MediaHeading.jsx
            |-- MediaImage.jsx
            |-- MediaInfo.jsx
            |-- MediaLink.jsx
            |-- MediaRatings.jsx
            |-- MediaSynopsis.jsx
        |-- Error404.jsx
        |-- Header.jsx
        |-- MoreMedia.jsx
        |-- SearchBar.jsx
        |-- SearchResult.jsx
    |-- context
        |-- MyContext.js
        |-- MyState.js  
    |-- pages
        |-- Bookmarks.jsx 
        |-- Home.jsx 
        |-- Movie.jsx 
        |-- Tv.jsx  
    |-- service
        |-- user.service.jsx   
    |-- utils 
        |-- baseUrl.js 
        |-- cookieAction.utils.js
        |-- fetchMultiMedia.js
    |-- App.jsx 
    |-- main.jsx 
|-- .eslintrc.cjs
|--.gitignore
|-- index.css 
|-- index.html
|-- package.json
|-- package-lock.json
|-- postcss.config.js
|-- tailwind.cofig.js
|-- vite.config.js 
</pre>

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.


## Thank You 
