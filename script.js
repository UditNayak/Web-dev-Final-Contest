const tf = document.getElementById('tweet-form');
const pCont = document.querySelector('.post-container');

tf.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission
  
  const tc = document.getElementById('tweet-content').value;
  
  const tDiv = document.createElement('div');
  tDiv.classList.add('tweet');
  
  const tText = document.createElement('p');
  tText.textContent = tc;
  
  tDiv.appendChild(tText);
  
  pCont.appendChild(tDiv);
  
  document.getElementById('tweet-content').value = '';
});

(document).ready(function() {
    $('#replyForm').submit(function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the reply text and tweet ID
      var replyText = $('#replyText').val();
      var tweetId = '<YOUR_TWEET_ID>';
  
      // Send the reply to the server
      $.ajax({
        url: '/reply',
        type: 'POST',
        data: { text: replyText, tweetId: tweetId },
        success: function(response) {
          // Do something with the response
        },
        error: function() {
          // Handle errors
        }
      });
    });
  });
  