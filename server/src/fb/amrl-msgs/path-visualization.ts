// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { MsgMetadata } from '../../fb/msg-metadata.js';


export class PathVisualization {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):PathVisualization {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPathVisualization(bb:flatbuffers.ByteBuffer, obj?:PathVisualization):PathVisualization {
  return (obj || new PathVisualization()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPathVisualization(bb:flatbuffers.ByteBuffer, obj?:PathVisualization):PathVisualization {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PathVisualization()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

_Metadata(obj?:MsgMetadata):MsgMetadata|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new MsgMetadata()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

curvature():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

distance():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

clearance():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

static startPathVisualization(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static add_Metadata(builder:flatbuffers.Builder, _MetadataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, _MetadataOffset, 0);
}

static addCurvature(builder:flatbuffers.Builder, curvature:number) {
  builder.addFieldFloat32(1, curvature, 0.0);
}

static addDistance(builder:flatbuffers.Builder, distance:number) {
  builder.addFieldFloat32(2, distance, 0.0);
}

static addClearance(builder:flatbuffers.Builder, clearance:number) {
  builder.addFieldFloat32(3, clearance, 0.0);
}

static endPathVisualization(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createPathVisualization(builder:flatbuffers.Builder, _MetadataOffset:flatbuffers.Offset, curvature:number, distance:number, clearance:number):flatbuffers.Offset {
  PathVisualization.startPathVisualization(builder);
  PathVisualization.add_Metadata(builder, _MetadataOffset);
  PathVisualization.addCurvature(builder, curvature);
  PathVisualization.addDistance(builder, distance);
  PathVisualization.addClearance(builder, clearance);
  return PathVisualization.endPathVisualization(builder);
}
}