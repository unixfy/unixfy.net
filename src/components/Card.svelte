<script>
    export let title;
    export let content;
    export let icon;
    export let link;
</script>
<a href="{link}" target="_blank" rel="noreferrer">
    <div class="border rounded border-gray-300 p-4 bg-gray-50 text-black h-full hover:bg-gray-700 hover:text-white hover:border-gray-900 transition ease-in-out">
        <h3 class="text-l sm:text-xl mb-4 font-medium">
            <i class="{icon}"></i> {title}
        </h3>
        <p>
            {content}
        </p>
    </div>
</a>