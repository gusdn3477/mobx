import { action, observable, makeObservable } from 'mobx';

class CounterStore {

    // mobX 6부터 추가된 부분.
    constructor(){
        makeObservable(this);
    }
    @observable
    _count = 5;

    get count(){
        return this._count;
    }

    @action
    increment(){
        this._count ++;
    }

    @action
    decrement(){
        this._count --;
    }

}

export default new CounterStore();