const vertexShaderText =
    [
        'precision mediump float;',
        '',
        'attribute vec3 vertPosition;',
        'attribute vec2 uv;',
        'varying vec2 uvTransfer;',
        'varying vec3 pos;',
        '',
        'void main()',
        '{',
        '  uvTransfer = uv;',
        '  pos = vertPosition;',
        '  gl_Position = vec4(vertPosition, 1.0);',
        '}'
    ].join('\n');

const fragmentShaderText =
    [
        'precision mediump float;',
        '',
        'varying vec2 uvTransfer;',
        'varying vec3 pos;',
        'void main()',
        '{',
        '  gl_FragColor = vec4(uvTransfer,0, 1.0);',
        '}'
    ].join('\n');

const vertexShaderFile = 'JavaScript/shader.vs'
const fragmentShaderFile = 'JavaScript/shader.fs'

var gl;
var vertexShader;
var fragmentShader;
var program;

async function LoadShaderFile(filePath){
    const file = await fetch(filePath);
    //console.log(await file.text())
    return await file.text();
}

function CreateShaders(){
    vertexShader = gl.createShader(gl.VERTEX_SHADER);
    fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertexShader, vertexShaderText);
    gl.shaderSource(fragmentShader, fragmentShaderText);

    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader));
        return;
    }

    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
        return;
    }

    program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('ERROR linking program!', gl.getProgramInfoLog(program));
        return;
    }
    gl.validateProgram(program);
    if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
        console.error('ERROR validating program!', gl.getProgramInfoLog(program));
    }
}

const InitDemo = function () {

    let canvas = document.getElementById('game-surface');
    gl = canvas.getContext('webgl');

    if (!gl) {
        console.log('WebGL not supported, falling back on experimental-webgl');
        gl = canvas.getContext('experimental-webgl');
    }

    if (!gl) {
        alert('Your browser does not support WebGL');
    }

    gl.clearColor(0, 0, 0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    CreateShaders();

    let triangleVertices =
        [ // X,   Y,    Z,      uvX, uvY
            -0.5, 0.5,  0.0,    0.0, 1.0,
            -0.5, -0.5, 0.0,    0.0, 0.0,

            0.5, -0.5,  0.0,    1.0, 0.0,
            0.5, 0.5,   0.0,    1.0, 1.0,
        ];

    let indices = [
        0,1,2,
        2,3,0
    ];

    let indexBuffer = gl.createBuffer();

    let triangleVertexBufferObject = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);

    let positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');
    let colorAttribLocation = gl.getAttribLocation(program, 'uv');
    gl.vertexAttribPointer(
        positionAttribLocation, // Attribute location
        3, // Number of elements per attribute
        gl.FLOAT, // Type of elements
        gl.FALSE,
        5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
        0 // Offset from the beginning of a single vertex to this attribute
    );
    gl.vertexAttribPointer(
        colorAttribLocation, // Attribute location
        2, // Number of elements per attribute
        gl.FLOAT, // Type of elements
        gl.FALSE,
        5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
        3 * Float32Array.BYTES_PER_ELEMENT // Offset from the beginning of a single vertex to this attribute
    );

    gl.enableVertexAttribArray(positionAttribLocation);
    gl.enableVertexAttribArray(colorAttribLocation);
    gl.useProgram(program);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    let primitiveType = gl.TRIANGLES;
    let offset = 0;
    let count = 6;
    let indexType = gl.UNSIGNED_SHORT;
    gl.drawElements(primitiveType,count, indexType, offset);
};