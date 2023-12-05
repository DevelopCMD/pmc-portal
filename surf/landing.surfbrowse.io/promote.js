document.addEventListener("DOMContentLoaded", function() {
    var gifList = [
        "adv/advertisement1.gif",
        "adv/advertisement2.gif",
        // Add more .gif file paths as needed
    ];

    var randomIndex = Math.floor(Math.random() * gifList.length);
    var advertisement = document.getElementById("advertisement");
    advertisement.src = gifList[randomIndex];
});