import { connect } from 'react-redux';
import Count from '../components/Count.jsx';

let mapStateToProps = (state) => {
    return {count: state};
};

let mapDispatchToProps = (dispatch) => {
    return {
        onInc: () => {
            dispatch({type: 'INCREMENT'})
        },
        onDec: () => {
            dispatch({type:'DECREMENT'})
        }
    }
};

let Counter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Count);

export default Counter;