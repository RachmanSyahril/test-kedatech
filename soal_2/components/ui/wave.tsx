import React from "react";

const wave = () => {
  return (
    <>
      <svg viewBox="0 0 1440 320" className="w-full">
        <path
          fill="url(#gradient)"
          d="M0,128L80,160C160,192,320,256,480,256C640,256,800,192,960,154.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
      <svg viewBox="0 0 1440 320" className="w-full">
        <path
          fill="url(#gradient1)"
          d="M1440,192L1360,160C1280,128,1120,64,960,64C800,64,640,128,480,165.3C320,203,160,213,80,218.7L0,224L0,0L80,0C160,0,320,0,480,0C640,0,800,0,960,0C1120,0,1280,0,1360,0L1440,0Z"
        ></path>
        <defs>
          <linearGradient id="gradient1" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default wave;
