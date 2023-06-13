
//Add a listener for click events on submit button
var submitBtn = $('.submitBtn');
submitBtn.on('click', function(){
    var name = $('#name').text();
    var nameInput = $('#inputName').val();
    var email = $('#email').text();
    var emailInput = $('#inputEmail').val();
    var interest = $('#interest').text();
    var interestInput = $('#inputInterest').val();
    localStorage.setItem('name',nameInput);
    localStorage.setItem('email',emailInput);
    localStorage.setItem('interest',interestInput);    
});

console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('email'));
console.log(localStorage.getItem('interest'));



