<script>
    let { site, name } = $props();
</script>

{#await import(`$lib/assets/${name}.svg`) then { default: src }}
    <a href={site} title={name}>
        <img {src} alt={name} />
    </a>
{/await}

<style>
    a {
        padding: 10px;
        background-color: #00000000;
        border: none;
        color: #e9f8f9;
        text-decoration: none;
        img {
            width: 2rem;
        }
    }
</style>
