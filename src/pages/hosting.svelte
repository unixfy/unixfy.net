<script>
    import PageHeader from "../components/PageHeader.svelte";
    import HostingPricingMatrix from "../components/HostingPricingMatrix.svelte";
</script>

<div class="page-wrapper">
    <div class="ct">
        <PageHeader title="Hosting" content="Providing bespoke, awesome non-profit hosting services."/>

        <!--    Priicng table-->
        <HostingPricingMatrix />

        <a href="https://my.disulfi.de/index.php?fuse=home&view=login" rel="noreferrer">
            <div class="mt-8 bg-blue-500 hover:bg-blue-300 p-8 rounded text-white transition">
                <h2 class="text-2xl md:text-3xl mb-4">Existing clients</h2>
                <p class="text-lg">Click here to sign into your account and manage your existing services.</p>
            </div>
        </a>
    </div>
</div>