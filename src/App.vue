<template>
<div class="containe/r">
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

    <canvas id="myCanvas" ></canvas>

    <div>{{i}}</div>
  <div id="box" style="left: 200;"></div>
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
    var p2 = new Point(0.5, -1);
    var p3 = new Point(1,-1);
    // var p4 = new Point(1,1);
    var t = 0;

    const animateable = document.getElementById('box');
    const animateable2 = document.getElementById('box2');


    document.onscroll = (e) => {
        // var someElement = normalize(window.scrollY, 100, 500);
        // var finalPoint = {};
        // // var coords = quadraticBezier(p1, p2, p3, someElement);
        // qBezier(p1, p2, p3, someElement, finalPoint);

        // if(someElement > 0 && someElement <= 1) {
        //     animateable.style.transform = 'translate(' + (finalPoint.x * 50) + 'px,' + (finalPoint.y * 50) + 'px)';
        // }
    }

    this.i = 0;


    // animateable.style.transform = 'translate'

    var destX = window.innerWidth;
    var destY = 200;

    console.log('destX', normalize(600, 0, window.innerWidth));

    // Unique per object
    var p1 = new Point(0.5, 0);
    var p2 = new Point(0, -1);
    var p3 = new Point(-0.5,-1);




    // var c = document.getElementById("myCanvas");
    // var ctx = c.getContext("2d");
    // ctx.beginPath();
    // ctx.arc(25, 25, 10, 0, 2 * Math.PI);
    // ctx.stroke();

    var offset = normalize(this.i, -200, 600);

    console.log('offset', offset)

    setInterval(() => {
      
      if(this.i <= 500) {

        var finalPoint = {};
        var finalPoint2 = {};
        var t = normalize(this.i, 0, 200);
        var t2 = normalize(this.i, 0, 200);
        qBezier(p1, p2, p3, t, finalPoint);
        qBezier(p1, p2, p3, t2, finalPoint2);
        // var l = linear(p1,p2, t);
        console.log('asd')

        const offset = normalize(this.i, -200, 600);

        console.log('offset', offset)

        const abs = Math.abs(-200 - 600 );

        console.log('abs', abs)

        if(t > 0 && t <= 1) {

            animateable.style.transform = 'translate(' +  (finalPoint.x * 400) + 'px,' + (finalPoint.y * 200) + 'px) ';
            // animateable2.style.transform = 'translate(' +  (finalPoint2.x * -400) + 'px,' + (finalPoint2.y * 200) + 'px) ';;
        }


        this.i++;
      }


    }, 10);

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
    top: 500px;
    left: 500px;
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
