// JavaScript
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission
  (fullName =
    document.getElementById("form-field-name").value +
    " " +
    document.getElementById("form-field-field_70d8667").value),
    console.log(fullName);
  // Get form data
  const formData = {
    fullName: fullName,

    phoneNumber: document.getElementById("form-field-field_57c2051").value,
    email: document.getElementById("form-field-email").value,
    subject: document.getElementById("form-field-field_5aa0e4f").value,
    description: document.getElementById("form-field-message").value,
    gender: "Not specified",
  };

  // Display loading screen
  document.getElementById("loading-screen").style.display = "block";

  // POST request using Fetch API
  fetch("http://localhost:5500/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      // Hide loading screen
      document.getElementById("loading-screen").style.display = "none";
      // Show success message
      document.getElementById("success-message").style.display = "block";
    })
    .catch((error) => {
      console.error("Error:", "jiren");
      // Hide loading screen
      document.getElementById("loading-screen").style.display = "none";
      // Optionally, handle errors here
    });
}
