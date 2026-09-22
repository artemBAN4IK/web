function checkNumber(number){
let sign;
if (number > 0) {
    sign = "положительное";
}else if (number < 0) {
    sign = "отрицательное";
}else{
    sign = "ноль";
}
let schet=""
if(number%2==0) {
    schet="Чётное"
}else{
    schet="Нечётное"
}
console.log(sign,schet);
}