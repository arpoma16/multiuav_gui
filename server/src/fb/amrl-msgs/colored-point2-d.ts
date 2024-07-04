// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { MsgMetadata } from '../../fb/msg-metadata.js';
import { Point2D } from '../../fb/amrl-msgs/point2-d.js';


export class ColoredPoint2D {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ColoredPoint2D {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsColoredPoint2D(bb:flatbuffers.ByteBuffer, obj?:ColoredPoint2D):ColoredPoint2D {
  return (obj || new ColoredPoint2D()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsColoredPoint2D(bb:flatbuffers.ByteBuffer, obj?:ColoredPoint2D):ColoredPoint2D {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ColoredPoint2D()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

_Metadata(obj?:MsgMetadata):MsgMetadata|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new MsgMetadata()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

point(obj?:Point2D):Point2D|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new Point2D()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

color():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

static startColoredPoint2D(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static add_Metadata(builder:flatbuffers.Builder, _MetadataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, _MetadataOffset, 0);
}

static addPoint(builder:flatbuffers.Builder, pointOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, pointOffset, 0);
}

static addColor(builder:flatbuffers.Builder, color:number) {
  builder.addFieldInt32(2, color, 0);
}

static endColoredPoint2D(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 6) // point
  return offset;
}

}