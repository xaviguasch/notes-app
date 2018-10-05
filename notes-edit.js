const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')

const noteId = location.hash.substring(1)

const notes = getSavedNotes()

const note = notes.find(function (note) {
  return note.id === noteId
})



if (note === undefined) {
  location.assign('/index.html')
}

titleElement.value = note.title

bodyElement.value = note.body


titleElement.addEventListener('input', function (e) {
  note.title = e.target.value
  saveNotes(notes)
})

bodyElement.addEventListener('input', function (e) {
  note.body = e.target.value
  saveNotes(notes)
})

removeElement.addEventListener('click', function (e) {
  removeNote(note.id)
  saveNotes(notes)
  location.assign('/index.html')

  




})




// 1. Setup input event for title
// 2. Update note object and save notes list
// 3. Repeat steps 1-2 for body
// 4. Setup a remove button that removes notes and sends uses back to home page