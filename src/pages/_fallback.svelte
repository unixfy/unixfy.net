<script>
    import {url} from "@roxi/routify";
</script>

<div class="page-wrapper">
    <div class="ct">
        <div class="my-4 bg-red-500 p-5 rounded text-white">
            <div>
                <h1 class="text-2xl">Houston, we have a problem...</h1>
                <p>The page you were looking for couldn't be found. (Error 404)</p>
            </div>
        </div>

        <div>
            <h2 class="text-xl">Here's what you can do:</h2>
            <a class="button" href="{$url('/')}">Go Home</a>
        </div>

    </div>
</div>