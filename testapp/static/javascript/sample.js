document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;

    const heightInMeters = heightInput / 100;
    const bmi = (weightInput / (heightInMeters * heightInMeters)).toFixed(2);

    document.getElementById('bmiResult').textContent = `あなたのBMIは ${bmi} です。`;

    let diagnosis;
    if (bmi < 18.5) {
        diagnosis = "低体重です。";
    } else if (bmi >= 18.5 && bmi < 25) {
        diagnosis = "正常体重です。";
    } else if (bmi >= 25 && bmi < 30) {
        diagnosis = "肥満度1です。";
    } else {
        diagnosis = "肥満度2以上です。";
    }
    document.getElementById('diagnosis').textContent = diagnosis;
});
