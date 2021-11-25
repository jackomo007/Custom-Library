import styled from "styled-components";
import { ComponentSize, heights, width, fontSize } from "../../config/sizes";
import { ButtonType } from "./button";
import {palette} from '../../config/palette';

type StateColors = {
    regular: string;
    hover: string;
}

const typeColors: {[key in ButtonType]: StateColors} = {
    primaryDefault: {
        regular: palette.brandColors.pure,
        hover: palette.brandColors.light,
    },
    primaryDark: {
        regular: '#00468A',
        hover: '#00468A',
    },
    primaryGhost: {
        regular: palette.globalColors.neutrals.whiteBg,
        hover: palette.globalColors.neutrals.whiteBg,
    },
    secondaryDefault: {
        regular: palette.globalColors.neutrals.white,
        hover: palette.globalColors.neutrals.white,
    },
    secondaryLight: {
        regular: '#CCDDED',
        hover: '#CCDDED',
    }
};

interface StyledButtonProps {
    innerType: ButtonType;
    size: ComponentSize;
    withText: boolean;
}

const setColor = (color: any) => {
    if(color === 'primaryDefault' || color === 'primaryDark') {
        return palette.globalColors.neutrals.white
    } else if(color === 'secondaryDefault' || color === 'secondaryLight') {
        return palette.globalColors.neutrals.dark
    }
    return '#404F61'
}

/* Real tag is assigned dynamically */
export const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 32px;
    width: ${ pr => width[pr.size]}px;

    /* Add margin in case of loading or icon */
    & > *:nth-child(1) {
        margin-left: ${pr => pr.withText ? 7 : 0}px;
    }
    font-family: Roboto;
    font-size: ${ pr => fontSize[pr.size]}px;
    border-radius: 4px;
    border-color: ${ pr => pr.innerType === 'secondaryDefault' ? palette.brandColors.pure : typeColors[pr.innerType].regular};
    cursor: pointer;
    background-color: ${ (pr) => typeColors[pr.innerType].regular };
    height: ${ pr => heights[pr.size]}px;
    color: ${ pr => setColor(pr.innerType)};
    box-shadow: none;
    ${ pr => pr.disabled ? `
        background-color: silver;
        color: #5e5e5e;
        cursor: not-allowed;

        &:hover {
            background-color: #a6a6a6 !important;
            color: #5e5e5e !important;
        }
    ` : ''}

    &:focus {
        box-shadow: 0 0 0 1px #fff, 0 0 0 2px ${ (pr) => typeColors[pr.innerType].regular };
    }
    &:hover {
        background-color: ${ (pr) => typeColors[pr.innerType].hover };
    }
`;

export const StyledIcon = styled.div`
    height: 20px;
`;