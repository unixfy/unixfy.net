<script>
    import {tsParticles} from "tsparticles";
    import {onMount, tick} from "svelte";
    import Typed from "typed.js";
    import App from "../App.svelte";
    import AppJumper from "../components/AppJumper.svelte";
    import {url} from "@roxi/routify";

    let tsparticlesoptions = {
        particles: {
            number: {value: 120, density: {enable: true, value_area: 800}},
            color: {value: "#2196f3"},
            shape: {
                type: "circle",
                stroke: {width: 0, color: "#000000"},
                polygon: {nb_sides: 5},
                image: {src: "", width: 100, height: 100},
            },
            opacity: {
                value: 0.75,
                random: false,
                anim: {enable: false, speed: 1, opacity_min: 0.1, sync: false},
            },
            size: {
                value: 4.008530152163807,
                random: true,
                anim: {enable: false, speed: 40, size_min: 0.1, sync: false},
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#2196f3",
                opacity: 0.70,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: {enable: true, rotateX: 600, rotateY: 1200},
            },
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: {enable: true, mode: "repulse"},
                onclick: {enable: true, mode: "bubble"},
                resize: true,
            },
            modes: {
                grab: {distance: 400, line_linked: {opacity: 1}},
                bubble: {distance: 400, size: 20, duration: 2, opacity: 8, speed: 3},
                repulse: {distance: 200, duration: 0.4},
                push: {particles_nb: 4},
                remove: {particles_nb: 2},
            },
        },
        retina_detect: true,
    }

    let typedjsoptions = {
        strings: ["Self-hosting adventures.", "Technical blogging.", "Bespoke hosting solutions.", "Custom web development.", "Server management.", "AS139921."],
        typeSpeed: 40,
        backSpeed: 25,
        backDelay: 1000,
        smartBackspace: true,
        loop: true,
    }

    // Called when the h2 element that houses typed is loaded
    const mountTyped = function (elem) {
        let typed = new Typed(elem, typedjsoptions)

        // Prevent some funny breakage with HMR
        return {
            destroy() {
                typed.destroy()
            }
        }
    }

    // Called when the div that houses the animation is loaded
    // see https://svelte.dev/docs#template-syntax-element-directives-use-action
    // idk why there's still a race condition here with svelte, but let's just use this hacky timeout for now :')
    const mountTsparticles = function () {
        setTimeout(() => {
            tsParticles
                .load("tsparticles", tsparticlesoptions)
                .catch((error) => {
                    console.error(error);
                })
        }, 50)
    }
</script>

<!--Jumbotron-->
<div class="h-[calc(100vh_-_4rem)] flex" use:mountTsparticles>
    <div class="ct m-auto text-center">
        <!--        Tsparticle wrapper -->
        <div id="tsparticles" class="h-100 absolute m-0 p-0 z-[-1]"></div>
        <img src="/images/logo-cropped.svg" alt="Unixfy" class="md:h-32 lg:h-40 h-20 mx-auto mb-6">
        <!--        <h1 class="md:text-6xl lg:text-7xl text-4xl mb-3">Welcome to unixfy.net</h1>-->

        <!--        TypedJS wrapper -->
        <div class="sm:text-3xl md:text-4xl lg:text-5xl text-2xl font-display font-semibold">
            <h2 class="typedjs inline" use:mountTyped></h2>
        </div>
    </div>
</div>

<div class="h-screen bg-gradient-to-tr from-[#BE93C5] to-[#7BC6CC] text-white">
    <div class="ct section">
        <h1 class="section-heading">Jump to Apps</h1>
        <div class="bg-white border"></div>
        <div class="mt-8">
            <AppJumper/>
        </div>
    </div>
</div>

<div class="h-2/3 bg-red-500/50 text-white py-12">
    <div class="ct cta">
        <div class="grid grid-cols-1 sm:grid-cols-3">
            <div class="sm:col-span-2 my-auto">
                <h1 class="cta-heading">Looking for services?</h1>
                <p class="text-lg">Including web hosting, web development, game servers,...</p>
            </div>
            <div class="sm:my-auto flow-root mt-4">
                <a class="button sm:float-right" href="{$url('/services')}">
                    View Services
                </a>
            </div>
        </div>
    </div>
</div>

<div class="h-24 bg-gray-100 flex">
    <div class="ct my-auto">
        <p>&copy; 2020-2021 <span class="font-semibold">Unixfy</span>. All rights reserved.</p>
        <p>Proudly built with <a href="https://svelte.dev" rel="noreferrer" class="link">Svelte</a> and <a
                href="https://tailwindcss.com" rel="noreferrer" class="link">TailwindCSS</a>. We run on Netlify.
            &#10084;</p>
    </div>
</div>