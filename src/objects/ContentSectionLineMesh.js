import { ContentMesh } from './ContentMesh.js';
import { Vector4 } from '../math/Vector4';
/**
 * @author wh
 */

function ContentSectionLineMesh(geometry, material) {

    ContentMesh.call(this, geometry, material);

    this.type = 'ContentSectionLineMesh';
}

ContentSectionLineMesh.prototype = Object.assign(Object.create(ContentMesh.prototype), {

    constructor: ContentSectionLineMesh
});

export { ContentSectionLineMesh };