import {Vector4} from '../math/Vector4';

import {Mesh} from './Mesh';

/**
 * @author wh
 */

function ContentMesh(geometry, material) {
  this.offsetStep = new Vector4();
  this.batchTexture = undefined;
  this.infoTexture = undefined;
  this.scaleTexture = undefined;

  /**
   * Add color pick mode
   */
  this.enableContentPick = false;

  Mesh.call(this, geometry, material);

  this.type = 'ContentMesh';
}

ContentMesh.prototype = Object.assign(Object.create(Mesh.prototype), {

  constructor: ContentMesh
});

export {ContentMesh};