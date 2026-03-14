<script>
    import Navbar from "./navbar.svelte";

    let { page } = $props();
</script>

<h1>SmoothTurtle872.github.io/{page}</h1>
<strong>Welcome to my website</strong>
<Navbar options={["home", "about", "projects"]} selected={page} />
