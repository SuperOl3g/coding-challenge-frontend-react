# Stolen Bike Index - JOIN Coding Challenge - Frontend (React)

![JOIN Stolen Bike Cases](https://github.com/join-com/coding-challenge-frontend-react/raw/master/illustration.png)

**Demo**: https://superol3g.github.io/coding-challenge-frontend-react/

## Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in the development mode.
- `npm test` - Launches the test runner in the interactive watch mode.<br>

## Used technologies:

- Typescript
- React
- React Router
- Redux
- Emotion
- Ant Design UI Kit
- Prettier + ESLint

## Extra features:

- Paginating and filtering have been realized without extra API request because anyway we have to get all items to get a total count of it. Fortunately, it works pretty faster (excluding initial loading).
- The most important parts of app State (filter, search page) are kept in URL

## Detected API limitations:

- There is no possibility to get reports date (only date of the last update)
- API can't give a location by incident id. It requires to get location by title or occurred_at fields, which must be previously requested (which means an extra delay in some cases)
- Not every incident has a location data (so I placed the map after the description to prevent content jumping on loading)
There is no API method to get a total count of incidents so we just have to load them all (not too awful for this size of data)
