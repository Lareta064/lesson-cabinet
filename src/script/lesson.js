$(document).ready(function () {
	/*закрыть модальное окно по клику на крестик*/
	let menuButtons = document.querySelectorAll('button[data-target]');
	let modalWrappers = document.querySelectorAll('.modal-wrap');
	for(let modal of modalWrappers){
		modal.addEventListener('click', function(e){
			e.stopPropagation();
			if(e.target.classList.contains('close-modal') ){
				this.classList.remove('show');
			}
		})
	}
	
	/* показать модальное окно синее	*/
	
	for(let item of menuButtons){
		item.addEventListener('click', function(){
			let ThisData = item.getAttribute('data-target');
			for(let modal of modalWrappers){
				let modalData = modal.getAttribute('data-role');
				if(modalData == ThisData){
					modal.classList.add('show');
				}
			}
		})
	}
			
		
	
})