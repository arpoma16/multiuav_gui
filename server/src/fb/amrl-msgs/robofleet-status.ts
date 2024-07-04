// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { MsgMetadata } from '../../fb/msg-metadata.js';


export class RobofleetStatus {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RobofleetStatus {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRobofleetStatus(bb:flatbuffers.ByteBuffer, obj?:RobofleetStatus):RobofleetStatus {
  return (obj || new RobofleetStatus()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRobofleetStatus(bb:flatbuffers.ByteBuffer, obj?:RobofleetStatus):RobofleetStatus {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RobofleetStatus()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

_Metadata(obj?:MsgMetadata):MsgMetadata|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new MsgMetadata()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

status():string|null
status(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
status(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

isOk():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

batteryLevel():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

location():string|null
location(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
location(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startRobofleetStatus(builder:flatbuffers.Builder) {
  builder.startObject(5);
}

static add_Metadata(builder:flatbuffers.Builder, _MetadataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, _MetadataOffset, 0);
}

static addStatus(builder:flatbuffers.Builder, statusOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, statusOffset, 0);
}

static addIsOk(builder:flatbuffers.Builder, isOk:boolean) {
  builder.addFieldInt8(2, +isOk, +false);
}

static addBatteryLevel(builder:flatbuffers.Builder, batteryLevel:number) {
  builder.addFieldFloat32(3, batteryLevel, 0.0);
}

static addLocation(builder:flatbuffers.Builder, locationOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, locationOffset, 0);
}

static endRobofleetStatus(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  builder.requiredField(offset, 6) // status
  builder.requiredField(offset, 12) // location
  return offset;
}

static createRobofleetStatus(builder:flatbuffers.Builder, _MetadataOffset:flatbuffers.Offset, statusOffset:flatbuffers.Offset, isOk:boolean, batteryLevel:number, locationOffset:flatbuffers.Offset):flatbuffers.Offset {
  RobofleetStatus.startRobofleetStatus(builder);
  RobofleetStatus.add_Metadata(builder, _MetadataOffset);
  RobofleetStatus.addStatus(builder, statusOffset);
  RobofleetStatus.addIsOk(builder, isOk);
  RobofleetStatus.addBatteryLevel(builder, batteryLevel);
  RobofleetStatus.addLocation(builder, locationOffset);
  return RobofleetStatus.endRobofleetStatus(builder);
}
}