<script>
    import Card from "./Card.svelte";
    import * as appjumperData from './apps.json'

    let categories = appjumperData.categories;
    let sites = appjumperData.sites;

    // Function to filter sites by category purely on client side
    let filterSitesByCategory = function (category) {
        return sites.filter(item => item.category === category)
    }
</script>

<div class="h-100">
    {#each categories as category}
        <div class="mb-6">
            <!--             This bit of hackiness titlecases our otherwise lowercase strings -->
            <h1 class="sm:text-2xl md:text-3xl lg:text-4xl text-xl">{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</h1>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
                {#each filterSitesByCategory(category.name) as site}
                    <Card title="{site.title}" content="{site.desc}" icon="{site.icon}" link="{site.url}">
                    </Card>
                {/each}
            </div>
        </div>
    {/each}
</div>