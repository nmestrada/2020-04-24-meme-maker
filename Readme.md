# Today's Objective: Meme maker!

## Prize

$25 CAD Amazon gift card + bragging rights.

Tip: Read the [General Information Document](General%20Information.md) for more info on how to get started and submit.

## Objective

Today's objective is to create a meme maker with captions in the browser.

There are tons of meme makers online, with a variety of features. Here are a few:

* https://imgflip.com/memegenerator
* https://www.kapwing.com/meme-maker
* https://makeameme.org/

Today we will build a meme-maker that is browser-only and does not require any backend server.

## Requirements

Using `svg` elements, create a meme maker that can be converted to an image in-browser. 

The meme maker should let you type text on an image and then convert it to a PNG image. The user can then copy or save the image off the page directly using their right-click menu.

### What is SVG?

SVG elements in the browser are used extensively by rich media applications. The SVG markup language is intended to be human as well as computer readable, i.e. it is NOT a binary format. 

You've already used svg inadvertently if you have ever imported an SVG image. For example, Create React App's logo is an SVG image.

### Suggested pattern that you might want to use

Step 1: The meme builder should be built using SVG elements. (Take your time learning this from [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image), it's fun and useful)
Step 2: Make sure you wrap your SVG with a contenteditable div.
Step 3: Convert the SVG to Canvas, where you can then download the canvas.

This fiddle is a good example: https://jsfiddle.net/pcLrydh5/

### Suggested Libraries

No suggested libraries this time. The project is very simple with `svg` and can be completed with vanilla JS.

## Frameworks:

We recommend you keep it simple and use what you already know. It is completely possible to build this using vanilla JS. You can use React, Vue, Angular if you wish.

## Technology Restrictions

* Your project must use JavaScript in a browser environment.

There are no other restrictions.

## Tips for success:

1. The project is intentionally simple so you can focus on code quality.
1. The requirements are intentionally minimalistic so you can get as creative as you'd like.
1. You get a LOT of time for code review comments. So you can win even if you feel your project isn't great, simply on the strength of your code review comments!
1. Keep in mind, 33% of your score is based on aesthetic appeal! So try to make it look nice.
