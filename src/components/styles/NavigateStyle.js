import styled from "styled-components"

export const NavigateStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
  margin: 0 0 0 3vw;
  .childLink {
    margin-top: 0;
    width: 120px;
    height: 76px;
    background-color: white;
    border: 1px solid lightgrey;
    display: grid;
    place-items: center;
    margin: 0;
    padding: 0;
    transition: all 0.3s ease;
    background: white;

    p {
      font-size: 14px;
      font-weight: bold;
      color: #cf5d31;
      text-align: center;
      transition: all 1s ease;
      text-rendering: optimizeLegibility;
      font-family: Source Sans Pro;
      cursor: pointer;
      margin: 0;
      padding: 0;
    }
    &:hover {
      background-color: #cf5d31;
      transform: scale(1.05);
      margin: 0.15rem 0;
      p {
        color: white;
      }
    }
    img {
      max-height: 40%;
      width: auto;
    }
  }
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: center;
    top: 0%;
    justify-content: center;
    margin: 0;
    .childLink {
    width: 105px;
    height: 35px;
    padding: 0 0.5rem;
    margin: 0.2rem 0.2rem;
    background-color: #cf5d31;
    border-radius: 2rem;
    p {
      font-size: 12px;
      color: white;
      font-weight: normal;
    }
    &:hover {
      background-color: white;
      transform: scale(1.05);
      margin: 0 0.15rem;
      p {
        color: #cf5d31;
      }
    }
    img {
      max-height: 40%;
      width: auto;
      display: none;
    }
  }
  }
`