<script>
    import Card from "./Card.svelte";

    let categories = ["Sites", "Services", "Apps"]

    let sites = [
        {
            "title": "tests",
            "content": "test3",
            "link": "#",
            "icon": "fab fa-atlassian",
            "category": "Sites"
        },
        {
            "title": "tests",
            "content": "test3",
            "link": "#",
            "icon": "fab fa-facebook",
            "category": "Services"
        },
        {
            "title": "tests",
            "content": "test3",
            "link": "#",
            "icon": "fab fa-google",
            "category": "Apps"
        },
        {
            "title": "tests",
            "content": "test3",
            "link": "#",
            "icon": "fab fa-confluence",
            "category": "Apps"
        }
    ]

    let filtersitesbycategory = function (category) {
        return sites.filter(item => item.category === category)
    }
</script>

<div class="h-100">
    {#each categories as category}
        <h1 class="sm:text-2xl md:text-3xl lg:text-4xl text-xl">{category}</h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
            {#each filtersitesbycategory(category) as site}
                <Card title="{site.title}" content="{site.content}" icon="{site.icon}" link="{site.link}">
                </Card>
            {/each}
        </div>
    {/each}
</div>