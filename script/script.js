document.addEventListener("DOMContentLoaded", () => {
	
	let menuBtn = document.querySelector('.menu-btn');
	let menu = document.querySelector('.menu');

	menuBtn.addEventListener('click', function(){
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
	});

	let arrow = document.querySelector('.arrow'),
	header = document.querySelector('.header');

	window.addEventListener('scroll', () => {
		arrow.classList.toggle('showA', window.scrollY>500);
	});

	arrow.addEventListener('click', () => {
		header.scrollIntoView({block: "center", behavior: "smooth"});
	});


	let tabs = document.querySelectorAll('.tab_button'),
	content = document.querySelectorAll('.tab'),
	tabsParent = document.querySelector('.button_flex');

	function hideTab(){
		content.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'anima');
		});

		tabs.forEach(item => {
			item.classList.remove('active', 'anima');
		});
	}

	function showTab(i = 0){
		content[i].classList.add('show', 'anima');
		content[i].classList.remove('hide');
		tabs[i].classList.add('active');
	}

	hideTab();
	showTab();

	tabsParent.addEventListener('click', (event) => {
		let target = event.target;
		if (target && target.classList.contains('tab_button')){
			tabs.forEach((item, i) => {
				if (target == item){
					hideTab();
					showTab(i);
				}
			});
		}
	});


	const modalOpen = document.querySelector('[data-modal]'),
	modal = document.querySelector('.modal'),
	modalBack = document.querySelector('.modal_abs'),
	modalClose = document.querySelector('[modal-close]');

	function OpenModal(){
		modal.classList.add('show');
		modal.classList.remove('hide');
		modalBack.classList.add('show');
		modalBack.classList.remove('hide');
		document.body.style.overflow = 'hidden';
	}
	
	function CloseModal(){
		modal.classList.add('hide');
		modal.classList.remove('show');
		modalBack.classList.add('hide');
		modalBack.classList.remove('show');
		document.body.style.overflow = '';
	}

	modalBack.addEventListener('click', (e) => {
		if (e.target === modalBack){
			CloseModal();
		}
	});

	modalOpen.addEventListener('click', () => {
		OpenModal();
	});	

	modalClose.addEventListener('click', () => {
		CloseModal();
	});	

	let checkbox = document.querySelector('.check'),
	password = document.querySelector('.password');

	checkbox.addEventListener('click', () => {
		password.classList.toggle('see_password');
	});

	let signUp = document.querySelector('.sign_up');

	signUp.addEventListener('click', () => {
		password.classList.remove('uncorrectly_password');
		let value_password = document.querySelector('.password').value;
		if (value_password.length < 8){
			password.classList.remove('border');
			password.classList.add('uncorrectly_password');
		}
		else{
			password.classList.add('border');
		}
	});


});


