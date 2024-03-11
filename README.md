# Start the project

I have added React vite typescript application since its much faster and already configured to use.

Run  **npm i** to install all the dependencies.

Run  **npm start** to start the React 18 app.

<img width="1373" alt="Screenshot 2024-03-11 at 1 44 39 PM" src="https://github.com/sagarkatarias/contentful-hotel-list/assets/25650222/4093a4d3-fe98-42cb-9260-ac935aa08a75">


### Features

- I have used React Router to add routes to the app and Typescript for type checking
- I have used low-level UI components that don't mix representational and business-logic concerns.
- Buisness logic is inside the Context provider and I have used custom hook to fetch content from Contentful
- The custom hook cleanses the response from the API and I have modeled the response in such a way that I could directly use it inside my Functional components. 
- I have added environment variables, also pushed the .env file to Git just so that you dont have to add them yourself otherwise I would have added .env to .gitignore and created an example .env file for usage.
- I have not added much in the css files, its more or less the code from the vite install package, since I have used material UI Grid for all my stylings
- The buttons for show review and load hotels are only called once before refresh, just to avoid unnecessary calls to api and the modelled data is stored in the context. 
- We are basically fetching all reviews and maintaining a state called selectedHotelReviews which is just an array of the names of the hotels (since we dont have any id in the data, I am using hotel names as unique identifier in this data set, otherwise I would use Ids). I use this state to filter out the reviews of the selected hotel name on button click from the already fetched all Reviews.
- I used context API in general because there was alot of prop drilling happening since I have created components for each small container in the app. 
- The UI of a single Card is divided into 3 grid containers and each one is a separate component. The left image part, the right description of the hotel part, and the bottom which is a collapse review item. 
- I have imported SVG images since for this small project I didnt wanna add another icon library.
- I have not added any tests since that was not a requirement for this project otherwise I would definitely add unit tests for each component
- I didnt use  unicode symbols for ratings since material UI already has a component for it
- The aspect ratio of image is 4:3 by giving the image container a paddingBottom: '75%', and image a 100% height and absolute positioning
- I have given attention to details in the UI.
- I have made the design responsive for medium and small size screens 
