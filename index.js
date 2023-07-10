let screen= document.getElementById('screen');
buttons=  document.querySelectorAll('button');
let screenValue= '';
for(item of buttons){
    item.addEventListener('click' , (e)=>{
        buttonText= e.target.innerText;
        console.log(buttonText)

        if(buttonText =='×'){
            buttonText='*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == '÷'){
            buttonText='/';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == 'AC'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == 'ON/ OFF'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }  
        else if(buttonText == 'GT'){
            screen.value = eval(screenValue);
        }  
        else if(buttonText == 'DEL'){
            screen.value = screen.value.slice(0,-1);
        } 
        else if(buttonText == 'log'){
            screen.value = Math.log(screen.value)
        } 
        else if(buttonText == 'e'){
            screen.value = 2.718281828459045;
        }
        else if(buttonText == 'Π'){
            screen.value = 3.14159265359;
        }
        else if(buttonText == '√'){
            screen.value = Math.sqrt(screen.value);
        }
        else{
            screenValue += buttonText
            screen.value = screenValue;
        }
            
    })
}