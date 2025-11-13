function createNavigationButton() {
    const newButton = document.createElement('button');

    newButton.textContent = 'Distraction Free Zone | Click Here';

    newButton.addEventListener('click', function() {
        window.location.href = 'buttonplace.html';
    });

    const container = document.getElementById('button-container');

    if (container) {
        container.appendChild(newButton);
    } else {
        console.error("Button container element not found!");
    }
}

createNavigationButton();