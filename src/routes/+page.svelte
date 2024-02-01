<script lang="ts">
  import { onMount } from "svelte"
  import ImageParallax from "$components/ImageParallax.svelte"
  const imagesTop = [
    { alt: "Estrellas", src: "/images/1-estrellas.webp", mult: 0.5 },
    { alt: "Montañas", src: "/images/1-monta.webp", mult: 0.6 },
    { alt: "Infante", src: "/images/1-infan.webp", mult: 0.7 }
  ]

  let y = 0

  onMount(() => {
    console.log(window.innerWidth, window.innerHeight)
  })
</script>

<svelte:window
  bind:scrollY={y}
  on:resize={(e) => console.log(e?.target?.innerWidth, e?.target?.innerHeight)}
/>

<div class="wrapper">
  <!--https://www.youtube.com/watch?v=mxHoPYFsTuk-->
  <!--
  <div class="img-cont">
    {#each imagesTop as img, idx}
      <img class="img-{idx + 1}" src={img.src} alt={img.alt} />
    {/each}
  </div>
  -->
  <ImageParallax images={imagesTop} width={2200} height={1975} />

  <section>
    LOREM IPSUM dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
    sit amet consectetur adipisicing elit. Necessitatibus, ipsam possimus. Doloremque recusandae
    earum architecto fugiat molestias iure quas! Obcaecati quis mollitia dolores adipisci dolor
    tenetur rerum amet ex repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Deleniti eaque sit voluptatibus culpa. Quasi consequatur magni optio repellat magnam
    accusantium? Omnis sunt nostrum illum id, adipisci quae mollitia provident aperiam!
  </section>

  <section>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
    sit amet consectetur adipisicing elit. Necessitatibus, ipsam possimus. Doloremque recusandae
    earum architecto fugiat molestias iure quas! Obcaecati quis mollitia dolores adipisci dolor
    tenetur rerum amet ex repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Deleniti eaque sit voluptatibus culpa. Quasi consequatur magni optio repellat magnam
    accusantium? Omnis sunt nostrum illum id, adipisci quae mollitia provident aperiam!
  </section>

  <section>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
    sit amet consectetur adipisicing elit. Necessitatibus, ipsam possimus. Doloremque recusandae
    earum architecto fugiat molestias iure quas! Obcaecati quis mollitia dolores adipisci dolor
    tenetur rerum amet ex repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Deleniti eaque sit voluptatibus culpa. Quasi consequatur magni optio repellat magnam
    accusantium? Omnis sunt nostrum illum id, adipisci quae mollitia provident aperiam!
  </section>
  <section>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
    sit amet consectetur adipisicing elit. Necessitatibus, ipsam possimus. Doloremque recusandae
    earum architecto fugiat molestias iure quas! Obcaecati quis mollitia dolores adipisci dolor
    tenetur rerum amet ex repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Deleniti eaque sit voluptatibus culpa. Quasi consequatur magni optio repellat magnam
    accusantium? Omnis sunt nostrum illum id, adipisci quae mollitia provident aperiam!
  </section>
  <section>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
    sit amet consectetur adipisicing elit. Necessitatibus, ipsam possimus. Doloremque recusandae
    earum architecto fugiat molestias iure quas! Obcaecati quis mollitia dolores adipisci dolor
    tenetur rerum amet ex repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Deleniti eaque sit voluptatibus culpa. Quasi consequatur magni optio repellat magnam
    accusantium? Omnis sunt nostrum illum id, adipisci quae mollitia provident aperiam!
  </section>
  <section>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
    sit amet consectetur adipisicing elit. Necessitatibus, ipsam possimus. Doloremque recusandae
    earum architecto fugiat molestias iure quas! Obcaecati quis mollitia dolores adipisci dolor
    tenetur rerum amet ex repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Deleniti eaque sit voluptatibus culpa. Quasi consequatur magni optio repellat magnam
    accusantium? Omnis sunt nostrum illum id, adipisci quae mollitia provident aperiam!
  </section>
</div>

<style lang="postcss">
  .wrapper {
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    perspective: 10px;
    background: black;
  }
  .img-cont {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 750px;
    transform-style: preserve-3d;
    z-index: -1;
  }
  .img-1 {
    transform: translateZ(-10px) scale(2);
  }
  .img-2 {
    transform: translateZ(-5px) scale(1.5);
  }
  .img-3 {
    transform: translateZ(-3px) scale(1.3);
  }
  .img-1,
  .img-2,
  .img-3,
  .img-4 {
    position: absolute;
    width: 100%;
    /*object-fit: cover;*/
    z-index: -1;
  }
  section {
    font-size: 1rem;
    padding: 2rem;
    background-color: #333;
    color: white;
    z-index: 1;
  }
</style>
