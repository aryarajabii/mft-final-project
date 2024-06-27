
document.addEventListener('DOMContentLoaded', () => {
    const increaseButtons = document.querySelectorAll('.increase');
    const decreaseButtons = document.querySelectorAll('.decrease');

    increaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-counter-id');
            const counterElement = document.querySelector(`.counter[data-counter-id="${id}"]`);
            let counter = parseInt(counterElement.textContent);
            counter++;
            counterElement.textContent = counter;
        });
    });

    decreaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-counter-id');
            const counterElement = document.querySelector(`.counter[data-counter-id="${id}"]`);
            let counter = parseInt(counterElement.textContent);
            if (counter > 0) {
                counter--;
            }
            counterElement.textContent = counter;
        });
    });
});


function showPizzas() {
    document.getElementById("container1").style.display = "none";
    document.getElementById("container2").style.display = "block";
    document.getElementById("container3").style.display = "none";
    document.getElementById("container4").style.display = "none";
    document.getElementById("container5").style.display = "none";
    restoreCart();
}

function showBurgers() {
    document.getElementById("container1").style.display = "block";
    document.getElementById("container2").style.display = "none";
    document.getElementById("container3").style.display = "none";
    document.getElementById("container4").style.display = "none";
    document.getElementById("container5").style.display = "none";
    restoreCart();
}


function showSokhari() {
    document.getElementById("container3").style.display = "block";
    document.getElementById("container2").style.display = "none";
    document.getElementById("container1").style.display = "none";
    document.getElementById("container4").style.display = "none";
    document.getElementById("container5").style.display = "none";
    restoreCart();
}

function showSand() {
    document.getElementById("container3").style.display = "none";
    document.getElementById("container2").style.display = "none";
    document.getElementById("container1").style.display = "none";
    document.getElementById("container4").style.display = "block";
    document.getElementById("container5").style.display = "none";
    restoreCart();
}

function showDrinks() {
    document.getElementById("container3").style.display = "none";
    document.getElementById("container2").style.display = "none";
    document.getElementById("container1").style.display = "none";
    document.getElementById("container4").style.display = "none";
    document.getElementById("container5").style.display = "block";
    restoreCart();
}
