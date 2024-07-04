// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { MsgMetadata } from '../../fb/msg-metadata.js';
import { Header } from '../../fb/std-msgs/header.js';


export class ErrorReport {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ErrorReport {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsErrorReport(bb:flatbuffers.ByteBuffer, obj?:ErrorReport):ErrorReport {
  return (obj || new ErrorReport()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsErrorReport(bb:flatbuffers.ByteBuffer, obj?:ErrorReport):ErrorReport {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ErrorReport()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

_Metadata(obj?:MsgMetadata):MsgMetadata|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new MsgMetadata()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

header(obj?:Header):Header|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new Header()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

laserHeader(obj?:Header):Header|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new Header()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

severityLevel():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

failedSubsystem():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

detailedErrorMsg():string|null
detailedErrorMsg(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
detailedErrorMsg(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startErrorReport(builder:flatbuffers.Builder) {
  builder.startObject(6);
}

static add_Metadata(builder:flatbuffers.Builder, _MetadataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, _MetadataOffset, 0);
}

static addHeader(builder:flatbuffers.Builder, headerOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, headerOffset, 0);
}

static addLaserHeader(builder:flatbuffers.Builder, laserHeaderOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, laserHeaderOffset, 0);
}

static addSeverityLevel(builder:flatbuffers.Builder, severityLevel:number) {
  builder.addFieldInt8(3, severityLevel, 0);
}

static addFailedSubsystem(builder:flatbuffers.Builder, failedSubsystem:number) {
  builder.addFieldInt8(4, failedSubsystem, 0);
}

static addDetailedErrorMsg(builder:flatbuffers.Builder, detailedErrorMsgOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, detailedErrorMsgOffset, 0);
}

static endErrorReport(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 6) // header
  builder.requiredField(offset, 8) // laser_header
  builder.requiredField(offset, 14) // detailed_error_msg
  return offset;
}

}