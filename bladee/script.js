const iconHide = document.getElementById('hide')
const app = document.getElementById('app')

iconHide.addEventListener('click', () => {
    app.classList.toggle('app_navbar-hidden')
})

const days = [
    'Вс',
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб'
]

const notes = [
    {
        title: 'The Flag Is Raised',
        description: 'She shines her light on me Maria, Maria',
        date: '2026-10-13'
    },
    {
        title: 'Expression On Your Face',
        description: 'Im touched by nobody I show affection to the floor',
        date: '2026-11-13'
    },
    {
        title: 'Durins Bane',
        description: 'I had ate so many nights, Im becoming skinny fat',
        date: '2026-12-13'
    }
]

let currentNote = notes[1]

function getNoteHTML(note) {
    const rootElement = document.createElement('div')
    rootElement.classList.add('navbar__month-note')

    const dateObj = new Date(note.date)

    const dateElement = document.createElement('div')
    dateElement.classList.add('navbar__month-note-date')

    const num = document.createElement('div')
    num.classList.add('navbar__month-note-num')
    num.innerHTML = dateObj.getDate()

    const day = document.createElement('div')
    day.classList.add('navbar__month-note-day')
    day.innerHTML = days[dateObj.getDay()]

    const fullDate = document.createElement('div')
    fullDate.classList.add('navbar__month-note-day')
    fullDate.innerHTML = note.date

    dateElement.appendChild(num)
    dateElement.appendChild(day)
    dateElement.appendChild(fullDate)

    const descElement = document.createElement('div')
    descElement.classList.add('navbar__month-note-description')

    const title = document.createElement('div')
    title.innerHTML = `<b>${note.title}...</b>`

    const description = document.createElement('div')
    description.innerHTML = `${note.description.slice(0, 50)}...`

    descElement.appendChild(title)
    descElement.appendChild(description)

    rootElement.appendChild(dateElement)
    rootElement.appendChild(descElement)

    return rootElement
}

const navbarElement = document.getElementById('navbar')

function renderEditor() {
    document.getElementById('editor-date').innerHTML = currentNote.date
    document.getElementById('editor-title').innerHTML = currentNote.title
    document.getElementById('editor-text').innerHTML = currentNote.description
}

function renderNavbar() {
    navbarElement.innerHTML = ''
    for (let note of notes) {
        const noteHTML = getNoteHTML(note)
        if (note === currentNote) {
            noteHTML.classList.add('navbar__month-note_active')
        }
        noteHTML.addEventListener('click', () => {
            currentNote = note
            renderNavbar()
            console.log(currentNote);
        })
        navbarElement.appendChild(noteHTML)
    }
    renderEditor()
}

renderNavbar()
