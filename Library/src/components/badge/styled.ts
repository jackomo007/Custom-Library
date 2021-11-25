import styled from "styled-components";
import { ComponentSize } from "../../config/sizes";
import { BadgeType } from "./badge";
import {palette} from '../../config/palette';

type StateColors = {
    regular: string;
    hover: string;
}

const typeColors: {[key in BadgeType]: StateColors} = {
    danger: {
        regular: palette.interactiveColors.pure,
        hover: palette.interactiveColors.pure,
    },
    info: {
        regular: palette.badges.blue,
        hover: palette.badges.blue,
    },
    warning: {
        regular: palette.badges.yellow,
        hover: palette.badges.yellow,
    },
    success: {
        regular: palette.badges.green,
        hover: palette.badges.green,
    },
    primary: {
        regular: palette.badges.coral,
        hover: palette.badges.coral,
    },
    secondary: {
        regular: palette.interactiveColors.dark,
        hover: palette.interactiveColors.dark,
    },
    complex: {
        regular: palette.interactiveColors.dark,
        hover: palette.interactiveColors.dark,
    }
};

interface StyledBadgeProps {
    innerType: BadgeType;
    size: ComponentSize;
    withText: boolean;
}

const setColor = (color: any) => {
    if(color === 'danger' || color === 'secondary') {
        return palette.globalColors.neutrals.white
    } else if(color === 'info') {
        return palette.brandColors.pure
    } else if(color === 'warning') {
        return palette.globalColors.neutrals.black
    } else if(color === 'success') {
        return palette.globalColors.feedback.green.pure
    } else if(color === 'primary') {
        return palette.badges.orange
    }  else if(color === 'complex') {
        return palette.brandColors.pure
    }
}

/* Real tag is assigned dynamically */
export const StyledBadge = styled.span<StyledBadgeProps>`
    font-family: Source Sans Pro;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 8px 4px;

    width: 67px;
    height: 26px;

    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    background-color: ${ (pr) => typeColors[pr.innerType].regular };
    color: ${ pr => setColor(pr.innerType)};
    border-radius: 50px;
`;

export const StyledIcon = styled.div`
    width: 17px;
    height: 16.93px;
    left: 4.64px;
    top: 5.48px;
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;

    color: ${palette.globalColors.neutrals.white};
`;