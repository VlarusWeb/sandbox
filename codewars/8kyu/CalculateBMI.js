//.❓ Description

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//.✅ Solution

function bmI(weight, height) {
  const bmi = weight / (height ** 2);
  let resultMsg = "";
  if(bmi <= 18.5) {
    resultMsg = "Underweight";
  } else if (bmi <= 25.0) {
    resultMsg = "Normal";
  } else if (bmi <= 30.0) {
    resultMsg = "Overweight";
  } else {
    resultMsg = "Obese";
  }
  return resultMsg;
};

console.log(bmI(80, 1.80));
console.log(bmI(102, 1.70));

// 🆕✅ Solution

function bmi(weight, height, bmiResult = weight / height ** 2) {
  return bmiResult <= 18.5 ? "Underweight" :
         bmiResult <= 25.0 ? "Normal" :
         bmiResult <= 30.0 ? "Overweight" : "Obese";
};

console.log(bmi(90, 1.90));
console.log(bmi(104, 1.72));