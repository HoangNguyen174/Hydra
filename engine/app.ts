/// <reference path="node_modules/@types/node/index.d.ts" />

import { Component } from "./src/cores/entities/component";
declare var regl: any;

var regl = require("regl")();
var glsl = require("glslify");

for(let i = 0; i < 10; i++) {
  let type = "apple" + i;
  //let component = new Component(name);
  //console.log(component.mType);
  //console.log(component.mId);
}

//Calling regl() creates a new partially evaluated draw command
const drawTriangle = regl({

  // Shaders in regl are just strings.  You can use glslify or whatever you want
  // to define them.  No need to manually create shader objects.
  frag: glsl.file(__dirname + "/resources/shaders/test.frag.glsl"),

  vert: glsl.file(__dirname + "/resources/shaders/test.vert.glsl"),

  // Here we define the vertex attributes for the above shader
  attributes: {
    // regl.buffer creates a new array buffer object
    position: regl.buffer([
      [-2, -2],   // no need to flatten nested arrays, regl automatically
      [4, -2],    // unrolls them into a typedarray (default Float32)
      [4,  4]
    ])
    // regl automatically infers sane defaults for the vertex attribute pointers
  },

  uniforms: {
    // This defines the color of the triangle to be a dynamic variable
    color: regl.prop('color')
  },

  // This tells regl the number of vertices to draw in this command
  count: 3
})

// regl.frame() wraps requestAnimationFrame and also handles viewport changes
regl.frame(({time}) => {
  // clear contents of the drawing buffer
  regl.clear({
    color: [0, 0, 0, 0],
    depth: 1
  })
  // draw a triangle using the command defined above
  drawTriangle({
    color: [
      Math.cos(time),
      Math.sin(time),
      Math.cos(time),
      1
    ]
  })
})
