import express from 'express';
import cookieParser from 'cookie-parser'
import express_session from 'express-session'
import cors from 'cors'

const app = express();

// Now Cors Which Site Request Allow
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credential: true
}));

// Setup For Express Session
app.use(express_session(
    {
        resave: false,
        saveUninitialized: false,
        secret: "as"
    }
))

//Now Here Your Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


// Here User Routes 
import userRouter from './routes/user.route.js';
import contactRouter from './routes/contact.route.js';
import { errorMiddleware } from './middleware/error.middleware.js';

app.use(errorMiddleware);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/contacts", contactRouter);

app.get("/", (req, res) => {
    res.status(200).json("This is my api ");
});

export { app }