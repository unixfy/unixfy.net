<script>
    import {Router} from '@roxi/routify'
    import {routes} from '../.routify/routes'
    import PWAReloadPrompt from "./components/PWAReloadPrompt.svelte";

    //  Fonts
    import "@fontsource/ibm-plex-sans"
    import "@fontsource/space-grotesk"
</script>

<Router {routes}/>

<PWAReloadPrompt/>

<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
