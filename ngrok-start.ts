import {env} from "./ngrok-env.js";
import ngrok from "ngrok";

(async () => {
  try {
    await ngrok.authtoken(env.NGROK_AUTHTOKEN);
    const url = await ngrok.connect(3000);
    console.log("Ngrok tunnel URL:", url);
  } catch (err) {
    console.error("Ngrok Error:", err);
  }
})();
