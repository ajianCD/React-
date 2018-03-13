/*
* 类组件
* */
class HelloMessage extends  React.Component
{
    render(){
        return <div>hello,{this.props.name}</div>
    }
}

ReactDOM.render(<HelloMessage name="John" />, document.getElementById('main-container'));