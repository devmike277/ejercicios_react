import React, {Component} from 'react';


class Name extends Component{

    constructor(){
        super()
        this.state = {
            occupation:"developerrrr"
        }
    }
    //first way
    // clickedMe(){
    //     this.setState({
    //         occupation:"DEVOPS"
    //     })
    // }

    clickedMe2 = ()=>{
        this.setState({
            //occupation:"DEVOPS2"
            occupation: this.state.occupation === "developerrrr" ? "DEVOPs" : "developerrrr"
        })
    }

    render(){
        return(
            <div>
                <h1 className="bg-primary text-white text-center">{this.state.occupation}</h1>
                {/*firs way */}
                {/* <button onClick={()=>this.clickedMe()} className="btn btn-success">Change Text</button> */}
                <button onClick={this.clickedMe2} className="btn btn-success">Change Text</button>
            </div>
        )
    }
}
export default Name;