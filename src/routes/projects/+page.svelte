<script>
  import projects from "$lib/projects.json";
  import Project from "$lib/Projects.svelte";
</script>

<h1>Projects</h1>
<div class="projects">
  {#each projects as p}
    <Project info={p} />
  {/each}

  <!-- <a href="a2.html" class="project-hero">
    <article>
      <h2>A2: Exploratory Data Analysis</h2>
      <img
        src="../images/Exploratory Data Analysis 6670cf7303e34aa5a274872809e601f9/Screenshot_2024-02-20_at_4.56.40_pm.png"
        alt=""
      />
      <p>Exploring Factors that Influence Housing Prices in Boston.</p>
    </article>
  </a>
 <a href="a3.html" class="project-hero">
    <article>
      <h2>A3: Visualization Design</h2>
      <img src="../images/A3/A3.png" alt="" />
      <p>Exploring Male and Female Population Growth</p>
    </article>
  </a>
  <article>
    <h2>Maxime possimus quia delectus.</h2>
    <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="" />
    <p>
      Perspiciatis quam similique omnis minus tenetur modi ipsa! Accusamus ad
      nisi veritatis corporis doloremque fuga, quod eaque cupiditate, adipisci
      consectetur officia quidem, similique sunt! Reprehenderit amet officiis
      cumque vitae repellendus!
    </p>
  </article>
  <article>
    <h2>Eveniet reiciendis unde exercitationem?</h2>
    <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="" />
    <p>
      Sequi officiis, voluptatem maiores rem dicta molestias odio similique
      exercitationem neque. Nostrum, repellat architecto animi vel numquam,
      ullam, assumenda perspiciatis nobis itaque officiis consequuntur saepe
      expedita rem temporibus! Quo, dolorem.
    </p>
  </article>
  <article>
    <h2>Autem optio consequatur reprehenderit.</h2>
    <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="" />
    <p>
      Tenetur voluptatum mollitia cupiditate tempora, at vero voluptatibus id
      beatae voluptatem quo omnis assumenda neque vel et consectetur sunt
      explicabo non praesentium? Quas, commodi quidem eaque molestias tenetur
      culpa ad!
    </p>
  </article>
  <article>
    <h2>Quasi accusantium veniam ipsam!</h2>
    <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="" />
    <p>
      Voluptates repudiandae ipsam eveniet repellendus esse voluptate
      reprehenderit assumenda aliquam ducimus, facere quaerat similique et
      nulla, vero ipsum fuga harum architecto, magnam dolore maiores quisquam.
      Aspernatur natus non aliquam ab!
    </p>
  </article>
  <article>
    <h2>Odit blanditiis minus alias.</h2>
    <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="" />
    <p>
      Excepturi incidunt quaerat eius! Repellat neque laboriosam quasi? Aut,
      explicabo quasi ab ipsum doloribus similique suscipit ad est dignissimos?
      Facilis optio nostrum vitae voluptates atque incidunt laboriosam corrupti
      eum reprehenderit.
    </p>
  </article>
  <article>
    <h2>Enim inventore magnam delectus?</h2>
    <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="" />
    <p>
      Quam culpa laborum earum maxime assumenda nisi perferendis. Eum cumque ut
      vel exercitationem! Consequuntur repellat cupiditate soluta praesentium
      eius aut vitae odio magnam reiciendis asperiores eligendi, velit esse,
      inventore ullam?
    </p>
  </article>
  <article>
    <h2>Obcaecati totam incidunt illo.</h2>
    <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="" />
    <p>
      Molestias sint sunt est numquam maxime non, mollitia possimus ut nam! Est
      magnam, accusantium numquam maiores laborum ratione expedita esse! Ex sunt
      vero nostrum quaerat, nihil voluptatum dolores tempora voluptas.
    </p>
  </article>
  <article>
    <h2>Voluptate eius quas tenetur?</h2>
    <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="" />
    <p>
      Expedita eaque amet voluptatum! Tenetur delectus itaque vel illum.
      Consectetur dignissimos nemo eius ut laborum quia eveniet numquam optio at
      quaerat quibusdam ipsum quod tempora assumenda maiores, corrupti accusamus
      quae?
    </p>
  </article>
  <article>
    <h2>Architecto ipsam ullam vel.</h2>
    <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="" />
    <p>
      Nesciunt ex quisquam, impedit omnis delectus, atque aperiam hic
      repellendus numquam neque voluptas ducimus deserunt explicabo sapiente
      maxime vitae unde asperiores quidem perferendis cumque blanditiis
      consectetur magni. Ut, doloribus perspiciatis.
    </p>
  </article>
  <article>
    <h2>Tempore quos optio deleniti!</h2>
    <img src="https://vis-society.github.io/labs/2/images/empty.svg" alt="" />
    <p>
      Provident, harum consectetur repellat repudiandae adipisci ratione fugit
      fuga quo corrupti rerum odit asperiores eveniet odio impedit, enim nulla
      maiores facilis non. Dolor iure cum quod qui soluta, fugit necessitatibus.
    </p>
  </article> -->
</div>
