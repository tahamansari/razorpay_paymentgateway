/*global cordova, module*/

module.exports = {
    open: function (options, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Checkout", "open", [JSON.stringify(options)]);
    }
};


var options = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'INR',
    key: 'rzp_test_1DP5mmOlF5G5ag',
    amount: '5000',
    name: 'foo',
    prefill: {email: 'pranav@razorpay.com', contact: '8879524924', name: 'Pranav Gupta'},
    theme: {color: '#F37254'}
}

var successCallback = function(payment_id) {
    alert('payment_id: ' + payment_id);
}

var cancelCallback = function(error) {
    alert(error.description + ' (Error '+error.code+')');
}

function go(){

    RazorpayCheckout.open(options, successCallback, cancelCallback);
    
}

