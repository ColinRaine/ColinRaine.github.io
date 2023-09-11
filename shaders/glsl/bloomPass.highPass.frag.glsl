precision mediump float;

uniform sampler2D tex;
uniform float highPassThreshold;

varying vec2 vUV;

void main() {
	vec4 color = texture2D(tex, vUV);
	if (color.r < highPassThreshold) color.r = 0.0;
	if (color.g < highPassThreshold) color.g = 0.0;
	if (color.b < highPassThreshold) color.b = 0.0;
	gl_FragColor = color;
}
