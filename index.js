/** 
   2. Javascript.
           a. We have to listen to three events.
            i. Click -> Give the rating.
                        Update star upto taht level.
                        Update rating count.
            
            ii. mouseover -> we have to chnage the star upto that level to yellow 
            without chnaging the rating once rating is given.

            Edge case:
            iii. mouseleave: move it gray stars.

 **/

const starContainer = document.querySelector(".star_container");
const StarArray = document.querySelectorAll(".star");
const countSpan = document.querySelector("#count");
let RATING_COLOR = "yellow";
let clickedStarIndex = 0;

//Event Listener on starContainer when stars are clicked
starContainer.addEventListener("click", (event) => {
    if (event.target.hasAttribute("idx")) {
        clickedStarIndex = event.target.getAttribute("idx");
        fillStarsToYellowUptoIndex(clickedStarIndex);
        countSpan.textContent = clickedStarIndex;
    }
})

//Event Lister for hover
starContainer.addEventListener("mouseover",(event) =>{
    if(event.target.hasAttribute("idx")){
        let hoveredStarIndex=event.target.getAttribute("idx");
        fillStarsToYellowUptoIndex(hoveredStarIndex);
    }
})

//EventListener for mouseleave
starContainer.addEventListener("mouseleave",(event) =>{
    fillStarsToYellowUptoIndex(clickedStarIndex);
})


//Helper methods
function fillStarsToYellowUptoIndex(clickedStarIndex) {
    restAllStarsToGrayColor();

    for (let currrentStarIndex = 0; currrentStarIndex < clickedStarIndex; currrentStarIndex++) {
        StarArray[currrentStarIndex].classList.add(RATING_COLOR);
    }
}

function restAllStarsToGrayColor() {
    for (star of StarArray) {
        star.classList.remove(RATING_COLOR);
    }
}