import React from 'react'
import { FormControl, Typography,TextField, TextareaAutosize,Button,InputLabel,Divider   } from '@material-ui/core';
import * as TaskAction from '../../action/index'
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import Card from "../../components/card/card"
import './task.css'
class Task extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state={
            title:'',
            description:'',
            error:false
        }
    }

    onChange = (e) =>{
        const {target:{name,value}}=e
        if(name==='title'){
            if(this.onValidate(value))
                this.setState({error:true})
        }
        this.setState({[name]:value})
    }
    onValidate =(title) => {
        if(!title.length)
            return true
        else
            return false
}
    onSubmit=()=>{
        if(!this.onValidate(this.state.title))
        this.props.action.addTask({title:this.state.title,description:this.state.description})
        else {
            this.setState({error:true})
        }
    }
    render() {
        const {title,description,error} =this.state
        const {task}=this.props
        return(
            <>
                <Typography variant="h3" component="h3">
                    Add task
                </Typography>
                <FormControl>
                    <TextField name='title' value={title}
                               variant="outlined"
                               label={'title'}
                               helperText={error ? "Enter title": ''}
                               onChange={this.onChange} error={error}/>
                    <TextareaAutosize
                        name='description'
                        value={description}
                        onChange={this.onChange}
                        rowsMin={3}
                        rowsMax={4}
                    />
                    <Button variant="outlined" onClick={this.onSubmit}>Submit</Button>

            </FormControl>

                <div className='sub-task-wrappper'>
                    <Divider/>
                    {
                        task.lenght ? task.map((t,index)=>
                        <Card title={t.title} description={t.descrition}></Card>) :<Typography variant="h4">No Task found</Typography>
                    }
                </div>

            </>
        )
    }
}

const mapDispatchTostate=state=>{
    return {
        task:state.list.task
    }
}

const mapDispatchToProps=dispatch=>({
    action:bindActionCreators(TaskAction,dispatch)
})
export default connect(mapDispatchTostate,mapDispatchToProps)(Task)