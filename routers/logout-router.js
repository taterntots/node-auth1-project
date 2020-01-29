const router = require('express').Router();

router.get('/', (req, res) => {
  if (req.session) {
      req.session.destroy(err => {
          if (err) {
              res.status(500).json({
                  you:
                      'can checkout any time you like, but you can never leave!',
              });
          } else {
              res.status(200).json({ bye: 'thanks for playing' });
          }
      });
  } else {
      res.status(204);
  }
})

module.exports = router;