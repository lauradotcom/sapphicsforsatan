let primaryButton = document.getElementById('btn-primary');
let primaryButtonStyles = document.getElementById('btn-primary-styles');
let secondaryButton = document.getElementById('btn-secondary');
let secondaryButtonStyles = document.getElementById('btn-secondary-styles');

primaryButton.addEventListener('onclick', changeButtonText) { 
    if (primaryButton.innerHTML == 'it\'s pink') {
        primaryButton.innerHTML = 'primary';
    } else {
    primaryButton.innerHTML = 'it\'s pink';
    }
};

primaryButton.addEventListener('onclick', toggleStyleRules) {
    if (primaryButtonStyles.style.display == 'block') {
        primaryButtonStyles.style.display = 'none';
    } else {
        primaryButtonStyles.style.display = 'block';
    }
}


secondaryButton.onclick = function() {
    if (secondaryButton.innerHTML == 'it\'s orange') {
        secondaryButton.innerHTML = 'secondary';
    } else {
        secondaryButton.innerHTML = 'it\'s orange';
    }
}

