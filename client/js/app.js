// all of our js will be written here
window.addEventListener('load',()=>{
	// the load event only fires when the entire html doc/page has
	// loaded including all its elements i.e links/pics
	// not to be confused with the DOM Content loaded event that fires
	// when the initial html doc has been loaded..doesn't wait for inline
	// objs to load

	// we shall first save all of our bubble colors in an array
	const colors = [
		"#000",
		"red",
		"grey",
		"blue",
		"yellow",
		"green"
	];

	// we first select our objs
	const sounds = document.querySelectorAll('.sound');
	const cards = document.querySelectorAll('.card div');
	const visual = document.querySelector('.visual');

	// console.log(sounds);
	// loop through our cards
	// we shall use the forEach loop since it also allows us to access
	// our index values
	cards.forEach((card,index)=>{
		// add event to our card
		card.addEventListener('click',()=>{
			// by default our sound has to end first before we can play it
			// again ...to counter this we set currenttime attr to 0
			// the current time attr returns the current pos of our audio in secs to the set point
			sounds[index].currentTime = 0;
			//	we now want to play our sound
			sounds[index].play();
			// in order for us to access our index we pass it also to our createBUbbles func
			// since funcs have scopes
			createBubbles(index);
		});
	});

	// we now want to create our bubble effect 
	// to do so we shall create a function
	const createBubbles =(index)=>{
		// we first create the div that will house our animation
		const bubble = document.createElement('div');
		visual.appendChild(bubble);

		bubble.style.backgroundColor = colors[index];
		// describe our animation
		bubble.style.animation = "jump 1s ease";
		// by default our bubbles are been stored in the visual section
		// the more the number of taps on our tiles the more our performance issues
		// eventually our app will crash hence we need to fix this
		bubble.addEventListener('animationend',()=>{
			visual.removeChild(bubble);
		});
	};
});