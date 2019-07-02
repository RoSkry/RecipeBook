import React from "react"
import ReactDOM from "react-dom";

class Recipe extends React.Component {
    state = { name: "", author: "", description: "", ingredients: [] };
    onNameChange(e) {
		this.setState({
			name: e.target.value
		});

    }
    onAuthorChange(e) {
		this.setState({
			author: e.target.value
        });
    }
        
    onDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }
    onIngredientsChange(e) {
        this.setState({
            ingredients: e.target.value
        });
    }

    
  render()
  {
      const[name,author,description,ingredients]=this.state;
      return(
<div>   
    <div>{name}</div>
    <div>{author}</div>
    <div>{description}</div>
    <div>{ingredients}</div>
<div>
<ul>

</ul>

</div>
</div>

      );
  }

}