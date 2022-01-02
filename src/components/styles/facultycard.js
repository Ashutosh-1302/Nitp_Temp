import styled from "styled-components"

export const FacultyCard = styled.div`
  width: 250px;
  height: 280px;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  background: ${props => props.theme.backgroundSecColor};
  box-shadow: 0 0 21px rgba(0, 0, 0, 0.25);
  .faculty1 {
    width: 250px;
    height: 280px;
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
  }
  .faculty2 {
    width: 250px;
    height: 280px;
    background: linear-gradient(
      180deg,
      ${props => props.theme.backgroundColor} 0%,
      #fbe5d9 100%
    ) 10%;
    opacity: 0;
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
    p {
      font-size: 18px;
      font-family: "Source Sans Pro";
      text-align: center;
      margin-top: 0;
      margin-bottom: 0;
      a{
        line-height: 3;
      }
    }
  }
  .faculty2:hover {
    opacity: 1;
  }
}
.extn {
  align-self: flex-start;
  position: absolute;
  right: 0;
  color:${props => props.theme.textColor};
  text-align: end;
  margin-right: 15px;
}

.fimg {
  font-family: "Source Sans Pro";
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  .facimg{
    overflow: hidden;
    border-radius: 50%;
    width: 126px;
    height: 126px;
     img {
    width: 100%;
    height: auto;
  }
  }
 h3{
   color:${props => props.theme.primaryTextColor}
 }
  h4 {
    color: ${props => props.theme.textColor};
    /* line-height: 0.1; */
    text-align: center;
  }
  p {
    color: #d33a00;
    line-height: 0.1;
  }`
