const router = require("express").Router();
const bc = require("bcryptjs");

const Users = require("./users-model");

router.post("/register", (req, res) => {
  // let user = req.body;

  // const hash = bc.hashSync(req.body.password, 8);

  // user.password = hash;

  // Users.add(user)
  //     .then(saved => {
  //         res.status(201).json(saved);
  //     })
  //     .catch(error => {
  //         res.status(500).json(error);
  //     });
});

module.exports = router;