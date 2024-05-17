const cont = document.querySelector('.cont')
let jsonData

async function fetchData() {
    try {
        const response = await fetch('data.json')
        jsonData = await response.json()
    } catch (error) {
        console.log('Error fetching data: ', error)
    }
}

fetchData().then(() => {

    console.log(jsonData)

    const username = jsonData.currentUser.username;
  console.log('Username:', username);

  jsonData.comments.forEach((comment) => {
    // With no replies
    if(comment.replies.length === 0){
        
        const com = document.createElement('div')
        com.classList.add("com-cont")
        const p = document.createElement('p')
        p.classList.add('phar')
        p.innerText = comment.content

        com.appendChild(p)
        cont.appendChild(com)
    }
    // With replies
    else{
        const bigCont = document.createElement('div')
        bigCont.classList.add("big-cont")

        const com = document.createElement('div')
        com.classList.add("com-cont")
        
        const p = document.createElement('p')
        p.classList.add('phar')
        p.innerText = comment.content

        com.appendChild(p)
        bigCont.appendChild(com)
        // Replies
        comment.replies.forEach(replie => {
            const com = document.createElement('div')
            com.classList.add("com-cont")
            com.classList.add("replie-cont")
            
            const p = document.createElement('p')
            p.classList.add('phar')
            p.classList.add('phar')
            p.innerText = replie.content
            
            com.appendChild(p)
            bigCont.appendChild(com)
        })
        // Replies

        cont.appendChild(bigCont)
    }
}
  )


  // Current User
  const userCont = document.createElement('div')
  userCont.classList.add('user-cont')
  // userCont.innerHTML = data.currentUser.username
  
  const userImg = document.createElement('img')
  userImg.src = jsonData.currentUser.image.png
  userImg.classList.add('user-img')
  userCont.appendChild(userImg)
  
  const input = document.createElement('input')
  input.type = 'textarea'
  input.className = 'input'
  input.placeholder = 'Add a comment'
  userCont.appendChild(input)
  
  const btn = document.createElement('button')
  btn.innerHTML = 'Send'
  btn.classList.add('btn')
  userCont.appendChild(btn)
  
  cont.appendChild(userCont)
  // Current User
})
