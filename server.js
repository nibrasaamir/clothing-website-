const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/nibrasShop', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a user schema and model for orders
const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const Order = mongoose.model('shops', orderSchema);

// Define a schema and model for feedback
const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const Feedback = mongoose.model('feedbacks', feedbackSchema);

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route for handling order checkout
app.post('/checkout', async (req, res) => {
    try {
        const { name, phone, address } = req.body;
        
        // Create a new order document using the Order model
        const newOrder = new Order({ name, phone, address });
        
        // Save the new order document to the database
        await newOrder.save();

        // Redirect to the index.html page after successful order
        res.redirect('/index.html');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error placing order');
    }
});

app.post('/feedback', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        // Check if any required field is missing
        if (!name || !email || !message) {
            return res.status(400).send('All fields are required');
        }
        
        // Create a new feedback document using the Feedback model
        const newFeedback = new Feedback({ name, email, message });
        
        // Save the new feedback document to the database
        await newFeedback.save();

        // Redirect to the index.html page after successful feedback
        res.redirect('/index.html');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error submitting feedback');
    }
});


// Serve static files (your HTML, CSS, JS)
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
