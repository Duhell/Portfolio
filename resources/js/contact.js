window.addEventListener("ContactLoaded", () => {
  const contact = document.getElementById("contact");

  if (contact) {
    document.getElementById("formSubmit").addEventListener("submit", (e) => {
      e.preventDefault();
      sendMail();
    });

    function sendMail() {
      let fullname = document.getElementById("fullname").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;

      let link = `mailto:villarma.ryantempla@gmail.com?subject=${encodeURIComponent(
        "Someone reached out."
      )}&body=${encodeURIComponent(
        `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`
      )}`;

      window.location.href = link;
    }
  }
});
