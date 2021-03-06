import styled from "styled-components";
import device from "../../../Styles/constant";
import { BtnSt } from "../../Endmbti/Style";

export const ChoiceBtn = styled.button<BtnSt>`
  font-family: "Nanum Gothic";
  font-weight: 700;
  font-size: 1.125rem;
  width: 450px;
  height: 60px;
  border: 1px solid;
  border-radius: 10px;
  cursor: pointer;
  color: #000000;
  background: #ffffff;
  border-color: #c4c4c4;

  :hover {
    color: ${(p) => p.fontcolor || null};
    background: ${(p) => p.btncolor || null};
    border-color: ${(p) => p.bordercolor || null};
    transition-duration: 0.3s;
  }

  @media ${device.mobile} {
    width: 340px;
    height: 50px;
    font-size: 0.89rem;
  }
`;

export const Div = styled.div`
  padding-bottom: 10px;
`;
