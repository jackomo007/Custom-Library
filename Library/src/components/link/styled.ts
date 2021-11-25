import styled from "styled-components";
import {palette} from "../../config/palette"
interface StyledLinkProps {
    disabled: boolean;
}

export const StyledLink = styled.a<StyledLinkProps>`
    display: flex;
    align-items: center;
    color: ${palette.brandColors.pure};
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    &:active, &:visited {
        color: ${palette.brandColors.darkest};
        text-decoration: none;
    }
    &:focus, &:hover {
        color: ${palette.brandColors.dark};
    }

    ${pr => pr.disabled ? `
        cursor: not-allowed;
        &, &:focus, &:visited, &:hover {
            color: #5e5e5e;
        }
    ` : ''} 
`