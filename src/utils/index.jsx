import Page1 from "./../pages/Page1";
import Page2 from "./../pages/Page2";
import Page3 from "./../pages/Page3";
import Page4 from "./../pages/Page4";
import Page5 from "./../pages/Page5";
import Page6 from "./../pages/Page6";
import Page7 from "./../pages/Page7";
import Page8 from "./../pages/Page8";
import Page9 from "./../pages/Page9";
import Page10 from "./../pages/Page10";
import Page11 from "./../pages/Page11";
import Page12 from "./../pages/Page12";
import Page13 from "./../pages/Page13";
import Page14 from "./../pages/Page14";
import Page15 from "./../pages/Page15";
import Page16 from "./../pages/Page16";

import RIF from "./../assets/rif.png";
import PRU from "./../assets/pru.png";
import LA from "./../assets/la.png";
import LAPLUS from "./../assets/la-plus.png";
import PIT from "./../assets/p-it.png";
import PHP from "./../assets/p-hp.png";
import PROHP from "./../assets/pro-hp.png";
import NUSAM from "./../assets/nusam.png";
import SOLR from "./../assets/so-lr.png";
import SOIBS from "./../assets/so-ibs.png";
import NITREST from "./../assets/nitrest.png";
export const pages = [
  {
    id: 1,
    text: "RIF",
    img: RIF,
    innerPages: [
      { id: "page1", text: "RIF", page: Page1 },
      { id: "page2", text: "RIF", page: Page2 },
      { id: "page3", text: "RIF", page: Page3 },
      { id: "page4", text: "RIF", page: Page4 },
    ],
  },
  {
    id: 2,
    text: "PRU",
    img: PRU,
    innerPages: [{ id: "page5", text: "PRU", page: Page5 }],
  },
  {
    id: 3,
    text: "LA",
    img: LA,
    innerPages: [
      { id: "page6", text: "LA", page: Page6 },
      { id: "page7", text: "LA", page: Page7 },
    ],
  },
  {
    id: 4,
    text: "LA-PLUS",
    img: LAPLUS,
    innerPages: [{ id: "page8", text: "LA-PLUS", page: Page8 }],
  },
  {
    id: 5,
    text: "P-IT",
    img: PIT,
    innerPages: [{ id: "page9", text: "P-IT", page: Page9 }],
  },
  {
    id: 6,
    text: "P-HP",
    img: PHP,
    innerPages: [
      { id: "page10", text: "P-HP", page: Page10 },
      { id: "page11", text: "P-HP", page: Page11 },
    ],
  },
  {
    id: 7,
    text: "PRO-HP",
    img: PROHP,
    innerPages: [{ id: "page12", text: "PRO-HP", page: Page12 }],
  },
  {
    id: 8,
    text: "NUSAM",
    img: NUSAM,
    innerPages: [{ id: "page13", text: "NUSAM", page: Page13 }],
  },
  {
    id: 9,
    text: "SO-LR",
    img: SOLR,
    innerPages: [{ id: "page14", text: "SO-LR", page: Page14 }],
  },
  {
    id: 10,
    text: "SO-IBS",
    img: SOIBS,
    innerPages: [{ id: "page15", text: "SO-IBS", page: Page15 }],
  },
  {
    id: 11,
    text: "NITREST",
    img: NITREST,
    innerPages: [{ id: "page16", text: "NITREST", page: Page16 }],
  },
];
