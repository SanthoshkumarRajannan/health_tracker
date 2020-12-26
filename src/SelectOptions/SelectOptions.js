import React,{Component} from 'react';
import './SelectOption.css'
class SelectOption extends Component{

    state={
      
        options: []
    }

   onFormSubmit = (e) => {
        e.preventDefault();
      
        const option = e.target.elements.option.value;
      
        if (option) {
          this.state.options.push(option);
          e.target.elements.option.value = '';
         
        }
        console.log("hello",this.state.options)
        this.setState({sk:"sandy"})
      };
      onRemoveAll = () => {
       
       this.setState({options : []})
       
      };
  
 render(){
    return(
        <div id="SelectOption">
      
             <form onSubmit={this.onFormSubmit}>
        <input type="text" name="option" />
        <button>Add </button>
      
        <button onClick={this.onRemoveAll}>Remove All</button>
      </form>
      <ol>
        {
          this.state.options.map((option,index) => <li key={index}>{option}</li>)
        }
      </ol>
      
        </div>
    );
 }
        
    
}
export default SelectOption;