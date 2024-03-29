function num_one(){
    if(kijelzo.length < 34){
        kijelzo = document.getElementById('display').innerHTML += "1"
    }  
}

function num_two(){
    if(kijelzo.length < 34){
        kijelzo = document.getElementById('display').innerHTML += "2"
        }
}

function num_three(){
    if(kijelzo.length < 34){
        kijelzo = document.getElementById('display').innerHTML += "3"
        }
}

function num_four(){
    if(kijelzo.length < 34){
        kijelzo = document.getElementById('display').innerHTML += "4"
        }
}

function num_five(){
    if(kijelzo.length < 34){
        kijelzo = document.getElementById('display').innerHTML += "5"
        }
}

function num_six(){
    if(kijelzo.length < 34){
        kijelzo = document.getElementById('display').innerHTML += "6"
        }
}

function num_seven(){
    if(kijelzo.length < 34){
        kijelzo = document.getElementById('display').innerHTML += "7"
       }
}

function num_eight(){
    if(kijelzo.length < 34){
        kijelzo = document.getElementById('display').innerHTML += "8"
        }
}

function num_nine(){
    if(kijelzo.length < 34){
        kijelzo = document.getElementById('display').innerHTML += "9"
       }
}

function num_zero(){
    if(kijelzo.length < 34){
        kijelzo = document.getElementById('display').innerHTML += "0"
       }
}


function char_com (){
    if(kijelzo.length < 34){
        kijelzo = document.getElementById('display').innerHTML += "."
        }
}

function op_div(){
    if(kijelzo.length < 34){
        kijelzo = document.getElementById('display').innerHTML += "/"
        }
}

function op_mul(){
    if(kijelzo.length < 34){
        kijelzo = document.getElementById('display').innerHTML += "*"
       }
}

function op_add(){
    if(kijelzo.length < 34){
        kijelzo = document.getElementById('display').innerHTML += "+"
        }
}

function op_minus(){
    if(kijelzo.length < 34){
        kijelzo = document.getElementById('display').innerHTML += "-"
        }
}

function C_button(){
    kijelzo = document.getElementById('display').innerHTML = ""
}

function Torles(){
    kijelzo = document.getElementById('display').innerHTML = kijelzo.slice(0, -1)
}

function szamitas (){
    try{
        let result = eval(kijelzo)
        document.getElementById('display').innerHTML = result
    }
    catch(error){
        document.getElementById('display').innerHTML = "Error"
    }

}

let kijelzo = ""

let one = document.getElementById('egy')
let two = document.getElementById('ketto')
let three = document.getElementById('harom')
let four = document.getElementById('negy')
let five = document.getElementById('ot')
let six = document.getElementById('hat')
let seven = document.getElementById('het')
let eight = document.getElementById('nyolc')
let nine = document.getElementById('kilenc')
let zero = document.getElementById('nulla')

let comma = document.getElementById('vesszo')
let divide = document.getElementById('osztas')
let multiply = document.getElementById('szorzas')
let add = document.getElementById('plusz')
let minus = document.getElementById('minusz')

let equal = document.getElementById('egyenlo')

let m_torles = document.getElementById('tisztitas')
let torles_gomb = document.getElementById('torles')

let current_num = ""

//----------------

m_torles.addEventListener("click", C_button)
torles_gomb.addEventListener("click", Torles)


one.addEventListener("click", num_one)
two.addEventListener("click", num_two)
three.addEventListener("click", num_three)
four.addEventListener("click", num_four)
five.addEventListener("click", num_five)
six.addEventListener("click", num_six)
seven.addEventListener("click", num_seven)
eight.addEventListener("click", num_eight)
nine.addEventListener("click", num_nine)
zero.addEventListener("click", num_zero)


equal.addEventListener("click", szamitas)

comma.addEventListener("click", char_com)
divide.addEventListener("click", op_div)
multiply.addEventListener("click", op_mul)
add.addEventListener("click", op_add)
minus.addEventListener("click", op_minus)

