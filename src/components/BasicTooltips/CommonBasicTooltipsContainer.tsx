import { BOTTOM_INFO, LEFT_INFO, RIGHT_INFO, TOP_INFO } from '../../db/basicTolltipsDb.ts';

function CommonBasicTooltipsContainer({ handleExpandMouseOver, handleMouseLeave }: any) {
  return (
    <>
      <div className="top-wrapper">
        {TOP_INFO.map((info) => (
          <button
            key={info.id}
            onMouseOver={(e) => handleExpandMouseOver(e, info)}
            onMouseLeave={() => handleMouseLeave(true)}
            className="tooltip-btn"
          >
            {info.bottonContents}
          </button>
        ))}
      </div>

      <div className="side-wrapper">
        <div className="left-wrapper">
          {LEFT_INFO.map((info) => (
            <button
              key={info.id}
              onMouseOver={(e) => handleExpandMouseOver(e, info)}
              onMouseLeave={() => handleMouseLeave(true)}
              className="tooltip-btn"
            >
              {info.bottonContents}
            </button>
          ))}
        </div>
        <div className="right-wrapper">
          {RIGHT_INFO.map((info) => (
            <button
              key={info.id}
              onMouseOver={(e) => handleExpandMouseOver(e, info)}
              onMouseLeave={() => handleMouseLeave(true)}
              className="tooltip-btn"
            >
              {info.bottonContents}
            </button>
          ))}
        </div>
      </div>

      <div className="bottom-wrapper">
        {BOTTOM_INFO.map((info) => (
          <button
            key={info.id}
            onMouseOver={(e) => handleExpandMouseOver(e, info)}
            onMouseLeave={() => handleMouseLeave(true)}
            className="tooltip-btn"
          >
            {info.bottonContents}
          </button>
        ))}
      </div>
    </>
  );
}

export default CommonBasicTooltipsContainer;
