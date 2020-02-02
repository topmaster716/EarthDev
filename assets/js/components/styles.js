import styled from "styled-components";

// Color palette
export const color = {

};

// Based on: https://jsramblings.com/2018/02/04/styled-components-media-queries.html
export const size = {
  mobileS: "320",
  mobileM: "375",
  mobileL: "425",
  tablet: "768",
  laptop: "1024",
  laptopL: "1440",
  desktop: "2560"
};

export const device = {
  mobileS: `(min-width: ${size.mobileS}px)`,
  mobileM: `(min-width: ${size.mobileM}px)`,
  mobileL: `(min-width: ${size.mobileL}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  laptopL: `(min-width: ${size.laptopL}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  desktopL: `(min-width: ${size.desktop}px)`,
  tillMobileS: `(max-width: ${size.mobileS}px)`,
  tillMobileM: `(max-width: ${size.mobileM}px)`,
  tillMobileL: `(max-width: ${size.mobileL}px)`,
  tillTablet: `(max-width: ${size.tablet}px)`,
  tillLaptop: `(max-width: ${size.laptop}px)`,
  tillLaptopL: `(max-width: ${size.laptopL}px)`,
  tillDesktop: `(max-width: ${size.desktop}px)`,
  tillDesktopL: `(max-width: ${size.desktop}px)`
};

// Resusable css (i.e. mixins)
export const f_c_sb = `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const f_c_c = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const f_sb = `
  display: flex;
  justify-content: space-between;
`;

export const f_sa = `
  display: flex;
  justify-content: space-around;
`;

export const f_cy = `
  display: flex;
    align-items: center;
`;

