import React from "react";

class ClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            change:false
        }
    }
    componentDidUpdate() {
        console.log('F-1 Component Did Update');
        if (this.state.counter === false && this.state.showCounting) {
            this.setState({
                change: true,
            });
        }
    }

    HideShow =()=> {
        if(this.state.change===false){
            this.setState({
                change:true,
            })
        }
        else{
            this.setState({
                change:false,
            })
        }
    
    }
    render() {
        return (
            <div className="box2">
                <button onClick={this.HideShow}>To see Styling Using Functional Component</button>
                {
                    this.state.change?
                    <div className="compBox c2">
                        <h1>This is created using Class Component</h1>
                        <p className="ext">This is done using External CSS</p>
                        <p style={{ color: 'blue' }}>This is done using Inline CSS</p>
                    </div>:null
                }

            </div>

        )
    }
}

export default ClassComponent;