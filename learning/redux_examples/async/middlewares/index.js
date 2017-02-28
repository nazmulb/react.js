const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    console.log('prev state', store.getState());
    let result = next(action);
    console.log('new state', store.getState());
    console.groupEnd(action.type);

    return result;
};

export default logger;