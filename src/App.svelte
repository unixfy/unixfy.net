<script>
    import {Router} from '@roxi/routify'
    import {routes} from '../.routify/routes'
    import PWAReloadPrompt from "./components/PWAReloadPrompt.svelte";

    //  Fonts
    import "@fontsource/space-grotesk/400.css"
    import "@fontsource/space-grotesk/600.css"

    import "@fontsource/ibm-plex-sans/300.css"
    import "@fontsource/ibm-plex-sans/400.css"
    import "@fontsource/ibm-plex-sans/500.css"
    import "@fontsource/ibm-plex-sans/600.css"
    import "@fontsource/ibm-plex-sans/700.css"
</script>

<Router {routes}/>

<PWAReloadPrompt/>

<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
