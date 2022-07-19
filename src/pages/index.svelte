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
        <div class="text-center sm:text-left py-6 sm:py-10 bg-gradient-to-r to-[#1488CC] from-[#2B32B2] text-white hover:opacity-90">
            <div class="ct">
                <h2 class="cta-heading mb-4">
                    <i class="fas fa-rss"></i> Blog
                </h2>
                <p class="text-xl sm:text-2xl">Captivating ramblings about tech, hosting, and life.</p>
            </div>
        </div>
    </a>


    <a href="https://docs.unixfy.net/" rel="noopener" target="_blank">
        <div class="text-center sm:text-left py-6 sm:py-10 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] text-white hover:opacity-90">
            <div class="ct">
                <h2 class="cta-heading mb-4">
                    <i class="fas fa-book"></i> Docs
                </h2>
                <p class="text-xl sm:text-2xl">Tutorials and resources for services.</p>
            </div>
        </div>
    </a>

    <a href="https://alex-wang.net/" rel="noopener" target="_blank">
        <div class="text-center sm:text-left py-6 sm:py-10 bg-gradient-to-r from-[#56B4D3] to-[#348F50] text-white hover:opacity-90">
            <div class="ct">
                <h2 class="cta-heading mb-4">
                    <i class="fas fa-smile"></i> alex-wang.net
                </h2>
                <p class="text-xl sm:text-2xl">Learn something more about me.</p>
            </div>
        </div>
    </a>

    <a href="{$url('/network')}">
        <div class="text-center sm:text-left py-6 sm:py-10 bg-gradient-to-r from-[#799F0C] to-[#FFE000] text-white hover:opacity-90">
            <div class="ct">
                <h2 class="cta-heading mb-4">
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

<div class="bg-white text-black dark:bg-slate-900 dark:text-white section">
    <div class="ct">
        <h1 class="section-heading">
            What I Know
        </h1>
        <div class="grid grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-2 gap-8 mt-8">
            <div class="what-i-do-card">
                <div><i class="fas fa-globe-africa fa-2x p-3 bg-blue-500/90 text-white rounded mb-4"></i></div>
                <p class="text-2xl font-semibold">Web Design</p>
                <p class="my-4">Customized design that unifies content with a focus on smoothness and
                    usability.</p>
                <!-- <p class="text-lg text-white"><a
                        class="bg-blue-500/90 hover:bg-blue-400/90 py-1 px-2 rounded transition-all"
                        href="{$url('/services')}">Learn
                    more <i class="fas fa-chevron-right"></i></a></p> -->
            </div>
            <div class="what-i-do-card">
                <div><i class="fas fa-code fa-2x p-3 bg-blue-500/90 text-white rounded mb-4"></i></div>
                <p class="text-2xl font-semibold">Web Development</p>
                <p class="my-4">Bespoke solutions using modern technology to deliver exciting, performant
                    experiences on the web.</p>
                <!-- <p class="text-lg text-white mt-auto"><a
                        class="bg-blue-500/90 hover:bg-blue-400/90 py-1 px-2 rounded transition-all"
                        href="{$url('/services')}">Learn more <i
                        class="fas fa-chevron-right"></i></a></p> -->
            </div>
            <div class="what-i-do-card">
                <div><i class="fas fa-server fa-2x p-3 bg-blue-500/90 text-white rounded mb-4"></i></div>
                <p class="text-2xl font-semibold">Server Administration</p>
                <p class="my-4">Securing, maintaining, monitoring, and updating Linux/Windows systems, including
                    critical systems onboard (Active Directory, Kubernetes, etc.).</p>
                <!-- <p class="text-lg text-white mt-auto"><a
                        class="bg-blue-500/90 hover:bg-blue-400/90 py-1 px-2 rounded transition-all"
                        href="{$url('/services')}">Learn more <i
                        class="fas fa-chevron-right"></i></a></p> -->
            </div>
            <div class="what-i-do-card">
                <div><i class="fas fa-database fa-2x p-3 bg-blue-500/90 text-white rounded mb-4"></i></div>
                <p class="text-2xl font-semibold">Hosting</p>
                <p class="my-4">High-performance, supported hosting to get applications online - and
                    ensure they stay online.</p>
                <!-- <p class="text-lg text-white mt-auto"><a
                        class="bg-blue-500/90 hover:bg-blue-400/90 py-1 px-2 rounded transition-all"
                        href="{$url('/hosting')}">Learn more <i
                        class="fas fa-chevron-right"></i></a></p> -->
            </div>
        </div>
    </div>
</div>

<div class="bg-[#7E1F86] text-white section">
    <div class="ct">
        <h1 class="section-heading">Technologies I Use</h1>
        <div class="mt-8 grid grid-cols-1 md:grid-cols-4 grid-rows-8 md:grid-rows-2 gap-6">
            <div class="technologies-in-use-card">
                <svg viewBox="0 0 128 128" height="3rem" width="3rem" class="pr-2">
                    <title>Svelte</title>
                    <path d="M119.838 16.936C105.553-.076 77.336-5.118 56.942 5.696l-35.829 19c-4.847 2.529-9.006 5.871-12.212 9.814-3.206 3.943-5.387 8.399-6.404 13.083a30.64 30.64 0 00-.688 6.396c.022 5.831 1.74 11.571 5.007 16.73-3.063 3.872-5.154 8.22-6.146 12.782a30.483 30.483 0 00.415 14.412c1.29 4.733 3.702 9.204 7.096 13.152 14.284 17.011 42.564 22.053 62.895 11.24l35.792-19.001c4.844-2.532 8.998-5.878 12.196-9.825 3.197-3.947 5.367-8.407 6.37-13.093.46-2.107.691-4.244.688-6.386-.009-5.82-1.705-11.551-4.945-16.709 3.062-3.869 5.153-8.213 6.147-12.771.444-2.109.67-4.245.676-6.386.002-7.595-2.852-15-8.162-21.178v-.02z"
                          fill="#FF3E00"></path>
                    <path d="M53.44 112.667a34.23 34.23 0 01-7.16.76c-4.595.001-9.122-.925-13.193-2.7-4.07-1.774-7.563-4.343-10.179-7.487-3.194-3.716-4.91-8.171-4.907-12.74a18.83 18.83 0 01.4-3.833 18.55 18.55 0 01.865-2.782l.676-1.708 1.827 1.156c4.243 2.591 8.984 4.564 14.02 5.834l1.328.333-.125 1.104v.573c-.003 1.381.514 2.73 1.477 3.854.778.958 1.826 1.744 3.052 2.288a9.936 9.936 0 003.983.837 9.923 9.923 0 002.153-.229 8.745 8.745 0 002.204-.802l35.79-19.094c1.073-.566 1.957-1.349 2.568-2.276.61-.927.928-1.968.924-3.026-.01-1.381-.54-2.725-1.515-3.844-.79-.946-1.844-1.718-3.071-2.252a9.997 9.997 0 00-3.977-.81 9.917 9.917 0 00-2.153.23 8.344 8.344 0 00-2.19.801l-13.645 7.25a29.314 29.314 0 01-7.273 2.656c-2.34.502-4.745.758-7.161.76-4.594 0-9.119-.926-13.189-2.698-4.07-1.772-7.564-4.338-10.183-7.478-3.19-3.718-4.906-8.172-4.907-12.74.002-1.285.136-2.567.4-3.833.613-2.816 1.921-5.495 3.844-7.867 1.922-2.373 4.416-4.387 7.323-5.914L67.274 18c2.248-1.19 4.7-2.09 7.273-2.667 2.34-.499 4.745-.75 7.16-.75 4.605-.01 9.144.91 13.228 2.681 4.084 1.77 7.59 4.34 10.219 7.486 3.171 3.727 4.865 8.184 4.845 12.75a18.939 18.939 0 01-.401 3.844 18.529 18.529 0 01-.864 2.781l-.676 1.708-1.827-1.114c-4.24-2.595-8.982-4.568-14.02-5.834l-1.328-.343.125-1.105v-.572c0-1.385-.516-2.735-1.477-3.865-.789-.945-1.84-1.716-3.066-2.25a9.992 9.992 0 00-3.97-.813 9.887 9.887 0 00-2.127.271 8.2 8.2 0 00-2.203.802L42.337 50a7.071 7.071 0 00-2.209 1.79 5.713 5.713 0 00-1.158 2.377 6.057 6.057 0 00-.163 1.104c-.001 1.378.515 2.722 1.477 3.844.788.945 1.84 1.717 3.065 2.25a9.98 9.98 0 003.97.812 9.918 9.918 0 002.153-.23 8.35 8.35 0 002.204-.801l13.67-7.292a29.125 29.125 0 017.273-2.656 34.305 34.305 0 017.16-.76c4.596 0 9.123.925 13.195 2.697 4.072 1.772 7.569 4.339 10.19 7.48 3.19 3.717 4.906 8.171 4.907 12.74.003 1.299-.135 2.596-.413 3.874-.609 2.817-1.917 5.497-3.839 7.87-1.923 2.372-4.418 4.385-7.328 5.911L60.726 110a29.233 29.233 0 01-7.285 2.667z"
                          fill="#fff"></path>
                </svg>
                <p class="text-xl sm:text-2xl text-sky-400">Svelte</p>
            </div>
            <div class="technologies-in-use-card">
                <svg viewBox="0 0 128 128" height="3rem" width="3rem" class="pr-2">
                    <title>Django</title>
                    <path d="M59.448 0h20.93v96.88c-10.737 2.04-18.62 2.855-27.181 2.855-25.551-.001-38.87-11.551-38.87-33.705 0-21.338 14.135-35.2 36.015-35.2 3.398 0 5.98.272 9.106 1.087zm0 48.765c-2.446-.815-4.485-1.086-7.067-1.086-10.6 0-16.717 6.523-16.717 17.939 0 11.145 5.845 17.26 16.582 17.26 2.309 0 4.212-.136 7.202-.542z"></path>
                    <path d="M113.672 32.321V80.84c0 16.717-1.224 24.735-4.893 31.666-3.398 6.661-7.883 10.873-17.124 15.494l-19.435-9.241c9.242-4.35 13.726-8.153 16.58-14 2.99-5.979 3.943-12.91 3.943-31.122V32.321zM92.742.111h20.93v21.474h-20.93z"></path>
                </svg>
                <p class="text-xl sm:text-2xl text-sky-400">Django</p>
            </div>
            <div class="technologies-in-use-card">
                <svg viewBox="0 0 128 128" height="3rem" width="3rem" class="pr-2">
                    <defs>
                        <linearGradient id="jira-original-a" gradientUnits="userSpaceOnUse" x1="22.034" y1="9.773"
                                        x2="17.118" y2="14.842" gradientTransform="scale(4)">
                            <stop offset=".176" stop-color="#0052cc"></stop>
                            <stop offset="1" stop-color="#2684ff"></stop>
                        </linearGradient>
                        <linearGradient id="jira-original-b" gradientUnits="userSpaceOnUse" x1="16.641" y1="15.564"
                                        x2="10.957" y2="21.094" gradientTransform="scale(4)">
                            <stop offset=".176" stop-color="#0052cc"></stop>
                            <stop offset="1" stop-color="#2684ff"></stop>
                        </linearGradient>
                    </defs>
                    <title>Jira</title>
                    <path d="M108.023 16H61.805c0 11.52 9.324 20.848 20.847 20.848h8.5v8.226c0 11.52 9.328 20.848 20.848 20.848V19.977A3.98 3.98 0 00108.023 16zm0 0"
                          fill="#2684ff"></path>
                    <path d="M85.121 39.04H38.902c0 11.519 9.325 20.847 20.844 20.847h8.504v8.226c0 11.52 9.328 20.848 20.848 20.848V43.016a3.983 3.983 0 00-3.977-3.977zm0 0"
                          fill="url(#jira-original-a)"></path>
                    <path d="M62.219 62.078H16c0 11.524 9.324 20.848 20.848 20.848h8.5v8.23c0 11.52 9.328 20.844 20.847 20.844V66.059a3.984 3.984 0 00-3.976-3.98zm0 0"
                          fill="url(#jira-original-b)"></path>
                </svg>
                <p class="text-xl text-2xl text-sky-400">Jira</p>
            </div>
            <div class="technologies-in-use-card">
                <svg viewBox="0 0 128 128" height="3rem" width="3rem" class="pr-2">
                    <title>Tailwind CSS</title>
                    <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                          fill="#38b2ac"></path>
                </svg>
                <p class="text-xl text-2xl text-sky-400">Tailwind CSS</p>
            </div>
            <div class="technologies-in-use-card">
                <svg viewBox="0 0 128 128" height="3rem" width="3rem" class="pr-2">
                    <title>Kubernetes</title>
                    <g fill="#486bb3">
                        <path d="M56.484 55.098c.37.27.82.43 1.31.43 1.2 0 2.18-.95 2.23-2.13l.05-.03.75-13.26c-.9.11-1.8.26-2.7.46-4.93 1.12-9.2 3.55-12.54 6.83l10.87 7.71.03-.01zM55.034 74.528a2.218 2.218 0 00-2.58-1.69l-.02-.03-13.05 2.21a26.15 26.15 0 0010.51 13.15l5.06-12.22-.04-.05c.17-.42.23-.89.12-1.37zM50.694 65.118c.44-.12.85-.38 1.16-.76.75-.94.62-2.29-.28-3.07l.01-.05-9.93-8.88a26.07 26.07 0 00-3.7 16.48l12.73-3.67.01-.05zM60.334 69.018l3.66 1.76 3.66-1.75.9-3.95-2.53-3.16h-4.06l-2.54 3.16zM67.934 53.348c.02.46.18.91.49 1.29.75.94 2.1 1.11 3.06.41l.04.02 10.8-7.66c-4.08-3.99-9.4-6.6-15.15-7.3l.75 13.24h.01zM75.514 72.778c-.17-.03-.34-.05-.51-.04-.29.01-.58.09-.85.22a2.23 2.23 0 00-1.08 2.89l-.02.02 5.11 12.34c4.93-3.14 8.61-7.83 10.54-13.24l-13.16-2.23-.03.04zM65.954 79.318a2.246 2.246 0 00-2.04-1.17c-.77.03-1.5.46-1.89 1.18h-.01l-6.42 11.6a26.16 26.16 0 0014.27.73c.88-.2 1.74-.44 2.57-.72l-6.43-11.63h-.05z"></path>
                        <path d="M124.544 76.788l-10.44-45.33a8.012 8.012 0 00-4.37-5.43l-42.24-20.18a8.157 8.157 0 00-3.92-.78 8.15 8.15 0 00-3.1.78l-42.24 20.18a8.055 8.055 0 00-4.37 5.43l-10.41 45.34a7.92 7.92 0 001.1 6.14c.14.22.3.43.46.64l29.24 36.35a8.087 8.087 0 006.32 3.01l46.89-.01c2.46 0 4.78-1.11 6.32-3.01l29.23-36.36a7.981 7.981 0 001.53-6.77zm-16.07-.55c-.31 1.35-1.76 2.17-3.26 1.85-.01 0-.03 0-.04-.01-.02 0-.03-.01-.05-.02-.21-.05-.47-.09-.65-.14-.86-.23-1.49-.58-2.27-.88-1.67-.6-3.06-1.1-4.41-1.3-.69-.05-1.04.27-1.42.52-.18-.04-.75-.14-1.08-.19-2.42 7.61-7.58 14.21-14.57 18.33.12.29.33.91.42 1.02-.16.43-.4.83-.19 1.49.49 1.27 1.28 2.52 2.24 4.01.46.69.94 1.22 1.36 2.02.1.19.23.48.33.68.65 1.39.17 2.99-1.08 3.59-1.26.61-2.82-.03-3.5-1.43-.1-.2-.23-.46-.31-.65-.36-.82-.48-1.52-.73-2.32-.57-1.68-1.05-3.07-1.73-4.25-.39-.57-.86-.64-1.29-.78-.08-.14-.38-.69-.54-.97-1.4.53-2.84.97-4.34 1.31-6.56 1.49-13.13.89-18.99-1.37l-.57 1.04c-.43.11-.84.23-1.09.53-.92 1.1-1.29 2.86-1.96 4.54-.25.79-.37 1.5-.73 2.32-.08.19-.22.45-.31.64v.01l-.01.01c-.67 1.39-2.23 2.03-3.49 1.43-1.25-.6-1.72-2.2-1.08-3.59.1-.2.22-.49.32-.68.42-.79.89-1.33 1.36-2.02.96-1.5 1.8-2.84 2.29-4.11.12-.42-.06-1-.22-1.43l.46-1.1c-6.73-3.99-12.04-10.34-14.58-18.21l-1.1.19c-.3-.17-.89-.56-1.45-.51-1.35.2-2.74.7-4.41 1.3-.78.3-1.4.64-2.27.87-.18.05-.44.1-.65.15-.02 0-.03.01-.05.02-.01 0-.03 0-.04.01-1.5.32-2.95-.5-3.26-1.85-.31-1.35.65-2.72 2.14-3.08.01 0 .03-.01.04-.01.01 0 .01 0 .02-.01.21-.05.48-.12.68-.16.88-.17 1.6-.13 2.43-.19 1.77-.19 3.23-.34 4.53-.75.41-.17.81-.74 1.09-1.1l1.06-.31c-1.19-8.22.82-16.28 5.16-22.81l-.81-.72c-.05-.32-.12-1.04-.51-1.46-.99-.93-2.25-1.71-3.76-2.64-.72-.42-1.38-.69-2.1-1.23-.15-.11-.36-.29-.52-.42-.01-.01-.03-.02-.04-.03-1.21-.97-1.49-2.64-.62-3.73.49-.61 1.24-.92 2.01-.89.6.02 1.23.24 1.76.66.17.14.41.32.56.45.68.58 1.09 1.16 1.66 1.77 1.25 1.27 2.28 2.32 3.41 3.08.59.35 1.05.21 1.5.15.15.11.63.46.91.65 4.3-4.57 9.96-7.95 16.52-9.44 1.53-.35 3.05-.58 4.57-.7l.06-1.07c.34-.33.71-.79.82-1.31.11-1.36-.07-2.82-.28-4.59-.12-.82-.31-1.51-.35-2.4-.01-.18 0-.44.01-.65 0-.02-.01-.05-.01-.07 0-1.55 1.13-2.81 2.53-2.81s2.53 1.26 2.53 2.81c0 .22.01.52.01.72-.03.89-.23 1.58-.35 2.4-.21 1.76-.4 3.23-.29 4.59.1.68.5.95.83 1.26.01.18.04.79.06 1.13 8.04.71 15.5 4.39 20.99 10.14l.96-.69c.33.02 1.04.12 1.53-.17 1.13-.76 2.16-1.82 3.41-3.08.57-.61.99-1.18 1.67-1.77.15-.13.39-.31.56-.45 1.21-.97 2.9-.86 3.77.23s.59 2.76-.62 3.73c-.17.14-.39.33-.56.45-.72.53-1.38.8-2.1 1.23-1.51.93-2.77 1.71-3.76 2.64-.47.5-.43.98-.48 1.43-.14.13-.63.57-.9.8a32.75 32.75 0 014.74 10.95c.92 3.99 1.06 7.97.53 11.8l1.02.3c.18.26.56.89 1.09 1.1 1.3.41 2.76.56 4.53.75.83.07 1.55.03 2.43.19.21.04.52.12.73.17 1.5.37 2.45 1.74 2.14 3.09z"></path>
                        <path d="M86.274 52.358l-9.88 8.84.01.03c-.34.3-.6.7-.71 1.18-.27 1.17.44 2.33 1.58 2.65l.01.05 12.79 3.68c.27-2.76.11-5.62-.55-8.48-.66-2.89-1.77-5.56-3.25-7.95z"></path>
                    </g>
                </svg>
                <p class="text-xl text-2xl text-sky-400">Kubernetes</p>
            </div>
            <div class="technologies-in-use-card">
                <svg viewBox="0 0 128 128" height="3rem" width="3rem" class="pr-2">
                    <title>WordPress</title>
                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#494949"
                          d="M64.094 126.224c34.275-.052 62.021-27.933 62.021-62.325 0-33.833-27.618-61.697-60.613-62.286C30.85.995 1.894 29.113 1.885 63.21c-.01 35.079 27.612 63.064 62.209 63.014zM63.993 4.63c32.907-.011 59.126 26.725 59.116 60.28-.011 31.679-26.925 58.18-59.092 58.187-32.771.007-59.125-26.563-59.124-59.608.002-32.193 26.766-58.848 59.1-58.859zM39.157 35.896c.538 1.793-.968 2.417-2.569 2.542-1.685.13-3.369.257-5.325.406 6.456 19.234 12.815 38.183 19.325 57.573.464-.759.655-.973.739-1.223 3.574-10.682 7.168-21.357 10.651-32.069.318-.977.16-2.271-.188-3.275-1.843-5.32-4.051-10.524-5.667-15.908-1.105-3.686-2.571-6.071-6.928-5.644-.742.073-1.648-1.524-2.479-2.349 1.005-.6 2.003-1.704 3.017-1.719a849.593 849.593 0 0126.618.008c1.018.017 2.016 1.15 3.021 1.765-.88.804-1.639 2.01-2.668 2.321-1.651.498-3.482.404-5.458.58l19.349 57.56c2.931-9.736 5.658-18.676 8.31-27.639 2.366-8.001.956-15.473-3.322-22.52-1.286-2.119-2.866-4.175-3.595-6.486-.828-2.629-1.516-5.622-1.077-8.259.745-4.469 4.174-6.688 8.814-7.113C74.333.881 34.431 9.317 19.728 34.922c5.66-.261 11.064-.604 16.472-.678 1.022-.013 2.717.851 2.957 1.652zm10.117 77.971c-.118.345-.125.729-.218 1.302 10.943 3.034 21.675 2.815 32.659-.886l-16.78-45.96c-5.37 15.611-10.52 30.575-15.661 45.544zm-8.456-2.078l-25.281-69.35c-11.405 22.278-2.729 56.268 25.281 69.35zm76.428-44.562c.802-10.534-2.832-25.119-5.97-27.125-.35 3.875-.106 8.186-1.218 12.114-2.617 9.255-5.817 18.349-8.899 27.468-3.35 9.912-6.832 19.779-10.257 29.666 16.092-9.539 24.935-23.618 26.344-42.123z"></path>
                </svg>
                <p class="text-xl text-2xl text-sky-400">WordPress</p>
            </div>
            <div class="technologies-in-use-card">
                <svg viewBox="0 0 128 128" height="3rem" width="3rem" class="pr-2">
                    <title>Python</title>
                    <path fill="#FFD845"
                          d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path>
                </svg>
                <p class="text-xl text-2xl text-sky-400">Python</p>
            </div>
            <div class="technologies-in-use-card">
                <svg viewBox="0 0 128 128" height="3rem" width="3rem" class="pr-2">
                    <title>NodeJS</title>
                    <path fill="#83CD29"
                          d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
                </svg>
                <p class="text-xl text-2xl text-sky-400">NodeJS</p>
            </div>
        </div>
    </div>
</div>
<!--This one uses UIGradients Clear Sky in dark mode and UIGradients Dania in light mode -->
<div class="bg-white dark:bg-slate-900 dark:text-white section"
     id="jumper">
    <div class="ct">
        <h1 class="section-heading">Things I Maintain</h1>
        <div class="my-4 md:my-8">
            <AppJumper/>
        </div>
    </div>
</div>

<!-- routify:options title="Home" -->