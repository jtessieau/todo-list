const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if (!user || !isPasswordCorrect) {
        return res.status(404).send({ message: 'User not found' });
    }

    const payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
    };
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
        algorithm: 'HS256',
        expiresIn: '1h',
    });

    res.json(token);
};

exports.store = async (req, res) => {
    const userData = req.body;

    const existingUser = await User.findOne({ email: userData.email });
    console.log(existingUser);

    if (existingUser) {
        return res.status(400).send({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });

    await newUser.save();

    res.json(newUser);
};

exports.verifyToken = async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        res.json(decoded);
    } catch (err) {
        return res.status(401).send({ message: 'Invalid token' });
    }
};
