var button = document.getElementById("likeButton"),
    count = 0;
button.onclick = function () {
    count += 1;
    button.innerHTML = "Likes:" + count;
};