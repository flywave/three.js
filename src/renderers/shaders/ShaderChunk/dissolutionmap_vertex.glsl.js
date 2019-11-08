export default /* glsl */`
#ifdef USE_DISSOLUTIONMAP
	
	dissolutionUv = gl_Position.xy/gl_Position.w + vec2(0.5,0.5);

#endif
`