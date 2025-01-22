export const registerUser = async (req, res, next) => {
  const {email, pasword, name} = req.body
  res.json({
    message: "Welcom user",
  });
};

