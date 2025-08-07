
const form = document.getElementById("subscribeForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("emailInput").value.trim();
    if (email === "") {
      alert("Please enter a valid email.");
      return;
    }
    alert("Thank you for subscribing!🎉 We will keep you updated with our latest news.");
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
    .then(() => {
      document.getElementById("emailInput").value = "";
    });
  });