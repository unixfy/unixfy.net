<script>
    // The div that holds the TSParticles stuff won't show until this function returns
    import {tsParticles} from "tsparticles";
    import {tsparticles404options} from "../stores";
    import {onDestroy} from "svelte";

    let tsparticlesinstance;

    async function mountTsParticles() {
        tsparticlesinstance = tsParticles
            .load("tsparticles404", $tsparticles404options)
            .catch((error) => {
                console.error(error);
            })
    }

    const mountTsparticles = mountTsParticles();

    // We have to get rid of tsparticles once the user navigates away from the page
    onDestroy(() => tsParticles.dom().find((c) => c.id === 'tsparticles404').destroy())
</script>

<div class="page-wrapper bg-gradient-to-tr from-[#005C97] to-[#363795] text-white bg-animate">
    <div class="ct text-center">
        {#await mountTsparticles}
            <!--        Tsparticle wrapper -->
            <div id="tsparticles" class="h-100 absolute m-0 p-0"></div>
        {/await}
        <div class="mb-16">
            <h1 class="sm:text-3xl md:text-4xl lg:text-5xl text-2xl font-display font-semibold">Oops! Error 404</h1>
            <h2 class="mt-2">Houston, we've got a problem! We're lost in space!</h2>
        </div>
        <div>
            <img alt="Unixfy's funny 404 illustration" src="/images/404-illustration.svg" width="50%" height="500px"
                 class="mx-auto animate-pulse"/>
            <!--        This is hidden on screens smaller than md -->
            <p class="text-xs hidden italic md:inline">yep, I'm a great artist :)</p>
        </div>
    </div>
</div>

<!-- routify:options title="404" -->