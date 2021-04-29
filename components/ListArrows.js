import { useState } from "react";

const ListArrows = ({ list, colorHex }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="my-2 flex items-center justify-center">
        <button
          className="focus:outline-none left-arrow"
          onClick={() => {
            if (count <= 0) setCount(list.length);
            setCount((prevCount) => prevCount - 1);
          }}
        >
          <i className="fas fa-angle-left text-3xl mx-1"></i>
        </button>
        <p className="w-44 font-black font-nunito text-2xl">{list[count]}</p>
        <button
          className="focus:outline-none right-arrow"
          onClick={() => {
            if (count >= list.length - 1) setCount(-1);
            setCount((prevCount) => prevCount + 1);
          }}
        >
          <i className="fas fa-angle-right text-3xl mx-1"></i>
        </button>
      </div>
      <style jsx>
        {`
          p,
          i {
            color: ${colorHex};
          }
          .left-arrow {
            animation: left-arrow 0.5s ease 0s infinite alternate;
          }
          .right-arrow {
            animation: right-arrow 0.5s ease 0s infinite alternate;
          }

          @keyframes left-arrow {
            100% {
              transform: translateX(-10px);
            }
          }
          @keyframes right-arrow {
            100% {
              transform: translateX(10px);
            }
          }
        `}
      </style>
    </>
  );
};

export default ListArrows;
