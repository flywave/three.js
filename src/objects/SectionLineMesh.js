import {Mesh} from './Mesh';

/**
 * @author wh
 */

function SectionLineMesh(geometry, material) {
  Mesh.call(this, geometry, material);

  this.type = 'SectionLineMesh';

  this.radiusScale = 1;
}

SectionLineMesh.prototype = Object.assign(Object.create(Mesh.prototype), {

  constructor: SectionLineMesh
});

export {SectionLineMesh};