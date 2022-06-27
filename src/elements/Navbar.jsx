import { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [active, setActive] = useState({
    chldNum: 0,
    home: true,
    person: false,
    message: false,
    camera: false,
    settings: false
  });

  const [childNum, setChildNum] = useState(0);

  const setActiveFunction = (a) => {
    switch (a) {
      case "home":
        setActive({
          chldNum: 0,
          home: true,
          person: false,
          message: false,
          camera: false,
          settings: false
        });
        break;

      case "person":
        setActive({
          chldNum: 1,
          home: false,
          person: true,
          message: false,
          camera: false,
          settings: false
        });
        break;

      case "message":
        setActive({
          chldNum: 2,
          home: false,
          person: false,
          message: true,
          camera: false,
          settings: false
        });
        break;

      case "camera":
        setActive({
          chldNum: 3,
          home: false,
          person: false,
          message: false,
          camera: true,
          settings: false
        });
        break;
      case "settings":
        setActive({
          chldNum: 4,
          home: false,
          person: false,
          message: false,
          camera: false,
          settings: true
        });
        break;
      default:
        console.log("error - navbar");
    }
  };

  return (
    <Wrapper>
      <ul>
        <li
          className={active.home === true ? "list active" : "list"}
          onClick={() => setActiveFunction("home")}
        >
          <a href="#">
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="text">Home</span>
          </a>
        </li>

        <li
          className={active.person === true ? "list active" : "list"}
          onClick={() => setActiveFunction("person")}
        >
          <a href="#">
            <span className="icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            <span className="text">Profile</span>
          </a>
        </li>

        <li
          className={active.message === true ? "list active" : "list"}
          onClick={() => setActiveFunction("message")}
        >
          <a href="#">
            <span className="icon">
              <ion-icon name="chatbubble-outline"></ion-icon>
            </span>
            <span className="text">Messages</span>
          </a>
        </li>

        <li
          className={active.camera === true ? "list active" : "list"}
          onClick={() => setActiveFunction("camera")}
        >
          <a href="#">
            <span className="icon">
              <ion-icon name="camera-outline"></ion-icon>
            </span>
            <span className="text">Photos</span>
          </a>
        </li>

        <li
          className={active.settings === true ? "list active" : "list"}
          onClick={() => setActiveFunction("settings")}
        >
          <a href="#">
            <span className="icon">
              <ion-icon name="settings-outline"></ion-icon>
            </span>
            <span className="text">Settings</span>
          </a>
        </li>
        <Indicator num={active.chldNum} className="indicator"></Indicator>
      </ul>
    </Wrapper>
  );
};

export default Navbar;

const Indicator = styled.div`
  transform: translateX(calc(70px * ${(props) => props.num}));
`;

const Wrapper = styled.div`
  width: 400px;
  height: 70px;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  ul {
    display: flex;
    width: 350px;
  }

  ul li {
    position: relative;
    list-style: none;
    width: 70px;
    height: 70px;
    z-index: 1;
  }

  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
  }

  .icon {
    position: relative;
    display: block;
    line-height: 75px;
    font-size: 1.5em;
    text-align: center;
    transition: 0.5s;
    color: var(--clr);
  }

  ul li.active a .icon {
    transform: translateY(-32px);
  }

  ul li a .text {
    position: absolute;
    color: var(--clr);
    font-weight: 400;
    font-size: 0.75em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    opacity: 0;
    transform: translateY(20px);
  }

  ul li.active a .text {
    opacity: 1;
    transform: translateY(10px);
  }

  .indicator {
    position: absolute;
    top: -50%;
    width: 70px;
    height: 70px;
    background: #29fd53;
    border-radius: 50%;
    border: 6px solid var(--clr);
    transition: 0.5s;
  }

  .indicator::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 0px -10px 0 0 var(--clr);
  }

  .indicator::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: 0px -10px 0 0 var(--clr);
  }
`;
