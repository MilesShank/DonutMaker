let donutNumber = document.querySelector('.donutNumber');
donutButton = document.createElement('button');
donutButton.textContent = 'Make Donuts';
document.body.append(donutButton);
donutButton.addEventListener('click',makeDonuts);

function makeDonuts(){
    donutNumber = donutNumber+1;
    print(donutNumber);
}