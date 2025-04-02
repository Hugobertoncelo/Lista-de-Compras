import { LuMilk, LuBeef, LuApple, LuCarrot, LuSandwich } from "react-icons/lu";
import {
  MdOutlineCleaningServices,
  MdOutlineFastfood,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { BiCheese } from "react-icons/bi";
import { PiToiletPaper } from "react-icons/pi";

const options = [
  {
    value: "padaria",
    label: (
      <>
        <LuSandwich size={16} color="#BB9F3A" /> Padaria
      </>
    ),
    color: "#211e12",
    colorlabel: "#BB9F3A",
  },
  {
    value: "legume",
    label: (
      <>
        <LuCarrot size={16} color="#8CAD51" /> Legumes
      </>
    ),
    color: "#1c2015",
    colorlabel: "#8CAD51",
  },
  {
    value: "carne",
    label: (
      <>
        <LuBeef size={16} color="#DB5BBF" /> Carne
      </>
    ),
    color: "#251622",
    colorlabel: "#DB5BBF",
  },
  {
    value: "fruta",
    label: (
      <>
        <LuApple size={16} color="#E07B67" /> Frutas
      </>
    ),
    color: "#261a17",
    colorlabel: "#E07B67",
  },
  {
    value: "bebida",
    label: (
      <>
        <LuMilk size={16} color="#7B94CB" /> Bebida
      </>
    ),
    color: "#252e3f",
    colorlabel: "#7B94CB",
  },
  {
    value: "alimentos",
    label: (
      <>
        <MdOutlineFastfood size={16} color="#43fc2b" /> Alimentos
      </>
    ),
    color: "#304430",
    colorlabel: "#43fc2b",
  },
  {
    value: "frios",
    label: (
      <>
        <BiCheese size={16} color="#bf6cf0" /> Frios
      </>
    ),
    color: "#291f2b",
    colorlabel: "#bf6cf0",
  },
  {
    value: "higiene",
    label: (
      <>
        <PiToiletPaper size={16} color="#f1f4fc" /> Higiene
      </>
    ),
    color: "#1a1d23",
    colorlabel: "#f1f4fc",
  },
  {
    value: "limpeza",
    label: (
      <>
        <MdOutlineCleaningServices size={16} color="#e90f0f" /> Limpeza
      </>
    ),
    color: "#231a1b",
    colorlabel: "#e90f0f",
  },
  {
    value: "outros",
    label: (
      <>
        <MdOutlineShoppingCart size={16} color="#fafd36" /> Outros
      </>
    ),
    color: "#2e3123",
    colorlabel: "#fafd36",
  },
];

export default options;
