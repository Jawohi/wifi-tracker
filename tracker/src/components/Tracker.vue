<template>
  <canvas ref="can" width="400" height="200"></canvas>
  <tracking-data />
</template>

<script>
import { fabric } from "fabric";
import TrackingData from './TrackingData.vue';




export default {
  components: {
      TrackingData
  },
  mounted() {
    const ref = this.$refs.can;
    const canvas = new fabric.Canvas(ref);

    canvas.setBackgroundColor("blue");
    const rect = new fabric.Rect({
      fill: "red",
      width: 20,
      height: 20
    });
    canvas.add(rect);

    
  }
  

  
};



</script>

<style>
     /* canvas {
    background-color: blue;
    opacity:0.4;

    }  */
</style>

