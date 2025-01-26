# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript

### What I learned
I'm proud of being able to study and apply concepts that I didn't know before.
Summarizing, I was capable of understanding how to code an intermediary formulary in *HTML*, verifiy given datas in *JavaScript* and style it following the desing with *CSS* properties.

For instance in the code:
```html
<label for="email-input">
          <span>Email Adress</span>
          <input type="email" name="email-input" id="email-input" class="inputs-design" placeholder="example@email.com" required>
</label>
```
```css
:root {
    --neutral0: hsl(0, 0%, 100%);
    --neutral300: hsl(252, 6%, 83%);
    --neutral500: hsl(245, 15%, 58%);
    --neutral700: hsl(245, 19%, 35%);
    --neutral900: hsl(248, 70%, 10%);
    --orange500: hsl(7, 88%, 67%);
    --orange700: hsl(7, 71%, 10%);
    --gradientorange: hsl(7, 86%, 67%);
    --Inconsolata: 'Inconsolata', monospace;
}
```
```js
uploadArea.addEventListener("drop", (e) => {
    const file = e.dataTransfer.files[0]; // Get the dropped file
    handleFile(file); // Process the file
});
```

### Useful resources

- [ChatGPT](https://chatgpt.com/) - This AI tool helped me on the 
comprehension of some piece of code and how it works. I really liked this pattern and will use it going forward.
- [W3School](https://www.w3schools.com/) - This is an amazing website of learning articles which taugh me with examples how some built-in functions behave. I'd recommend it to anyone who is still learning.

## Author

- Website - [Gabriel do Carmo](https://docarmo.pages.dev/)
- Frontend Mentor - [@DoCarmo2008](https://www.frontendmentor.io/profile/DoCarmo2008)
