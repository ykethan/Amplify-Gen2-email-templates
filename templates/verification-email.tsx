import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Section,
  Text,
  Img,
} from "@react-email/components";
import { render } from "@react-email/render";

export type VerificationEmailProps = {
  code: string;
};
const baseUrl =
  "https://pbs.twimg.com/profile_images/1114309924551417856/FKA4cm2x_400x400.png";
export function VerificationEmail({ code = "123456" }: VerificationEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Img
            src={baseUrl}
            width="100"
            height="60"
            alt="cognito"
            style={logo}
          />

          <Text style={tertiary}>Verify Your Identity</Text>
          <Heading style={secondary}>
            Enter the following code to verify account
          </Heading>
          <Section style={codeContainer}>
            <Text style={codeStyle}>{code}</Text>
          </Section>
        </Container>
        <Text style={footer}>Securely powered by AWS Cognito.</Text>{" "}
        {/* Adjusted the text */}
      </Body>
    </Html>
  );
}

export function renderVerificationEmail(props: VerificationEmailProps) {
  return render(<VerificationEmail {...props} />);
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #eee",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
  marginTop: "20px",
  width: "360px",
  margin: "0 auto",
  padding: "68px 0 130px",
};

const logo = {
  width: "100px",
  height: "auto",
  display: "block",
  margin: "0 auto 20px auto",
};

const tertiary = {
  color: "#0a85ea",
  fontSize: "11px",
  fontWeight: 700,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  height: "16px",
  letterSpacing: "0",
  lineHeight: "16px",
  margin: "16px 8px 8px 8px",
  textTransform: "uppercase" as const,
  textAlign: "center" as const,
};

const secondary = {
  color: "#000",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "24px",
  marginBottom: "0",
  marginTop: "0",
  textAlign: "center" as const,
};

const codeContainer = {
  background: "rgba(0,0,0,.05)",
  borderRadius: "4px",
  margin: "16px auto 14px",
  verticalAlign: "middle",
  width: "280px",
};

const codeStyle = {
  color: "#000",
  display: "block",
  fontFamily: "'HelveticaNeue-Bold', 'Helvetica', 'Arial', sans-serif",
  fontSize: "32px",
  fontWeight: 700 as const,
  letterSpacing: "6px",
  lineHeight: "40px",
  paddingBottom: "8px",
  paddingTop: "8px",
  margin: "0 auto",
  width: "100%",
  textAlign: "center" as const,
};

const paragraph = {
  color: "#444",
  fontSize: "15px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  letterSpacing: "0",
  lineHeight: "23px",
  padding: "0 40px",
  margin: "0",
  textAlign: "center" as const,
};

const link = {
  color: "#444",
  textDecoration: "underline",
};

const footer = {
  color: "#000",
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "0",
  lineHeight: "23px",
  margin: "0",
  marginTop: "20px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
  padding: "20px 0",
};
