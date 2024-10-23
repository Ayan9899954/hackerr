// Initialize EmailJS with your public key


const sendBtn = document.getElementById('send-btn');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

sendBtn.addEventListener('click', () => {
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Send email using EmailJS
  emailjs.send('service_n7iebwc', 'template_qiou1e5', {
    name,
    email,
    message
  })
  .then(() => {
    alert('Email sent successfully!');
  })
  .catch((error) => {
    console.error('Error sending email:', error);
    alert('Error sending email: ' + JSON.stringify(error));
  });
});