const panels=document.querySelectorAll('.panel')
// console.log(panels) it stores in a npde list with each div with diff properties 
panels.forEach((panel)=>{
      panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
      })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
