let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;
let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
let isUnsafe = !isAlarmOn || !isDoorLocked ||!isWindowClosed ||!isOwnerInside;
if (isSecure && !isUnsafe) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}