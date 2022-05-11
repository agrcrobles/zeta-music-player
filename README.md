# zeta-music-player

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To implement Zeta Music Player you will need to use the iTunes Search API.
Go directly to "Search Examples" section, and verify that you only need to use a
call ​https://itunes.apple.com/search?term=john+lennon to

## Stack

The web app uses react redux, sagas and selectors as suggested.
As it is also suggested, it is designed to navigate among the screens using react-router library.

Also considered the HTML accessibility, I just followed some basic good practices, but I am aware that semantics/a11y might be improved ie. for SEO.

TODO Performance improvement: reselect to memoized selectors

## Unit tests

```
 PASS  src/header/SearchBar.test.js
 PASS  src/search/Song.test.js
 PASS  src/search/SongsGrid.test.js
 PASS  src/utils/dates.test.js
 PASS  src/player/ShareBar.test.js
 PASS  src/search/EmptySearch.test.js
 PASS  src/player/AudioPlayer.test.js

Test Suites: 7 passed, 7 total
Tests:       9 passed, 9 total
Snapshots:   9 passed, 9 total
Time:        5.198s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
Done in 46.80s.
```

For doing the unit tests it uses jest and testing-library since they are included by default on the CRA project.

I included a simple fixture in __fixtures__ root folder as an starting point to provide unit tests that makes some sense.

Unit tests have been created for the routes such as the SongGrid, EmptySearch, or some for the Player Component and for the Search Bar, looking forward to validating some basic behaviors such as:

* Fire onChange event on input on the Search Bar component
* Fire onClick event on a given track on the Song component
* Fire the button event on the Audio player when as a user I play the selected track.
* Fire the button event on the Share Bar when as a user I click on twitter share button.
* TBD

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Layout

* The layout providen was taking as an initial design but found some core considerations are missing in terms of how it should behave on small/big viewports.

* FontSize, margins and Colors are not pixel perfect, it is just a simple and consistent implementation based upon the providen design.

* Create styled-components default theme and get colors from png.

FontFamily is the default one on CRA. For more information see `index.css`

## Currency

The API result provides USD based songs, not sure if it is necessary a service to know the rates and convert from USD to EUR.

Dollar Symbol `$` is hardcoded inline on the grid, since itunes api returns the track amount on american dollars.

## API

* API Request successfully done. More information about challenges while development see README.md on src folder.

TODO: Descending sorting on result grid ( it was not request though ).

## Player

* The player plays and pauses the selected song and the requested song info is properly displayed.

* The player stops when performing a new search

* The player moves forward to the next track when possible.

* The player moves backwards to the previous track when as a user I click on the back button.

* Previous Track Button disabled on the first element of the track list. 
* Next/Fwd Track Button disabled on the last element of the track list.

* TODO: UX Add to the player the ability of continuously play without stopping or the need to "click on play over again" while moving forward and backwards among songs.

## Share

Twitter share button has been successfully implemented and the unit test created.

## Assets

Assets are successfully loaded along the pages as following the design.

See challenges related to the assets on src/README.md file

## Safari / IE Support

Design was implemented to be working on chrome. For Safari it needs to be reviewed.

## Mobile Support

It was not originally requested and it's unsupported as of now.

## Elapsed Time

Total Time Spent: 21hs

Day 1: Time Spent 5h
Day 2: Time Spent 6h
Day 3: Time Spent 8h
Day 4: Time Spent 2h

## License

MIT
