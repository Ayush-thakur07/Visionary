
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