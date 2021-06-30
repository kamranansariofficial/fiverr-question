import "./App.css";
import ReactPlayer from "react-player";
import Automotive from "./static/media/180607_A_101.mp4";
import question from "./static/media/question.jpg";
import avatar from "./static/media/avatar.png";
import React, { useState } from "react";
import data from "./data";
function App() {
  const [state, setstate] = useState({
    active: 0,
  });
  return (
    <div className="container">
      <div className="App">
        <div className="video-wrapper">
          <ReactPlayer
            playing
            width="100%"
            height="100%"
            light = "https://cdn.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg"
            loop
            controls
            url={[{ src: Automotive, type: "video/mp4" }]}
          />
        </div>
        <div
          className="question-wrapper"
          style={{ backgroundImage: `url(${question})` }}
        >
          {data?.map(
            (qus, i) =>
              state.active === i && (
                <React.Fragment key={`question-${i}`}>
                  <div className="top-header">
                    <div
                      className="avatar-service"
                      style={{ backgroundImage: `url(${avatar})` }}
                    ></div>
                    <div className="question">{qus.question}</div>
                  </div>
                  <div className="answers">
                    {qus.answers.map((ans, i) => (
                      <React.Fragment key={`answer-${i}`}>
                        {qus.hasOwnProperty("href") ? (
                          <a href={qus.href} className="btn btn-answer" target="_blank">
                            {ans}
                          </a>
                        ) : (
                          <button
                            className="btn btn-answer"
                            onClick={() =>
                              setstate({ ...state, active: qus.goto })
                            }
                          >
                            {ans}
                          </button>
                        )}
                      </React.Fragment>
                    ))}
                    {qus.hasOwnProperty("goback") && (
                      <button
                        className="btn btn-back"
                        onClick={() =>
                          setstate({ ...state, active: qus.goback })
                        }
                      >
                        Go back
                      </button>
                    )}
                  </div>
                </React.Fragment>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
