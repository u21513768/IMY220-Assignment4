//Quintin d'Hotman de Villiers u21513768 no.26
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelectorAll(".submit");
    const messageDiv = document.querySelector(".messages");
  
    submitButton.forEach(function (button) {
      button.addEventListener("click", function () {
        const messageArea = document.getElementById("message");
        const messageText = messageArea.value;
  
        if (messageText.trim() !== "") {
          const ytRegex = /(?:https:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/g;
          const ytLinks = Array.from(messageText.matchAll(ytRegex));
  
          let currentIndex = 0;
          let messageDiv = document.createElement("div");
          messageDiv.classList.add("col-4", "offset-4", "rounded", "mb-3");
  
          ytLinks.forEach((match, index) => {
            const videoId = match[1];
            const iframe = document.createElement("iframe");
            iframe.width = "100%";
            iframe.height = "315";
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "true");
  
            const youtubeLink = match[0];
            const beforeText = messageText.substring(currentIndex, match.index);
            currentIndex = match.index + youtubeLink.length;
  
            if (beforeText.trim() !== "") {
              const textDiv = document.createElement("div");
              textDiv.textContent = beforeText;
              messageDiv.appendChild(textDiv);
            }
  
            messageDiv.appendChild(iframe);
  
            if (index === ytLinks.length - 1) {
              const afterText = messageText.substring(currentIndex);
              if (afterText.trim() !== "") {
                const textDiv = document.createElement("div");
                textDiv.textContent = afterText;
                messageDiv.appendChild(textDiv);
              }
            }
          });
  
          messageDiv.appendChild(messageDiv);
          messageArea.value = "";
        }
      });
    });
  });
  