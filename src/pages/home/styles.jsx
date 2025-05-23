import styled from "styled-components";
import Select from "react-select";

import cover from "../../assets/cover.png";
import bg from "../../assets/bg.jpg";

import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: contain, cover;

  & {
    position: relative;
  }

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  @media (max-width: 770px) {
    background-size: auto;

    &::before {
      background-size: cover;
    }
  }
`;

export const Swapper = styled.div`
  margin-top: 88px;
  width: 720px;

  @media (max-width: 770px) {
    width: 100%;
    padding: 0px 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  gap: 32px;

  h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    text-align: center;
    color: #a200ff;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  h1 {
    font-size: 11px;
    padding: 10px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

export const SocialLink = styled.a`
  color: #ffffff;
  font-size: 24px;

  &:hover {
    color: #6f00ff;
  }
`;

export const DivItems = styled.div`
  display: flex;
  align-items: flex-end;

  gap: 12px;

  @media (max-width: 770px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .divide {
    display: flex;
    align-items: flex-end;

    gap: 12px;

    @media (max-width: 770px) {
      width: 100%;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 8px;
  flex: 1 0 0;

  @media (max-width: 770px) {
    width: 100%;
  }

  label {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;

    line-height: 100%;
    letter-spacing: 0.36px;
    color: #8e20e7;
  }

  input {
    display: flex;
    align-items: center;
    align-self: stretch;

    padding: 12px;
    gap: 8px;

    border-radius: 6px;
    border: 1px solid var(--colorbase-gray-300);
    outline: none;

    background: var(--colorbase-gray-500);
    color: var(--colorbase-gray-200);

    @media (max-width: 770px) {
      width: 100%;
    }

    &:focus {
      border-radius: 6px;
      border: 1px solid var(--colorproduto-purple-light);
      background: var(--colorbase-gray-500);
    }
  }
`;

export const Quantify = styled.div`
  display: flex;
  gap: 8px;

  align-self: stretch;
  flex-direction: column;

  label {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;

    line-height: 100%;
    letter-spacing: 0.36px;
    color: #8e20e7;
  }

  .quantifydiv {
    display: flex;
  }

  input {
    display: flex;
    align-items: center;

    height: 100%;
    width: 79px;

    @media (max-width: 770px) {
      width: 70px;
    }

    padding: 12px;

    background: var(--colorbase-gray-500);

    border: 0;
    outline: none;
    border-radius: 6px 0px 0px 6px;

    border: 1px solid var(--colorbase-gray-300);
    color: var(--colorbase-gray-200);

    &:focus {
      border: 1px solid var(--colorproduto-purple-light);
      background: var(--colorbase-gray-500);
    }
  }
`;

export const UnitSelect = styled.select`
  display: flex;
  align-items: center;

  width: 72px;

  border-radius: 0px 6px 6px 0px;
  border: 1px solid var(--colorbase-gray-300);

  color: var(--colorbase-gray-200);

  padding: 12px;
  gap: 8px;

  background: var(--colorbase-gray-400);

  option {
    background: var(--colorbase-gray-400);
    color: var(--colorbase-gray-200);

    &:hover {
      background: var(--colorbase-gray-500);
    }

    &:checked {
      background: #252529;
    }
  }
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 168px;

  gap: 8px;

  @media (max-width: 770px) {
    flex: 1 0 0;
  }

  label {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;

    line-height: 100%;
    letter-spacing: 0.36px;
    color: #8e20e7;
  }
`;

export const SelectItens = styled(Select)`
  display: inline-block;
  align-items: center;
  align-self: stretch;

  height: 100%;

  gap: 8px;

  border-radius: 6px;
  border: 1px solid var(--colorbase-gray-300);

  background: var(--colorbase-gray-400);
  color: var(--colorbase-gray-200);

  &:focus {
    border-radius: 6px;
    border: 1px solid var(--colorproduto-purple-light);
    background: var(--colorbase-gray-500);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
  gap: 6px;

  border-radius: 999px;
  border: 0;

  background: var(--colorproduto-purple);

  width: 40px;
  height: 40px;

  transition: all 0.3s;

  &:hover {
    background: var(--colorproduto-purple-dark);
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 720px;

  gap: 12px;
  margin-top: 40px;

  position: relative;

  .nothing {
    width: 100%;
    text-align: center;
  }

  .modal-cover {
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.613);
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;

    background: var(--colorbase-gray-400);
    border-radius: 8px;

    padding: 12px;

    transform: translate(-50%, -50%);

    @media (max-width: 770px) {
      right: 0;
    }
  }

  .modal-content {
    margin-right: 27px;
    p {
      margin-bottom: 8px;
    }
  }

  .modal-buttons {
    display: flex;
    justify-content: center;
    padding-left: 27px;

    .btnabs {
      position: absolute;
      background: #414143;
      top: 8px;
      right: 8px;
      padding: 3px;
      align-items: center;
      justify-content: center;
      display: flex;

      border-radius: 100%;

      &:hover {
        background: #2e2e31;
      }
    }

    button {
      border-radius: 6px;
      border: 0;

      background: var(--produto-purple, #7450ac);
      color: #fff;

      padding: 12px;

      transition: all 0.3s;

      &:hover {
        background: var(--colorproduto-purple-dark);
      }
    }
  }

  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const DivItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  padding: 2px;

  border-radius: 8px;
  border: 1px solid var(--colorbase-gray-300);

  opacity: ${(props) => (props.done ? 0.5 : 1)};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;

  span {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;

    line-height: 130%;

    color: ${(props) => (props.done ? "#afabb5" : "#faf8fd")};
    text-decoration-line: ${(props) => (props.done ? "line-through" : "none")};
  }

  p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;

    line-height: 130%;

    color: var(--colorbase-gray-200);
    text-decoration-line: ${(props) => (props.done ? "line-through" : "none")};
  }

  input {
    width: 16px;
    height: 16px;

    border-radius: 2px;
    border: 1px solid var(--colorproduto-purple-light);

    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;

    background-color: transparent;

    transition: all 0.3s;

    &:hover {
      background-color: var(--colorproduto-purple-light);
    }

    &:checked {
      background-color: var(--colorfeedback-success);
      border: 0;
    }
  }
`;

export const DivCategoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border-radius: 999px;
    border: 0;

    padding: 4px;

    transition: all 0.3s;

    &:hover {
      background: var(--colorbase-gray-400);
      scale: 1.1;
    }
  }

  .categoryItem {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 16px;
    gap: 6px;

    border-radius: 999px;

    font-size: 12px;
    font-style: normal;
    font-weight: 600;

    line-height: 130%;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 6px;
    }
  }
`;
