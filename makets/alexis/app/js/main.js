"use strict";

//! IE
if (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject) {
	let sectionTitleWrappers = document.querySelectorAll('.section-title__wrapper');

	for (let i = 0; i < sectionTitleWrappers.length; i++) {
		sectionTitleWrappers[i].classList.add('section-title__wrapper_ie');
	}
}

//! variables
let hamburger = document.querySelector('.mobile-nav__hamburger');
let mobileNav = document.querySelector('.mobile-nav__nav');
let header = document.querySelector('.header');
let indexAboutCoordTop;
indexAboutCoordTop = document.querySelector('.index-about').getBoundingClientRect().top + pageYOffset;
let indexTeam = document.querySelector('.index-team');
let indexVideoBtn = document.querySelector('.index-video__btn');
let indexVideo = document.querySelector('.index-video__video');
let indexTeamCards = document.querySelectorAll('.index-team__card');
let indexTeamComment = document.querySelector('.index-team__comment');
let indexTeamCommentData = [
	`Monetization first mover advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market business-to-consumer paradigm shift traction. Rockstar 
	bandwidth twitter ownership success disruptive series A financing user experience buyer client social proof validation hypotheses. User experience crowdfunding 
	facebook seed round A/B testing mass market. `,
	`Monetization first mover advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market business-to-consumer paradigm shift traction. Rockstar 
	bandwidth twitter ownership success disruptive series A financing user experience buyer client social proof validation hypotheses. User experience crowdfunding 
	facebook seed round A/B testing mass market. Monetization first mover advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market business-to-consumer paradigm shift traction. Rockstar 
	bandwidth twitter ownership success disruptive series A financing user experience buyer client social proof validation hypotheses. User experience crowdfunding 
	facebook seed round A/B testing mass market. `,
	`Monetization first mover advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market business-to-consumer paradigm shift traction. Rockstar 
	bandwidth twitter ownership success disruptive series A financing user experience buyer client social proof validation hypotheses. User experience crowdfunding 
	facebook seed round A/B testing mass market. `,
	`Monetization first mover advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market business-to-consumer paradigm shift traction. Rockstar 
	bandwidth twitter ownership success disruptive series A financing user experience buyer client social proof validation hypotheses. User experience crowdfunding 
	facebook seed round A/B testing mass market. Monetization first mover advantage iPad. Interaction design buzz handshake. Stealth agile development branding. Backing facebook hackathon conversion startup scrum project niche market business-to-consumer paradigm shift traction. Rockstar 
	bandwidth twitter ownership success disruptive series A financing user experience buyer client social proof validation hypotheses. User experience crowdfunding 
	facebook seed round A/B testing mass market. `
];

var swiper = new Swiper('.index-testimonials__swiper', {
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '"></span>';
		},
	},
});

//! events

hamburger.addEventListener('click', function () {
	mobileNav.classList.toggle('mobile-nav__nav_active');
	this.classList.toggle('mobile-nav__hamburger_active');
});


window.addEventListener('scroll', function () {
	if (indexAboutCoordTop < pageYOffset)
		header.classList.add('header_scroll');
	else
		header.classList.remove('header_scroll');
});


indexTeam.addEventListener('click', function (event) {
	let target = event.target.closest('.index-team__card-arrow');

	if (!target) return;

	target.closest('.col-lg-3').querySelector('.index-team__card-comment').classList.toggle('index-team__card-comment_active');

	target.classList.toggle('index-team__card-arrow_active');
});

indexVideoBtn.addEventListener('click', function () {
	indexVideo.setAttribute('src', 'https://www.youtube.com/embed/NpEaa2P7qZI?autoplay=1');
	indexVideo.style.zIndex = 100;
});


for (let i = 0; i < indexTeamCards.length; i++) {
	indexTeamCards[i].addEventListener('mouseover', function () {
		indexTeamComment.setAttribute('class', `index-team__comment index-team__comment_arrow-pos_${i}`);
		indexTeamComment.querySelector('.index-team__comment-text').innerHTML = indexTeamCommentData[i];
	});
}


//! functions

function ibg() {
	let ibg = document.querySelectorAll(".ibg");

	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}


ibg();
