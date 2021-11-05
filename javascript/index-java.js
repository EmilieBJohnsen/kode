let erPaaPause = true;

let observer = new IntersectionObserver((entries, observer) => {
    for (const videosted of entries){ 
        if (videosted.isIntersecting && erPaaPause===true) { 
            video.play();
            erPaaPause = false;
        } else {
            video.pause();
            erPaaPause = true;
        }
    };

}, {threshold:1}); //1 = artikel skal være 100% synlig for at tælle med

// Hovedprogram
const video = document.getElementById("video"); //Observer kun på sted med id = video
observer.observe(video);

// Javascript for progressbar

const side2 = document.getElementById("side2");
const jordbaer = document.getElementById("2")

side2.addEventListener("mouseover", function(){
    jordbaer.classList.add("scale")

})

side2.addEventListener("mouseout", function(){
    jordbaer.classList.remove("scale")
})