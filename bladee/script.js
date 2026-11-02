import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

const editor = new Editor({
    element: document.querySelector('#editor-content'),
    extensions: [StarterKit],
    content: '<p>Hello World!</p>',
})

const iconHide = document.getElementById('hide')
const app = document.getElementById('app')
const createBtn = document.getElementById('create-btn')
const modal = document.getElementById('shadow')
const btnSave = document.getElementById('btn-save')
const btnClose = document.getElementById('btn-close')

iconHide.addEventListener('click', () => {
    app.classList.toggle('app_navbar-hidden')
})

const toolButtons = document.querySelectorAll('[data-tiptap-button]')

const commands = {
    bold: () => editor.chain().focus().toggleBold().run(),
    italic: () => editor.chain().focus().toggleItalic().run(),
    strike: () => editor.chain().focus().toggleStrike().run(),
    code: () => editor.chain().focus().toggleCode().run(),
    h1: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    h2: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    bulletList: () => editor.chain().focus().toggleBulletList().run(),
    orderedList: () => editor.chain().focus().toggleOrderedList().run(),
    blockquote: () => editor.chain().focus().toggleBlockquote().run(),
    codeBlock: () => editor.chain().focus().toggleCodeBlock().run()
}

const activeNames = {
    h1: ['heading', { level: 1 }],
    h2: ['heading', { level: 2 }]
}

for (let button of toolButtons) {
    button.addEventListener('click', () => {
        commands[button.dataset.tiptapButton]()
    })
}

function updateToolButtons() {
    for (let button of toolButtons) {
        const name = button.dataset.tiptapButton
        const [type, attrs] = activeNames[name] || [name]
        button.classList.toggle('editor__tools_active', editor.isActive(type, attrs))
    }
}

editor.on('transaction', updateToolButtons)

createBtn.addEventListener('click', () => {
    modal.classList.add('shadow_active')
})

btnClose.addEventListener('click', () => {
    modal.classList.remove('shadow_active')
})

btnSave.addEventListener('click', () => {
    const titleInput = document.getElementById('note-title')
    const descriptionInput = document.getElementById('note-description')

    if (titleInput.value.trim() === '') {
        return
    }

    const note = {
        title: titleInput.value,
        description: descriptionInput.value,
        date: new Date().toISOString().slice(0, 10)
    }

    notes.push(note)
    currentNote = note

    titleInput.value = ''
    descriptionInput.value = ''
    modal.classList.remove('shadow_active')

    renderNavbar()
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
        title: 'Поход в магазин',
        description: 'Купить что-то, и еще что-то и еще чтото и что то еще',
        date: '2026-10-13'
    },
    {
        title: 'Выбрать билеты на самолет',
        description: 'Будем использовать авиасейлс',
        date: '2026-11-13'
    },
    {
        title: 'Домофон подруги',
        description: '103',
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
    editor.commands.setContent(`<h1>${currentNote.title}</h1><p>${currentNote.description}</p>`)
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
