function calculate() {
    let edu = document.getElementById("edu");
    let fam = document.getElementById("fam");
    let skills = document.getElementsByClassName('skills');
    let res = document.getElementById('res');
    let btnShow = document.querySelector("button");
    let sum;
    sum = 500;
    for (i = 0; i < 4; i++) {
        if (skills[i].checked === true) {
            sum += parseInt(skills[i].value);
        }
    }
    for (i = 0; i < 3; i++) {
        let rep = 'rep' + i;
        let age = 'age' + i;
        let reps = document.getElementById(rep);
        let ages = document.getElementById(age);
        if (reps.checked === true) {
            if (reps.value !== "200") {
                sum *= Number(reps.value);
            } else {
                sum -= Number(reps.value);
            }
        }
        if (ages.checked === true) {
            sum *= Number(ages.value);
        }
    }
    sum *= edu.value;
    sum *= fam.value;
    res.innerText = "Total: " + sum + "$";
};
