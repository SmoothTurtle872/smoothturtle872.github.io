<script>
    import { onMount } from "svelte";
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";

    onMount(() => {
        console.log("hi");
        if (browser) {
            goto("/home");
        }
    });
</script>
