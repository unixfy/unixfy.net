<script>
    import PageHeader from "../components/PageHeader.svelte";
    import {url} from "@roxi/routify";
</script>

<div class="page-wrapper">
    <div class="ct">
        <PageHeader title="Contact"
                    content="Get in touch if you're interested in learning more or just want to say hi!"/>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="border border-blue-500 p-4 rounded">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-display mb-4"><i class="fas fa-life-ring"></i>
                    Support</h2>
                <p><span class="font-bold">Online support portal: </span> <a
                        href="https://unixfy.atlassian.net/servicedesk"
                        rel="noopener" class="link" target="_blank">Open a ticket here</a>
                </p>
                <p><span class="font-bold">Email: </span> support [at] unixfy.net</p>
            </div>
            <div class="border border-red-500 p-4 rounded">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-display mb-4"><i
                        class="fas fa-exclamation-triangle"></i>
                    Abuse</h2>
                <p><span class="font-bold">Online support portal: </span> <a
                        href="https://unixfy.atlassian.net/servicedesk/customer/portal/6/group/6/create/10026"
                        rel="noopener" class="link" target="_blank">Open a ticket here</a>
                </p>
                <p><span class="font-bold">Email: </span> support [at] unixfy.net</p>
                <div class="border border-red-500 p-4 rounded mt-4">
                    <p>You should only use this if you find abuse on a Unixfy
                        web service, AS139921, or a Unixfy-related domain.</p>
                    <p class="italic">Response within 24 hours.</p>
                </div>
            </div>
        </div>
    </div>
</div>