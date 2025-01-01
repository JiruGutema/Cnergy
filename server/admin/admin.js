// admin.js

// Mock data from backend
let requests = [];
// JavaScript

fetch("http://localhost:5500/getRequest")
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
    requests = data;
    populateTable();
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Populate table
let tableBody;
document.addEventListener("DOMContentLoaded", function () {
  tableBody = document.getElementById("requestTable");
  populateTable();
});
function populateTable() {
  tableBody.innerHTML = ""; // Clear existing rows
  requests.forEach((request, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${request.fullName}</td>
      <td>${request.email}</td>
      <td>${request.phoneNumber}</td>
      <td>${request.subject}</td>
      <td>${request.description}</td>
     
      <td><button class="delete-btn" onclick="deleteRequest(${index})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Delete request
function deleteRequest(index) {
  if (confirm("Are you sure you want to delete this request?")) {
    requests.splice(index, 1); // Remove from array
    populateTable(); // Refresh table
  }
}

// Initial population
populateTable();
