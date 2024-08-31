import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";

import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  userName: string,
  verificationCode: string
): Promise<ApiResponse> {
  try {
    const { data, error } = await resend.emails.send({
      from: "no-reply@4bh1.xyz",
      to: email,
      subject: "AnonInsight Verification Code",
      react: VerificationEmail({ userName,otp:verificationCode }),
    });
    console.log(data)
    console.log(error)
    return {
      success: true,
      message: "Verification email send successfully",
    };
  } catch (emailError) {
    console.log("Error sending verification email", emailError);
    return {
      success: false,
      message: "Failed to send verification email",
    };
  }
}
