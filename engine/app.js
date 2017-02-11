"use strict";
var regl = require("regl")();
var glsl = require("glslify");
for (var i = 0; i < 10; i++) {
    var type = "apple" + i;
}
var drawTriangle = regl({
    frag: glsl.file(__dirname + "/resources/shaders/test.frag.glsl"),
    vert: glsl.file(__dirname + "/resources/shaders/test.vert.glsl"),
    attributes: {
        position: regl.buffer([
            [-2, -2],
            [4, -2],
            [4, 4]
        ])
    },
    uniforms: {
        color: regl.prop('color')
    },
    count: 3
});
regl.frame(function (_a) {
    var time = _a.time;
    regl.clear({
        color: [0, 0, 0, 0],
        depth: 1
    });
    drawTriangle({
        color: [
            Math.cos(time),
            Math.sin(time),
            Math.cos(time),
            1
        ]
    });
});
