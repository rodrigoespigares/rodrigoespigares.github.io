var form = document.getElementById("my-contact-form");
var formMessage = document.getElementById("form-message");
var uploadButton = document.getElementById("upload-button");
var fileSelect = document.getElementById("file-select");
form.onsubmit = function(event) {
event.preventDefault();
uploadButton.innerHTML = "Uploading...";
var formData = new FormData(form);
/* Remove or alter unwanted parameters from submissions */
var xhr = new XMLHttpRequest();
xhr.open("POST", form.action, true);
xhr.onload = function(e) {
var response = JSON.parse(xhr.response);
if (xhr.status === 200) {
uploadButton.innerHTML = "Success";
} else {
uploadButton.innerHTML = "Error: " + response.error;
}
};
xhr.send(formData);
};