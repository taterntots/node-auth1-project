const router = require("express").Router();
const bc = require("bcryptjs");

const Users = require("./users-model");

router.post("/login", (req, res) => {
  // let { username, password } = req.body;

  // Users.findBy({ username })
  //     .first()
  //     .then(user => {
  //         if (user && bc.compareSync(password, user.password)) {
  //             // if (user) {
  //             // compare().then(match => {
  //             //   if (match) {
  //             //     // good password
  //             //   } else {
  //             //     // they don't match
  //             //   }
  //             // }).catch()
  //             res.status(200).json({ message: `Welcome ${user.username}!` });
  //         } else {
  //             res.status(401).json({ message: "Invalid Credentials" });
  //         }
  //     })
  //     .catch(error => {
  //         res.status(500).json(error);
  //     });
});

module.exports = router;