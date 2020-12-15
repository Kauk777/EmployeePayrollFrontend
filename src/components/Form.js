import React, {Component} from 'react'
import Axios from 'axios'

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state= { 
            name: '',
            imgPath:'',
            gender:'',
            salary:0,
            department:'',
            startDate:'',
            notes:''
     }
        
    }

    handleNameChange = event => {
        this.setState({
            name:event.target.value
        })
    }

    handleImageChange = event => {
        this.setState({
            imgPath:event.target.value
        })
    }
    handleGenderChange = event => {
        this.setState({
            gender:event.target.value
        })
    }
    handleDepartmentChange = event => {
        this.setState({
            department:event.target.value
        })
    }
    handleSalaryChange = event => {
        this.setState({
            salary:event.target.value
        })
    }
    handleDateChange = event => {
        this.setState({
            startDate:event.target.value
        })
    }
    handleNoteChange = event => {
        this.setState({
            notes:event.target.value
        })
    }
    handleFormSubmit = (event) => {
        //alert(`${this.state.name} ${this.state.gender}`)
        Axios.post('http://localhost:8080/employee/add', this.state)
        .then(res=>{
            console.log(res);
            alert(res.data.message);
        })
        .catch(err=> {
            console.log(err);
            alert(err);
            event.preventDefault();
        })   
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                <table>
                    <tr>
                        <td><label>Name</label></td>
                        <td><input type="text" value={this.state.name}  onChange={this.handleNameChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Image Path</label></td>
                        <td><input type="text" value={this.state.imgPath}  onChange={this.handleImageChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Gender</label></td>
                        <td><input type="text" value={this.state.gender}  onChange={this.handleGenderChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Department</label></td>
                        <td><input type="text" value={this.state.department}  onChange={this.handleDepartmentChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Salary</label></td>
                        <td><input type="number" value={this.state.salary}  onChange={this.handleSalaryChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Start Date</label></td>
                        <td><input type="date" value={this.state.startDate}  onChange={this.handleDateChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Notes</label></td>
                        <td><input type="text" value={this.state.notes}  onChange={this.handleNoteChange} /></td>
                    </tr>
                    <tr>
                        <td><button type="submit">Submit</button></td>
                    </tr>
                </table>
                </form>
            </div>
        )
    }

}

export default Form

