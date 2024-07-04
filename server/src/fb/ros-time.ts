// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

export class RosTime {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RosTime {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

secs():number {
  return this.bb!.readUint32(this.bb_pos);
}

nsecs():number {
  return this.bb!.readUint32(this.bb_pos + 4);
}

static sizeOf():number {
  return 8;
}

static createRosTime(builder:flatbuffers.Builder, secs: number, nsecs: number):flatbuffers.Offset {
  builder.prep(4, 8);
  builder.writeInt32(nsecs);
  builder.writeInt32(secs);
  return builder.offset();
}

}