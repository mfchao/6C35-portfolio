<script>
  export let info = {};
  let p = info;
</script>

<a href={p.link} class="project-hero">
  <article>
    <h2>{p.title}</h2>
    <img src={p.image} alt="ProjectHero" />
    <p>{p.description}</p>
    <p>{p.year}</p>
  </article>
</a>
