const listTask = document.querySelector('#listTask')
const boxText = document.querySelector('#boxText')
const addButton = document.querySelector('#buttonAdd')
const menuList = document.querySelector('#menuList')


// ===== ESSE EVENTO ADICIONA OQUE TA NO INPUT 
//                COMO FILHO DA UL
addButton.addEventListener('click', function(){
  const task = boxText.value
  boxText.value = ''
  boxText.focus()

  listTask.appendChild(addTask(task))
  displayMenu()
})


// ===== ESSA FUNÇÃO CRIA UM LI COM UM SPAN DENTRO ======
function addTask(task){
  const elementLi = document.createElement('li')
  const elementSpan = document.createElement('span')

  elementSpan.setAttribute('id', 'task')
  elementSpan.textContent = task

  elementLi.appendChild(elementSpan)
  //  ESSA LINHA CHAMA O BOTÃO E ADICIONA NA LI
  elementLi.appendChild(removeTask())

  elementLi.className = 'naoRealizada'


  elementLi.addEventListener('click', function(){
    if(elementLi.className == 'naoRealizada' ){
      elementLi.className = 'realizada'
    }else{
      elementLi.className = 'naoRealizada'
    }
  })

  return elementLi
}

// ===== ESSA FUNÇÃO CRIA UM BOTÃO  ======
function removeTask(){
  const remove = document.createElement('button')
  remove.textContent = '✕'
  remove.className = 'remove'

  remove.addEventListener('click', function(){
    listTask.removeChild(this.parentNode)
    displayMenu()
  })
  return remove
}

function displayMenu(){
  // VERIFICA SE TEM UM SPAN NA LISTA
  const elementSpan = document.querySelector('#task')

  if(elementSpan === null){
    menuList.setAttribute('hidden', 'hidden')
  }else{
    menuList.removeAttribute('hidden')
  }
}

menuList.addEventListener('change', function(){

  if(menuList.selectedIndex === 1 || menuList.selectedIndex === 2){
   
    const allTask = document.querySelectorAll('li')
    for(task of allTask){
      task.dispatchEvent(new Event('click'))
    }

  }else if(menuList.selectedIndex === 3){
    alert("Todos os elementos serão deletados")
    const allButtonRemove = document.querySelectorAll('.remove')
    for(buttonRemove of allButtonRemove){
      buttonRemove.dispatchEvent(new Event('click'))
    }

  }
})