// Effect 4.0.1 public declaration-derived deterministic surface probe.
import { IpInterface, IpNetwork, NetAddress } from "effect/net";
const address = NetAddress.ipFromStringUnsafe("192.168.1.7");
const network = IpNetwork.fromStringUnsafe("192.168.1.0/24");
const iface = IpInterface.fromStringUnsafe("192.168.1.7/24");
console.log(JSON.stringify([NetAddress.formatIp(address), IpNetwork.contains(network, address), String(IpNetwork.addressCount(network)), IpInterface.format(iface)]));
