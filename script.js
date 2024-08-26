
document.addEventListener('DOMContentLoaded', function () {
    // Select the default offer div
    const defaultOffer = document.querySelector('.best-offer');

    if (defaultOffer) {
        // Add 'selected' class to the default offer div
        defaultOffer.classList.add('selected');

        // Check the associated radio input
        const radioInput = defaultOffer.querySelector('input[type="radio"]');
        if (radioInput) {
            radioInput.checked = true;
        }

    }
});

document.querySelectorAll('#offer-div').forEach(function (offerDiv) {
    offerDiv.addEventListener('click', function () {
        // Remove 'selected' class from all offer divs
        document.querySelectorAll('#offer-div').forEach(function (div) {
            div.classList.remove('selected');
            const Table = div.querySelector('table');
            Table.classList.add('hideTable');
        });

        // Remove 'checked' attribute from all radio inputs
        document.querySelectorAll('#offer-div input[type="radio"]').forEach(function (input) {
            input.checked = false;
        });

        // Add 'selected' class to the clicked offer div
        offerDiv.classList.add('selected');

        const offerTable = offerDiv.querySelector('table');
        offerTable.classList.remove('hideTable');

        // Get the first element with the class 'offer-price' within that div
        const priceElement = offerDiv.getElementsByClassName('offer-price')[0];
        let total = 0
        if (priceElement) {
            // Get the text content of the element
            total = priceElement.textContent;

            // Clean the text content to get the numeric value
            const priceValue = total.replace(/[^0-9.,]/g, '');
        } else {
            console.log('Price element not found');
        }

        // Select the element by its ID
        const contentDiv = document.getElementById('myTotal');

        // Update the element's content with the variable value
        contentDiv.textContent = `Total: ${total}`;

        // Check the associated radio input
        var radioInput = offerDiv.querySelector('input[type="radio"]');
        if (radioInput) {
            radioInput.checked = true;
        }
    });
});

