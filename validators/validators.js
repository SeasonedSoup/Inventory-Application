const {body} = require('express-validator');
//text errors
lengthErr = 'must be beetween 1 to 100 characters';
requiredErr = 'is required';

//validating the category
const validateCategory = [
    body("title").trim()
    .notEmpty().withMessage(`title of category ${requiredErr}`)
    .isLength({min: 1, max: 100}).withMessage(`title of category ${lengthErr}`),
    body("description").optional().trim()
]

//validating the resource
const validateResource = [
    body("title").trim()
    .notEmpty().withMessage(`title of resource ${requiredErr}`)
    .isLength({min: 1, max: 100}).withMessage(`title of resource ${lengthErr}`),
    body("description").optional().trim(),
    body("type").trim()
    .notEmpty().withMessage(`type ${requiredErr}. please choose one option`)
    .isIn(["note", "digital-note", "link"]).withMessage("Invalid Option")
]

module.exports = {
    validateCategory,
    validateResource
}