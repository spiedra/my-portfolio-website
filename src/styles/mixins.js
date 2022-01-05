import styled, { css } from "styled-components";

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    text-decoration: none;
    color: inherit;
  `,

  line: css`
    fill: transparent;
    stroke: black;
    stroke-linecap: round;
    stroke-width: 6;
    transition: var(--tran-dasharray), var(--tran-dashoffset);
  `,
};

export default mixins;
