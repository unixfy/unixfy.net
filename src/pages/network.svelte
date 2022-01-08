<script>
    import PageHeader from "../components/PageHeader.svelte";

    let wanttopeer;

    const redirToDingDing = function () {
        setTimeout(() => window.location.href = "https://www.youtube.com/watch?v=SrDSqODtEFM", 1500)
    }
</script>

<div class="page-wrapper">
    <div class="ct">
        <PageHeader title="Unixfy Network (AS139921)"
                    content="An educational, non-profit, IPv6-only network. I'm using it to learn networking concepts such as BGP and the correct use of IPv6 😉"/>

        <div class="mb-8">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-display mb-4">Peering policy</h2>
            <p>
                <strong>Do you want to peer with me?</strong>
            </p>
            <div class="my-4 p-8 rounded border dark:text-black" class:bg-red-200="{wanttopeer === false}" class:bg-green-200="{wanttopeer === true}">
                {#if !(typeof wanttopeer !== 'undefined')}
                    <!-- yes button -->
                    <button class="bg-green-500 py-3 px-6 inline hover:bg-green-400 transition rounded text-white text-xl"
                            on:click={() => wanttopeer = true}>
                        Yes! &#128526;
                    </button>
                    <!-- no button -->
                    <button class="bg-red-500 py-3 px-6 inline hover:bg-red-400 transition rounded text-white text-xl"
                            on:click={() => wanttopeer = false}>
                        No! &#9785;
                    </button>
                {:else}
                    {#if wanttopeer === true}
                        <span class="font-bold text-green-500">Great! I want to peer with you too.</span>
                        Please visit my PeeringDB page to check that we share a facility. Then, we can get in touch and
                        sort out the
                        details!
                    {:else if wanttopeer === false}
                        <span class="font-bold text-pink-500" use:redirToDingDing>Oh no!</span>
                        Prepare to be redirected...
                    {/if}
                    <div class="mt-4">
                        <button class="bg-cyan-500 py-2 px-4 inline hover:bg-cyan-400 transition rounded text-white text-xl"
                                on:click={() => wanttopeer = undefined}>
                            Let's choose again... &#129320;
                        </button>
                    </div>
                {/if}
            </div>

        </div>

        <div class="mb-8">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-display mb-4">Contacts</h2>
            <p>
                <strong>Abuse queries:</strong> Send an email to <a href="mailto:abuse@unixfy.net" class="link">abuse
                [at] unixfy.net</a>
                <br>
                <strong>General queries:</strong> Send an email to <a href="mailto:alex@unixfy.net" class="link">alex
                [at] unixfy.net</a>
                <span class="text-red-500 my-4 block">Do not send spam or marketing!  Your email will be marked as spam.</span>
                I typically respond to queries within 24 hours.
            </p>
        </div>

        <a href="https://www.peeringdb.com/net/21933" rel="noreferrer" target="_blank">
            <div class="mt-8 bg-blue-500 hover:bg-blue-300 p-8 rounded text-white transition">
                <h2 class="text-2xl md:text-3xl mb-4">PeeringDB</h2>
                <p class="text-lg">Click here to view AS139921's PeeringDB page.</p>
            </div>
        </a>
    </div>
</div>