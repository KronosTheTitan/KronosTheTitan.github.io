precision mediump float;

varying vec2 uvTransfer;
varying vec3 pos;
void main()
{
    gl_FragColor = vec4(uvTransfer ,0, 1.0);
}