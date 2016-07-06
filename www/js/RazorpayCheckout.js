var options = {
    "key": "rzp_test_bzQ8bL8Y1yWgyK",
    "amount": "20000", // 2000 paise = INR 20
    "name": "Test payment",
    "description": "Test Product",
    "image": "/your_logo.png",
    "handler": function (response){

        alert(response.razorpay_payment_id);
    },
    "prefill": {
        "name": "Test Name",
        "email": "Test@gmail.com"
    },
    "notes": {
        "address": "Hello World"
    },
    "theme": {
        "color": "#F37254"
    }
};

var rzp1 = new Razorpay(options);

$("#rzp-button1").click(function(e){
    rzp1.open();
    e.preventDefault();
});