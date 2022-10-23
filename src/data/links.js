import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
  AiOutlineTags,
  AiOutlineEuro,
  AiOutlineSend,
  AiOutlineRise,
  AiOutlineProject,
  AiOutlinePicRight,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  BsKanban,
  BsBarChart,
} from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { FiShoppingBag, FiEdit, FiPieChart } from "react-icons/fi";
import { GiLouvrePyramid } from "react-icons/gi";
import { RiContactsLine, RiLuggageCartLine, RiStockLine } from "react-icons/ri";
export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "ecommerce",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "products",
        icon: <AiOutlineTags />,
      },
      {
        name: "sells",
        icon: <AiOutlineEuro />,
      },
      {
        name: "purchases",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "stocks",
        icon: <AiOutlineStock />,
      },
      {
        name: "clients",
        icon: <RiContactsLine />,
      },
      {
        name: "shippings",
        icon: <AiOutlineSend />,
      },
      {
        name: "profits",
        icon: <AiOutlineRise />,
      },
      {
        name: "suppliers",
        icon: <RiLuggageCartLine />,
      },
      {
        name: "materials",
        icon: <AiOutlineProject />,
      },
      {
        name: "orders",
        icon: <AiOutlinePicRight />,
      },
      {
        name: "employees",
        icon: <IoMdContacts />,
      },
      {
        name: "settings",
        icon: <AiOutlineSetting />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "calendar",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "kanban",
        icon: <BsKanban />,
      },
      {
        name: "editor",
        icon: <FiEdit />,
      },
      {
        name: "color-picker",
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "line",
        icon: <AiOutlineStock />,
      },
      {
        name: "area",
        icon: <AiOutlineAreaChart />,
      },

      {
        name: "bar",
        icon: <AiOutlineBarChart />,
      },
      {
        name: "pie",
        icon: <FiPieChart />,
      },
      {
        name: "financial",
        icon: <RiStockLine />,
      },
      {
        name: "color-mapping",
        icon: <BsBarChart />,
      },
      {
        name: "pyramid",
        icon: <GiLouvrePyramid />,
      },
      {
        name: "stacked",
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];
