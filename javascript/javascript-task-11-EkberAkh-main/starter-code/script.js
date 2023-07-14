const linkButton = document.getElementById("link-button");
const linksAdd = document.getElementById("links-add");
const linksBody = document.getElementById("links-body");
let isLink = false;

linkButton.addEventListener("click", () => {
  isLink = true;
  linksBody.classList.add("d-none");
  linksAdd.classList.remove("d-none");
});

const removeButton = document.getElementById("remove-button");

removeButton.addEventListener("click", () => {
  linksBody.classList.remove("d-none");
  linksAdd.classList.add("d-none");
});

const phoneBox = document.getElementById("phone-box");
const linkInput = document.getElementById("link-input");
const saveButton = document.getElementById("save-btn");
saveButton.addEventListener("click", () => {
  phoneBox.innerHTML = `
    <img class="phone-img" src="assets/images/illustration-phone-mockup.svg" alt="">
    
    <a href="${linkInput.value}" target="_blank" rel="noopener noreferrer">-->Your Link Saved<--</a>
    `;
});
