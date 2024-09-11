// import { vertexData, colorData } from './data.js';
const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');
if (!gl){
throw new Error('WebGL not supported');
}

const vertexData = [
//    y |  z  |  x

    0.5  , -0.11 , 0, //V1 position
    0.48 , -0.18 , 0, //V2 position > 1
    0.45 , -0.16 , 0, //V3 position

    0.425, -0.18 , 0, //V1 position
    0.48 , -0.18 , 0, //V2 position
    0.45 , -0.16 , 0, //V3 position

    0.37 , -0.175, 0, //V1 position
    0.48 , -0.18 , 0, //V2 position
    0.42 , -0.26 , 0, //V3 position

    0.42 , -0.14 , 0, //V1 position
    0.45 , -0.16 , 0, //V2 position
    0.425, -0.18 , 0, //V3 position

    0.42 , -0.14 , 0, //V1 position
    0.45 , -0.16 , 0, //V2 position
    0.47 , -0.075, 0, //V3 position
    
    0.42 , -0.14 , 0, //V1 position
    0.42 , -0.08 , 0, //V2 position
    0.47 , -0.075, 0, //V3 position

    0.45 , -0.01 , 0, //V1 position
    0.42 , -0.08 , 0, //V2 position
    0.47 , -0.075, 0, //V3 position   

    0.45 , -0.01 , 0, //V1 position
    0.42 , -0.08 , 0, //V2 position
    0.42 , -0.04 , 0, //V3 position      

    0.42 ,  0.009, 0, //V1 position
    0.42 , -0.08 , 0, //V2 position
    0.38 , -0.054, 0, //V3 position    

    0.38 , -0.155, 0, //V1 position
    0.42 , -0.08 , 0, //V2 position
    0.38 , -0.054, 0, //V3 position   
    
    0.38 , -0.155, 0, //V1 position
    0.42 , -0.08 , 0, //V2 position
    0.425, -0.18 , 0, //V3 position
    
    0.37 , -0.175, 0, //V1 position
    0.42 , -0.26 , 0, //V2 position
    0.34 , -0.23 , 0, //V3 position    

    0.37 , -0.175, 0, //V1 position
    0.326, -0.116, 0, //V2 position
    0.425, -0.18 , 0, //V3 position
         
    0.37 , -0.175, 0, //V1 position
    0.29 , -0.11 , 0, //V2 position
    0.34 , -0.23 , 0, //V3 position    

    0.37 , -0.175, 0, //V1 position
    0.326, -0.116, 0, //V2 position
    0.29, -0.11 , 0, //V3 position

    0.38 , -0.153, 0, //V1 position
    0.326, -0.116, 0, //V2 position
    0.38 , -0.054, 0, //V3 position 

    0.25 , -0.19 , 0, //V1 position
    0.29 , -0.11 , 0, //V2 position
    0.34 , -0.23 , 0, //V3 position    

    0.35 ,     0 , 0, //V1 position
    0.38 , -0.054, 0, //V2 position
    0.326, -0.116, 0, //V3 position   

    0.25 , -0.19 , 0, //V1 position
    0.29 , -0.11 , 0, //V2 position
    0.16 , -0.09 , 0, //V3 position    

    0.2  , -0.02 , 0, //V1 position
    0.29 , -0.11 , 0, //V2 position
    0.16 , -0.09 , 0, //V3 position    

    0.23 , -0.03 , 0, //V1 position
    0.27 ,  0.03 , 0, //V2 position
    0.19 ,  0.03 , 0, //V3 position    

    0.2  , -0.02 , 0, //V1 position
    0.29 , -0.11 , 0, //V2 position
    0.19 ,  0.03 , 0, //V3 position
    
    0.23 , -0.03 , 0, //V1 position
    0.27 ,  0.03 , 0, //V2 position
    0.25 ,-0.055 , 0, //V3 position   

    0.3 ,   0.03 , 0, //V1 position
    0.27 ,  0.03 , 0, //V2 position
    0.25 ,-0.055 , 0, //V3 position  

    0.3 ,   0.03 , 0, //V1 position
    0.27 ,-0.083 , 0, //V2 position
    0.25 ,-0.055 , 0, //V3 position  

    0.3 ,   0.03 , 0, //V1 position
    0.27 ,-0.083 , 0, //V2 position
    0.35 ,     0 , 0, //V3 position  

    0.326,-0.116 , 0, //V1 position
    0.27 ,-0.083 , 0, //V2 position
    0.35 ,     0 , 0, //V3 position  

    0.326,-0.116 , 0, //V1 position
    0.27 ,-0.083 , 0, //V2 position
    0.29 , -0.11 , 0, //V3 position 
    
    0.2  , -0.02 , 0, //V1 position
    0.16 , -0.09 , 0, //V2 position
    0.06 ,  0.05 , 0, //V3 position  

    0.05  , -0.02 , 0, //V1 position
    0.16 , -0.09 , 0, //V2 position
    0.06 ,  0.05 , 0, //V3 position  

    0.2  , -0.02 , 0, //V1 position
    0.13 , 0.138 , 0, //V2 position
    0.06 ,  0.05 , 0, //V3 position  


    ];
const colorData = [
    0.918, 0.616, 0.408, //V1 Color
    0.918, 0.616, 0.408, //V2 Color
    0.918, 0.616, 0.408, //V3 Color

    0.655, 0.286, 0.486,
    0.655, 0.286, 0.486,
    0.655, 0.286, 0.486,

    0.627, 0.361, 0.314, 
    0.627, 0.361, 0.314,
    0.627, 0.361, 0.314,

    0.396, 0.02, 0.267,
    0.396, 0.02, 0.267,
    0.396, 0.02, 0.267,

    0.925, 0.737, 0.529,
    0.925, 0.737, 0.529,
    0.925, 0.737, 0.529,

    0.851, 0.659, 0.396,
    0.851, 0.659, 0.396,
    0.851, 0.659, 0.396,

    0.682, 0.447, 0.373,
    0.682, 0.447, 0.373,
    0.682, 0.447, 0.373,

    0.914, 0.596, 0.486, 
    0.914, 0.596, 0.486,
    0.914, 0.596, 0.486,

    0.482, 0.161, 0.341,
    0.482, 0.161, 0.341,
    0.482, 0.161, 0.341,

    0.506, 0.173, 0.333,
    0.506, 0.173, 0.333,
    0.506, 0.173, 0.333,

    0.945, 0.741, 0.592,
    0.945, 0.741, 0.592,
    0.945, 0.741, 0.592,

    0.682, 0.388, 0.349,
    0.682, 0.388, 0.349,
    0.682, 0.388, 0.349,
    
    0.639, 0.286, 0.463,
    0.639, 0.286, 0.463,
    0.639, 0.286, 0.463,

    0.667, 0.349, 0.31,
    0.667, 0.349, 0.31,
    0.667, 0.349, 0.31,

    0.518, 0.247, 0.365,
    0.518, 0.247, 0.365,
    0.518, 0.247, 0.365,

    0.902, 0.639, 0.424,
    0.902, 0.639, 0.424,
    0.902, 0.639, 0.424,

    0.604, 0.341, 0.306,
    0.604, 0.341, 0.306,
    0.604, 0.341, 0.306,

    0.859, 0.302, 0.427,
    0.859, 0.302, 0.427,
    0.859, 0.302, 0.427,

    0.624, 0.369, 0.298,
    0.624, 0.369, 0.298,
    0.624, 0.369, 0.298,

    0.722, 0.412, 0.38,
    0.722, 0.412, 0.38,
    0.722, 0.412, 0.38,

    0.961, 0.749, 0.616,
    0.961, 0.749, 0.616,
    0.961, 0.749, 0.616,

    0.498, 0.271, 0.349,
    0.498, 0.271, 0.349,
    0.498, 0.271, 0.349,
    
    0.718, 0.243, 0.412,
    0.718, 0.243, 0.412,
    0.718, 0.243, 0.412,

    0.592, 0.11, 0.396,
    0.592, 0.11, 0.396,
    0.592, 0.11, 0.396,

    0.898, 0.741, 0.529,
    0.898, 0.741, 0.529,
    0.898, 0.741, 0.529,

    0.4, 0.047, 0.263,
    0.4, 0.047, 0.263,
    0.4, 0.047, 0.263,

    0.988, 0.714, 0.482,
    0.988, 0.714, 0.482,
    0.988, 0.714, 0.482,

    0.627, 0.302, 0.424,
    0.627, 0.302, 0.424,
    0.627, 0.302, 0.424,

    0.62, 0.49, 0.314,
    0.62, 0.49, 0.314,
    0.62, 0.55, 0.314,

    0.557, 0.69, 0.592,
    0.557, 0.69, 0.592,
    0.557, 0.69, 0.592,

    0.29, 0.561, 0.561,
    0.29, 0.561, 0.561,
    0.29, 0.561, 0.561,

    ];


const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);
const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData), gl.STATIC_DRAW);



const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, `
                                    precision mediump float;
                                    attribute vec3 position;
                                    attribute vec3 color;
                                    varying vec3 vColor;
                                    void main(){
                                    gl_Position = vec4(position, 1);
                                    vColor = color;
                                    }
                                    `);
    gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, `
                                    precision mediump float;
                                    varying vec3 vColor; 
                                    void main(){
                                    gl_FragColor = vec4(vColor, 1);
                                    }
                                    `);
    gl.compileShader(fragmentShader);

const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

const positionLocation = gl.getAttribLocation(program, `position`);
    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);
const colorLocation = gl.getAttribLocation(program, `color`);
    gl.enableVertexAttribArray(colorLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);
    gl.useProgram(program);
    gl.drawArrays(gl.TRIANGLES, 0, vertexData.length/3);