function validation(name) {
    var name = document.getElementById('fname').value;
    var email = document.getElementById('email').value;

    document.getElementById('output').innerHTML = `Thank you ${name}, we have sent an email to ${email}, your message has been sent.`;
    event.preventDefault();
}
