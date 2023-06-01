<script>
    import {onMount} from 'svelte';
    import {darkmode} from "../stores";
    import {fly} from 'svelte/transition';
    import {browser} from "$app/environment";

    let mobileMenu = false;

    let toggleDarkMode = function () {
        $darkmode = !($darkmode)
    }

    let toggleMobileMenu = function () {
        mobileMenu = !mobileMenu
    }

    onMount(async () => {
        if (browser) {
            // Enable darkmode automatically if it's saved in localstorage
            if ($darkmode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    })
</script>

<!--Note that the absolute here and the sticky on the child keeps the navbar stuck to the top while not pushing other elements down when it's opened-->
<nav class="dark:bg-gray-800 bg-gray-50 absolute transition ease-in-out z-[100] w-full">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 sticky">
        <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <!-- Mobile menu button-->
                <button type="button"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
                        aria-controls="mobile-menu" aria-expanded="{mobileMenu}" on:click={toggleMobileMenu}>
                    <span class="sr-only">Open main menu</span>
                    {#if mobileMenu}
                        <!--
                          Icon when menu is open.

                          Heroicon name: outline/x

                          Menu open: "block", Menu closed: "hidden"
                        -->
                        <i class="fas fa-times fa-lg"></i>
                    {:else}
                        <!--
                          Icon when menu is closed.

                          Heroicon name: outline/menu

                          Menu open: "hidden", Menu closed: "block"
                        -->
                        <i class="fas fa-bars fa-lg"></i>
                    {/if}
                </button>
            </div>
            <!--            Desktop navbar -->
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0 flex items-center">
                    <a href="/">
                        <!--                        Lightmode logo -->
                        {#if !$darkmode}
                            <img class="block h-8 w-auto" src="/images/logo-cropped.svg" alt="Unixfy.net">
                        {:else if $darkmode}
                            <!--Darkmode logo-->
                            <img class="block h-8 w-auto" src="/images/logo-cropped-light.svg" alt="Unixfy.net">
                        {/if}
                    </a>
                </div>
                <div class="hidden sm:block sm:ml-6 float-right">
                    <div class="flex space-x-4 items-center">
                        <a href="/"
                           class="text-gray-600 dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Home</a>
                        <a href="/network"
                           class="text-gray-600 dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Network</a>
                        <a href="/contact"
                           class="text-gray-600 dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Contact</a>
                    </div>
                </div>
            </div>
            <!--            Right side -->
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <!--                Darkmode toggler button -->
                <button type="button"
                        class="p-1 rounded-full text-gray-400 hover:bg-gray-700 focus:outline-none"
                        on:click={toggleDarkMode}>
                    <span class="sr-only">Toggle Dark Mode</span>
                    <i class="fas fa-sun fa-lg"></i>
                </button>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        {#if mobileMenu}
            <div class="sm:hidden" id="mobile-menu" transition:fly="{{ x: -200, duration: 500 }}">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <a href="/"
                       class="text-gray-600 dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base block font-medium">
                        Home</a>
                    <a href="/network"
                       class="text-gray-600 dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base block font-medium">
                        Network</a>
                    <a href="/contact"
                       class="text-gray-600 dark:text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base block font-medium">
                        Contact</a>
                </div>
            </div>
        {/if}
    </div>
</nav>