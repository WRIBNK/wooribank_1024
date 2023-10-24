const phoneFrame = document.querySelector(".phone_frame");

setInterval(() => {
    phoneFrame.append(phoneFrame.firstChild);
}, 2000);