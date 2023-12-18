

    contactForm.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        var nameInput = document.getElementById('name');
        var surnameInput = document.getElementById('surname');
        var emailInput = document.getElementById('email');
        var messageInput = document.getElementById('message');

        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            return false;
        }

        if (surnameInput.value.trim() === '') {
            alert('Please enter your surname.');
            return false;
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '' || !emailPattern.test(emailInput.value)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (messageInput.value.trim() === '') {
            alert('Please enter your message.');
            return false;
        }

        return true;
    }


