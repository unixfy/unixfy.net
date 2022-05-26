<script>
    import AppJumper from "../components/AppJumper.svelte";
    import {url} from "@roxi/routify";
</script>

<!--Jumbotron-->
<!--Palette is here https://coolors.co/7bc6cc-be93c5-7e1f86-->
<div class="min-h-[100vh] dark:text-white flex bg-white dark:bg-slate-900">
    <div class="ct m-auto z-0 p-4">
        <!--        This is the background pattern thing for the right side (top on mobile) -->
        <div class="jumbo-bg h-1/3 sm:h-[28vh] md:h-[100vh] absolute top-[3rem] md:bottom-0 right-0 w-full md:w-[40%] -z-[1]"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="text-center md:text-left">
                <h1 class="text-5xl sm:text-6xl md:text-[3.5rem] lg:text-7xl mb-3 font-display font-semibold">
                    <span class="block pb-4">
                        Digital infrastructure
                            <span class="bg-gradient-to-tr from-[#7BC6CC] to-[#BE93C5] bg-clip-text text-transparent font-bold">
                            exploration.
                            </span>
                    </span>
                    <span class="block">
                        Web-based
                        <span class="bg-gradient-to-tr from-[#7BC6CC] to-[#BE93C5] bg-clip-text text-transparent font-bold">
                            solutions.
                            <br>
                        <span class="text-4xl lg:text-5xl mb-1">+more</span>
                        </span>
                    </span>
                </h1>
                <!--                Scroll down button -->
                <a href="#jumper" aria-label="Scroll down"> <i
                        class="fas fa-arrow-circle-down fa-4x animate-pulse mt-4 bg-gradient-to-bl from-[#7BC6CC] to-[#BE93C5] bg-clip-text text-transparent"></i>
                </a>
            </div>
            <!--            Right side / top side logo container -->
            <div class="flex mb-8 md:mb-0 order-first md:order-last">
                <div class="md:my-auto mx-auto mt-[20vh] bg-[#7E1F86] p-10 rounded-2xl drop-shadow-xl hover:drop-shadow-2xl transition-all hover:scale-105  w-3/4 md:w-full dark:shadow-gray-700 shadow-gray-900">
                    <img src="/images/logo-cropped-light.svg" alt="Unixfy">
                </div>
            </div>
        </div>
    </div>
</div>

<!--This one uses UIGradients Clear Sky in dark mode and UIGradients Dania in light mode -->
<div class="min-h-screen bg-gradient-to-tr from-[#7BC6CC] to-[#BE93C5] dark:from-[#005C97] dark:to-[#363795] text-white bg-animate"
     id="jumper">
    <div class="ct section">
        <h1 class="section-heading">Jump to Apps</h1>
        <div class="bg-white border"></div>
        <div class="my-4 md:my-8">
            <AppJumper/>
        </div>
    </div>
</div>

<div class="h-2/3 bg-[#7E1F86] text-white py-12">
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