import React from "react";
import YoutubeEmbed from "../../../../Utils/YoutubeEmbed";
import Anchor from "../../../../Utils/Anchor";

const CodeTDetail = () => (
  <>
    <h2>Code-T</h2>
    <p>
      Code-T is a multiplayer shooter game that is developed by Tian Yang and
      me. The game supports game modes including Team Death Match, Objectives
      Domination, and PVE. This project is developed with Unreal Engine 4, with
      the integration of{" "}
      <Anchor href="https://docs.unrealengine.com/4.26/en-US/InteractiveExperiences/GameplayAbilitySystem/">
        Gameplay Ability System(GAS)
      </Anchor>{" "}
      and{" "}
      <Anchor href="https://github.com/Tencent/sluaunreal">slua-unreal</Anchor>{" "}
      plugin.
    </p>
    <p>
      In the game, the player will control a shooter character. The player is
      able to switch the camera between TPP and FPP. The available firearms that
      the character can use include handguns, assault rifles, SMGs, snipers,
      railguns, and grenades. The game supports up to 8 players playing inside
      one match under a LAN party.
    </p>
    <br />
    <YoutubeEmbed embedId="2fJNkJJwJZk" title="Code-T Gameplay Footage" />
  </>
);

export default CodeTDetail;
