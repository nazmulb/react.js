export const INCREMENT = 'INCERMENT';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const DECREMENT = 'DECREMENT';

export const increment = () => ({
    type: INCREMENT
});

export const incrementAsync = () => ({
    type: INCREMENT_ASYNC
});

export const decrement = () => ({
    type: DECREMENT
});