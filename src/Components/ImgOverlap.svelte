<!-- Make special grid -->

<!-- <img class="span-3" src="" alt="" />
<img class="span-3" src="" alt="" />

<style>
  img:nth-of-type(1) {
    top: 25%;
    left: 50%;
    z-index: 2;
  }
  img {
    position: relative;
    aspect-ratio: 1/1;
    background-color: white;
  }
</style> -->

<div class="span-6">
  <img src="" alt="">
  <img src="" alt="">
</div>

<style> 
  div{
    padding-left: 2rem;
    display: grid;
    grid-template-rows: repeat(10,1fr);
    grid-template-columns: repeat(10,1fr);
  }
  img{
    aspect-ratio: 3/2;
  }
  img:nth-of-type(1){
    grid-row: 1/8;
    grid-column: 3/10;
  } 
  img:nth-of-type(2){
    grid-row: 3 / 10;
    grid-column: 1 / 8;
  }
</style>