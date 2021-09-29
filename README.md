# LAP 1 Code Challenge

## Installation & Usage

### Installation
- Clone or fork this repo.
- Navigate to the local repository folder.
- Use `npm install` to install Node dependencies.

### Usage
- Visit https://cse.google.com/cse/all to create a new search engine.
- Visit https://developers.google.com/custom-search/v1/overview to generate an API key.
- Paste your API key in a file named `.env`.
- In `server.js` change the value after `&cx=` to your search engine ID.
- Navigate to the `server` folder and run `node server.js`.
- Open `index.html` in your browser.

## Bugs
- Result styling seems to change for some searches.
- Results aren't always relevant.

## Future Features
- Add image/video/news etc. fetch functionality.

## Wins & Challenges

### Wins
- Google API connected and functional.
- Styling for homepage replicates Google.
- Server functional and allows a client to connect and retrieve data.
- 'I'm Feeling Lucky' navigates the user to a random page.

### Challenges
- Styling of the Google logo and search box needs to be changed so it is smaller after results are displayed.
- Tried to use `Axios` library to fetch data from the server, however we were unsuccessful. This was resolved using `fetch`.
- Finding a way to include the API key in the Google API fetch request while maintaining security.
