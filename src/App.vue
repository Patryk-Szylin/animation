<template>
<div class="container" style="margin-top: 200px;">
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

  <div id="box-container">
    <div id="box" ></div>

  </div>
  <!-- <div id="box2" style="left: 200;"></div> -->
</div>

</template>

<script>
import {Point , normalize, cubicBezier, quadraticBezier, qBezier, linear } from "./lib";

export default {
  name: 'App',
  components: {
  },
  data() {
      return {
          i: 0
      }
  },
  mounted() {
    console.log("hello")

    var p1 = new Point(0, 0);
    var p2 = new Point(1, -400);
    var p3 = new Point(400, 400);
    var p4 = new Point(800, -400);

    const animateable = document.getElementById('box');


    var t =0;
    var finalPoint = {};
   

    document.onscroll = (e) => {
        
       
        t = normalize(window.scrollY, 0, 100);
        qBezier(p1, p2, p3, t, finalPoint);
        var s = cubicBezier(p1, p2, p3, p4, t);

        if(t >= 0 && t <= 1) {
            animateable.style.transform = 'translate(' +  (s.x) + 'px,' + (s.y) + 'px) ';
        }

    }
   
    
    qBezier(p1, p2, p3, normalize(window.scrollY, 0 , 100), finalPoint);

    animateable.style.transform = 'translate(' +  (finalPoint.x) + 'px,' + (finalPoint.y) + 'px) ';
  }
}
</script>

<style>
.container {
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    height: 4000px;
    background-color: lightgray;
}
#box, #box2 {
    width: 100px;
    height: 100px;
    background-color: red;
    position: absolute;
    /* top: 500px; */
    /* left: 500px; */
}
#box-container {
  border: 1px solid black;
  position: absolute;
  top: 400px;
  right: 200;
}

#box2 {
    background-color: green;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
