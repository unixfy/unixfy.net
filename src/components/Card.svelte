<script>
    export let title;
    export let content;
    export let icon;
</script>
<div class="border rounded border-gray-300 p-4 bg-gray-50 text-black">
    <h3 class="text-l sm:text-xl mb-4 font-medium">
        <i class="{icon}"></i> {title}
    </h3>
    <p>
        {content}
    </p>
</div>