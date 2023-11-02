document.getElementById("BmiCalcButton").addEventListener("click", function () {
    var weightInKg = parseFloat(document.getElementById("weight").value);
    var heightInM = parseFloat(document.getElementById("height").value);

    var bmi = weightInKg / (heightInM * heightInM);

    console.log("BMIは " + bmi + " です。");

    document.getElementById("result").innerHTML = "BMIは " + bmi + " です。";
});