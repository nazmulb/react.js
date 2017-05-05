import { connect } from 'react-redux';
import { increment, incrementAsync, decrement } from '../actions';
import Count from '../components/Count.jsx';

let mapStateToProps = (state) => {
    return {count: state};
};

let mapDispatchToProps = (dispatch) => {
    return {
        onInc: () => {
            dispatch(increment())
        },
        onIncAsync: () => {
            dispatch(incrementAsync())
        },
        onDec: () => {
            dispatch(decrement())
        }
    }
};

let Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Count);

export default Counter;