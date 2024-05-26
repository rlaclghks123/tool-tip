import { Direction } from '../types/tooltip';

function CommonCustomContents({ direction }: { direction: Direction }) {
  return (
    <section className="contents-section">
      <div className="contents-section-description-box">
        <svg className="exclamaion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
        </svg>
        <p>Are you sure to delete this task?</p>
      </div>
      <div className="contents-section-btn-box ">
        <button
          className="contents-section-btn "
          onClick={() => alert(`${direction} tooltip confirm clicked on Yes`)}
        >
          Yes
        </button>
      </div>
    </section>
  );
}

export default CommonCustomContents;
