import React from "react";
import Anchor from "../../../../Utils/Anchor";
import cover from "./cover.png"

const FakeNewsClassifierDetail = () => (
  <>
    <h2>Fake News Classifier</h2>
    <p>
      The goal of this project is to leverage machine learning models to make
      fast and accurate fake news detection. I implement two ML approaches to
      classify the fake news: one is Random Forrest model, the classical
      classification method, and the other one is a dense neural network model
      using BERT, the state-of-the-art NLP method brought by Google scientists.
    </p>
    <p>
      A complete introduction of the model design and build-up can be found in
      my{" "}
      <Anchor href="https://xutianjian.medium.com/fake-news-classification-use-machine-learning-to-fight-against-fake-news-e0da735e55e0">
        Medium article
      </Anchor>
      . The python notebook of the model implementation is open-sourced on{" "}
      <Anchor href="https://github.com/FrostXTJ/fake-news-classification">
        GitHub
      </Anchor>
      . The fake news dataset used for model training is originally from{" "}
      <Anchor href="https://www.kaggle.com/clmentbisaillon/fake-and-real-news-dataset">
        Kaggle
      </Anchor>
      .
    </p>
    <img src={cover} alt="Nerual Network Design" width="100%" />
  </>
);

export default FakeNewsClassifierDetail;
