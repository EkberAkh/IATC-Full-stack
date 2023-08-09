import "../css/style.css"
import "../css/edit.css";


const goBackBtn = document.querySelector('.back-link')

goBackBtn.addEventListener('click',()=>{
    window.history.back();
})


document.addEventListener('DOMContentLoaded', function () {
    // Get references to the input fields and the "Add Feedback" button
    const feedbackTitleInput = document.querySelector('.form-input');
    const categorySelect = document.querySelector('.form-select');
    const feedbackDetailTextarea = document.querySelector('.form-textarea');
    const addButton = document.querySelector('.button-submit');
    

    // Add event listener to the "Add Feedback" button
    addButton.addEventListener('click', function () {
      // Get the values from the input fields and the select dropdown
      const feedbackTitle = feedbackTitleInput.value;
      const category = categorySelect.value;
      const feedbackDetail = feedbackDetailTextarea.value;
     

      // Check if all fields are filled
      if (feedbackTitle.trim() === '' || category.trim() === '' || feedbackDetail.trim() === '') {
        alert('Please fill all the fields before submitting the feedback.');
        return;
      }

      // Create an object to store the feedback details
      const feedbackData = {
        title: feedbackTitle,
        category: category,
        detail: feedbackDetail,
     
      };

      // Check if local storage is available in the browser
      if (typeof Storage !== 'undefined') {
        // Get the existing feedback data from local storage (if any)
        const existingFeedback = localStorage.getItem('feedbacks');

        // If there is existing data, parse it from JSON
        const feedbacks = existingFeedback ? JSON.parse(existingFeedback) : [];

        // Add the new feedback data to the array
        feedbacks.push(feedbackData);

        // Save the updated feedbacks array back to local storage
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

        // Show a success message
        alert('Feedback added successfully.');

        // Clear the input fields after successful submission
        feedbackTitleInput.value = '';
        categorySelect.value = '';
        feedbackDetailTextarea.value = '';
      } else {
        // If local storage is not available, show an error message
        alert('Sorry, your browser does not support local storage. Feedback cannot be saved.');
      }
    });
  });