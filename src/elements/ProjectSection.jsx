import { useState, useEffect } from "react";
import styled from "styled-components";
import prjsDb from "../db/projects";
import Card from "./Card";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const ProjectSection = () => {
  const [selectedCard, setSelectedCart] = useState();
  const [currentId, setCurrentId] = useState(0);
  const [sliceDb, setSliceDb] = useState(prjsDb);

  const swipeItem = (prop) => {
    if (prop === "inc") {
      if (currentId < prjsDb.length - 1) setCurrentId(currentId + 1);
      else setCurrentId(0);
    } else {
      if (currentId < prjsDb.length && currentId !== 0)
        setCurrentId(currentId - 1);
      else if (currentId === 0) setCurrentId(prjsDb.length - 1);
    }
  };

  useEffect(() => {
    console.log(currentId);
    if (currentId % 3 === 0 || currentId === 0) {
      setSliceDb(prjsDb.slice(currentId, currentId + 3));
    } else {
    }
  }, [currentId]);

  return (
    <Wrapper>
      <div className="visual-sctoll-dots">
        {prjsDb.map((item, index) => {
          return (
            <div
              className={
                index === currentId
                  ? "single-dot single-dot-selected"
                  : "single-dot"
              }
              key={item.id}
              onClick={() => setCurrentId(item.id - 1)}
            ></div>
          );
        })}
      </div>
      <div className="cards-main">
        <div className="svg-icon" onClick={() => swipeItem("dec")}>
          <GrFormPrevious size={70} />
        </div>
        <div className="project-cards-section">
          {sliceDb.map((item) => {
            const { id, name, job, image, text, perks } = item;
            return (
              <div
                className={id === currentId + 1 ? "card main " : "card"}
                key={id}
                onClick={() => setCurrentId(id - 1)}
              >
                <Card key={id} item={item} />
              </div>
            );
          })}
        </div>
        <div className="svg-icon" onClick={() => swipeItem("inc")}>
          <MdOutlineNavigateNext size={70} />
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 25px 10px;
  min-height: auto;
  min-width: 100vw;

  .cards-main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    margin: 25px 10px;
    background: rgba(251, 251, 251, 0.1);
  }

  .visual-sctoll-dots {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 350px;
    height: 25px;
    border: solid 5px rgba(149, 167, 211, 1);
    background: rgba(94, 94, 94, 1);
    border: 2px solid #95a7d3;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 50px;
  }

  .single-dot {
    width: 20px;
    height: 20px;
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    background: #273f55;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  .single-dot-selected {
    transform: scale(1.1);
    background: orange;
    mix-blend-mode: color-burn;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .project-cards-section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    margin: 25px 10px;
    min-height: 300px;
  }
  .svg-icon {
    display: flex;
    position: relative;
    flex-direction: column;
    min-height: 100%;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    color: white;
  }
  .card {
    transform: scale(1);

    min-width: 200px;
    min-height: 350px;
    margin: 35px;
    background: linear-gradient(
      192.13deg,
      rgba(74, 141, 190, 0.99) 3.84%,
      rgba(57, 140, 100, 0.4) 99.02%
    );
    border-radius: 30px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    opacity: 0.6;
  }
  .card:hover {
    cursor: pointer;
  }

  .main {
    transform: scale(1.2);

    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(217, 217, 217, 0.38) 0px -2px 0px inset;
    opacity: 1;
  }
`;
