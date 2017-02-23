import { connect } from 'react-redux';
import { increment, decrement } from '../actions';
import Count from '../components/Count.jsx';

let mapStateToProps = (state) => {
    return {count: state};
};

let mapDispatchToProps = (dispatch) => {
    return {
        onInc: () => {
            dispatch(increment())
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