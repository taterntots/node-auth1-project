const router = require("express").Router();
const bc = require("bcryptjs");

const Users = require("./users-model");

router.post("/", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
      .first()
      .then(user => {
          if (user && bc.compareSync(password, user.password)) {
              res.status(200).json({ message: `Logged in! Welcome ${user.username}!` });
          } else {
              res.status(401).json({ message: "Invalid Credentials. You shall not pass!" });
          }
      })
      .catch(error => {
          res.status(500).json(error);
      })
})

module.exports = router;