const { StatusCodes } = require("http-status-codes");
const { query } = require("../../config/db");

// Function to handle user form submission
async function submit(req, res) {
  const { fullName, email, phoneNumber, gender, subject, description } =
    req.body;
  console.log(req.body);
  // Check for required fields
  if (!fullName || !email || !gender || !subject || !description) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "All fields are required" });
  }

  try {
    // Insert the user form data into the database
    const queryString = `
      INSERT INTO user_form (fullName, email, phoneNumber, subject, description)
VALUES (?, ?, ?, ?, ?)`;
    await query(queryString, [
      fullName,
      email,
      phoneNumber,

      subject,
      description,
    ]);

    return res
      .status(StatusCodes.CREATED)
      .json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Submission error:", error.message, error.stack);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong, please try again later" });
  }
}
// Function to handle get request
async function getRequest(req, res) {
  try {
    const queryString = "SELECT * FROM user_form";
    const results = await query(queryString);

    return res.status(StatusCodes.OK).json(results);
  } catch (error) {
    console.error("Get request error:", error.message, error.stack);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong, please try again later" });
  }
}
// Function to handle login

// Function to check user validity
async function checkUser(req, res) {
  const username = req.user.username;
  const userid = req.user.userid;
  res.status(StatusCodes.OK).json({ message: "valid user", username, userid });
}

module.exports = { submit, checkUser, getRequest };
