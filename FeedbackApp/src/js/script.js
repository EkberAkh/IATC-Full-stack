import "../css/style.css";
import data from "./data.json" assert { type: "json" };
const hamburgerButton = document.querySelector(".aside-heading-mobile");
const mobileHead = document.querySelector(".aside-heading-mobile");
const homePage = document.querySelector(".home-page");
const mobileOverlay = document.querySelector(".mobile-overlay");
const pageLeftSide = document.querySelector(".page-left-side");
const sortingOption = document.querySelectorAll(".sorting-option");
const sortingTitle = document.querySelector(".sorting-title");
const headingText = document.getElementById("heading-text");

const barSorting = document.querySelector(".bar-sorting");
const sortingLabel = document.querySelector(".sorting-label");
const sortingOptions = document.querySelector(".sorting-options");
const suggestionList = document.querySelector(".suggestion-list");
const plannedNum = document.getElementById("planned-num");

const inProgressNum = document.getElementById("inprogress-num");
const liveNum = document.getElementById("live-num");
hamburgerButton.addEventListener("click", () => {
  mobileHead.classList.toggle("is-active");
  mobileOverlay.classList.toggle("active-display");
  pageLeftSide.classList.toggle("left-active");
});

document.addEventListener("DOMContentLoaded", function () {
  // -----------
  const asideCategories = document.querySelectorAll(".aside-category");

  asideCategories.forEach((category) => {
    category.addEventListener("click", function () {
      asideCategories.forEach((c) => c.classList.remove("is-active"));
      this.classList.add("is-active");
    });
  });

  const selectedSorting = localStorage.getItem("sorting");
  if (!!selectedSorting) {
    sortingOption.forEach((option) => {
      if (option.getAttribute("data-value") === selectedSorting) {
        sortingTitle.textContent = option.textContent;
      }
    });
  }

  sortedComments = sortComments(selectedSorting || "most-upvotes");
  displayComments(sortedComments);

  asideCategories.forEach((category) => {
    category.addEventListener("click", function () {
      asideCategories.forEach((c) => c.classList.remove("is-active"));
      this.classList.add("is-active");

      const selectedCategory = this.textContent.trim().toLowerCase();
      if (selectedCategory === "all") {
        // Display all comments from the original data
        sortedComments = data.productRequests;
      } else {
        // Display comments filtered by the selected category
        sortedComments = data.productRequests.filter(
          (comment) => comment.category === selectedCategory
        );
      }

      displayComments(sortedComments);
    });
  });

  // -----
});

barSorting.addEventListener("click", () => {
  sortingLabel.classList.toggle("is-active");
  sortingOptions.classList.toggle("active");
});

let sortedComments = data.productRequests;

const sortComments = (option) => {
  switch (option) {
    case "least-upvotes":
      return data.productRequests.sort((a, b) => {
        return a.upvotes > b.upvotes ? 1 : a.upvotes < b.upvotes ? -1 : 0;
      });

    case "most-upvotes":
      return data.productRequests.sort((a, b) => {
        return a.upvotes > b.upvotes ? -1 : a.upvotes < b.upvotes ? 1 : 0;
      });
    case "least-comments":
      return data.productRequests.sort((a, b) => {
        const aComments = a.comments?.length || 0;
        const bComments = b.comments?.length || 0;
        return Number(aComments) > Number(bComments)
          ? 1
          : Number(aComments) < Number(bComments)
          ? -1
          : 0;
      });
    case "most-comments":
      return data.productRequests.sort((a, b) => {
        const aComments = a.comments?.length || 0;
        const bComments = b.comments?.length || 0;
        return Number(aComments) > Number(bComments)
          ? -1
          : Number(aComments) < Number(bComments)
          ? 1
          : 0;
      });

    default:
      break;
  }
};

sortingOption.forEach((option) => {
  option.addEventListener("click", () => {
    sortingOption.forEach((opt) => {
      opt.classList.remove("is-active");
    });

    option.classList.add("is-active");
    sortingTitle.textContent = option.textContent;
    localStorage.setItem("sorting", option.getAttribute("data-value"));
    sortedComments = sortComments(option.getAttribute("data-value"));
    displayComments(sortedComments);
  });
});

const displayComments = (comments) => {
  let count = 0;
  suggestionList.innerHTML = "";
  plannedNum.textContent = `${count}`;
  inProgressNum.textContent = `${count}`;
  liveNum.textContent = `${count}`;
  comments.forEach((user) => {
    // console.log(user);
    suggestionList.innerHTML += `
   <article class="suggestion-item">
   <section class="suggestion-upvotes-container">
     <section class="suggestion-upvotes">
       <svg
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 11 7"
       >
         <path
           d="m1.334 6 4-4 4 4"
           stroke="#4661E6"
           stroke-width="2"
         ></path>
       </svg>
       <span>${user.upvotes}</span>
     </section>
   </section>
   <a href="details.html?id=${user.id}" class="suggestion-info"
     ><p class="suggestion-title">${user.title}</p>
     <p class="suggestion-description">
       ${user.description}
     </p>
     <p class="suggestion-category">${user.category}</p>
   </a>
   <section class="suggestion-comments">
     <svg
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 18 16"
     >
       <path
         d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.016 0-2.078-.137-3.025-.388A4.705 4.705 0 0 1 2.62 16Z"
         fill="#CDD2EE"
       ></path>
     </svg>
     <span>${user.comments?.length || 0}</span>
   </section>
  </article>
   `;

    if (user.status === "planned") {
      plannedNum.textContent = `${count++}`;
    }
    if (user.status === "in-progress") {
      inProgressNum.textContent = `${count++}`;
    }
    if (user.status === "live") {
      liveNum.textContent = `${count++}`;
    }
  });
  headingText.textContent = `${comments.length} Suggestions`;
  if (suggestionList.innerHTML === "") {
    suggestionList.innerHTML = `
    <section class="suggestion-none">
              <img src="img/Group 16.png" alt="">
              <p class="none-title">There is no feedback yet.</p>
              <p  class="none-text">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
              <a  href="/add" class="none-button">+ Add Feedback</a>
            </section>
    `;
  }
};

// Retrieve data from local storage
const storedFeedbacks = localStorage.getItem("feedbacks");
let newFeedbacks = [];

// Check if there are feedbacks in local storage
if (storedFeedbacks) {
  newFeedbacks = JSON.parse(storedFeedbacks);
}

// Merge the new feedbacks with the existing ones
const updatedData = data.productRequests.concat(newFeedbacks);

// Set upvotes and comments to 0 for new feedbacks and add the description
newFeedbacks.forEach((feedback) => {
  feedback.upvotes = 0;
  feedback.comments = [];
  feedback.description = feedback.detail; // Assuming "detail" contains the description
  delete feedback.detail; // Optional: If you want to remove the "detail" property
});

// Update the original comments array with the merged and updated feedbacks
data.productRequests = updatedData;

// Display the comments
displayComments(data.productRequests);
// ---------
// Inside your loop where comments are displayed
