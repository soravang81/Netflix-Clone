var questions = document.querySelectorAll(".q1");
var count = 1;

questions.forEach((curvalue, index) => {
    curvalue.addEventListener("click", () => {
        var hiddenBtn = document.getElementsByClassName("q2")[index];
        if (count % 2 !== 0) {
            hiddenBtn.style.display = "block";
        } else {
            hiddenBtn.style.display= "none";
        }
        count++;
    });
});