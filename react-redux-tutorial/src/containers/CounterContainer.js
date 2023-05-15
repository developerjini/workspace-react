import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// const default connect(
//   state => ({
//     number: state.counter.number
//   }),
//   dispatch => ({
//     increase:() => dispatch(increase()),
//     decrease:() => dispatch(decrease()),
//   }),
// )(CounterContainer);

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchToProps = { increase, decrease };

// bindActionCreators({increase, decrease }), dispatch);

// increase: () => {
//   dispatch(increase());
// },
// decrease: () => {
//   dispatch(decrease());
// },

// });

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
