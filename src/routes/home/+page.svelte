<script>
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
    import Project from "$lib/components/project.svelte";
</script>

<Header page="home" />

<div>
    <h2>Welcome!</h2>
    <p>This website is the home of all of my projects and games!</p>
</div>
<br />
<div>
    <h2>Random Project</h2>
    <ul class="projects">
        <li>
            <Project />
        </li>
        <li>
            <Project />
        </li>
    </ul>
    <br />
    <a href="/projects"><button class="link">View All Projects</button></a>
</div>
<Footer />

<style>
    div {
        text-align: center;
    }

    .projects {
        display: flex;
        justify-content: center;
        list-style: none;
    }
</style>
