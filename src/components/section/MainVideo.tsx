import React from "react";
import ReactPlayer from "react-player";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import myVideo from "./v1.mp4";

const MainVideo: React.VFC = () => {
    return (
        <>
            <ReactPlayer
                loop
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: -2,
                }}
                muted
                playing
                width="100%"
                height="500%"
                url={`${myVideo}`}
            ></ReactPlayer>
        </>
    );
};

export default MainVideo;
