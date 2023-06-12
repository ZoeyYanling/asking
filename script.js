
//Add a listener for click events on submit button
var submitBtn = $('.submitBtn');
submitBtn.on('click',function(){
    var name = $（this）.siblings('#name').text();
    var nameInput = $（this）.siblings('#nameInput').val();
    var email = $（this）.siblings('#email').text();
    var emailInput = $（this）.siblings('#emailInput').val();
    var interest = $（this）.siblings('#interest').text();
    var interestInput = $（this）.siblings('#interestInput').val();
    localStorage.setItem(name,nameInput);
    localStorage.setItem(email,emailInput);
    localStorage.setItem(interest,interestInput);

});



