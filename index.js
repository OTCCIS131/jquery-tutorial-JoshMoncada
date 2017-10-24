$(document).ready(function () {  
            
    let data = {
        ppt: 25.00,
        attendees: [ {name: 'Josh Moncada', email: 'joshmoncada@gmail.com'} ]
    };

    function getAttendeeCount() { 
        return $('.attendee-list .row.attendee').length; 
    }

    function addAttendee() {
        $('.attendee-list').append($('script[data-template="attendee"]').text());
    }

    function syncPurchaseButton() {
        $('#checkout-button span.amount').html('$' + data.cost * getAttendeeCount());
    }

    //set ticket cost
    $('#unit-price').html('$' + data.cost + ' each');

    //initialize one attendee
    addAttendee();
    syncPurchaseButton();
}); 


function addAttendee() {
    $('.attendee-list').append( $('script[data-template="attendee"]').text());
    syncRemoveButtons();
}

function syncRemoveButtons() {
    if (getAttendeeCount()===1){
    $('.attendee-list .attendee .remove-attendee').first().hide();
    } 
    else{
    $('.attendee-list .attendee .remove-attendee').show();
    }
}

function syncPurchaseButton() {
    $('#checkout-button span.amount').html('$' + data.cost * getAttendeeCount());
}

//Events
$('.add-attendee').on('click', function (event) {
        event.preventDefault();
        addAttendee();
        $(this).trigger('attendee:add');
    }).on('attendee:add', 
    function () {
        syncPurchaseButton();
        syncRemoveButtons();
    });