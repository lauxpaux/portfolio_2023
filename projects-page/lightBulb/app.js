// window.alert("It worked!");


const bulb = document.querySelector(".bulb");
const darkMode = document.querySelector("#darkMode");



let toggle = false;

bulb.addEventListener("click", () => {

    const timeline = anime.timeline({

        duration: 400,
        easing: "easeOutCirc"
    });

    timeline.add({
        targets: ".bulb",
        d: [
            {value: toggle ? bulb : darkMode }
        ]
       
    })
    .add ({
        targets: "section",
        backgroundColor: toggle ? "rgb(255, 255, 255)" : "rgb(22, 22, 22)",
        color: toggle ? "rgb(22, 22, 22)" : "rgb(255, 255, 255)"
    })
    .add({
       
        
    })
    

    if(!toggle) {
        toggle = true;
    } else {
        toggle = false;
    };

});
