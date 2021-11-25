import React, { ElementType, MouseEventHandler, ReactNode } from 'react';
import { StyledBadge, StyledIcon } from './styled';
import Spinner from '../spinner';
import { ComponentSize } from '../../config/sizes';

export type BadgeType = 'danger' | 'info'  | 'warning'| 'success' | 'primary' | 'secondary' | 'complex';

interface BaseBadgeProps {
    type?: BadgeType;
    icon?: ElementType;
    size?: ComponentSize;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    loading?: boolean;
}

type HTMLBadgeProps = {
    onClick?: MouseEventHandler<HTMLSpanElement>;
} & BaseBadgeProps;

/**
 * If href is supplied, Badge becomes an anchor link
 */
type HTMLAnchorProps = {
    href?: string;
} & BaseBadgeProps;

/**
 * If `as` is supplied, Badge becomes a custom html node specified in `as`
 */
type CustomNodeProps = {
    as?: ElementType;
    to?: string;
} & BaseBadgeProps;

export type BadgeProps = HTMLBadgeProps & HTMLAnchorProps & CustomNodeProps;

const Badge: React.ForwardRefRenderFunction<unknown, BadgeProps> = (props, ref) => {
    const { 
        type = 'info',
        icon,
        size = 'default',
        className,
        children,
        disabled = false,
        loading,
        onClick,
        href,
        as,
        to,
    } = props;

    const styles = {
        innerType: type,
        size,
        disabled,
        withText: children != null
    }

    const spinnerStyles = {
        size: size === 'large' ? 25 : size === 'default' ? 20 : 15,
        light: true,
    }

    const childrenWithIcon = !icon ? children : (
        <>
            {children}
            <StyledIcon as={icon} />
        </>
    );
    
    if (as && !disabled) {
        return (
            <StyledBadge
                as={as}
                to={to}
                ref={ref}
                className={className}
                {...styles}
                data-test="badge"
            >
                {loading ? (
                    <>
                        Loading
                        <Spinner {...spinnerStyles} />
                    </>
                ) : childrenWithIcon}
            </StyledBadge>
        )
    }

    if (href && !disabled) {
        return (
            <StyledBadge
                as='a'
                href={href}
                ref={ref as React.MutableRefObject<HTMLAnchorElement>}
                className={className}
                {...styles}
                data-test="badge"
            >
                {loading ? (
                    <>
                        Loading
                        <Spinner {...spinnerStyles} />
                    </>
                ) : childrenWithIcon}
            </StyledBadge>
        );
    }

    return (
        <StyledBadge
            onClick={onClick}
            ref={ref as React.MutableRefObject<HTMLSpanElement>}
            className={className}
            {...styles}
            data-test="badge"
        >
            {loading ? (
                <>
                    Loading
                    <Spinner {...spinnerStyles} />
                </>
            ) : childrenWithIcon }
        </StyledBadge>
    );
}

export default React.forwardRef<unknown, BadgeProps>(Badge);