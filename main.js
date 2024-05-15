const cont = document.querySelector('.cont')

fetch("data.json")
        .then(response => response.json())
        .then(data => {

            console.log(data);

            data.comments.forEach(comment => {
                // Comment
                const com = document.createElement('div')
                com.innerHTML = comment.content
                com.classList.add('com-cont')
                cont.appendChild(com)
                
                // Replyes
                if(comment.replies.length > 0){
                    comment.replies.forEach(replie => {
                        const repli = document.createElement('div')
                        repli.innerHTML = replie.content
                        repli.classList.add('replie-cont')
                        cont.appendChild(repli)
                    })
                }
                // Replyes

                // Comment
            })

            // Current User
            const userCont = document.createElement('div')
            userCont.classList.add('user-cont')
            // userCont.innerHTML = data.currentUser.username

            const userImg = document.createElement('img')
            userImg.src = data.currentUser.image.png
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
        .catch(error => {
            console.error("Error fetching data:", error);
        })