


// const buttons = document.querySelectorAll('#button')


// for(const button of buttons) {
// 	button.addEventListener('click', function(){
//         event.preventDefault();
// 		console.log('kliknąłem w button ' + this.innerText);
// 	});
// }

//////////////////////////////////////////////////////////////////







const submitForm = (event) => {  // definicja funkcji wywoływanej "clickiem"
    event.preventDefault(); // zatrzymanie eventu

    let firstName = document.querySelector('[name="fname"]');  // Odwołanie się do pola wewnętrznego atrubutu liniowego obiektu html
    let lastName = document.querySelector('[name="lname"]');  // // Odwołanie się do pola wewnętrznego atrubutu liniowego obiektu html

    console.log(firstName.value + lastName.value);
}

let form = document.getElementById('form'); // umieszczenie odniesienia formularza w zmiennej

form.addEventListener('submit', submitForm); // podpięcie metody 'eventListener' do formularza w zmiennej

console.log(form);