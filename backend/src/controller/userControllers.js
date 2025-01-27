export const registerUser = async (req, res, next) => {
  const {email, password} = req.body
  console.log(email, password, "email and password")
  res.json({
    message: "Welcom user",
  });
};

