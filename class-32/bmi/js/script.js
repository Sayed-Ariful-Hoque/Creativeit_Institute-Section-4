let weight = document.querySelector('.weight')
let weighterror = document.querySelector('.weighterror')
let hight = document.querySelector('.hight')
let highterror = document.querySelector('.highterror')
let result = document.querySelector('.result')
let btn = document.querySelector('.btn')
let sugg = document.querySelector('.sugg')
let sugg01 = document.querySelector('.sugg01')


btn.addEventListener('click', function(){
    if(weight.value == ""){
        weighterror.innerHTML = "Enter your weight (Kg)"
    }
    else{
        weighterror.innerHTML = " "
    }
    if(hight.value == ""){
        highterror.innerHTML = "Enter your weight (Kg)"
    }
    else{
        highterror.innerHTML = " "
    }
    if( !weight.value == "" && !hight.value == ""){
        let bmi = (703 * (weight.value * 2.20462262)) / ( hight.value * hight.value)

        result.innerHTML = bmi.toFixed(2)

        if(bmi <18.5){
            result.style.color="#fcba03"
            sugg.innerHTML = `<p class="under_weight">Under weight</p>`
            sugg01.innerHTML = `<p class="over_weightp">vai tomar weight ta onek kom tumi ektu Healthy khabar khao insho allah sob thik hoye zabe</p>`
        } else if (bmi >=18.5 && bmi <=24.9){
            result.style.color="green"
            sugg.innerHTML = `<p class="helthy_wight">Healthy Weight</p>`
            sugg01.innerHTML = `<p class="over_weightp">This weight is okay</p>`
        }else if(bmi >25.0 && bmi <29.9 ){
            result.style.color="#f75b0c"
            sugg.innerHTML = `<p class="over_weight">over_weight</h3>`
            sugg01.innerHTML = `<p class="over_weightp">vai tomar weight ta ektu beshi hoye geche tumi tomar wight ta  ektu komao tar jonno 3 month excercice korle tomar healthy weight weye zabe inshoallah</p>`
        }else if (bmi >30){
            result.style.color="red"
            sugg.innerHTML = `<p class="obesity">Obesity</p>`
            sugg01.innerHTML = `<p class="over_weightp">vai tomar obesity weight hoye geche tumi 1 Year excercice koro inshoallah tomar helthy weight weye hoye zabe inshoallah </p>`
        }
    }
})

// BMI = 703 × weight (lbs) / [height (in)]2
// In metric units: BMI = weight (kg) ÷ height 2 (meters)
// In US units: BMI = weight (lb) ÷ height 2 (inches) * 703