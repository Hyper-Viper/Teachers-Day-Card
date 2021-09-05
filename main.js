var open = false;

function opening(){
    if (open == false){
        gif.style.display = "none";
        gif2.style.display = "inline-block";
        setTimeout(function(){
            gif2.style.display = "none";
            img.style.display = "inline-block";
            h2.style.display = "inline-block";
            before.style.display = "inline-block";
            before.style.animation = "ani 2s linear forwards";
        }, 3200);
    }
}