let arr2 = ["Schooling","House Captain","Got NCC A certificate", "Air rifle shooting third position inter house compitition"];
let line = 0;
let word = 0;
let misthi=document.getElementById("one");
function typewriter(){
    if(word<arr2[line].length){
        misthi.innerHTML+=arr2[line].charAt(word);
        word++;
        setTimeout(typewriter,50);
    }
    else{
        misthi.innerHTML+="<br>";
        line++;
        word=0;
        if(line<arr2.length){
            setTimeout(typewriter,50);
        }
    }
}
typewriter();
function type(text, elementId, speed = 25){
    let i = 0;
    const a = document.getElementById(elementId);
    const typing = () => {
        if (i < text.length) {
            a.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    };
    typing();
}
setTimeout(() => {type("Schooling", "h1"); }, 2000);
setTimeout(() => {type("Betthelium Academy", "first"); }, 6500);
setTimeout(() => {type("Army Public School Kota", "two"); }, 7300);
setTimeout(() => {type("Army Public School Narangi", "three"); }, 8000);
setTimeout(() => {type("Army Public School Beas", "four"); }, 9000);