let interval1;
let interval2;
let interval3;
let interval4;
let interval5;
function on_lights() {

    function red() {
        var red = document.querySelector("#red");
        red.style = "background-color:red; box-shadow: 0 0 20px 5px red"
        var green = document.getElementById("green")
        green.style.backgroundColor = "black";
        green.style.boxShadow = "none"
        interval1 = setTimeout(yellow, 1000);
        

    }


    function yellow() {

        var yellow = document.getElementById("yellow");
        yellow.style.backgroundColor = "#d9e00b";
        yellow.style.boxShadow = "0 0 20px 5px #d9e00b";
        var red = document.querySelector("#red");
        red.style.backgroundColor = "black";
        red.style.boxShadow = "none";
        interval2 = setTimeout(green, 1000);
    }


    function green() {
        var green = document.getElementById("green");
        green.style.backgroundColor = "#06d417";
        green.style.boxShadow = " 0 0 20px 5px #06d417"
        var yellow = document.getElementById("yellow");
        yellow.style.backgroundColor = "black";
        yellow.style.boxShadow = "none";
        interval3 = setTimeout(red, 1000);

    }
    
    red();

}


function off_lights() {
    clearTimeout(interval1);
    clearTimeout(interval2);
    clearTimeout(interval3);
    clearTimeout(interval4);
    clearTimeout(interval5);
    var red = document.querySelector("#red");
    var yellow = document.getElementById("yellow");
    var green = document.getElementById("green");
    yellow.style.backgroundColor = "black";
    yellow.style.boxShadow = "none";
    red.style.backgroundColor = "black";
    red.style.boxShadow = "none";
    green.style.backgroundColor = "black";
    green.style.boxShadow = "none"

}

function green_light() {
    clearTimeout(interval1);
    clearTimeout(interval2);
    clearTimeout(interval3);
   
    green.style.backgroundColor = "#06d417";
    green.style.boxShadow = " 0 0 20px 5px #06d417"
    yellow.style.backgroundColor = "black";
    yellow.style.boxShadow = "none";
    red.style.backgroundColor = "black";
    red.style.boxShadow = "none";


}

function red_light() {
    clearTimeout(interval1);
    clearTimeout(interval2);
    clearTimeout(interval3);

    red.style.backgroundColor = "red";
    red.style.boxShadow = " 0 0 20px 5px red"
    yellow.style.backgroundColor = "black";
    yellow.style.boxShadow = "none";
    green.style.backgroundColor = "black";
    green.style.boxShadow = "none";
}

function yellow_blink() {
    function yellow_light() {
        yellow.style.backgroundColor = "#d9e00b";
        yellow.style.boxShadow = "0 0 20px 5px #d9e00b";
        interval4=setTimeout(black_light,250)

    }
    function black_light() {
        
        yellow.style.backgroundColor = "black";
        yellow.style.boxShadow = "none";
        interval5=setTimeout(yellow_light,250)

    }
    yellow_light();
}
