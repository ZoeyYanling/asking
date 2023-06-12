
//Add a listener for click events on submit button
var submitBtn = $('.submitBtn');
submitBtn.on('click',function(){
    var name = $('#name').text();
    var nameInput = $('#nameInput').val();
    var email = $('#email').text();
    var emailInput = $('#emailInput').val();
    var interest = $('#interest').text();
    var interestInput = $('#interestInput').val();
    localStorage.setItem(name,nameInput);
    localStorage.setItem(email,emailInput);
    localStorage.setItem(interest,interestInput);

    console.log(nameInput);
    console.log(emailInput);
    console.log(interestInput);
});



