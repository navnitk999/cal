function calculateTip() {
    var billAmount = parseFloat(document.getElementById('billAmount').value);
    var serviceQuality = parseFloat(document.getElementById('serviceQuality').value);
    var numPeople = parseInt(document.getElementById('numPeople').value);

    if (isNaN(billAmount) || isNaN(serviceQuality) || isNaN(numPeople)) {
        alert('Please enter valid numbers.');
        return;
    }

    if (serviceQuality < 1 || serviceQuality > 5 || numPeople <= 0) {
        alert('Service quality should be between 1-5 and number of people should be greater than 0.');
        return;
    }

    var tipPerPerson = (billAmount * (serviceQuality / 100)) / numPeople;
    var formattedTip = tipPerPerson.toFixed(2);

    document.getElementById('tipResult').innerText = 'Tip per person: $' + formattedTip;
}
