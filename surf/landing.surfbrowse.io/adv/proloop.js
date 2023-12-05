document.addEventListener("DOMContentLoaded", function() {
    var gifList = [
        "adv1.gif",
        "adv2.gif",
        // Add more .gif file paths as needed
    ];

    var randomIndex = Math.floor(Math.random() * gifList.length);
    var advertisement = document.getElementById("adv");
    advertisement.src = gifList[randomIndex];
});