
import data from "./data.json" assert { type: "json" };
import "../css/style.css";
import "../css/details.css";

const goBackBtn = document.querySelector(".back-link");

goBackBtn.addEventListener("click", () => {
  window.history.back();
});

const replyButtons = document.querySelectorAll(".reply-link");
const commentBar = document.querySelector(".comment-first");

replyButtons.forEach((replybutton) => {
  replybutton.addEventListener("click", () => {
    const commentSection = replybutton.closest(".comment-first");
    const existingReplyForm =
      commentSection.getElementsByClassName("comment-reply-form");
    existingReplyForm[0].style.display = "flex";
    // if (!existingReplyForm) {
    //   const commentReplyForm = document.createElement("section");
    //   commentReplyForm.classList.add("comment-reply-form");

    //   const textarea = document.createElement("textarea");
    //   textarea.setAttribute("maxlength", "225");
    //   textarea.classList.add("form-textarea");
    //   commentReplyForm.appendChild(textarea);

    //   const postReplyButton = document.createElement("button");
    //   postReplyButton.classList.add("form-button");
    //   postReplyButton.textContent = "Post Reply";
    //   commentReplyForm.appendChild(postReplyButton);

    //   commentSection.appendChild(commentReplyForm);
    // }
  });
});

const replyButtonsArr = document.getElementsByClassName("reply-button");
Array.from(replyButtonsArr).forEach((replyButton)=>{

  replyButton.addEventListener("click", () => {
    const replyText = replyButton.previousSibling.value;
    console.log(replyButton.parentElement.previousElementSibling);
    replyButton.parentElement.previousElementSibling.insertAdjacentHTML(
      "beforeend",
      '<section class="comment-first comment-reply">' +
        '<section class="comment-info">' +
        ' <section class="image-container">' +
        '  <img src="img/Oval (1).png" alt="Suzanne Chang" />' +
        " </section>" +
        '<section class="left-side">' +
        '  <p class="author-name">Suzanne Chang</p>' +
        '  <p class="author-username">@upbeat1811</p>' +
        " </section>" +
        ' <section class="right-side">' +
        '  <p class="reply-link">Reply</p>' +
        "  </section>" +
        " </section>" +
        '<p class="comment-text"></p>' +
        replyText +
        "</section>"
    );
  });
})

const formSubmitBtn = document.querySelector('.form-submit');
const feedbackComments = document.querySelector('.feedback-comments');
const formTextArea = document.getElementById("textarea");
formSubmitBtn.addEventListener('click', () =>{
feedbackComments.innerHTML += `
<section class="comment-first">
<section class="comment-info">
  <section class="image-container">
    <img src="img/Oval (1).png" alt="Suzanne Chang" />
  </section>
  <section class="left-side">
    <p class="author-name">Suzanne Chang</p>
    <p class="author-username">@upbeat1811</p>
  </section>
  <section class="right-side">
    <p class="reply-link">Reply</p>
  </section>
</section>
<p class="comment-text">
  ${formTextArea.value}
</p>
<div class="replies"></div>
<section class="comment-reply-form">
  <textarea maxlength="225" class="form-textarea"></textarea
  ><button class="form-button reply-button">Post Reply</button>
</section>
<!----><!---->
</section>
`
})



const chosenComment = document.getElementById('chosen-comment')


// details.js
const urlParams = new URLSearchParams(window.location.search);
  const feedbackId = urlParams.get("id");

  const selectedFeedback = data.productRequests.find(
    (feedback) => feedback.id === parseInt(feedbackId)
  );

  if (selectedFeedback) {
    chosenComment.innerHTML = `
      <article class="suggestion-item">
        <section class="suggestion-upvotes-container">
          <!-- ... upvotes and other content ... -->
        </section>
        <div class="suggestion-info">
          <p class="suggestion-title">${selectedFeedback.title}</p>
          <p class="suggestion-description">${selectedFeedback.description}</p>
          <p class="suggestion-category">${selectedFeedback.category}</p>
        </div>
        <section class="suggestion-comments">
          <!-- ... comments and other content ... -->
        </section>
      </article>
    `;}
