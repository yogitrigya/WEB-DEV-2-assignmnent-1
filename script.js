const form = document.querySelector('.form')
    const eventCards = document.querySelector('.cards')

    const clearBtn = document.querySelector('#clearEvents')
    const sampleBtn = document.querySelector('#sampleEvents')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let title = eventTitle.value
        let date = eventDate.value
        let cat = category.value
        let desc = description.value

        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <h3>${title}</h3>
        <p> 📆${date}</p>
        <button>${cat}</button>
        <p>${desc}</p>
        <div class="dlt">x</div>
        `

        eventCards.appendChild(card)

        // delete single card
        const dlt = card.querySelector('.dlt')
        dlt.addEventListener('click', () => {
            card.remove()
        })

        form.reset()
    })


    // CLEAR ALL EVENTS BUTTON
    clearBtn.addEventListener('click', () => {
        eventCards.innerHTML = ""   // removes all cards
    })


    //ADD SAMPLE EVENTS BUTTON
    sampleBtn.addEventListener('click', () => {

        const samples = [
            {
                title: "Tech Conference",
                date: "2026-03-10",
                cat: "Conference",
                desc: "Annual technology conference"
            },
            {
                title: "Web Dev Workshop",
                date: "2026-03-15",
                cat: "Workshop",
                desc: "Hands-on coding session"
            },
            {
                title: "Startup Meetup",
                date: "2026-03-20",
                cat: "Meetup",
                desc: "Networking with founders"
            }
        ]

        samples.forEach(ev => {
            const card = document.createElement('div')
            card.classList.add('card')
            card.innerHTML = `
            <h3>${ev.title}</h3>
            <p>${ev.date}</p>
            <button>${ev.cat}</button>
            <p>${ev.desc}</p>
            <div class="dlt">x</div>
            `

            eventCards.appendChild(card)

            const dlt = card.querySelector('.dlt')
            dlt.addEventListener('click', () => {
                card.remove()
            })
        })
    })


    // keyboard log (same as before)
    document.addEventListener('keydown', (e) => {
        console.log(e.key)
    })
