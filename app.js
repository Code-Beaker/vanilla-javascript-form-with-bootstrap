const form = document.getElementById("form");
let image = document.querySelector(".img");
const inputs = document.querySelectorAll("input");
const formStatusHeading = document.getElementById("heading");
const formStatusText = document.getElementById("text");
const userFullName = document.getElementById("fullname");

const handleSubmit = (e) => {
  e.preventDefault();
  //   console.log("submitted form");

  inputs.forEach(function (input) {
    if (input.value.length < 3) {
      input.classList.add("input-error-state");
      image.src = "assets/cancel.png";
      formStatusHeading.textContent = "Something's missing";
      formStatusText.textContent = "You have not entered your details";
      //   alert(`Please enter a ${input.id}`);
    } else {
      image.src = "assets/checked.png";
      formStatusHeading.textContent = "Successful!";
      formStatusText.textContent = `Welcome, ${userFullName.value}`;
      console.log("Details entered. Submitted");
      form.classList.add("form-hidden");
    }
  });
};

form.addEventListener("submit", handleSubmit);
