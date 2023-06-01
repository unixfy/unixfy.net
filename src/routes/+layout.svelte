<script>
    import "../app.css";

    //  Fonts
    import "@fontsource/space-grotesk/400.css"
    import "@fontsource/space-grotesk/500.css"
    import "@fontsource/space-grotesk/600.css"

    import "@fontsource/ibm-plex-sans/300.css"
    import "@fontsource/ibm-plex-sans/400.css"
    import "@fontsource/ibm-plex-sans/500.css"
    import "@fontsource/ibm-plex-sans/600.css"
    import "@fontsource/ibm-plex-sans/700.css"

    // Fontawesome
    import "fontawesome-free/css/all.min.css"

    import {page} from "$app/stores";
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
    import {browser, dev} from "$app/environment";
</script>

<svelte:head>
    <title>{(($page.error) ? "Error" : $page.data.title || "Welcome")} | Unixfy.net</title>

    <meta name="og:title" content="{(($page.error) ? 'Error' : $page.data.title || 'Welcome')} | Unixfy.net">
    <meta name="theme-color" content="#2196F3"/>
    <link rel="apple-touch-icon" href="/images/largeicon.png"/>
    <meta name="twitter:image" content="/assets/img/largeicon.png">
    <meta name="twitter:description" content="Unixfy.net is the official website for Unixfy.">
    <meta name="twitter:card" content="summary">
    <meta name="description" content="Unixfy.net is the official website for Unixfy.">
    <meta property="og:type" content="website">
    <meta name="twitter:title" content="Unixfy.net">
    <meta property="og:image" content="/assets/img/largeicon.png">
    <link rel="icon" type="image/png" sizes="1000x1000" href="/images/largeicon.png">

    {#if $page.data.noIndex}
        <meta name="robots" content="noindex, nofollow"/>
    {/if}

    {#if !dev && browser}
        <link rel="manifest" href="/manifest.webmanifest"/>
    {/if}
</svelte:head>

<noscript>
    <div style="background-color: red; padding: 15px;">
        <p style="color:white; font-size: 2rem;">Please enable JavaScript for the best experience.</p>
    </div>
</noscript>

<div class="min-h-screen">
    <Navbar/>
    <div class="pt-[3rem]">
        <slot/>
    </div>
    <Footer/>
</div>
