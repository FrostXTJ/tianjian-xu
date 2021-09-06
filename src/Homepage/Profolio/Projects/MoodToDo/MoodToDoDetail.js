import React from "react";
import Anchor from "../../../../Utils/Anchor";
import cover from "./cover.png";
import screenshot from "./webscreenshot.png";

const MoodToDoDetail = () => (
  <>
    <h2>MoodToDo</h2>
    <p>
      MoodToDo is a web app providing recommendation service in movies, music
      and restaurants according to user's mood. After the user pick a mood, a
      content-based recommendation algorithm will run in the backend to choose
      items that match user's moods. The user is able to give feedbacks on
      whether he/she likes or dislikes the recommendations, and the algorithm
      will improve its performance based on user's feedbacks.
    </p>

    <p>
      The codebase of MoodToDo is open-sourced on{" "}
      <Anchor href="https://github.com/FrostXTJ/mood-to-do">GitHub.</Anchor>
    </p>

    <img src={cover} alt="MoodToDo Webpage" width="100%" />
    <br /><br />
    <img src={screenshot} alt="MoodToDo Webpage" width="100%" />
  </>
);

export default MoodToDoDetail;
