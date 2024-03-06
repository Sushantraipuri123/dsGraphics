document.addEventListener("DOMContentLoaded", function () {
  const adminEmail = "dsgraphicsmohali@gmail.com";
  const serviceID = "service_jo9rk3c"; // Replace with your actual service ID
  const templateID = "template_x2rp0m8"; // Replace with your actual template ID
  const publicKey = "6GX_cKEkn5ZF2hJzu"; // Replace with your actual public key

  // Initialize Email.js with the public key
  emailjs.init(publicKey);

  document.getElementById("submitBtn").addEventListener("click", function () {
      const params = {
          name: document.querySelector("#sendername").value,
          email: document.querySelector("#email_id").value,
          message: document.querySelector("#message").value,
          to_email: adminEmail,
      };

      emailjs.send(serviceID, templateID, params)
          .then(res => {
              document.querySelector("#sendername").value;
              document.querySelector("#email_id").value;
              document.querySelector("#message").value;
              alert("Your message sent successfully!!");
              console.log(res);
          })
          .catch(err => console.log(err));
          // After sending the message
setTimeout(function(){
  window.location.href = "/index.html"; // Replace "/home" with the actual URL of your home page
},2000)

  });
  
});
