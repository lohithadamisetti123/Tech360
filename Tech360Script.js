function openn() {
        document.getElementsByClassName("slide-menu")[0].style.left = "0px";
        document.querySelector(".overlay").style.display = "block";
        document.body.style.overflow = "hidden";
    }
function cloose() {
        document.getElementsByClassName("slide-menu")[0].style.left = "-250px";
        document.querySelector(".overlay").style.display = "none";
        document.body.style.overflow = "auto";
    }
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
//<script>
document.addEventListener("DOMContentLoaded", function() {
  const featureDivs = document.querySelectorAll(
    '.keyfea .projects, .keyfea .startups, .keyfea .resumes, .keyfea .hirings, .keyfea .techres, .keyfea .contest'
  );
  featureDivs.forEach(section => {
    const mat = section.querySelector('.mat');
    const img = section.querySelector('img');
    if (window.getComputedStyle(section).flexDirection === "row-reverse") {
      // Text comes from right, img from left
      if(mat) mat.classList.add('slide-from-right');
      if(img) img.classList.add('slide-from-left');
    } else {
      // Text comes from left, img from right
      if(mat) mat.classList.add('slide-from-left');
      if(img) img.classList.add('slide-from-right');
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.24 });

  document.querySelectorAll('.slide-from-left, .slide-from-right').forEach(el => {
    observer.observe(el);
  });
});
//</script>


