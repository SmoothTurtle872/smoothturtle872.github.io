<script>
    import Header from "../../lib/components/header.svelte";
    import Footer from "../../lib/components/footer.svelte";
</script>

<Header page="about" tagline="About Me" />
<div>
    <h2>Who am I?</h2>
    <p>
        I am an Aussie programmer who is just making some little projects,
        whether it be tools, games, libraries or this very website, I'm just
        trying to learn more about programming.
    </p>
    <h2>What languages do I use?</h2>
    <p>
        Quite a few, some projects are in python, others in rust. This website
        is written in svelte.
    </p>
</div>
<Footer />

<style>
    div {
        text-align: center;
    }
</style>
