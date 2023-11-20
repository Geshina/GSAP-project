

<div class="span-6">
  <img src="" alt="" class="aspect-3-2">
  <img src="" alt="" class="aspect-3-2">
</div>

<style> 
  div{
    padding-left: 2rem;
    display: grid;
    grid-template-rows: repeat(10,1fr);
    grid-template-columns: repeat(10,1fr);
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