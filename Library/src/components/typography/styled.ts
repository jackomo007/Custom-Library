import styled, { css } from "styled-components";

const headingMargin = css`
    margin: 15px 0;
`;

interface HeaderProps {
    align?: 'center' | 'right' | 'left';
}

export const H1 = styled.h1<HeaderProps>`
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
    text-align: ${pr => pr.align ? pr.align : 'left'};
    ${headingMargin}
`;

export const H2 = styled.h2<HeaderProps>`
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
    text-align: ${pr => pr.align ? pr.align : 'left'};
    ${headingMargin}
`;

export const H3 = styled.h3<HeaderProps>`
    font-weight: bold;
    font-size: 18px;
    line-height: 32px;
    text-align: ${pr => pr.align ? pr.align : 'left'};
    ${headingMargin}
`;

export const H4 = styled.h4<HeaderProps>`
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    text-align: ${pr => pr.align ? pr.align : 'left'};
    ${headingMargin}
`;

export const H5 = styled.h4<HeaderProps>`
    font-weight: 500;
    font-size: 14px;
    line-height: 40px;
    text-align: ${pr => pr.align ? pr.align : 'left'};
    ${headingMargin}
`;

export const CardTitle = styled.title<HeaderProps>`
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    text-align: ${pr => pr.align ? pr.align : 'left'};
    ${headingMargin}
`;

export const Body1 = styled.body<HeaderProps>`
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-align: ${pr => pr.align ? pr.align : 'left'};
    ${headingMargin}
`;

export const Body2 = styled.body<HeaderProps>`
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: ${pr => pr.align ? pr.align : 'left'};
    ${headingMargin}
`;