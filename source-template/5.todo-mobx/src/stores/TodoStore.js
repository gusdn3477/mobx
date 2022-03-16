import { observable, action, computed, makeObservable, toJS} from 'mobx';

class TodoStore {

    constructor(){
        makeObservable(this);
    }

    @observable
    _todo = {} // id, title, date

    @observable
    _todos = [];

    get todo(){
        return this._todo;
    }

    // observable 데이터가 변경되지 않으면 최종 캐싱 데이터를 반환해준다.
    @computed
    get todos(){
        // 이렇게 작성하면 배열 안에 @observer 객체가 들어감.
        // return this._todos ? this._todos.slice() : [];

        //toJs 라이브러리를 활용해서 배열 안에도 자바스크립트 배열이 들어가게끔 함.
        return toJS(this._todos);
    }

    @action
    setTodoProps(name, value){
        this._todo = {
            ...this.todo,
            [name] : value
        }
    }

    @action
    addTodo(todo){
        this._todos.push(todo);
        // 추가되면 입력 창이 clear 되도록 임의적으로 추가함
        this._todo = {};
    }

    @action
    selectedTodo(todo){
        this._todo = todo;
    }

    @action
    updateTodo(){
        let foundTodo = this._todos.find( todo => todo.id === this._todo.id);
        foundTodo.title = this._todo.title;
        foundTodo.date = this._todo.date;
        
        this._todo = {};
    }

    @action
    removeTodo(){
        let index = this._todos.findIndex( todo => todo.id === this._todo.id);
        if(index > -1){
            this._todos.splice(index, 1);
        }

        this._todo = {};
    }
}

export default new TodoStore();