document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();


    let genderPoints = 0;
    let answers = document.querySelectorAll(".answear input[type='radio']:checked");
    answers.forEach((answer) => {
        totalPoints += parseInt(answer.value);
    });
    let attractionPoints = 0;
    let answers1 = document.querySelectorAll(".answear input[type='radio']:checked");
    answers.forEach((answer) => {
        totalPoints += parseInt(answer.value);
    });
    let sexualityPoints = 0;
    let answers2 = document.querySelectorAll(".answear1 input[type='radio']:checked");
    answers.forEach((answer) => {
        totalPoints += parseInt(answer.value);
    });
   


    console.log(totalPoints);
0
    
})