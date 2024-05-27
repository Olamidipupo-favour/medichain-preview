// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class BatchCreated extends ethereum.Event {
  get params(): BatchCreated__Params {
    return new BatchCreated__Params(this);
  }
}

export class BatchCreated__Params {
  _event: BatchCreated;

  constructor(event: BatchCreated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get manufacturer(): string {
    return this._event.parameters[1].value.toString();
  }

  get manufactureDate(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get expiryDate(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class BatchUpdated extends ethereum.Event {
  get params(): BatchUpdated__Params {
    return new BatchUpdated__Params(this);
  }
}

export class BatchUpdated__Params {
  _event: BatchUpdated;

  constructor(event: BatchUpdated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get status(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class ChainlinkCancelled extends ethereum.Event {
  get params(): ChainlinkCancelled__Params {
    return new ChainlinkCancelled__Params(this);
  }
}

export class ChainlinkCancelled__Params {
  _event: ChainlinkCancelled;

  constructor(event: ChainlinkCancelled) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class ChainlinkFulfilled extends ethereum.Event {
  get params(): ChainlinkFulfilled__Params {
    return new ChainlinkFulfilled__Params(this);
  }
}

export class ChainlinkFulfilled__Params {
  _event: ChainlinkFulfilled;

  constructor(event: ChainlinkFulfilled) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class ChainlinkRequested extends ethereum.Event {
  get params(): ChainlinkRequested__Params {
    return new ChainlinkRequested__Params(this);
  }
}

export class ChainlinkRequested__Params {
  _event: ChainlinkRequested;

  constructor(event: ChainlinkRequested) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class TemperatureExceeded extends ethereum.Event {
  get params(): TemperatureExceeded__Params {
    return new TemperatureExceeded__Params(this);
  }
}

export class TemperatureExceeded__Params {
  _event: TemperatureExceeded;

  constructor(event: TemperatureExceeded) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get temperature(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Contract__batchesResult {
  value0: BigInt;
  value1: string;
  value2: BigInt;
  value3: BigInt;
  value4: string;

  constructor(
    value0: BigInt,
    value1: string,
    value2: BigInt,
    value3: BigInt,
    value4: string,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromString(this.value4));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getManufacturer(): string {
    return this.value1;
  }

  getManufactureDate(): BigInt {
    return this.value2;
  }

  getExpiryDate(): BigInt {
    return this.value3;
  }

  getStatus(): string {
    return this.value4;
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  batches(param0: BigInt): Contract__batchesResult {
    let result = super.call(
      "batches",
      "batches(uint256):(uint256,string,uint256,uint256,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return new Contract__batchesResult(
      result[0].toBigInt(),
      result[1].toString(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toString(),
    );
  }

  try_batches(param0: BigInt): ethereum.CallResult<Contract__batchesResult> {
    let result = super.tryCall(
      "batches",
      "batches(uint256):(uint256,string,uint256,uint256,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__batchesResult(
        value[0].toBigInt(),
        value[1].toString(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toString(),
      ),
    );
  }

  chainlinkRequestIdToBatchId(param0: Bytes): BigInt {
    let result = super.call(
      "chainlinkRequestIdToBatchId",
      "chainlinkRequestIdToBatchId(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)],
    );

    return result[0].toBigInt();
  }

  try_chainlinkRequestIdToBatchId(param0: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "chainlinkRequestIdToBatchId",
      "chainlinkRequestIdToBatchId(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nextBatchId(): BigInt {
    let result = super.call("nextBatchId", "nextBatchId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_nextBatchId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nextBatchId", "nextBatchId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  requestTemperatureData(_batchId: BigInt): Bytes {
    let result = super.call(
      "requestTemperatureData",
      "requestTemperatureData(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(_batchId)],
    );

    return result[0].toBytes();
  }

  try_requestTemperatureData(_batchId: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "requestTemperatureData",
      "requestTemperatureData(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(_batchId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateBatchCall extends ethereum.Call {
  get inputs(): CreateBatchCall__Inputs {
    return new CreateBatchCall__Inputs(this);
  }

  get outputs(): CreateBatchCall__Outputs {
    return new CreateBatchCall__Outputs(this);
  }
}

export class CreateBatchCall__Inputs {
  _call: CreateBatchCall;

  constructor(call: CreateBatchCall) {
    this._call = call;
  }

  get _manufacturer(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _manufactureDate(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _expiryDate(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateBatchCall__Outputs {
  _call: CreateBatchCall;

  constructor(call: CreateBatchCall) {
    this._call = call;
  }
}

export class FulfillCall extends ethereum.Call {
  get inputs(): FulfillCall__Inputs {
    return new FulfillCall__Inputs(this);
  }

  get outputs(): FulfillCall__Outputs {
    return new FulfillCall__Outputs(this);
  }
}

export class FulfillCall__Inputs {
  _call: FulfillCall;

  constructor(call: FulfillCall) {
    this._call = call;
  }

  get _requestId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _temperature(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class FulfillCall__Outputs {
  _call: FulfillCall;

  constructor(call: FulfillCall) {
    this._call = call;
  }
}

export class RecordTemperatureCall extends ethereum.Call {
  get inputs(): RecordTemperatureCall__Inputs {
    return new RecordTemperatureCall__Inputs(this);
  }

  get outputs(): RecordTemperatureCall__Outputs {
    return new RecordTemperatureCall__Outputs(this);
  }
}

export class RecordTemperatureCall__Inputs {
  _call: RecordTemperatureCall;

  constructor(call: RecordTemperatureCall) {
    this._call = call;
  }

  get _batchId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _temperature(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RecordTemperatureCall__Outputs {
  _call: RecordTemperatureCall;

  constructor(call: RecordTemperatureCall) {
    this._call = call;
  }
}

export class RequestTemperatureDataCall extends ethereum.Call {
  get inputs(): RequestTemperatureDataCall__Inputs {
    return new RequestTemperatureDataCall__Inputs(this);
  }

  get outputs(): RequestTemperatureDataCall__Outputs {
    return new RequestTemperatureDataCall__Outputs(this);
  }
}

export class RequestTemperatureDataCall__Inputs {
  _call: RequestTemperatureDataCall;

  constructor(call: RequestTemperatureDataCall) {
    this._call = call;
  }

  get _batchId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RequestTemperatureDataCall__Outputs {
  _call: RequestTemperatureDataCall;

  constructor(call: RequestTemperatureDataCall) {
    this._call = call;
  }

  get requestId(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class UpdateBatchCall extends ethereum.Call {
  get inputs(): UpdateBatchCall__Inputs {
    return new UpdateBatchCall__Inputs(this);
  }

  get outputs(): UpdateBatchCall__Outputs {
    return new UpdateBatchCall__Outputs(this);
  }
}

export class UpdateBatchCall__Inputs {
  _call: UpdateBatchCall;

  constructor(call: UpdateBatchCall) {
    this._call = call;
  }

  get _batchId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _status(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class UpdateBatchCall__Outputs {
  _call: UpdateBatchCall;

  constructor(call: UpdateBatchCall) {
    this._call = call;
  }
}
