import { defineAuth } from "@aws-amplify/backend";
import { render } from "@/templates/render";

/**
 * Define and configure your auth resource
 * When used alongside data, it is automatically configured as an auth provider for data
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: "Welcome 👋 verify your email!",
      verificationEmailBody: (code) => render(code),
    },
  },

  userAttributes: {},
});
