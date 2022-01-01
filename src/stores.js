// Whether we are in SSR mode or not
import {writable} from "svelte/store";

export const isSsr = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");

// Whether darkmode is enabled or not
// Enable by default if darkmode is set to true in localstorage or the system scheme is set to dark
// Persists to localstorage
export const darkmode = writable(JSON.parse(localStorage.getItem("darkmode")) === true || (!('darkmode' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches));
// Automatically save new darkmode values to localstorage
darkmode.subscribe(function (value) {
    localStorage.setItem("darkmode", value.toString())

    if (value === true) {
        document.documentElement.classList.add('dark');
    } else if (value === false) {
        document.documentElement.classList.remove('dark');
    }
})