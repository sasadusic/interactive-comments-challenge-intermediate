const main = document.querySelector('.main')
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
        
        const cont = document.createElement('div')
        cont.classList.add("cont")
        const p = document.createElement('p')
        p.classList.add('phar')
        p.innerText = comment.content

        cont.appendChild(p)
        main.appendChild(cont)
    }
    // With replies
    else{
        const bigCont = document.createElement('div')
        bigCont.classList.add("big-cont")

        const cont = document.createElement('div')
        cont.classList.add("cont")
        
        const p = document.createElement('p')
        p.classList.add('phar')
        p.innerText = comment.content

        cont.appendChild(p)
        bigCont.appendChild(cont)
        // Replies
        comment.replies.forEach(replie => {
            const cont = document.createElement('div')
            cont.classList.add("cont")
            cont.classList.add("replie")
            
            const p = document.createElement('p')
            p.classList.add('phar')
            p.classList.add('phar')
            p.innerText = replie.content
            
            cont.appendChild(p)
            bigCont.appendChild(cont)
        })
        // Replies

        main.appendChild(bigCont)
    }
}
  )
})