<script>
    export let title;
    export let content;
    export let icon;
    export let link;
</script>
<a href="{link}" target="_blank" rel="noreferrer">
    <div class="border rounded drop-shadow-lg border-slate-100 bg-slate-50 text-black dark:bg-slate-800 dark:border-slate-700 dark:text-white p-4 h-full hover:bg-slate-800 hover:text-white hover:bg-slate-700 dark:hover:border-slate-100 dark:hover:bg-slate-50 dark:hover:text-black transition ease-in-out">
        <h3 class="text-l sm:text-xl mb-4 font-medium">
            <i class="{icon}"></i> {title}
        </h3>
        <p>
            {content}
        </p>
    </div>
</a>