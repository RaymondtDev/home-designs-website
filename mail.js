const form = document.querySelector("#mail-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const submitBtn = document.querySelector("#submit-button");

const publicKey = "8ttOCNOiX4trNQIp2";
const serviceId = "service_1u4yapr";
const templateId = "template_g72d77u";

emailjs.init({ publicKey });

form.addEventListener("submit", e => {
  e.preventDefault();

  submitBtn.innerText = "Just A Moment...";

  const inputFields = {
    from_name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  }

  emailjs.send(serviceId, templateId, inputFields).then(() => {
    submitBtn.innerText = "Message Sent Successfully.";

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }, (error) => {
    console.log(error);
    submitBtn.innerText = "Something Went Wrong.";
  });
});