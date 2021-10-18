            const form = document.querySelector('form')
            const arrayLocalStorageName = 'myNotes'
            
            function addNote() {
                const note = {
                    text : form.elements['text'].value,
                    date : form.elements['date'].value,
                    time : form.elements['time'].value,
                }
                const arrayOfNotesFromLOcal = localStorage.getItem(arrayLocalStorageName)
                const arrayOfNotes = arrayOfNotesFromLOcal? JSON.parse(arrayOfNotesFromLOcal): []
                arrayOfNotes.push(note)
                localStorage.setItem(arrayLocalStorageName, JSON.stringify(arrayOfNotes))
                const index = arrayOfNotes.indexOf(note)
                 addNoteToDom(note, index)
            }
    
                const btnAdd = document.querySelector('#btnAdd')
                btnAdd.addEventListener('click', addNote)
    
                const notesRef = document.querySelector('#note-lists')

                function deleteNote(index) {
                    console.log(index)                    
                }

                function addNoteToDom (currentNote,i) {
                    const noteContainer = document.createElement('div')
                    noteContainer.setAttribute('index', i)
                    noteContainer.classList.add('note-container')
                    const noteText = document.createElement('div')
                    noteText.innerHTML = currentNote.text
                    const btnDelete = document.createElement('button')

                    btnDelete.addEventListener('click',deleteNote)
                    btnDelete.innerHTML = 'Delete'
                    btnDelete.classList.add('btn-delete')

                    noteContainer.appendChild(noteText)
                    noteContainer.appendChild(btnDelete)
                    notesRef.appendChild(noteContainer)
                }

                function showNotes() {
                    const arrayOfNotesFromLOcal = localStorage.getItem(arrayLocalStorageName)
                    const arrayOfNotes = arrayOfNotesFromLOcal? JSON.parse(arrayOfNotesFromLOcal): []
                  
                    for (let i=0; i<arrayOfNotes.length; i++) {
                        const currentNote = arrayOfNotes[i]
                        addNoteToDom(currentNote, i)
                    }
                }

                showNotes()
            
        
        
    