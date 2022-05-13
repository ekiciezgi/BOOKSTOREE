const express = require('express');
const User = require('../models/User');
const Joi = require('@hapi/joi')
const router = express.Router();
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerSchema = Joi.object({
    name: Joi.string().required().min(3).max(255),
    email: Joi.string().required().email().min(3).max(255),
    password: Joi.string().required().min(3).max(255),
});

const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

router.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    const { error } = registerSchema.validate({ name, email, password });
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    const salt = bycrypt.genSaltSync(10);
    const hash = bycrypt.hashSync(req.body.password, salt);

    const user = new User({ ...req.body, password: hash });
    user.save().then(user => {
        const token = jwt.sign({ _id: user._id ,status:'ok'}, 'helloezgi');

        res.header("Authorization", token).json({ token: token });
    }).catch(err => {
        res.json(err);
    });
});



router.post('/login', async (req, res) => {
    const { email, password } = req.body;
   const {error}=loginSchema.validate({ email, password });
   
    User.findOne({ email })
        .then((user) => {
            if (!user) {
                res.status(400).send(error);
                return;
            }
            const isValid = bycrypt.compareSync(password, user.password);
            if (!isValid) {
                res.status(400).send(error);
                return;

            }
            const token = jwt.sign({ _id: user._id }, 'helloezgi');

            res.header("Authorization", token).json({ token: token });
        }).catch(() => {
            res
                .status(400).send(error);
        });

});


module.exports = router;
