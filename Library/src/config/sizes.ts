export type ComponentSize = 'default' | 'large' | 'small';

export const sidePaddings: {[key in ComponentSize]: number} = {
    large: 32,
    default: 16,
    small: 16,
}

export const heights: {[key in ComponentSize]: number} = {
    large: 48,
    default: 40,
    small: 36,
}

export const width: {[key in ComponentSize]: number} = {
    large: 155,
    default: 120,
    small: 112,
}

export const fontSize: {[key in ComponentSize]: number} = {
    large: 16,
    default: 14,
    small: 14,
}