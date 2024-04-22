(()=>{
    'use strict';

   window.onload = function(){
    const todoBtn = document.querySelector('.addtodo');
    const todosDiv = document.querySelector('.todos-div');
    const sun = document.querySelector('.sun');
    
    let todoContainer;
    

    let shrinkDiv = () =>{
        if(todosDiv.innerHTML.trim() !== ""){
            todosDiv.style.opacity = '1';
        }
        else{
            todosDiv.style.opacity = '0';
        }
    }
    
   

    function typeEffect(){
        let i = 0;
        let text = "Please Enter Todo In The Box";
        let speed = 50;

        function typeWritter(){
            if(i < text.length){
                document.querySelector('.redBox').innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWritter, speed);
            }
        }
        typeWritter();
    }

    function addTodo(){
        let input = document.querySelector('.input');
        let inputValue = input.value;

        if(inputValue !== ''){
            const todoContainer = document.createElement('div');
            todoContainer.classList.add('todoCont');

            const donebtn = document.createElement('div');
            donebtn.innerHTML = '✔';
            donebtn.classList.add('btn-div-btn');
            

            const deletebtn = document.createElement('div');
            deletebtn.innerHTML = '❌';
            deletebtn.classList.add('btn-div-btn');
            const btnsDiv = document.createElement('div');

            btnsDiv.appendChild(deletebtn);
            btnsDiv.appendChild(donebtn)
          
            todoContainer.append(inputValue);
            todoContainer.append(btnsDiv);
            todosDiv.insertAdjacentElement('afterbegin', todoContainer);
            input.value = '';

           shrinkDiv();

            donebtn.addEventListener('click', ()=>{
                todoContainer.classList.toggle('todoContDone');
            })

            deletebtn.addEventListener('click', ()=>{
                todoContainer.classList.add('todoContDelete')
                setTimeout(()=>{
                    todoContainer.remove();
                },500)
                
            })
    
        }
        else{
            input.focus();
            typeEffect();
            setTimeout(function(){
                document.querySelector('.redBox').innerHTML = '';
            },5000);
        }
    }

    sun.addEventListener('click', ()=>{

        sun.style.transform = 'rotateZ(100deg)';
        sun.src = 'moon-regular.svg';
        sun.style.transform = 'rotateZ(340deg)';
        document.querySelector('.main').classList.toggle('dark');
        todosDiv.classList.toggle('dark-todos')
      
    })


    todoBtn.addEventListener('click', ()=>{
        addTodo()
    })
  
   }
})();