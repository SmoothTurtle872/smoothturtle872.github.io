<script>
    import Navbar from "./navbar.svelte";

    let { page, tagline = "Welcome to My Website" } = $props();
</script>

<div>
    <h1>SmoothTurtle872.github.io/{page}</h1>
    <strong>{tagline}</strong>
    <Navbar options={["home", "about", "projects"]} selected={page} />
</div>

<style>
    div {
        text-align: center;
    }
</style>
