<script>
    import AppJumper from "../components/AppJumper.svelte";
    import {url} from "@roxi/routify";
</script>

<!--Jumbotron-->
<!--Palette is here https://coolors.co/7bc6cc-be93c5-7e1f86-->
<div class="min-h-[100vh] dark:text-white flex bg-white dark:bg-slate-900">
    <div class="ct m-auto z-0 p-4">
        <!--        This is the background pattern thing for the right side (top on mobile) -->
        <div class="jumbo-bg h-[30vh] sm:h-[28vh] md:h-[100vh] absolute top-[3rem] md:bottom-0 right-0 w-full md:w-[40%] -z-[1]"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 flex">
            <div class="text-center md:text-left">
                <h1 class="text-5xl sm:text-6xl md:text-[3.5rem] lg:text-7xl font-display font-semibold">
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
                <a href="#sites" aria-label="Scroll down"> <i
                        class="fas fa-arrow-circle-down fa-4x animate-pulse mt-4 bg-gradient-to-bl from-[#7BC6CC] to-[#BE93C5] bg-clip-text text-transparent"></i>
                </a>
            </div>
            <!--            Right side / top side logo container -->
            <div class="flex md:mb-0 order-first md:order-last">
                <div class="md:my-auto mx-auto mt-[4vh] bg-[#7E1F86] p-10 rounded-2xl drop-shadow-xl hover:drop-shadow-2xl transition-all hover:scale-105  w-3/4 md:w-full dark:shadow-gray-700 shadow-gray-900">
                    <img src="/images/logo-cropped-light.svg" alt="Unixfy">
                </div>
            </div>
        </div>
    </div>
</div>

<div id="sites">
    <!--Sites list-->
    <a href="https://blog.unixfy.net/" rel="noopener" target="_blank">
        <div class="text-center sm:text-left py-12 sm:py-16 bg-gradient-to-r to-[#1488CC] from-[#2B32B2] text-white hover:opacity-90">
            <div class="ct">
                <h2 class="cta-heading mb-4 sm:mb-8">
                    <i class="fas fa-rss"></i> Blog
                </h2>
                <p class="text-xl sm:text-2xl">Captivating ramblings about tech, hosting, and life.</p>
            </div>
        </div>
    </a>


    <a href="https://docs.unixfy.net/" rel="noopener" target="_blank">
        <div class="text-center sm:text-left py-12 sm:py-16 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white hover:opacity-90">
            <div class="ct">
                <h2 class="cta-heading mb-4 sm:mb-8">
                    <i class="fas fa-book"></i> Docs
                </h2>
                <p class="text-xl sm:text-2xl">Tutorials and resources for services.</p>
            </div>
        </div>
    </a>

    <a href="https://alex-wang.net/" rel="noopener" target="_blank">
        <div class="text-center sm:text-left py-12 sm:py-16 bg-gradient-to-r from-[#56B4D3] to-[#348F50] text-white hover:opacity-90">
            <div class="ct">
                <h2 class="cta-heading mb-4 sm:mb-8">
                    <i class="fas fa-smile"></i> alex-wang.net
                </h2>
                <p class="text-xl sm:text-2xl">Learn something more about me.</p>
            </div>
        </div>
    </a>

    <a href="{$url('/network')}">
        <div class="text-center sm:text-left py-12 sm:py-16 bg-gradient-to-r from-[#799F0C] to-[#FFE000] text-white hover:opacity-90">
            <div class="ct">
                <h2 class="cta-heading mb-4 sm:mb-8">
                    <i class="fas fa-network-wired"></i> AS139921
                </h2>
                <p class="text-xl sm:text-2xl">A non-profit ISP / network for research.</p>
            </div>
        </div>
    </a>
</div>

<!--Maybe we will use this one later-->
<!--<a href="https://blog.unixfy.net/" rel="noopener" target="_blank">-->
<!--    <div class="text-center sm:text-left py-12 sm:py-16 bg-gradient-to-r from-[#d53369] to-[#cbad6d] text-white hover:opacity-90">-->
<!--        <div class="ct">-->
<!--            <h2 class="cta-heading mb-4 sm:mb-8">-->
<!--                <i class="fas fa-rss"></i> Blog-->
<!--            </h2>-->
<!--            <p class="text-xl sm:text-2xl">Captivating ramblings about tech, hosting, and life.</p>-->
<!--        </div>-->
<!--    </div>-->
<!--</a>-->

<div class="bg-white text-black dark:bg-slate-900 dark:text-white">
    <div class="ct py-12 sm:py-16">
        <h2 class="section-heading">
            Hosting
        </h2>
    </div>
</div>

<div class="bg-[#7E1F86] text-white">
    <div class="ct py-12 sm:py-16">
        <h2 class="section-heading">
            Development
        </h2>
    </div>
</div>


<!--This one uses UIGradients Clear Sky in dark mode and UIGradients Dania in light mode -->
<div class="min-h-screen bg-gradient-to-tr from-[#7BC6CC] to-[#BE93C5] dark:from-[#005C97] dark:to-[#363795] text-white bg-animate"
     id="jumper">
    <div class="ct section">
        <h1 class="section-heading">Hosted Apps & Sites</h1>
        <div class="bg-white border"></div>
        <div class="my-4 md:my-8">
            <AppJumper/>
        </div>
    </div>
</div>

<!-- routify:options title="Home" -->