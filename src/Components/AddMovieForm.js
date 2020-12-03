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

    localClickHandler = (e) => {
        e.preventDefault()
        console.log("Submitting", this.state)
        let submitHandler = this.props.submitHandler
        submitHandler(this.state)
    }

    render(){
        return(
            <form onSubmit={this.localClickHandler}>
                <input type="text" placeholder="title" name="title" value={this.state.title}
                onChange={this.changeHandler}/>
                <input type="text" placeholder="synopsis" name="synopsis" value={this.state.synopsis}
                onChange={this.changeHandler}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default AddMovieForm;