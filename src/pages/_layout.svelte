<script>
    import Navbar from "../components/Navbar.svelte";
    import {metatags, page} from "@roxi/routify";
    import Footer from "../components/Footer.svelte";


    let toTitlecase = function (str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    // Autogenerate the title
    $: metatags.title = `${toTitlecase($page.title)} | Unixfy.net`
    $: metatags['og:title'] = `${toTitlecase($page.title)} | Unixfy.net`
</script>

<header/>

<Navbar/>

<!-- Pushes the footer to the bottom -->
<main class="min-h-screen">
    <slot/>
</main>

<Footer/>

<footer/>
