import React from 'react';
class Welcome extends React.Component {


    constructor(props) { 
        super(props);

        this.state = {
            welcomeMessage :'Hello'
        }  

        this.changeMessageHandler = this.changeMessageHandler.bind(this);
    }
    
    
    changeMessageHandler() {
        this.setState(prevState=>(
             { welcomeMessage : prevState.welcomeMessage=='Hello' ? 'Welcome' :'Hello'  }));
        
        }

    render()
    {
        return(

                <div>
                        <div> <h3>{this.state.welcomeMessage}</h3>, {this.props.name} </div>
                        <div> <button onClick={this.changeMessageHandler}> Change Message Handler </button>   </div>

                </div>

        )
    }
}

export default Welcome;