let ageInput = document.getElementById("age")
let massInput = document.getElementById("weight")
let heightInput = document.getElementById("height")
let ageError = document.querySelector(".age-error")
let massError = document.querySelector(".mass-error")
let heightError = document.querySelector(".height-error")
let finalBMI = document.getElementById("final-bmi")
let clear = document.getElementById("clear")
let age, mass, height
function calculate() {
    age = parseFloat(ageInput.value)
    mass = parseFloat(massInput.value)
    height = parseFloat(heightInput.value)/100  
    if (age < 2 || age > 120 || isNaN(age)) {
        ageError.style.visibility = "visible"
        return
    }
    else {
        ageError.style.visibility = "hidden"
    }
    if (mass < 0 || isNaN(mass)) {
        massError.style.visibility = "visible"
        return
    }
    else {
        massError.style.visibility = "hidden"
    }
    if (height < 0 || isNaN(height)) {
        heightError.style.visibility = "visible"
        return
    }
    else {
        heightError.style.visibility = "hidden"
    }
    console.log(age, mass, height)
    let bmi = (mass / (height * height)).toFixed(2)

    if (bmi < 16) {
        finalBMI.innerHTML = `<p style="font-weight:bold;">BMI=${bmi} kg/m2</p> 
                               <span style="color:red;">(Severe Thickness)</span>`
    }
    else if (bmi <= 17) {
        finalBMI.innerHTML = `<p style="font-weight:bold;">BMI=${bmi} kg/m2</p> 
                               <span style="color:red;">(Moderate Thickness)</span>`
    }
    else if (bmi <= 18.5) {
        finalBMI.innerHTML = `<p style="font-weight:bold;">BMI=${bmi} kg/m2</p> 
                               <span style="color:green;">(Mild Thickness)</span>`
    }
    else if (bmi <= 25) {
        finalBMI.innerHTML = `<p style="font-weight:bold;">BMI=${bmi} kg/m2</p> 
                               <span style="color:green;">(Normal)</span>`
    }
    else if (bmi <= 30) {
        finalBMI.innerHTML = `<p style="font-weight:bold;">BMI=${bmi} kg/m2</p> 
                               <span style="color:red;">(Overweight)</span>`
    }
    else if (bmi <= 35) {
        finalBMI.innerHTML = `<p style="font-weight:bold;">BMI=${bmi} kg/m2</p> 
                               <span style="color:red;">(Obese Class I)</span>`
    }
    else if (bmi <= 40) {
        finalBMI.innerHTML = `<p style="font-weight:bold;">BMI=${bmi} kg/m2</p> 
                               <span style="color:red;">(Obese Class II)</span>`
    }
    else if (bmi > 40) {
        finalBMI.innerHTML = `<p style="font-weight:bold;">BMI=${bmi} kg/m2</p> 
                               <span style="color:red;">(Obese Class III)</span>`
    }

}

clear.addEventListener("click", () => {
    ageInput.value = ``
    massInput.value = ``
    heightInput.value = ``
    finalBMI.innerText = ``
})
