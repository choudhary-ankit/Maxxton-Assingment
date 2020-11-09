import React, { Component } from 'react'
import Style from './Todoapp.module.css'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DateTimePicker from 'react-datetime-picker';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';



export default class Todoapp extends Component {
    constructor(props){
        super(props)
        this.state={
            add_task_dialog:false,
            title:'',
            time:'',
            discription:'',
            date:'',
            duedate:'',
            priority:'',
            tabvalue:0
        }
       
    }
    componentDidMount=()=>{
        this.setState({
            date:new Date()
        })
    }
    handleOpen=()=>{
        this.setState({
            add_task_dialog:true
        })
    }
    handleClose=()=>{
        this.setState({
            add_task_dialog:false
        })
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    render() {
        // console.log(this.state.title)
        // console.log(this.state.time)
        // console.log(this.state.discription)
        // console.log(this.state.date)
        // console.log(this.state.duedate)
        // console.log(this.state.priority)
        return (
            <div className={Style.body}>
                <div className={Style.body_frame}>
                    <div className={Style.logo_frame}>
                        <div>
                            <img src="./logo192.png" className={Style.app_logo} alt="logo" />
                            <Typography variant="h5">Every Thing is connected</Typography>
                        </div>
                        <div>
                            <Typography variant="h4">ToDo App</Typography>
                        </div>
                    </div>
                    <div className={Style.card_div}>
                        <Card className={Style.card}>
                            <Button color="inherit" onClick={this.handleOpen}>Add new Task</Button>
                        </Card>
                    </div>
                    <div>
                        <Dialog onClose={this.handleClose} open={this.state.add_task_dialog}>
                            <div className={Style.add_task_dialog}>
                                <div className={Style.dialog_title}>
                                    <DialogTitle  onClose={this.handleClose}>Add Task</DialogTitle>
                                    <IconButton  className={Style.closeButton} onClick={this.handleClose}>
                                        <CloseIcon />
                                    </IconButton>
                                </div>
                                <DialogContent dividers>
                                    <form  noValidate autoComplete="off" className={Style.form}>
                                        <div className={Style.input_arrng}>
                                            <div className={Style.lable_arrng}>
                                                <lable>Title:</lable>
                                                <TextField  label="Title" variant="outlined" name="title" onChange={this.handleChange}/>
                                            </div>
                                            <div className={Style.lable_arrng}>
                                                <lable>Time:</lable>
                                                <DateTimePicker
                                                    format="h:mm:ss:a"
                                                    value={this.state.date}
                                                    amPmAriaLabel="Select AM/PM"
                                                    disableCalendar="true"
                                                    disableClock="true"
                                                />
                                            </div>
                                        </div>
                                        <div className={Style.lable_arrng}>
                                            <lable>Discription:</lable>
                                            <TextField  label="Discription" variant="outlined" name="discription"style={{width:"550px"}} onChange={this.handleChange}/>
                                        </div>
                                        <div className={Style.input_arrng}>
                                            <div className={Style.lable_arrng}>
                                                <lable>Date:</lable>
                                                <DateTimePicker
                                                    format="dd-MM-y"
                                                    value={this.state.date}
                                                    // onChange={this.handleChange}
                                                    
                                                />
                                            </div>
                                            <div className={Style.lable_arrng}>
                                                <lable>Due Date:</lable>
                                                <DateTimePicker
                                                    format="dd-MM-y"
                                                    onChange={this.datechange=(e)=>{this.setState({duedate:e})}}
                                                    value={this.state.duedate}
                                                    onCalendarClose={this.ramu}
                                                />
                                            </div>
                                            <div className={Style.lable_arrng}>
                                                <lable>priority:</lable>
                                                <Select
                                                    value={this.state.priority}
                                                    onChange={this.handleChange}
                                                    variant='outlined'
                                                    style={{width:"150px", height:"30px"}}
                                                    name="priority"
                                                    >
                                                    <MenuItem value="">
                                                        <em>Select</em>
                                                    </MenuItem>
                                                    <MenuItem value="Low">Low</MenuItem>
                                                    <MenuItem value="High">High</MenuItem>
                                                </Select>
                                            </div>
                                        </div>
                                    </form>
                                </DialogContent>
                                <DialogActions>
                                    <Button autoFocus onClick={this.handleClose} color="primary">
                                        Save changes
                                    </Button>
                                </DialogActions>
                            </div>
                        </Dialog>
                    </div>
                </div>
                <div className={Style.body_searchbox}>
                    <input className={Style.searchbox} placeholder="Search Task"></input>
                    <select className={Style.selectbox}>
                        <option>Select</option>
                        <option>Low</option>
                        <option>High</option>
                    </select>
                </div>
                <div className={Style.tabbar}>
                    <AppBar position="static" style={{width:"100%", background:"#7274ff"}}>
                        <Tabs value={this.state.tabvalue} aria-label="simple tabs example">
                            <Tab label="All Task"  onClick={this.tabChange=()=>{this.setState({tabvalue:0})}}/>
                            <Tab label="Pending Task" onClick={this.tabChange=()=>{this.setState({tabvalue:1})}}/>
                            <Tab label="Complete Task" onClick={this.tabChange=()=>{this.setState({tabvalue:2})}}/>
                            
                        </Tabs>
                    </AppBar>
                </div>
                <div className={Style.contentbox}>
                    <div>
                        {
                            this.state.tabvalue==0?
                                <div>
                                    <Card className={Style.display_card}>
                                        <div className={Style.card_content}>
                                            <div>
                                                <lable>Title:</lable>
                                                <Typography variant="h4">Ankit</Typography>
                                            </div>
                                            <div>
                                                <lable>Discription:</lable>
                                                <Typography variant="body2">Ankit is a God boy</Typography>
                                            </div>
                                            <div className={Style.datepicker_arrng}>
                                                <div>
                                                    <lable>Submited Date:</lable>
                                                    <DateTimePicker
                                                        format="dd:MM:y"
                                                        value={this.state.date}
                                                        disableCalendar="true"
                                                    />
                                                </div>
                                                <div>
                                                    <lable>Submited Time:</lable>
                                                    <DateTimePicker
                                                        format="h:mm:a"
                                                        value={this.state.date}
                                                        amPmAriaLabel="Select AM/PM"
                                                        disableClock="true"
                                                        disableCalendar="true"
                                                    />
                                                </div>
                                                <div>
                                                    <lable>Due Date:</lable>
                                                    <DateTimePicker
                                                        format="dd:MM:y"
                                                        value={this.state.date}
                                                        disableCalendar="true"
                                                    />
                                                </div>
                                            </div>
                                            <div className={Style.iconbutton_arrng}>
                                                <div>
                                                    <IconButton>
                                                        <CloseIcon />
                                                    </IconButton>
                                                    <IconButton>
                                                        <CloseIcon />
                                                    </IconButton>
                                                    <IconButton>
                                                        <CloseIcon />
                                                    </IconButton>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            :
                            this.state.tabvalue==1?
                                <div>ankit</div>
                            :
                                <div>chy</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
