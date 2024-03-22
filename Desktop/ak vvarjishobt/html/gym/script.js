let reps = 0;
let sets = 0;
let counting = false;
let timer;

document.getElementById('start').addEventListener('click', function() {
    if (!counting) {
        counting = true;
        timer = setInterval(countReps, 1000);
    }
});

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(timer);
    counting = false;
});

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(timer);
    counting = false;
    reps = 0;
    sets = 0;
    document.getElementById('reps').textContent = reps;
    document.getElementById('sets').textContent = sets;
});

function countReps() {
    reps++;
    document.getElementById('reps').textContent = reps;
    if (reps >= 10) {
        reps = 0;
        sets++;
        document.getElementById('sets').textContent = sets;
    }
}
