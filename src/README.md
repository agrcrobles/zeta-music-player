## Configuration Steps 

* Created react app
Configured basic configuration for eslint eslint-prettier babel-eslint
TODO: See to improve VSCode settings and add a11y plugin preferences

* Configured redux store in App.js

## Layout

* Configured styled-components in App.js

* Import images, default import didn't work from scratch.
TODO: It's necessary to double check or edit the content/encondig of the svg files, or figure another way to import it, I would't rather not to spend to much time on this now.

TLDR: Used images as png/based64.

TODO: Improve image experience in the track list by implementing srcset and size attributes.

See

https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

## CSS Units

* Used margins in rem

* Colors in hex in styled-components theme

* FontSize in pixels ( TODO: Add to the theme maybe? )

* Create styled-components default theme and get colors from png.
I hope creating the theme is not bringing to much overhead when doing unit test. 
TLDR: It didn't styled-component is awesome.

* Add eskeloton to the greenfield project and run simple unit test with testing-library ( on Header.js )

* Some layout styles ( including input )

* Add and Configure react router to handle "empty" and "result" state from "search" page and "player" page
That was really fast, but added some overhead to the unit tests.

## API

> TLDR; Successfully Implemented by `fetch-jsonp`

* Add saga fetch/api to fetch from apple store

The apple.itunes api is not working at the first attemp when doing the api call/request with no headers.

Issue with the usage to the fetch api due to cors, looks like fetch request mode no-cors is not straigh forward neither. 

Trying to recreate the issue using postman / See CORS handshaking

> Access to fetch at 'https://itunes.apple.com/search?term=jack+johnson' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

It's still tricky, either keep investigating about content-disposition: attachment header.Accept": "text/csv" or figure about the possibility of authenticating it.

TODO: Improve error handler when API fails. No real scenario found in terms of records. ( other than cors )

* Designed the Result Grid based upon the response of the api.

* Created Unit test and some snapshot tests for the Song Grid and Empty State and added redux to test unit.

* Implement saga and action creator when click on track name to navigate from the Search Result to the player page

* The payload is pretty much as expected, still unusure about the field to be used to show the image in the list.

* Add more tests

* Created Player page units tests and HTML 5 audio 

* Created Prev and Next button action
 
* Add order to the search list

* Some tweaks and clean up

* Deploy on now

## Debounce text input when searching

Unsure about adding lodash because the bundle/chunk size.

So I got "borrowed" and implemented a simple one.

See https://gist.github.com/agrcrobles/c7db52372c5d232c5046600cb81cee82
