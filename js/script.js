const button = document.querySelector('.get-jokes');

button.addEventListener('click', (event) =>{
const number = document.querySelector('input[type="number"]').value;
console.log(number);
const url = 'http://api.icndb.com/jokes/random/';

    fetch(`${url}${number}`)
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data=>{
        let output = '';
        console.log(data);

        data.value.forEach(joke => {
            output += `<li>${joke.joke}</li>`;
        });
        
        document.querySelector('.jokes').innerHTML = output;
    })
    .catch(error=> {
        console.log(error);
    });
    event.preventDefault();
});