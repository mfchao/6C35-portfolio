<script>
  import * as d3 from "d3";

  let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);
  let arc = arcGenerator({
    startAngle: 0,
    endAngle: 2 * Math.PI,
  });

  export let data = [];

  export let selectedIndex = -1;

  //   let data = [
  //     { value: 1, label: "apples" },
  //     { value: 2, label: "oranges" },
  //     { value: 3, label: "mangos" },
  //     { value: 4, label: "pears" },
  //     { value: 5, label: "limes" },
  //     { value: 5, label: "cherries" },
  //   ];

  let total = 0;

  for (let d of data) {
    total += d;
  }
  let angle = 0;
  let sliceGenerator = d3.pie().value((d) => d.value);

  let arcData = [];
  let arcs = [];

  $: {
    arcData = sliceGenerator(data);
    arcs = arcData.map((d) => arcGenerator(d));
  }

  for (let d of data) {
    let endAngle = angle + (d / total) * 2 * Math.PI;
    arcData.push({ startAngle: angle, endAngle });
    angle = endAngle;
  }
  let colors = d3.scaleOrdinal(d3.schemeTableau10);
</script>

<div class="container">
  <svg viewBox="-50 -50 100 100">
    {#each arcs as arc, index}
      <path
        d={arc}
        fill={colors(index)}
        class:selected={selectedIndex === index}
        on:click={(e) => (selectedIndex = selectedIndex === index ? -1 : index)}
      />
    {/each}
  </svg>

  <ul class="legend">
    {#each data as d, index}
      <li style="--color: {colors(index)}">
        <span class="swatch"></span>
        {d.label} <em>({d.value})</em>
      </li>
    {/each}
  </ul>
</div>

<style>
  svg {
    max-width: 20em;
    margin-block: 2em;
    /* Do not clip shapes outside the viewBox */
    overflow: visible;
  }

  svg:has(path:hover) {
    path:not(:hover) {
      opacity: 50%;
    }
  }

  .selected {
    --color: oklch(60% 45% 0) !important;

    &:is(path) {
      fill: var(--color);
    }
  }

  path {
    transition: 300ms;
    cursor: pointer;
  }

  .swatch {
    display: inline-flex;
    width: 1em;
    height: 1em;
    background-color: var(--color);
    border-radius: 50%;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5em;
    grid-template-columns: repeat(auto-fill, minmax(9em, 1fr));
  }

  .container {
    display: flex;
    flex-direction: row; /* Change the flex direction to row */
    align-items: center; /* Change the alignment to center */
    justify-content: space-between; /* Add this line to create space between the SVG and legend */
  }

  .legend {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(9em, 1fr));
    gap: 1em;
    flex: 1;
    justify-content: center; /* Add this line to center the legend items horizontally */
  }
</style>
