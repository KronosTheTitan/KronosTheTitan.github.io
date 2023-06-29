precision mediump float;

attribute vec3 vertPosition;
attribute vec2 uv;
varying vec2 uvTransfer;
varying vec3 pos;

void main()
{
    uvTransfer = uv;
    pos = vertPosition;
    gl_Position = vec4(vertPosition, 1.0);
}