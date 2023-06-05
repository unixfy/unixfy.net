import {writable} from "svelte/store";
import {browser} from "$app/environment";

// Whether darkmode is enabled or not
// Enable by default if darkmode is set to true in localstorage or the system scheme is set to dark
// Persists to localstorage

const darkmodecalculator = function () {
    const store = writable(false)
    // Return false if we aren't running in a browser
    if (!(browser)) return store;

    // Set the starting value of darkmode
    let storedvalue

    if (!(browser)) {
        // If we are in SSR, just set to false
        storedvalue = false
    } else if
    ((!('darkmode' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        // If the system color scheme is set to dark, then enable darkmode
        storedvalue = true
    } else {
        // If this isn't the case, then try to get the value of darkmode from localstorage and parse it as JSON
        // Any error occurs, disable darkmode
        try {
            storedvalue = JSON.parse(localStorage.getItem("darkmode"))
        } catch {
            storedvalue = false
        }
    }

    // Now set the store value based on the above
    if ([true, false].includes(storedvalue)) store.set(storedvalue)

    // Save the darkmode value to localstorage if possible
    store.subscribe(function (value) {
        if (browser) {
            localStorage.setItem("darkmode", value.toString())

            if (value === true) {
                document.documentElement.classList.add('dark');
            } else if (value === false) {
                document.documentElement.classList.remove('dark');
            }
        }
    })

    return store
}

export const darkmode = darkmodecalculator();
