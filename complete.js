document.querySelectorAll('.complete-btn').forEach(button =>{
 button.addEventListener('click', function() {
  alert('Are You Ok')
  button.style.background = '#9BA8F8'; 
  const taskIdElement = document.getElementById('task-id'); 
  let taskId = inputTextByValue('task-id');
  const checkNumberElement = document.getElementById('checkNumber');
  let checkNumber = inputTextByValue('checkNumber');
  const taskMessage = document.getElementById('task');

  const currentTime = new Date().toLocaleTimeString();
   document.getElementById('clear').addEventListener('click' ,function() {
    document.getElementById('task').innerHTML = ""; 
   })
  
  
  
  if (taskId > 0 ) {
    taskId--;  
    taskIdElement.innerText = taskId;
  }
  if (checkNumber < 100 ) {
    checkNumber ++;
    checkNumberElement.innerText = checkNumber;
  }
  const div = document.createElement('div');
  div.classList.add('p-3', 'bg-[#F4F7FF]', 'rounded-md', 'shadow', 'mb-3');

  const p = document.createElement('p');
  p.classList.add('text-sm', 'mb-3');
  p.innerText = `You have completed the task at ${currentTime}`;

  div.appendChild(p);
  taskMessage.appendChild(div);
})
});

