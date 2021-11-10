import { writable, get } from 'svelte/store'

const darkmode = writable(false)

const customDarkmode = {
    subscribe: darkmode.subscribe,
    setDarkmode: (state) => {
        darkmode.set(state)
        localStorage.setItem('darkMode', JSON.stringify(state))
        customDarkmode.updateBody('set')
    },

    checkDarkmode: () => {
        const localCheck = localStorage.getItem('darkMode')
        const isInLocal = localCheck !== null
        if (isInLocal) {
            const state = JSON.parse(localCheck)
            customDarkmode.setDarkmode(state)

        } else {
            customDarkmode.setDarkmode(false)
            localStorage.setItem('darkMode', 'false')
            console.log(`Set localstorage as ${localStorage.getItem('darkMode')}`)
        }
    },

    toggleDarkmode: () => {
        let currentDarkmode = get(darkmode)
        let newDarkmode = !currentDarkmode
        darkmode.set(newDarkmode)
        localStorage.setItem('darkMode', JSON.stringify(newDarkmode))
        customDarkmode.updateBody('toggle')
    },

    updateBody: (updateType) => {
        let body = document.body
        if (updateType === 'toggle') {
            body.classList.toggle('dark')
        } else if (updateType === 'set') {
            if (get(darkmode) === true) {
                body.classList.add('dark')
            } else {
                body.classList.remove('dark')
            }
        }
    }
    
}

export default customDarkmode