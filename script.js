let show_standard = document.getElementById("show_standard");
let show_metrics = document.getElementById("show_metrics");

let standard_form = document.getElementById("standard");
let metrics_form = document.getElementById("metrics");

show_standard.addEventListener("click", () => {
  standard.classList.remove("hide");
  metrics.classList.add("hide");
});

show_metrics.addEventListener("click", () => {
  standard.classList.add("hide");
  metrics.classList.remove("hide");
});

let btn_sample = document.getElementById("sample");
let btn_compute = document.getElementById("btn-compute");
let btn_clear = document.getElementById("btn-clear");
btn_clear.disabled = true;

btn_compute.addEventListener("click", (e) => {
  e.preventDefault();

  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi_result = document.getElementById("bmi-result");
  let category_result = document.getElementById("category");

  let bmi = calculateBMI(weight, height);
  console.log(bmi);

  bmi_result.value = bmi;

  let category = categorizeBMI(bmi);
  category_result.innerHTML = category;

  btn_clear.disabled = false;
});

btn_clear.addEventListener("click", () => {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("bmi-result").value = "";
  document.getElementById("category").innerText = "";
  document.getElementById("weight").focus();
});

function calculateBMI(w, h) {
  return (w / (h * h)).toFixed(1);
}

function categorizeBMI(bmi) {
  // Underweight = <18.5
  // Normal weight = 18.5–24.9
  // Overweight = 25–29.9
  // Obesity = BMI of 30 or greater

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 24.9) {
    category = "Normal Weight";
  } else if (bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  return category;
}

btn_sample.addEventListener("click", () => {
  document.getElementById("sample_data").classList.toggle("hide");
});
