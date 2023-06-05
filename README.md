# online-library

## Project Description
This project was made to get practice with JavaScript objects and also get a chance to use more Flexbox + Grid in combination. This project is an online library,  known as "Your Local Online Library" but I like to call it "Your LOL". Here you can add books to your collection via a form, I tried to style the form to look like an old-school notepad. I enjoyed the project as it was a good way to get a lot JS practice with things I have little experience (classes) and things I feel comfortable with (basic DOM manipulation). I also enjoyed the creation/modification of HTML and CSS via JavaScript! It was nice to have "total" control of the webpage in one language. However this led to a some-what disorganized JS file... So yeah, it was nice to do but what did it cost? A lot of time scrolling through a file to find one tiny bit I need to modify. 

## Project Link
https://jhagg26.github.io/online-library/index.html

## Tech Stack

HTML

CSS

JavaScript

## Challenges Faced
Desinging
  * Before starting this project (in terms of coding) I wanted to create a nice elaborate library layout. When I went to draw some nice layout ideas I had none. So I went with a simple approach. It looks nice but it's nothing fancy. I like to code and challenge myself to recreate designs, designing from stratch is not my best skill.

JavaScript File Organization
  * At the current moment I put all of my JS in one file. It might not be the best, I know that because when I look at my own file I have to search for the particular region of code I want to work with. My current band-aid to this problem is comments. Going forward I will need to look into how properly organize JS files so that it isn't a chore to navigate the sea of code and find the bit I need.
  

## Known Issues
Form Validation
  * When submitting a form it validates input and refreshes the page but I don't want the page to refresh page as I want to keep all of the inputs to create & display books that the user has added to their library. So at the moment when the user "submits" a form what happens is that I use the data to create a JS object and then reset the form so it acts like data was submitted but it was just stored in an object. The issue? The user can submit empty input fields. Not a major issue but not something I want the user to do. I tried to add custom validation but then I realized if the form isn't submitted there is no validation. So this will remain a known issue for now until I learn how to input a way to store the inputted data and then make the form actually submit.

## Reference/Guide
This website was created following the Odin Project. You can find the reference [here](https://www.theodinproject.com/lessons/node-path-javascript-library).
