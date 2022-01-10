<script>
    import {tsParticles} from "tsparticles";
    import Typed from "typed.js";
    import AppJumper from "../components/AppJumper.svelte";
    import {url} from "@roxi/routify";
    import {tsparticlesoptions} from "../stores";

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

    // The div that holds the TSParticles stuff won't show until this function returns
    async function mountTsParticles() {
        tsParticles
            .load("tsparticles", $tsparticlesoptions)
            .catch((error) => {
                console.error(error);
            })
    }

    const mountTsparticles = mountTsParticles();
</script>

<!--Jumbotron-->
<div class="h-[calc(100vh_-_4rem)] flex">
    <div class="ct m-auto text-center">
        {#await mountTsparticles}
            <!--        Tsparticle wrapper -->
            <div id="tsparticles" class="h-100 absolute m-0 p-0"></div>
        {/await}
        <img src="/images/logo-cropped-light.svg" alt="Unixfy" class="md:h-32 lg:h-40 h-20 mx-auto mb-6">
        <!--        <h1 class="md:text-6xl lg:text-7xl text-4xl mb-3">Welcome to unixfy.net</h1>-->

        <!--        TypedJS wrapper -->
        <div class="sm:text-3xl md:text-4xl lg:text-5xl text-2xl font-display font-semibold text-white">
            <h2 class="typedjs inline" use:mountTyped></h2>
        </div>
    </div>
</div>

<!--This one uses UIGradients Clear Sky in dark mode and UIGradients Dania in light mode -->
<div class="min-h-screen bg-gradient-to-tr from-[#7BC6CC] to-[#BE93C5] dark:from-[#005C97] dark:to-[#363795] text-white bg-animate">
    <div class="ct section">
        <h1 class="section-heading">Jump to Apps</h1>
        <div class="bg-white border"></div>
        <div class="my-4 md:my-8">
            <AppJumper/>
        </div>
    </div>
</div>

<div class="h-2/3 bg-red-500/50 dark:bg-red-800/60 text-white py-12">
    <div class="ct cta">
        <div class="grid grid-cols-1 sm:grid-cols-3">
            <div class="sm:col-span-2 my-auto">
                <h1 class="cta-heading">Looking for services?</h1>
                <p class="text-lg">Including web hosting, web dev, and much more.</p>
            </div>
            <div class="sm:my-auto flow-root mt-4">
                <a class="button sm:float-right" href="{$url('/services')}">
                    View Services
                </a>
            </div>
        </div>
    </div>
</div>

<!-- routify:options title="Home" -->