import React, {Component} from "react";

class MultiFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state= {
            username: "",
            age: ""
        }
      //  this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    /** 
    handleChange(e) {
        const name = e.target.name;
        const value = e.targer.value
        this.setState({
            [name] : value
        });
    }
    */
    handleSubmit(e) {
        e.preventDefault();
        this.props.adduser(this.state);
        alert(`user name: ${this.state.username} and age: ${this.state.age}`);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={(e) => this.setState({username : e.target.value})}/>
                </label>
                <label>Age:
                    <input type="number" name="age" value={this.state.age} placeholder="Age" onChange={(e) => this.setState({age : e.target.value})}/>
                </label>
                <input type="submit"/>
            </form>
        );
    }
}

export default MultiFormComponent