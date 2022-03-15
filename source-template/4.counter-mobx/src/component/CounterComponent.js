import React, { Component } from 'react';
import { Button, Box } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import CounterStore from '../store/CounterStore';

// 주입된 counterStore는 12번 라인의 props에서 꺼낸 것이다.
// props는 index.js에서 Provider에서 넘겨준 props와 같다.
@inject('counterStore')
@observer
class CounterComponent extends Component {

  render(){

    const { counterStore } = this.props;

    return(
      <div>
        <Button 
          onClick={() => counterStore.decrement()}
          variant='contained' color='primary' size='large'> - </Button>        
        
        <Box component='span' m={5}> {counterStore.count} </Box>
        
        <Button 
          onClick={() => counterStore.increment()}
          variant='contained' color='primary' size='large'> + </Button>
      </div>
    )
  }
}

export default CounterComponent;