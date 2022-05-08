// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Event extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("eventID", Value.fromString(""));
    this.set("eventOwner", Value.fromString(""));
    this.set("eventTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("maxCapacity", Value.fromBigInt(BigInt.zero()));
    this.set("deposit", Value.fromBigInt(BigInt.zero()));
    this.set("paidOut", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Event entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Event entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Event", id.toString(), this);
    }
  }

  static load(id: string): Event | null {
    return changetype<Event | null>(store.get("Event", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get eventID(): string {
    let value = this.get("eventID");
    return value!.toString();
  }

  set eventID(value: string) {
    this.set("eventID", Value.fromString(value));
  }

  get eventOwner(): string {
    let value = this.get("eventOwner");
    return value!.toString();
  }

  set eventOwner(value: string) {
    this.set("eventOwner", Value.fromString(value));
  }

  get eventTimestamp(): BigInt {
    let value = this.get("eventTimestamp");
    return value!.toBigInt();
  }

  set eventTimestamp(value: BigInt) {
    this.set("eventTimestamp", Value.fromBigInt(value));
  }

  get maxCapacity(): BigInt {
    let value = this.get("maxCapacity");
    return value!.toBigInt();
  }

  set maxCapacity(value: BigInt) {
    this.set("maxCapacity", Value.fromBigInt(value));
  }

  get deposit(): BigInt {
    let value = this.get("deposit");
    return value!.toBigInt();
  }

  set deposit(value: BigInt) {
    this.set("deposit", Value.fromBigInt(value));
  }

  get paidOut(): boolean {
    let value = this.get("paidOut");
    return value!.toBoolean();
  }

  set paidOut(value: boolean) {
    this.set("paidOut", Value.fromBoolean(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("bool", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Account entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bool(): boolean {
    let value = this.get("bool");
    return value!.toBoolean();
  }

  set bool(value: boolean) {
    this.set("bool", Value.fromBoolean(value));
  }
}

export class RSVP extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("attendee", Value.fromString(""));
    this.set("event", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RSVP entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RSVP entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RSVP", id.toString(), this);
    }
  }

  static load(id: string): RSVP | null {
    return changetype<RSVP | null>(store.get("RSVP", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get attendee(): string {
    let value = this.get("attendee");
    return value!.toString();
  }

  set attendee(value: string) {
    this.set("attendee", Value.fromString(value));
  }

  get event(): string {
    let value = this.get("event");
    return value!.toString();
  }

  set event(value: string) {
    this.set("event", Value.fromString(value));
  }
}

export class Confirmation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("attendee", Value.fromString(""));
    this.set("event", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Confirmation entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Confirmation entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Confirmation", id.toString(), this);
    }
  }

  static load(id: string): Confirmation | null {
    return changetype<Confirmation | null>(store.get("Confirmation", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get attendee(): string {
    let value = this.get("attendee");
    return value!.toString();
  }

  set attendee(value: string) {
    this.set("attendee", Value.fromString(value));
  }

  get event(): string {
    let value = this.get("event");
    return value!.toString();
  }

  set event(value: string) {
    this.set("event", Value.fromString(value));
  }
}