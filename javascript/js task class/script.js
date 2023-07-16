const tBody = document.getElementById("tbody");
const tBody2 = document.getElementById("tbody2");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const options = document.getElementById("options");
const pagination = document.getElementById("pagination");
let userArray = [];
fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then(
    (json) =>
      json.users.forEach((data) => {
        userArray.push(data);

        tBody.innerHTML += `
    <td>${data.username}</td>

    
    <td>${data.firstName}</td>
          
          <td>${data.lastName}</td>
          <td>${data.gender}</td>
          <td>${data.email}</td>
          <td>${data.age}</td>
          <td>${data.birthDate}</td>
          <td>${data.ip}</td>
          <td>${data.macAddress}</td>
    
    `;
        searchButton.addEventListener("click", () => {
          if (
            searchInput.value == data.age ||
            searchInput.value.toUpperCase() == data.firstName.toUpperCase() ||
            searchInput.value.toUpperCase() == data.gender.toUpperCase() ||
            searchInput.value.toUpperCase() == data.lastName.toUpperCase() ||
            searchInput.value.toUpperCase() == data.username.toUpperCase()
          ) {
            tBody.innerHTML = ``;
            tBody2.innerHTML += `
        <td>${data.username}</td>


        <td>${data.firstName}</td>
        
        <td>${data.lastName}</td>
        <td>${data.gender}</td>
        <td>${data.email}</td>
        <td>${data.age}</td>
        <td>${data.birthDate}</td>
        <td>${data.ip}</td>
        <td>${data.macAddress}</td>
  `;
          }
        });
      }),
    options.addEventListener("change", () => {
      tBody.innerHTML = ``;

      for (let i = 0; i < options.value; i++) {
        let user = userArray[i];

        tBody.innerHTML += `
        <td>${user.username}</td>

    
    <td>${user.firstName}</td>
          
          <td>${user.lastName}</td>
          <td>${user.gender}</td>
          <td>${user.email}</td>
          <td>${user.age}</td>
          <td>${user.birthDate}</td>
          <td>${user.ip}</td>
          <td>${user.macAddress}</td>
        `;
      }
    })
  );

const pageSize = 10;
let currentPage = 1;

function displayUsers(page) {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const users = userArray.slice(startIndex, endIndex);

  tBody.innerHTML = "";

  users.forEach((user) => {
    tBody.innerHTML += `
      <tr>
        <td>${user.username}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.gender}</td>
        <td>${user.email}</td>
        <td>${user.age}</td>
        <td>${user.birthDate}</td>
        <td>${user.ip}</td>
        <td>${user.macAddress}</td>
      </tr>
    `;
  });
}

function generatePaginationLinks(totalPages) {
  pagination.innerHTML = "";

  const previousLink = `
    <li class="page-item">
      <a class="page-link" href="#" onclick="changePage(${
        currentPage - 1
      })">Previous</a>
    </li>
  `;

  pagination.innerHTML += previousLink;

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = `
      <li class="page-item ${i === currentPage ? "active" : ""}">
        <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
      </li>
    `;
    pagination.innerHTML += pageLink;
  }

  const nextLink = `
    <li class="page-item">
      <a class="page-link" href="#" onclick="changePage(${
        currentPage + 1
      })">Next</a>
    </li>
  `;

  pagination.innerHTML += nextLink;
}

function changePage(page) {
  if (page < 1 || page > Math.ceil(userArray.length / pageSize)) {
    return;
  }

  currentPage = page;
  displayUsers(currentPage);
  generatePaginationLinks(Math.ceil(userArray.length / pageSize));
}

displayUsers(currentPage);
generatePaginationLinks(Math.ceil(userArray.length / pageSize));
