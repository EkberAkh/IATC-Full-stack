import "../css/style.css";
import "../css/roadmap.css";
import data from "./data.json" assert { type: "json" };

const roadMapCol = document.querySelector(".roadmap-column");
const orangeRoad = document.querySelector(".orangeRoad");
const purpleRoad = document.querySelector(".purpleRoad");
const blueRoad = document.querySelector(".blueRoad");
const orangeItemBtn = document.querySelector(".orange");
const purpleItemBtn = document.querySelector(".purple");
const blueItemBtn = document.querySelector(".blue");
const feedbackItem = document.querySelector(".feedback-item");
orangeItemBtn.addEventListener("click", () => {
  orangeItemBtn.classList.add("is-active");
  orangeRoad.classList.add("active");
  purpleRoad.classList.remove('active');
  blueRoad.classList.remove("active");
  purpleItemBtn.classList.remove("is-active");
  blueItemBtn.classList.remove("is-active");
});
purpleItemBtn.addEventListener("click", () => {
  purpleItemBtn.classList.add("is-active");
  purpleRoad.classList.add('active');
  orangeRoad.classList.remove("active");
  blueRoad.classList.remove("active");
  blueItemBtn.classList.remove("is-active");
  orangeItemBtn.classList.remove("is-active");
});
blueItemBtn.addEventListener("click", () => {
  blueItemBtn.classList.add("is-active");
  blueRoad.classList.add("active");
  orangeRoad.classList.remove("active");

  purpleRoad.classList.remove('active');
  orangeItemBtn.classList.remove("is-active");
  purpleItemBtn.classList.remove("is-active");
});


const goBackBtn = document.querySelector('.back-link')

goBackBtn.addEventListener('click',()=>{
    window.history.back();
})


const feedbackItems = document.querySelectorAll('.feedback-item');

data.productRequests.forEach((request, index) => {
  if (index < feedbackItems.length) {
    const feedbackItem = feedbackItems[index];
    const feedbackInfo = feedbackItem.querySelector('.feedback-info');
    const statusElement = feedbackInfo.querySelector('.feedback-status');
    const titleElement = feedbackInfo.querySelector('.suggestion-title');
    const descriptionElement = feedbackInfo.querySelector('.suggestion-description');
    const categoryElement = feedbackInfo.querySelector('.suggestion-category');
    const upvotesElement = feedbackItem.querySelector('.suggestion-upvotes span');
    const commentsElement = feedbackItem.querySelector('.suggestion-comments span');

    statusElement.textContent = request.status;
    titleElement.textContent = request.title;
    descriptionElement.textContent = request.description;
    categoryElement.textContent = request.category;
    upvotesElement.textContent = String(request.upvotes);

    // Check if the 'comments' property exists before accessing its length
    if (request.comments && Array.isArray(request.comments)) {
      commentsElement.textContent = String(request.comments.length);
    } else {
      commentsElement.textContent = '0';
    }
  }
});