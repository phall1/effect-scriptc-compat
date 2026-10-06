// Effect 4.0.1 public declaration-derived deterministic surface probe.
import * as IpInterface from "effect/net/IpInterface";
import * as IpNetwork from "effect/net/IpNetwork";
import * as NetAddress from "effect/net/NetAddress";
const address = NetAddress.ipFromStringUnsafe("192.168.1.7");
const network = IpNetwork.fromStringUnsafe("192.168.1.0/24");
const iface = IpInterface.fromStringUnsafe("192.168.1.7/24");
console.log(JSON.stringify([NetAddress.formatIp(address), IpNetwork.contains(network, address), String(IpNetwork.addressCount(network)), IpInterface.format(iface)]));
