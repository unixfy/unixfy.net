<script>
    import Card from "./Card.svelte";

    let sites = [
        {
            "title": "tests",
            "content": "test3",
            "link": "#",
        },
        {
            "title": "tests",
            "content": "test3",
            "link": "#",
        },
        {
            "title": "tests",
            "content": "test3",
            "link": "#",
        },
        {
            "title": "tests",
            "content": "test3",
            "link": "#",
        },

                {
            "title": "tests",
            "content": "test3",
            "link": "#",
        },
                {
            "title": "tests",
            "content": "test3",
            "link": "#",
        },

    ]
</script>

<div class="h-100">
    <h1 class="sm:text-2xl md:text-3xl lg:text-4xl text-xl">Sites</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
        {#each sites as site}
            <Card title="{site.title}" content="{site.content}">
            </Card>
        {/each}
    </div>

    <h1 class="sm:text-2xl md:text-3xl lg:text-4xl text-xl mb-4">Services</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
        {#each sites as site}
            <Card title="{site.title}" content="{site.content}">
            </Card>
        {/each}
    </div>

    <h1 class="sm:text-2xl md:text-3xl lg:text-4xl text-xl mb-4">Apps</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
        {#each sites as site}
            <Card title="{site.title}" content="{site.content}">
            </Card>
        {/each}
    </div>
</div>