<script>
  import { Router } from '@roxi/routify'
  import { routes } from '../.routify/routes'

  import Serviceworker from './components/Serviceworker.svelte'
</script>

<Router {routes} />
<Serviceworker />

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
