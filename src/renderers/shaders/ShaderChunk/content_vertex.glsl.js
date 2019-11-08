export default /* glsl */`
#ifdef USE_CONENT_MESH

	float stepX = offsetStep.x; 
    float centerX = offsetStep.y; 
    vec2 st = computeSt(batchId);
    vec4 batch_color = texture2D(batchTexture, st);
    vec4 scale_color = texture2D(scaleTexture, st);

#ifdef USE_SECTION_LINE 

	vec4 infColor = texture2D(infoTexture, st);
	float radiusScale = infColor.r*255.0+infColor.g*255.0/100.0;
	
	vec3 centerToVertex = transformed - vertexCenter;
	float len = length(centerToVertex);
	transformed = vertexCenter + normalize(centerToVertex) * len * radiusScale;

#endif
#ifdef USE_ENABLE_CONTENT_PICK
	pickColor = batch_color;
#else
	vbatchColor = batch_color;
#endif
	float show = ceil(batch_color.a);

	float k = scale_color.w;
	if(k!=0.0){
		float x = scale_color.x;
		float y = scale_color.y;
		float z = scale_color.z;
		float a = 1.0 + k * x * x;
	    float b = k * x * y;
	    float c = k * x * z;
	    float d = k * x * y;
	    float e = 1.0 + k * y * y;
	    float f = k * y * z;
	    float g = k * x * z;
	    float h = k * y * z;
	    float i = 1.0 + k * z * z;

	    mat4 scale = mat4(
	    	vec4( a, d, g, 0.0),
	    	vec4( b, e, h, 0.0),
	    	vec4( c, f, i, 0.0),
	    	vec4( 0.0, 0.0, 0.0, 1.0) );

	    transformed = (scale * vec4(transformed,1.0)).xyz;

	}else{

		transformed.xyz *= scale_color.xyz;

	}

  	transformed *= show;

#endif
`