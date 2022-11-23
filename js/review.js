
function validator1(){
    var inputElement = document.getElementById('name');
    var errorElement = inputElement.parentElement.querySelector('.form-mes');
   
    
    if(inputElement){
        inputElement.onblur = function (){
            
            function test(value) {
                return value.trim() ? undefined : 'Please enter this field'
            }
            //console.log(inputElement.value);
            var errorMes = test(inputElement.value);
            //console.log(errorMes);
            if (errorMes) {
                errorElement.innerText = errorMes;
                // inputElement.parentElement.classList.add('invalid');
            } else {
                errorElement.innerText = '';
                // inputElement.parentElement.classList.remove('invalid');
            }

        }
        inputElement.oninput = function (){
            errorElement.innerText = '';
        }
    }
    
}

function validator2(){
    var inputElement = document.getElementById('email');
    var errorElement = inputElement.parentElement.querySelector('.form-mes');
    
    if(inputElement){
        inputElement.onblur = function (){
            
            function test(value) {
                var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(value) ? undefined : 'Please enter your email';
            }
            console.log(errorMes);
            var errorMes = test(inputElement.value);
            if (errorMes) {
                errorElement.innerText = errorMes;
            } else {
                errorElement.innerText = '';
            }
        }
        inputElement.oninput = function (){
            errorElement.innerText = '';
        }
    }
}

function validator3(){
    var inputElement = document.getElementById('number');
    var errorElement = inputElement.parentElement.querySelector('.form-mes');
    
    if(inputElement){
        inputElement.onblur = function (){
            
            function test(value) {
                var regex = /^\d{10}$/;
                return regex.test(value) ? undefined : 'Please enter your full phone number ';
            }
            console.log(errorMes);
            var errorMes = test(inputElement.value);
            if (errorMes) {
                errorElement.innerText = errorMes;
            } else {
                errorElement.innerText = '';
            }
        }
        inputElement.oninput = function (){
            errorElement.innerText = '';
        }
    }
}


validator1();
validator2();
validator3();
