const days = []

const notes = []

let currentNote = notes[1]

function getNoteHTML(note) {
    const rootElement = document.createElement('div')
    rootElement.classList.add('navbar__month-note')

    const dateElement = document.createElement('div')
    dateElement.classList.add('navbar__month-note-date')

    const num = document.createElement('div')
    num.classList.add('navbar__month-note-num')

    const day = document.createElement('div')
    day.classList.add('navbar__month-note-day')

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
}

