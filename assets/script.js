const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

//Get the slideshow div element
const slideshow = document.getElementById("banner");

//Init the root path for all slideshow images
const slideRootPath = "./assets/images/slideshow/";

//Get the slide img element ".banner-img" from the slideshow
const slideImg = document.querySelector(".banner-img");

const slideTagLine = document.getElementById("banner").querySelector("p");

//Init slide index
let slideIndex = 0;

//Init div parent element that will contain all the dots
let dots = document.createElement("div");
dots.classList.add("dots");

addDotsToSlideShow();

//Get both arrows img elements ".arrow" from the slideshow
let arrow_left = document.querySelector(".arrow_left");
let arrow_right = document.querySelector(".arrow_right");

//On click on the left_arrow, decrease by 1 slideIndex. If slideIndex is already at 0, set it to the last index of slides.
arrow_left.addEventListener("click", () =>{
	if(slideIndex !== 0){
		slideIndex--;
	}
	else{
		slideIndex = slides.length - 1;
	}

	updateSlide();
})

//On click on the right_arrow, increase by 1 slideIndex. If slideIndex is already at last index of slides, set it to 0.
arrow_right.addEventListener("click", () =>{
	if(slideIndex !== (slides.length - 1)){
		slideIndex++;
	}
	else{
		slideIndex = 0;
	}

	updateSlide();
})

//Add a dot to parent element .dots for each object in slides (array), and add class ".dot_selected" on the first one
function addDotsToSlideShow(){
	for(i = 0; i < slides.length; i++){
		let dot = document.createElement("div");
		dot.classList.add("dot");

		if(i === 0){
			dot.classList.add("dot_selected");
		}

		dots.append(dot);
	}

	slideshow.append(dots);
}

//Update slide by calling updateSlideImg(), updateSlideTagLine() and updateDotFocus()
function updateSlide(){
	updateSlideImg();
	updateSlideTagLine();
	updateDotFocus();
}

//Update the slide img element from the slideshow
function updateSlideImg(){
	slideImg.src = slideRootPath + slides[slideIndex].image;
}

//Update the slide p element from the slideshow
function updateSlideTagLine(){
	slideTagLine.innerHTML = slides[slideIndex].tagLine;
}

//Update dot focus to remove class ".dot_selected" on the previous slide and add class ".dot_selected" to the dot corresponding to the next slide
function updateDotFocus(){
	let previousDot = document.querySelector(".dot_selected");
	let nextDot = dots.children.item(slideIndex);
	
	previousDot.classList.remove("dot_selected");
	nextDot.classList.add("dot_selected");
}
