import express from 'express'
import user from './users.api'
const router = express.Router()

router.use('/register', user)


router.get("/", (req, res) => {
  res.json({
    message: "test api",
  });
});

export default router;