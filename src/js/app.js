
    let autoClickerPrice = 10;
    let multiplierPrice = 15;
    const donutNumberDisplay = document.querySelector('.donutNumber');
    const autoClickerPriceDisplay = document.querySelector('.autoClickerPrice');
    const autoClickerNumberDisplay = document.querySelector('.autoClickers');
    const multiplierNumberDisplay = document.querySelector('.multiplierNumber');
    const multiplierPriceDisplay = document.querySelector('.multiplierPrice');
    const autoClickerButton = document.querySelector('.autoClickerButton');
    const multiplierButton = document.querySelector('.multiplierButton');
    const donutimg = document.querySelector('.donutimg');
    const donutbrigade =document.querySelector('.donutbrigade');
    const resetButton = document.querySelector('.resetButton');
    let autoClickerStorage = 0;
    let multiplierStorage = 0;
    let donutNumber = 0;
    let donutsToMake = 1.2;
    donutNumberDisplay.textContent = 0 + " donuts";
    autoClickerNumberDisplay.textContent = 0 + " auto-clickers";
    autoClickerPriceDisplay.textContent = "current price of auto-clickers: " + autoClickerPrice; 
    multiplierPriceDisplay.textContent = "current price of donut multipliers: " + multiplierPrice;
    multiplierNumberDisplay.textContent = "number of multipliers: " + 0;
    autoClickerButton.style.visibility="hidden";
    multiplierButton.style.visibility="hidden";
    
    // donutButton = document.createElement('button');
    // donutButton.textContent = 'Make Donuts';
    // document.body.append(donutButton);
    // donutButton.addEventListener('click',makeDonuts);

    setInterval(autoDonuts, 1000);

    function updateLoop(){
       
        if (donutNumber >= autoClickerPrice){
            autoClickerButton.style.visibility="visible";
     
        }else{
            autoClickerButton.style.visibility="hidden";
        }

        if (donutNumber >= multiplierPrice){
            multiplierButton.style.visibility="visible";
     
        }else{
            multiplierButton.style.visibility="hidden";
        }

        donutNumberDisplay.textContent = Math.round(donutNumber) + " donuts";
        autoClickerNumberDisplay.textContent = autoClickerStorage + " auto-clickers";
        autoClickerPriceDisplay.textContent = "current price of auto-clickers: " + Math.ceil(autoClickerPrice) 
        multiplierNumberDisplay.textContent = "number of multipliers: " + multiplierStorage;
        multiplierPriceDisplay.textContent = "current price of donut multipliers: " + Math.ceil(multiplierPrice);
    }
    function makeDonuts(){
        donutNumber += Math.pow(donutsToMake, multiplierStorage);
        updateLoop();
    }

    
    function purchaseAutoClicker(){

        donutNumber -=autoClickerPrice;
                if(donutNumber<autoClickerPrice){
            autoClickerButton.style.visibility="hidden";
        }
        autoClickerStorage += 1;
        autoClickerPrice += (autoClickerPrice/10);
        if (autoClickerStorage<30){
            var img =new Image(50,65);
            img.src= "src/images/donutt.png";
            donutbrigade.appendChild(img);
        }else if (autoClickerStorage === 30){
            golddonutt = new Image(50, 50);
            golddonutt.src="src/images/golddonutt.png";
            donutbrigade.appendChild(golddonutt);
            
        }
        updateLoop();
    }

    function purchaseMultiplier(){
        donutNumber -=multiplierPrice;
                if(donutNumber<multiplierPrice){
            multiplierButton.style.visibility="hidden";
        }
        multiplierStorage += 1;
        multiplierPrice += (multiplierPrice/10);
        updateLoop();
    }

    function autoDonuts(){
       
        donutNumber += autoClickerStorage*(Math.pow(donutsToMake, multiplierStorage));
        updateLoop();
    }

    function resetGame() {
        location.reload();
       }