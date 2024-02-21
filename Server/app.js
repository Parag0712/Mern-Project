import express from 'express';
import cookieParser from 'cookie-parser'
import express_session from 'express-session'
import cors from 'cors'
import path from 'path';

const __dirname = path.resolve();


const app = express();

// Now Cors Which Site Request Allow
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
}));

// Setup For Express Session

//Now Here Your Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Here User Routes 
import userRouter from './routes/user.route.js';
import contactRouter from './routes/contact.route.js';
import serviceRouter from './routes/service.route.js';
import { errorMiddleware } from './middleware/error.middleware.js';

app.use(errorMiddleware);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/contacts", contactRouter);
app.use("/api/v1/services", serviceRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

export { app }