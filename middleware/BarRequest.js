const { body, validationResult } = require("express-validator");

module.exports = [
  body("nom")
    .notEmpty()
    .withMessage("Le nom est requis")
    .isString()
    .withMessage("Le nom doit être une chaîne de caractères")
    .trim(),

  body("adresse")
    .notEmpty()
    .withMessage("L'adresse est requise")
    .isString()
    .withMessage("L'adresse doit être une chaîne de caractères")
    .trim(),

  body("tel")
    .notEmpty()
    .withMessage("Le téléphone est requis")
    .isMobilePhone()
    .withMessage("Le téléphone doit être un numéro valide")
    .trim(),

  body("email")
    .notEmpty()
    .withMessage("L'email est requis")
    .isEmail()
    .withMessage("L'email doit être valide")
    .normalizeEmail(),

  body("description")
    .notEmpty()
    .withMessage("La description est requise")
    .isString()
    .withMessage("La description doit être une chaîne de caractères")
    .trim(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    next();
  },
];
