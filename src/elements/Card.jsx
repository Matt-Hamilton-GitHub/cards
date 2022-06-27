import styled from "styled-components";

const Card = ({ item }) => {
  const { id, name, job, image, text, perks } = item;
  return (
    <Wrapper>
      <div className="title-div">{name}</div>
      <ImageDiv img={image}></ImageDiv>
      <div className="perks-div">
        {perks.map((perk) => {
          return <span>{perk}</span>;
        })}
      </div>
      <div className="card-desc-div">
        <p>{text}</p>
      </div>
    </Wrapper>
  );
};

export default Card;

const ImageDiv = styled.div`
  position: absolute;
  background: url(${(props) => props.img});
  background-size: cover;
  object-fit: cover;
  mix-blend-mode: normal;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;
  height: 60%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 65%);
`;

const Wrapper = styled.div`
  font-family: "Jura";
  font-style: normal;

  position: relative;
  min-width: 100%;
  min-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.17);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  .title-div {
    position: absolute;
    display: flex;
    overflow: hidden;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    min-width: 100%;
    height: 50px;
    background: rgba(217, 217, 217, 0.7);
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .perks-div {
    position: absolute;
    display: flex;
    top: 50%;
    left: 12%;
    background: rgba(130, 130, 130, 0.54);
    border: 2px solid #e7e7e7;
    z-index: 2;
    width: auto;
    height: 50px;
  }

  .perks-div span {
    padding: 5px;
  }

  .card-desc-div {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 70.7%;
    bottom: 0%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background: rgba(217, 217, 217, 0.38);
    user-select: none;
  }

  .card-desc-div p {
    padding: 5px;
    font-size: 9.4px;
    white-space: wrap;
    overflow: hidden;
    text-overflow: clip;
  }
`;
