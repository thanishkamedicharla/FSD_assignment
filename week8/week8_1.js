const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // i) Required to read/write cookies

// ii) Maintain Sessions
app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 } // Session expires in 1 minute
}));

// iv) Protect private routes (Middleware function)
const authMiddleware = (req, res, next) => {
    if (req.session.isLoggedIn) { // User is authenticated, proceed to the route
        next();
    } else {
        res.redirect('/login'); // Redirect to login if not authenticated
    }
};

// Public Route: Login Page
app.get('/login', (req, res) => {
    res.render('login', { error: null });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Basic hardcoded check (User: admin, Pass: 123)
    if (username === 'admin' && password === '123') {
        req.session.isLoggedIn = true;
        req.session.username = username;

        // i) Create a custom cookie (e.g., for user preferences)
        res.cookie(
            'lastVisit',
            new Date().toLocaleTimeString()
        );

        res.redirect('/dashboard');
    } else {
        res.render('login', { error: 'Invalid credentials!' });
    }
});

// iv) Private Route: Dashboard
app.get('/dashboard', authMiddleware, (req, res) => {

    // i) Read cookies and ii) Access session data
    const recentVisit = req.cookies.lastVisit || 'First time';

    res.render('dashboard', {
        user: req.session.username,
        lastVisit: recentVisit
    });
});

// iii) Implement Logout
app.get('/logout', (request, response) => {
    request.session.destroy(() => {
        response.clearCookie('connect.sid'); // Clear the session cookie
        response.redirect('/login');
    });
});
app.listen(3000, () => comnsole.log('Server:http://loclahost:3000/login'));