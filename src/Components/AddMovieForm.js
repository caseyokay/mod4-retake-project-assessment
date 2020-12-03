import React from 'react';

class AddMovieForm extends React.Component{
    state={
        title: "",
        synopsis: ""
    }

    changeHandler = (e) => {
        console.log("Changing", e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <form>
                <input type="text" placeholder="title" name="title" value={this.state.title}
                onChange={this.changeHandler}/>
                <input type="text" placeholder="synopsis" name="synopsis" value={this.state.synopsis}
                onChange={this.changeHandler}/>
            </form>
        )
    }
}

export default AddMovieForm;