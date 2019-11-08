export default /* glsl */`
#ifdef USE_ENABLE_CONTENT_PICK
	gl_FragColor = pickColor;
#endif
`