import React from "react";
import Anchor from "../../../../Utils/Anchor";
import twilio from "./twilio.png";

const ProEventoDetail = () => (
  <>
    <h2>ProEvento</h2>
    <p>
      ProEvento is a social media platform that offers live streaming
      functionality. ProEvento is built upon the client-server model and based
      on three-tiered architecture. The client side is built with React Native;
      the social networking server is built with Java Spring framework; the live
      streaming server is supported by{" "}
      <Anchor href="https://www.twilio.com/">Twilio</Anchor>; and the datastore
      is supported by AWS RDS.
    </p>
    <p>
      The codebase of both frontend and backend of ProEvento is open-sourced on{" "}
      <Anchor href="https://github.com/FrostXTJ/ProEvento">GitHub</Anchor>.
    </p>
    <img src={twilio} alt="Twilio Live Streaming" width="100%" />
  </>
);

export default ProEventoDetail;
