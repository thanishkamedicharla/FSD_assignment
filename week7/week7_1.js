const server = require('express');
const application = server();

const serverPort = 3000;

application.set('view engine', 'ejs');

// Middleware to parse form data (URL-encoded) from POST requests
application.use(server.urlencoded({ extended: true }));

// Route to display the form
application.get('/', (request, response) => {
    // Render the form
    response.render('index', {
        title: 'User Registration',
        error: null,
        user: null
    });
});

// Accept form inputs
application.post('/register', (request, response) => {
    const userName = request.body.username;
    const userAge = request.body.age;

    // Perform basic validation
    let validationError = null;

    if (userName.length < 3) {
        validationError = 'Username must be at least 3 characters long.';
    } else if (isNaN(userAge) || userAge < 18) {
        validationError = 'You must be at least 18 years old.';
    }

    if (validationError) {
        // If validation fails, re-render the form with the error message
        response.render('index', {
            title: 'Registration Failed',
            error: validationError,
            user: null
        });
    } else {
        // If validation passes, render the success state
        response.render('index', {
            title: 'Registration Successful',
            error: null,
            user: userName
        });
    }
});

application.listen(serverPort, () => {
    console.log(`Server running at http://localhost:${serverPort}`);
});