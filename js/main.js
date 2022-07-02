const body = document.body
const resourcesPlaning = body.querySelector('.resources__planing')

body.querySelectorAll('.questions__question').forEach(el => {
    const questionText = el.querySelector('.question__text')
    questionText.addEventListener('click', (e) => {
        el.classList.toggle('active')
        el.classList.toggle('passive')
    })
})


resourcesPlaning.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
        const planingCardActive = body.querySelector('.planing__card-active')
        const cycle = body.querySelector('.resources__cycle-active')

        planingCardActive.classList.toggle('planing__card-active')
        planingCardActive.classList.toggle('planing__card-passive')

        cycle.classList.toggle('resources__cycle-active')
        cycle.classList.toggle('resources__cycle-passive')

        if (e.offsetX > 100) {
            if (planingCardActive.id === "planing__card-3") {
                const planingCardActiveFirstChild = body.querySelector('#planing__card-1')
                const resourcesCycleFirstChild = body.querySelector('#resources__cycle-1')

                planingCardActiveFirstChild.classList.toggle('planing__card-active')
                planingCardActiveFirstChild.classList.toggle('planing__card-passive')

                resourcesCycleFirstChild.classList.toggle('resources__cycle-active')
                resourcesCycleFirstChild.classList.toggle('resources__cycle-passive')
            } else {
                planingCardActive.nextElementSibling.classList.toggle('planing__card-active')
                planingCardActive.nextElementSibling.classList.toggle('planing__card-passive')

                cycle.nextElementSibling.classList.toggle('resources__cycle-active')
                cycle.nextElementSibling.classList.toggle('resources__cycle-passive')
            }
        } else {
            if (planingCardActive.id === "planing__card-1") {
                const planingCardActiveLastChild = body.querySelector('#planing__card-3')
                const resourcesCycleActiveLastChild = body.querySelector('#resources__cycle-3')

                planingCardActiveLastChild.classList.toggle('planing__card-active')
                planingCardActiveLastChild.classList.toggle('planing__card-passive')

                resourcesCycleActiveLastChild.classList.toggle('resources__cycle-active')
                resourcesCycleActiveLastChild.classList.toggle('resources__cycle-passive')

            } else {
                planingCardActive.previousElementSibling.classList.toggle('planing__card-active')
                planingCardActive.previousElementSibling.classList.toggle('planing__card-passive')

                cycle.previousElementSibling.classList.toggle('resources__cycle-active')
                cycle.previousElementSibling.classList.toggle('resources__cycle-passive')
            }
        }
    }
})


body.querySelectorAll('.resources__cycle').forEach((el) => {
    el.addEventListener('click', () => {
        if (!el.classList.contains('resources__cycle-active')) {
            const cycleActive = body.querySelector('.resources__cycle-active')

            console.log(cycleActive)

            cycleActive.classList.toggle('resources__cycle-active')
            cycleActive.classList.toggle('resources__cycle-passive')

            el.classList.toggle('resources__cycle-active')
            el.classList.toggle('resources__cycle-passive')

            const planingCardActive = body.querySelector('.planing__card-active')

            planingCardActive.classList.toggle('planing__card-active')
            planingCardActive.classList.toggle('planing__card-passive')

            const cycleId = el.id.slice(-1)

            const nextPlaningCardActive = body.querySelector(`#planing__card-${cycleId}`)

            nextPlaningCardActive.classList.toggle('planing__card-active')
            nextPlaningCardActive.classList.toggle('planing__card-passive')
        }
    })
})