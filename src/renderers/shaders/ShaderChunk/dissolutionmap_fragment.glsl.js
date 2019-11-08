
export default /* glsl */`
#ifdef USE_DISSOLUTIONMAP

	float dissolutionNoise = snoise( gl_FragCoord.xyz/vec3(dissolutionParam.z,dissolutionParam.w,1.0));

	float h = (gl_FragCoord.z / gl_FragCoord.w) * ( 1.0 + dissolutionNoise*0.3 );
	if( dissolutionParam.x > h ){

    	discard;

	}else{
		if((dissolutionParam.x+dissolutionParam.y)>=h){
			gl_FragColor = vec4(gl_FragColor.xyz+(gl_FragColor.xyz*dissolutionColor.xyz),gl_FragColor.w);
		}
	}

#endif
`