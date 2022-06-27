import styled from "styled-components";

const Card = ({ item }) => {
  const { id, name, job, image, text } = item;
  return (
    <Wrapper>
      <div className="title-div">{name}</div>
      <ImageDiv props={image}></ImageDiv>
    </Wrapper>
  );
};

export default Card;

const ImageDiv = styled.div`
  position: relative;
  background: url("https://portfolio-mh.com/static/media/cozyHome.5613d69b.gif");
  mix-blend-mode: normal;
  border: 3px solid #ecc1c1;
  width: 29px;
  height: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div`
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
    background: rgba(217, 217, 217, 0.38);
    align-items: center;
    justify-content: center;
  }

  img {
    box-sizing: border-box;

    mix-blend-mode: normal;
    border: 3px solid #ecc1c1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
