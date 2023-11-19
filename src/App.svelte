<script>
  import Cards_1 from "./Components/Cards_1.svelte";
  import Fold from "./Components/Fold.svelte";
  import Title from "./Components/Title.svelte";
  import TopBar from "./Components/TopBar.svelte";
</script>

<link rel="stylesheet" href="reset.css" />
<link rel="stylesheet" href="/scss/elements.scss" />
<link rel="stylesheet" href="scss/var.scss" />
<link rel="stylesheet" href="/scss/structure.scss" />
<link rel="stylesheet" href="scss/utils.scss" />

<link
  rel="stylesheet"
  href="fontawesome-free-6.4.2-web\fontawesome-free-6.4.2-web\css\all.min.css"
/>

<main>
  <TopBar />
  <Fold />

  <section>
    <Title />
    <Cards_1 />
  </section>

  <section>
  </section>
</main>
