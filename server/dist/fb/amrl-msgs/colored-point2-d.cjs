'use strict';
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, '__esModule', { value: true });
exports.ColoredPoint2D = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
var flatbuffers = require('flatbuffers');
var msg_metadata_js_1 = require('../../fb/msg-metadata.cjs');
var point2_d_js_1 = require('../../fb/amrl-msgs/point2-d.cjs');
var ColoredPoint2D = /** @class */ (function () {
  function ColoredPoint2D() {
    this.bb = null;
    this.bb_pos = 0;
  }
  ColoredPoint2D.prototype.__init = function (i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  };
  ColoredPoint2D.getRootAsColoredPoint2D = function (bb, obj) {
    return (obj || new ColoredPoint2D()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  };
  ColoredPoint2D.getSizePrefixedRootAsColoredPoint2D = function (bb, obj) {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new ColoredPoint2D()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  };
  ColoredPoint2D.prototype._Metadata = function (obj) {
    var offset = this.bb.__offset(this.bb_pos, 4);
    return offset
      ? (obj || new msg_metadata_js_1.MsgMetadata()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb)
      : null;
  };
  ColoredPoint2D.prototype.point = function (obj) {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset
      ? (obj || new point2_d_js_1.Point2D()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb)
      : null;
  };
  ColoredPoint2D.prototype.color = function () {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
  };
  ColoredPoint2D.startColoredPoint2D = function (builder) {
    builder.startObject(3);
  };
  ColoredPoint2D.add_Metadata = function (builder, _MetadataOffset) {
    builder.addFieldOffset(0, _MetadataOffset, 0);
  };
  ColoredPoint2D.addPoint = function (builder, pointOffset) {
    builder.addFieldOffset(1, pointOffset, 0);
  };
  ColoredPoint2D.addColor = function (builder, color) {
    builder.addFieldInt32(2, color, 0);
  };
  ColoredPoint2D.endColoredPoint2D = function (builder) {
    var offset = builder.endObject();
    builder.requiredField(offset, 6); // point
    return offset;
  };
  return ColoredPoint2D;
})();
exports.ColoredPoint2D = ColoredPoint2D;