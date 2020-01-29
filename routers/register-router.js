const router = require("express").Router();
const bc = require("bcryptjs");

const Users = require("./users-model");

router.post("/", (req, res) => {
  let credentials = req.body;
  const hash = bc.hashSync(credentials.password, 8);
  credentials.password = hash;

  Users.add(credentials)
      .then(savedUser => {
          res.status(201).json(savedUser);
      })
      .catch(error => {
          res.status(500).json(error);
      });
});

module.exports = router;