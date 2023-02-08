
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.getElementById('progress');
let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    fnSendToNR('currentActive: ' + currentActive); // Send currentActive to Node-RED
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
           
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

function fnSendToNR(msg) {
    uibuilder.send(msg)
}

uibuilder.onChange('msg', function(newVal){
    console.log('msg changed to: ', newVal)
})

uibuilder.onChange('topic', function(newVal){
    console.log('topic changed to: ', newVal)
})

uibuilder.onChange('payload', function(newVal){
    console.log('payload changed to: ', newVal)
})

uibuilder.onChange('fullmsg', function(newVal){
    console.log('fullmsg changed to: ', newVal)
})

uibuilder.onChange('uibuilderCtrl', function(newVal){
    console.log('uibuilderCtrl changed to: ', newVal)
})

uibuilder.onChange('uibuilderFrontend', function(newVal){
    console.log('uibuilderFrontend changed to: ', newVal)
})

uibuilder.onChange('uibuilderBackend', function(newVal){
    console.log('uibuilderBackend changed to: ', newVal)
})

uibuilder.onChange('uibuilderEvents', function(newVal){
    console.log('uibuilderEvents changed to: ', newVal)
})

uibuilder.onChange('uibuilderDebug', function(newVal){
    console.log('uibuilderDebug changed to: ', newVal)
})  



