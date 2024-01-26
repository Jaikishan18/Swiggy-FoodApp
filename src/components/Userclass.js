   import React from "react"

   class Userclass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        
    }
    render(){
        const {name} = this.props
        const {count} = this.state
        return(
            <div>
                <h1>name:{name}</h1>
                <h2>Age: 22</h2>
                <h3>{count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    })
                }}>Count Increment</button>
            </div>
             
     
            
         )
    }
   }
    

 
export default Userclass