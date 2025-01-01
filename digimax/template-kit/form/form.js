// JavaScript
document
  .getElementById("submit")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = {
      fullName: document.querySelector("input[name='fullName']").value,
      email: document.querySelector("input[name='email']").value,
      phoneNumber: document.querySelector("input[name='phoneNumber']").value,
      subject: document.querySelector("input[name='subject']").value,
      description: document.querySelector("textarea[name='description']").value,
      gender: document.querySelector("select[name='gender']").value,
    };

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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
