const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (replace 'mongodb://localhost:27017/resume-builder' with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/resume-builder', { useNewUrlParser: true, useUnifiedTopology: true });

const resumeSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    education: String,
    experience: String,
    skills: String,
});

const Resume = mongoose.model('Resume', resumeSchema);

app.use(bodyParser.json());

app.post('/api/resumes', async (req, res) => {
    try {
        const newResume = new Resume(req.body);
        const savedResume = await newResume.save();
        res.json(savedResume);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
