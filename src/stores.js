import {readable, writable} from "svelte/store";

// Whether darkmode is enabled or not
// Enable by default if darkmode is set to true in localstorage or the system scheme is set to dark
// Persists to localstorage

const darkmodecalculator = function () {
    const store = writable(false)
    // Return false if we aren't running in a browser
    if (!(window.routify.inBrowser)) return store;

    // Set the starting value of darkmode
    let storedvalue

    if (!(window.routify.inBrowser)) {
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
        if (window.routify.inBrowser) {
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

// Tsparticles configuration
export const tsparticlesoptions = readable({
    "fullScreen": {
        "enable": true,
        "zIndex": -1
    },
    "particles": {
        "number": {
            "value": 120,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 10,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 500,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "detectRetina": true,
    "fpsLimit": 30,
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "background": {
        "color": "#2196f3",
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    }
})