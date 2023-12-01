<div class="wrapper">
  <div class="double">
    <img src="" alt="" class="span-4 aspect-1-1" />
    <img src="" alt="" class="span-6 aspect-full" />
    <img src="" alt="" class="span-4 aspect-1-1" />
    <img src="" alt="" class="span-6 aspect-full" />
  </div>
</div>

<style>
  .wrapper {
    margin-top: 2rem;
    margin-left: 8vw;
    overflow-x: scroll;
  }
  .double {
    width: 168vw; 
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: repeat(24, 1fr);
    gap: 6rem 2rem;
  }
</style>
