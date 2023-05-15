const { createTransport } = require("nodemailer");
const { google } = require("googleapis");
const { GOOGLE_ID, GOOGLE_REFRESH, GOOGLE_SECRET, GOOGLE_URL, GOOGLE_USER, BACK_URL, } = process.env;
const OAuth2 = google.auth.OAuth2;

function createClient() {
  return new OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_URL);
}

function getTransport(client) {
  const accessToken = client.getAccessToken();
    return createTransport({
      service: "gmail",
      auth: {
        user: GOOGLE_USER,
        type: "OAuth2",
        clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECRET,
        refreshToken: GOOGLE_REFRESH,
        accessToken: accessToken,
      },
      tls: { rejectUnauthorized: false },
    });
}

function getEmailBody({ email, host, code }) {
  return `
    <div class="card text-center">
        <div class="card-header">
            <h1 class="card-header">Hola Profesor, Bienvenido a su lista de alumnos.</h1>
        <div/>
        <div class="card-body">
            <h2 class="card-title" >Your email is ${email}</h2>
            <h2 class="card-text"> Porfavor hace click para verificar la cuenta </h2>
            <a href="${host}/auth/verify/${code}"> Verify my account. </a>
        </div>
    <div/>
    `;
}

const accountVerificationEmail = async (mailNewUser, codeCripto) => {
  const client = createClient();
  client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH });
  const transport = getTransport(client);
  const mailOptions = {
    from: GOOGLE_USER,
    to: mailNewUser,
    subject: "Verify your new account in My Tinerary",
    html: getEmailBody({
      email: mailNewUser,
      code: codeCripto,
      host: BACK_URL,
    }),
  };
  await transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.error(error);
    }
    console.log("Email sent!");
  });
};

module.exports = accountVerificationEmail;
