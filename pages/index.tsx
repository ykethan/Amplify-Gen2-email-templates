// import { VerificationEmail } from "@/amplify/auth/verification-email";
import { VerificationEmail } from "@/templates/verification-email";
import { AWSVerifyEmail } from "@/templates/verification-email-1";
export default function Home() {
  return (
    <div>
      <h1>Template 1</h1>
      <VerificationEmail code="123456" />
      <h1>Template 2</h1>
      <AWSVerifyEmail verificationCode="123456" />
    </div>
  );
}
