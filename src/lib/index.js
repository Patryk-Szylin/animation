


/**
 * Bezier stuff
 */


// var p1 = new Point(0, 0);
// var p2 = new Point(0.5, 0.5);
// var p3 = new Point(1, 0);
// var p4 = new Point(1,1);


export class Point {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
}

export const normalize = (value, min, max) => {
    const n = (value - min) / (max - min);
    return n > 1 ? 1 : n;
}



export const cubicBezier = (p1, p2, p3, p4, t) => {
    var coordX = Math.pow(1 - t, 3) * p1.x + 3 * Math.pow(1 - t, 2) * t * p2.x + 3 * (1 - t) * Math.pow(t, 2) * p3.x + Math.pow(t, 3) * p4.x;

    var coordY = Math.pow(1 - t, 3) * p1.y + 3 * Math.pow(1 - t, 2) * t * p2.y + 3 * (1 - t) * Math.pow(t, 2) * p3.y + Math.pow(t, 3) * p4.y;

    return {
        x: coordX,
        y: coordY
    };
}

export const quadraticBezier = (p1, p2, p3, t) => {
    var coordX = Math.pow(1 - t, 2) * p1.x + 2 * (1 - t) * t * p2.x + Math.pow(t, 2) * p3.x;

    // y = (1−t)2y1 + 2(1−t)ty2 + t2y3
    var coordY = Math.pow(1 - t, 2) * p1.y + 2 * (1 - t) * t * p2.y + Math.pow(t, 2) * p3.y;

    return {
        x: coordX,
        y: coordY
    }
}

export const qBezier = (p0, p1, p2, t, pFinal = {}) => {
    var pFinal = pFinal || {};

    pFinal.x    = Math.pow(1 - t, 2) * p0.x + 
                    (1 - t) * 2 * t * p1.x +
                    t * t * p2.x;

    pFinal.y    =  Math.pow(1 - t, 2) * p0.y + 
                    (1 - t) * 2 * t * p1.y +
                    t * t * p2.y;

    return pFinal;
}

export const linear = (p0, p1, t) => {
    const s = (1 - t) * p0.x + t * p1.x;

    return s;
}

// const animateable2 = document.getElementById('box2');

// export default (() => {


    
    



   


//     document.onscroll = (e) => {


//         var someElement = normalize(window.scrollY, 100, 300);
//         // var someElement2 = normalize(window.scrollY, 310, 600);
//         var speed = 500;



//         if(someElement > 0 && someElement <= 1) {
//             // Animate
//             // animateable.style.transform = 'translateX(' + someElement * 0.2 + 'px);';
//             // animateable.style.left = (someElement * 100) + 'px';

//             // // (1−t)2x1 + 2(1−t)tx2 + t2x3
//             // var coordX = Math.pow(1 - someElement, 2) * p1.x + 2 * (1 - someElement) * someElement * p2.x + Math.pow(someElement, 2) * p3.x;

//             // // y = (1−t)2y1 + 2(1−t)ty2 + t2y3
//             // var coordY = Math.pow(1 - someElement, 2) * p1.y + 2 * (1 - someElement) * someElement * p2.y + Math.pow(someElement, 2) * p3.y;


//             //
//             // var coordX = Math.pow(1 - someElement, 3) * p1.x + 3 * Math.pow(1 - someElement, 2) * someElement * p2.x + 3 * (1 - someElement) * Math.pow(someElement, 2) * p3.x + Math.pow(someElement, 3) * p4.x;

//             // var coordY = Math.pow(1 - someElement, 3) * p1.y + 3 * Math.pow(1 - someElement, 2) * someElement * p2.y + 3 * (1 - someElement) * Math.pow(someElement, 2) * p3.y + Math.pow(someElement, 3) * p4.y;

//             var coords = cubicBezier(p1, p2, p3, p4, someElement);
//             var coords = quadraticBezier(p1, p2, p3, someElement);


//             // animateable.style.left = coordX + 'px';

//             animateable.style.transform = 'translate(' + (coords.x * 200) + 'px,' + (coords.y * 200) + 'px)';
            



//         }

//     // if(someElement2 > 0 && someElement2 <= 1) {
//     //     animateable2.style.left = (someElement2 * speed) + 'px';
//     // }
// }

// })();