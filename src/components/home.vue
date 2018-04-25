<template>      
    <Carousel autoplay v-model="value2" loop :style="{height:'300px',background: '#506b9e'}">
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        value2:0
      }
    }
  }
</script>
