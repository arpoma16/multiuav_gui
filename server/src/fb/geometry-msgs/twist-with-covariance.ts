// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { MsgMetadata } from '../../fb/msg-metadata.js';
import { Twist } from '../../fb/geometry-msgs/twist.js';


export class TwistWithCovariance {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):TwistWithCovariance {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTwistWithCovariance(bb:flatbuffers.ByteBuffer, obj?:TwistWithCovariance):TwistWithCovariance {
  return (obj || new TwistWithCovariance()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTwistWithCovariance(bb:flatbuffers.ByteBuffer, obj?:TwistWithCovariance):TwistWithCovariance {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TwistWithCovariance()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

_Metadata(obj?:MsgMetadata):MsgMetadata|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new MsgMetadata()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

twist(obj?:Twist):Twist|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new Twist()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

covariance(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : 0;
}

covarianceLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

covarianceArray():Float64Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? new Float64Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

static startTwistWithCovariance(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static add_Metadata(builder:flatbuffers.Builder, _MetadataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, _MetadataOffset, 0);
}

static addTwist(builder:flatbuffers.Builder, twistOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, twistOffset, 0);
}

static addCovariance(builder:flatbuffers.Builder, covarianceOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, covarianceOffset, 0);
}

static createCovarianceVector(builder:flatbuffers.Builder, data:number[]|Float64Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createCovarianceVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createCovarianceVector(builder:flatbuffers.Builder, data:number[]|Float64Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addFloat64(data[i]!);
  }
  return builder.endVector();
}

static startCovarianceVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

static endTwistWithCovariance(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 6) // twist
  builder.requiredField(offset, 8) // covariance
  return offset;
}

}