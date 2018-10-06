let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value    
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)    
    
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)  
    }
})



// 1. Add createdAt and updatedAt to the new notes (store timestamp)
// 2. Update updatedAt when someone edits a title or body
// 3. Delete all old notes before testing



// const now = moment()
// now.subtract(1, 'week').subtract(20, 'days')
// console.log(now.format());
// // November 3rd, 2003
// console.log(now.format('MMMM Do, YYYY'));
// console.log(now.fromNow());

// const nowTimeStamp = now.valueOf()
// console.log(moment(nowTimeStamp).toString());


// const anniversary = moment().year(1985).month(2).date(25)
// console.log(anniversary.format('MMM D, YYYY'));
