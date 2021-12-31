<script>
    import Card from "./Card.svelte";

    let categories = ["Sites", "Services", "Apps"]

    let sites = [
        {
            "title": "Blog",
            "content": "Ramblings about tech, hosting, and life",
            "link": "https://blog.unixfy.net",
            "icon": "fas fa-rss",
            "category": "Sites"
        },
        {
            "title": "Docs",
            "content": "Documentation for services & tutorials",
            "link": "https://docs.unixfy.net",
            "icon": "fas fa-book",
            "category": "Sites"
        },
        {
            "title": "Alex-Wang.net",
            "content": "Is Unixfy a person? Perhaps 😉",
            "link": "https://alex-wang.net",
            "icon": "fas fa-smile",
            "category": "Sites"
        },
        {
            "title": "GambitProfit",
            "content": "The (formerly) easy way to profit from Gambit",
            "link": "https://gambitprofit.com",
            "icon": "fas fa-info-circle",
            "category": "Sites"
        },
        {
            "title": "AS139921",
            "content": "Learn about Unixfy Network (AS139921), let's get peered",
            "link": "https://network.unixfy.net",
            "icon": "fas fa-network-wired",
            "category": "Sites"
        },
        // {
        //     "title": "Software",
        //     "content": "test3",
        //     "link": "https://software.unixfy.net",
        //     "icon": "fas fa-code-branch",
        //     "category": "Sites"
        // },
        {
            "title": "YieldBread",
            "content": "A student blog about making money online",
            "link": "https://yieldbread.com",
            "icon": "fas fa-money-bill-wave",
            "category": "Sites"
        },
        {
            "title": "Support",
            "content": "Get help with Unixfy.net services",
            "link": "https://unixfy-service.refined.site",
            "icon": "fas fa-life-ring",
            "category": "Services"
        },
        {
            "title": "Single Sign On",
            "content": "Securely access apps & services",
            "link": "https://sso.unixfy.net",
            "icon": "fas fa-sign-in-alt",
            "category": "Services"
        },
        {
            "title": "MyUnixfy",
            "content": "Access your hosting account",
            "link": "https://my.unixfy.net",
            "icon": "fas fa-file-invoice",
            "category": "Services"
        },
        {
            "title": "Status",
            "content": "See if things are on fire",
            "link": "https://status.unixfy.net",
            "icon": "fas fa-check-circle",
            "category": "Services"
        },
        {
            "title": "Uptime Monitor",
            "content": "Be sure nothing's on fire",
            "link": "https://hetrixtools.com/r/66e69eb4eb7261f2aa293972f4e89641/",
            "icon": "fas fa-chart-line",
            "category": "Services"
        },
        {
            "title": "Confluence (Cloud)",
            "content": "Internal wiki",
            "link": "https://unixfy.atlassian.net/wiki",
            "icon": "fab fa-confluence",
            "category": "Apps"
        },
        {
            "title": "Confluence (Onprem)",
            "content": "Internal wiki & Unixfy Docs",
            "link": "https://confluence.unixfy.net/login.action",
            "icon": "fab fa-confluence",
            "category": "Apps"
        },
        {
            "title": "Jira (Cloud)",
            "content": "Project management software",
            "link": "https://unixfy.atlassian.net/jira",
            "icon": "fab fa-jira",
            "category": "Apps"
        },
        {
            "title": "Seafile",
            "content": "Securely store files for desktop use",
            "link": "https://files.unixfy.net",
            "icon": "fas fa-file",
            "category": "Apps"
        },
        {
            "title": "Link Shortener",
            "content": "go.unixfy.net/yourlinkhere",
            "link": "https://ui.go.unixfy.net",
            "icon": "fas fa-link",
            "category": "Apps"
        },
        {
            "title": "S3",
            "content": "Securely store files with a robust API",
            "link": "https://console.s3.unixfy.net",
            "icon": "fas fa-fill",
            "category": "Apps"
        },
        {
            "title": "Internal VPN",
            "content": "Access privileged services on Unixfy-managed servers",
            "link": "https://zerotier.unixfy.net",
            "icon": "fas fa-ethernet",
            "category": "Apps"
        },
        {
            "title": "Appwrite",
            "content": "API backend for various sites & services",
            "link": "https://appwrite.unixfy.net",
            "icon": "fas fa-mobile",
            "category": "Apps"
        },
        {
            "title": "Media",
            "content": "Watch some TV",
            "link": "https://app.plex.tv",
            "icon": "fas fa-film",
            "category": "Apps"
        },
        {
            "title": "Webmail (Workspace)",
            "content": "Google Workspace account webmail",
            "link": "https://mail.google.com/a/unixfy.net",
            "icon": "fab fa-google",
            "category": "Apps"
        },
        {
            "title": "Webmail (Onprem)",
            "content": "Self-hosted email account webmail",
            "link": "https://webmail.disulfi.de",
            "icon": "fas fa-envelope",
            "category": "Apps"
        },
    ]

    let filtersitesbycategory = function (category) {
        return sites.filter(item => item.category === category)
    }
</script>

<div class="h-100">
    {#each categories as category}
        <div class="mb-6">
            <h1 class="sm:text-2xl md:text-3xl lg:text-4xl text-xl">{category}</h1>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
                {#each filtersitesbycategory(category) as site}
                    <Card title="{site.title}" content="{site.content}" icon="{site.icon}" link="{site.link}">
                    </Card>
                {/each}
            </div>
        </div>
    {/each}
</div>