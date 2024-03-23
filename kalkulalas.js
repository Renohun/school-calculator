function num_one(){
    let kijelzo = document.getElementById('display').innerHTML += "1"
    console.log("1"); console.log("   "); console.log(kijelzo);
}

function num_two(){
    let kijelzo = document.getElementById('display').innerHTML += "2"
    console.log("2"); console.log("   "); console.log(kijelzo);
}

function num_three(){
    let kijelzo = document.getElementById('display').innerHTML += "3"
    console.log("3"); console.log("   "); console.log(kijelzo);
}

function num_four(){
    let kijelzo = document.getElementById('display').innerHTML += "4"
    console.log("4"); console.log("   "); console.log(kijelzo);
}

function num_five(){
    let kijelzo = document.getElementById('display').innerHTML += "5"
    console.log("5"); console.log("   "); console.log(kijelzo);
}

function num_six(){
    let kijelzo = document.getElementById('display').innerHTML += "6"
    console.log("6"); console.log("   "); console.log(kijelzo);
}

function num_seven(){
    let kijelzo = document.getElementById('display').innerHTML += "7"
    console.log("7"); console.log("   "); console.log(kijelzo);
}

function num_eight(){
    let kijelzo = document.getElementById('display').innerHTML += "8"
    console.log("8"); console.log("   "); console.log(kijelzo);
}

function num_nine(){
    let kijelzo = document.getElementById('display').innerHTML += "9"
    console.log("9"); console.log("   "); console.log(kijelzo);
}


function char_com (){
    let kijelzo = document.getElementById('display').innerHTML += ","
    console.log(","); console.log("   "); console.log(kijelzo);
}

function op_div(){
    let kijelzo = document.getElementById('display').innerHTML += "/"
    console.log("/"); console.log("   "); console.log(kijelzo);
}

function op_mul(){
    let kijelzo = document.getElementById('display').innerHTML += "x"
    console.log("*"); console.log("   "); console.log(kijelzo);
}

function op_add(){
    let kijelzo = document.getElementById('display').innerHTML += "+"
    console.log("+"); console.log("   "); console.log(kijelzo);
}

function op_minus(){
    let kijelzo = document.getElementById('display').innerHTML += "-"
    console.log("-"); console.log("   "); console.log(kijelzo);
}

function C_button(){
    let kijelzo = document.getElementById('display').innerHTML = ""
}

function Torles(){
    console.log(typeof kijelzo)
}

function szamitas (kijelzo) {

}

let one = document.getElementById('egy')
let two = document.getElementById('ketto')
let three = document.getElementById('harom')
let four = document.getElementById('negy')
let five = document.getElementById('ot')
let six = document.getElementById('hat')
let seven = document.getElementById('het')
let eight = document.getElementById('nyolc')
let nine = document.getElementById('kilenc')
let zero = document.getElementById('nulll')

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


equal.addEventListener("click", szamitas)

comma.addEventListener("click", char_com)
divide.addEventListener("click", op_div)
multiply.addEventListener("click", op_mul)
add.addEventListener("click", op_add)
minus.addEventListener("click", op_minus)