module.exports = ({ env }) => ({
  graphql: {
    endpoint: "/graphql",
    shadowCRUD: true,
    playgroundAlways: false,
    depthLimit: 10,
    amountLimit: 1000,
    apolloServer: {
      tracing: false,
    },
  },
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: env("SENDGRID_EMAIL_SENDER"),
      defaultReplyTo: env("SENDGRID_EMAIL_REPLY_TO"),
    },
  },
});
