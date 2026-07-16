"use client";

import {
  InputOTP,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/lilt/ui/input-otp";
import { Label } from "@/registry/lilt/ui/label";

const OTP_LENGTH = 6;

export default function InputOTPDemo() {
  return (
    <div className="grid gap-3">
      <Label htmlFor="input-otp-demo">Check your email, no rush.</Label>
      <InputOTP id="input-otp-demo" length={OTP_LENGTH}>
        <InputOTPSlot index={0} length={OTP_LENGTH} />
        <InputOTPSlot index={1} length={OTP_LENGTH} />
        <InputOTPSlot index={2} length={OTP_LENGTH} />
        <InputOTPSeparator />
        <InputOTPSlot index={3} length={OTP_LENGTH} />
        <InputOTPSlot index={4} length={OTP_LENGTH} />
        <InputOTPSlot index={5} length={OTP_LENGTH} />
      </InputOTP>
    </div>
  );
}
