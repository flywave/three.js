export default /* glsl */`
#if (defined USE_SECTION_LINE) && (!defined USE_CONENT_MESH)
	vec3 centerToVertex = transformed - vertexCenter;
	float len = length(centerToVertex);
	transformed = vertexCenter + normalize(centerToVertex) * len * radiusScale;

#endif
`;