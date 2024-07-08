document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (!name || !email || !phone || !message) {
      alert("Please fill out all fields.");
      return;
    }

    // Perform form submission logic here, such as sending an email or storing the data in a database.

    alert("Form submitted successfully!");
    this.reset();
  });
