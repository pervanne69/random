const body = document.body

body.querySelectorAll('.questions__question').forEach(el => {
    const questionText = el.querySelector('.question__text')
    questionText.addEventListener('click', (e) => {
        el.classList.toggle('active')
        el.classList.toggle('passive')
    })
})