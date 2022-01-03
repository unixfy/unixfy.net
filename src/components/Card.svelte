<script>
    export let title;
    export let content;
    export let icon;
    export let link;
</script>
<a href="{link}" target="_blank" rel="noreferrer">
    <div class="border rounded border-gray-300 bg-zinc-50 text-black dark:bg-zinc-700 dark:border-gray-900 dark:text-white p-4 h-full hover:bg-zinc-700 hover:text-white hover:border-gray-900 dark:hover:border-gray-300 dark:hover:bg-zinc-50 dark:hover:text-black transition ease-in-out">
        <h3 class="text-l sm:text-xl mb-4 font-medium">
            <i class="{icon}"></i> {title}
        </h3>
        <p>
            {content}
        </p>
    </div>
</a>