import { useState } from "react";
import styled from "styled-components";
import prjsDb from "../db/projects";
import Card from "./Card";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const ProjectSection = () => {
  const [selectedCard, setSelectedCart] = useState();
  const [currentId, setCurrentId] = useState(0);

  const swipeItem = (prop) => {
    if (prop === "inc") {
      if (currentId < prjsDb.length - 3) setCurrentId(currentId + 1);
      else setCurrentId(0);
    } else {
      if (currentId === 0) setCurrentId(prjsDb.length - 3);
      else setCurrentId(currentId - 1);
    }
  };
  return (
    <Wrapper>
      <div className="visual-sctoll-dots">
        {prjsDb.map((item) => {
          return <div className="single-dot" key={item.id}></div>;
        })}
      </div>
      <div className="cards-main">
        <div className="svg-icon" onClick={() => swipeItem("dec")}>
          <GrFormPrevious size={70} />
        </div>
        <div className="project-cards-section">
          {prjsDb.slice(currentId, currentId + 3).map((item) => {
            const { id, name, job, image, text } = item;
            return (
              <div
                className={id === currentId + 2 ? "card main " : "card"}
                key={id}
              >
                <Card item={item} />
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
  transition: all 3s ease-in;
  background: rgba(161, 158, 158, 0.2);

  .cards-main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    margin: 25px 10px;
    transition: all 3s ease-in;
    background: rgba(251, 251, 251, 0.2);
  }

  .visual-sctoll-dots {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 70%;
    height: 30px;
    background: rgba(234, 227, 255, 0.16);
    border: solid 5px rgba(149, 167, 211, 1);
    background: rgba(234, 227, 255, 0.16);
    border: 2px solid #95a7d3;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
  }

  .single-dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;

    background: linear-gradient(0deg, #586470, #586470),
      linear-gradient(0deg, #586470, #586470),
      linear-gradient(0deg, #586470, #586470), #586470;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    transition: all 0.7s ease-in;
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
  }

  .main {
    transform: scale(1.2);
    transition: all 0.5s ease-in;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(217, 217, 217, 0.38) 0px -2px 0px inset;
  }
`;
