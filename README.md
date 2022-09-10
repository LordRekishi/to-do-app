# To-do App demo

This is a very simple demo to compare Options API with the newer Compositions API. 
Practice for one of my courses at IT-Högskolan, Gothenburg.

### Features

1. Change between the `Options API` and the `Compositions API` router views with the buttons on top of the page
2. The input for new To-do have a `watcher` to `check for swearwords` ("fart", "butt hair", "willy") and will give an alert if these are entered
3. The `h1 title` on to of the input will `update using a computed call` to calculate the todo array's length

### How to use

1. Clone this repository and open with your favorite IDE
2. Go to `/to-do-app` root directory
   1. First run this command: `npm install`
   2. Then run this command: `npm run dev`
   3. CTRL click the localhost address generated
3. `Add new` To-do by `entering a name` in the input field and `press Enter`
4. `Remove` a To-do by `clicking the X button` next to it
