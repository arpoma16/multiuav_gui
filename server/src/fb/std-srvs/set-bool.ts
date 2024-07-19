// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { MsgMetadata } from '../../fb/msg-metadata.js';
import { SetBoolRequest } from '../../fb/std-srvs/set-bool-request.js';
import { SetBoolResponse } from '../../fb/std-srvs/set-bool-response.js';


export class SetBool {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SetBool {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSetBool(bb:flatbuffers.ByteBuffer, obj?:SetBool):SetBool {
  return (obj || new SetBool()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSetBool(bb:flatbuffers.ByteBuffer, obj?:SetBool):SetBool {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SetBool()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

_Metadata(obj?:MsgMetadata):MsgMetadata|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new MsgMetadata()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

request(obj?:SetBoolRequest):SetBoolRequest|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new SetBoolRequest()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

response(obj?:SetBoolResponse):SetBoolResponse|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new SetBoolResponse()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startSetBool(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static add_Metadata(builder:flatbuffers.Builder, _MetadataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, _MetadataOffset, 0);
}

static addRequest(builder:flatbuffers.Builder, requestOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, requestOffset, 0);
}

static addResponse(builder:flatbuffers.Builder, responseOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, responseOffset, 0);
}

static endSetBool(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

}