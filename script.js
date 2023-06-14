document.getElementById('myForm').addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    /* When a form is submitted without any JavaScript intervention, the browser typically reloads the page or navigates to the specified form action URL, causing a full page refresh. However, in some cases, you may want to handle the form submission using JavaScript to perform additional operations, such as data validation, asynchronous requests, or custom processing, without triggering a page reload.
  
  By calling event.preventDefault(), you're instructing the browser not to perform its default behavior of submitting the form and navigating away from the current page. Instead, you can implement your custom logic, such as displaying an alert message or making an asynchronous request, as shown in the provided code with the alert('Form submitted!'); line.
  
  Preventing the default form submission behavior allows you to have more control over how the form data is handled and processed on the client side before potentially submitting it to the server or performing other actions.
    */
    event.preventDefault();
    alert('Congratulations! You clicked the sign in button!');
});


//Make the Get Started! link do something
const link = document.getElementById('get-started');

link.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    alert('Link clicked!');
});

//Make the Forgot password? link do something when clicked
const anotherLink = document.getElementById('forgot-password');

anotherLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    alert('Forgot your password? Have you tried going to the change password page, typing in a new password, and then getting an error message that says new password cannot be the same as old password?');
});



//Make all anchor tags change color after being clicked
const links = document.querySelectorAll('.change-color-after-clicked');

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        link.style.color = '#DA70D6';
    });
});