// API Key Config (Pehle free se test kar)
const CRIC_API_KEY = 'your-free-key-here';
const RAZORPAY_KEY = 'rzp_test_yourkey';

// Live Match Data Fetch (Example)
function fetchLiveMatches() {
    // Free API: cricapi.com/api/matches.php
    fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${CRIC_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log('Live matches:', data);
            // Dynamically update match cards
        })
        .catch(error => console.error('Error:', error));
}

// Razorpay Payment Function
function makePayment(planId, amount) {
    const options = {
        key: RAZORPAY_KEY,
        amount: amount * 100, // In paise
        currency: 'INR',
        name: 'HinglishCricketAI',
        description: 'Premium Subscription',
        handler: function(response) {
            alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
            // Save to database
        }
    };
    
    const rzp = new Razorpay(options);
    rzp.open();
}
