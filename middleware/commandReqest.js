const { body, validationResult } = require("express-validator");

module.exports = [
  body("prix")
    .notEmpty()
    .withMessage("Le prix est requis.")
    .isFloat({ min: 0 })
    .withMessage("Le prix doit être un nombre valide et supérieur ou égal à 0.")
    .trim(),

  body("date")
    .notEmpty()
    .withMessage("La date est requise.")
    .isISO8601("yyyy-mm-dd")
    .withMessage("La date doit être au format valide (YYYY-MM-DDTHH:MM:SSZ)."),

  body("status")
    .notEmpty()
    .withMessage("Le statut est requis.")
    .isIn(["Brouillon", "En cours", "Terminé"])
    .withMessage(
      "Le statut doit être l'un des suivants : Brouillon, En cours, Terminé."
    )
    .trim(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    next();
  },
];
