<script>
    import Card from "./Card.svelte";
    import {directus} from "../stores";
    import {ready} from "@roxi/routify";

    // We fill this in later
    let categories = [];
    let sites = [];

    // Function to filter sites by category purely on client side
    let filtersitesbycategory = function (category) {
        return sites.filter(item => item.category === category)
    }

    async function loadData() {
        // Grab all appjumper categories
        let categoriesData = await $directus.items('UNIXFYNET_AppJumperCategories').readMany();
        categories = categoriesData["data"]

        // Grab all appjumper items that are published
        const sitesData = await $directus.items('UNIXFYNET_AppJumper').readMany({
            "filter": {
                status: "published"
            }
        });
        sites = sitesData["data"]

        // We call $ready(); here so that Spank doesn't start generating static pages until our API requests complete
        // That way the static pages will still be populated with data!
        $ready();
    }

    // The app will await this promise
    let promise = loadData();

</script>

<div class="h-100">
    {#await promise}
        <h1 class="sm:text-2xl md:text-3xl lg:text-4xl text-xl"><i class="fas fa-sync-alt animate-spin"></i> Fetching
            data from API...</h1>
    {:then resp}
        {#each categories as category}
            <div class="mb-6">
                <!--             This bit of hackiness titlecases our otherwise lowercase strings -->
                <h1 class="sm:text-2xl md:text-3xl lg:text-4xl text-xl">{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</h1>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
                    {#each filtersitesbycategory(category.id) as site}
                        <Card title="{site.title}" content="{site.desc}" icon="{site.icon}" link="{site.url}">
                        </Card>
                    {/each}
                </div>
            </div>
        {/each}
    {:catch error}
        <!-- Handle error in api request -->
        <div class="my-4 bg-red-500 p-5 rounded text-white">
            <h1 class="sm:text-2xl md:text-3xl lg:text-4xl text-xl">Whoops, an error occurred while loading the
                data:</h1>
            <p class="font-mono my-4">{error}</p>
            <p>You can try reloading the page.</p>
        </div>

    {/await}
</div>