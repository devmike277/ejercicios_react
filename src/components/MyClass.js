import React,{Component} from 'react';

class MyClass extends Component{

    // ClickMe2(){
    //     alert("click from class component")
    // }


    render(){

        return(
            <div>
                <h1 className="bg-primary text-white text-center">My email is: {this.props.email}</h1>
                {/* <button onClick={this.ClickMe2}>click me2</button> */}
                <button className="btn btn-primary" onClick={this.props.myclick}>click me2</button>
            </div>
        )
    }
}

export default MyClass;