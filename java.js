function carregar(){
var msg=window.document.querySelector('div#msg')
var foto=window.document.querySelector('div#foto')
var d= new Date()
var hora= d.getHours()
msg.innerHTML=`Agora são ${hora} horas!`
if(hora>5 && hora<12){
    img.src='manh.png'
    document.body.style.background= '#c4a062'
}else if(hora>=12 && hora<18){
    img.src='tard.png'
    document.body.style.background= '#4f804e'
}else{
    img.src='noit.png'
    document.body.style.background= '#3a3f57'
}
}