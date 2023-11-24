import { Button, Card, CardActions, CardContent, Grid, TextField } from '@mui/material'
import React, { Component,useState } from 'react'
const valid='';
function Set()
{
    valid=useState(false);

}
export default class SimpleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            fullNameError:'true',
            fullNamehelpertext:'Please enter your full name',
            email: '',
            emaileError:'true',
            emailhelpertext:'Please enter your mail',
            password: '',
            passwordError:'true',
            passwordhelpertext:'Please enter your password',
            confirmPassword: '',
            confirmPasswordError:'true',
            confirmPasswordhelpertext:'Please enter your password again',
            
        };
    }

    handleFullname = (e) => {
        this.setState({ 
            fullName: e.target.value,
            fullNameError:false,
            fullNamehelpertext:'',
        });
    }
    handleEmail = (e) => {
        this.setState({
        email: e.target.value ,
        emailError:false,
        emailhelpertext:'',
    });
        
    }
    handlePass = (e) => {
        this.setState({ password: e.target.value ,
            passwordError:false,
            passwordhelpertext:'',
            
        });
    }
    handleCpass = (e) => {
        this.setState({ 
            confirmPassword: e.target.value,
            confirmPasswordError:false,
            confirmPasswordhelpertext:'',
         });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.fullName === ''){
            // return alert('You must fill full name');
            this.setState({
                fullNameError:true,
                fullNamehelpertext:'You must fill your full name'
            })
        } 
        if (this.state.email === ''){
            this.setState({
                emailError:true,
                emailhelpertext:'You must fill your email'
            })
            // return alert('You must fill email');
        } 
        if (this.state.password === ''){
            this.setState({
                passwordError:true,
                passwordhelpertext:'You must fill your password'
            })
            // return alert('You must fill password');
        } 
        if (this.state.confirmPassword === ''){
            this.setState({
                confirmPasswordError:true,
                confirmPasswordhelpertext:'You must fill your password again'
            })
            // return alert('You must fill confirmPassword');
        } 
        else {
            return alert('Submission Success');
        }
    }
    dis = () =>
    {
        
            if (this.state.password===this.state.confirmPassword && this.state.password!=='' && this.state.confirmPassword!=='')
            {
                
                    valid(true);
            }
            else{
                
                    valid(false);
            }
                

        
    }
    render() {
    return (
        <form onSubmit={this.handleSubmit} >
    <Card variant="outlined">
        <CardContent>
        <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
            <TextField 
            name="fullName" 
            value={this.state.fullName} 
            onChange={this.handleFullname} 
            variant="outlined" 
            label="Full Name"
            type='text'
            error={this.state.fullNameError}
            helperText={this.state.fullNamehelpertext} 
            />
            </Grid>
            <Grid item md={6} xs={12}>
            <TextField variant="outlined" label="Email Id" type='email' onChange={this.handleEmail} error={this.state.emailError}
            helperText={this.state.emailhelpertext} />
            </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ marginTop: '10px' }}>
            <Grid item md={6} xs={12}>
                <TextField  error={this.state.passwordError}
            helperText={this.state.passwordhelpertext} variant="outlined" onChange={this.handlePass} label="Create Password" type='password'/>
                </Grid>
                <Grid item md={6} xs={12}>
                <TextField error={this.state.confirmPasswordError}
            helperText={this.state.confirmPasswordhelpertext} variant="outlined" onChange={this.handleCpass} label="Re-Enter Password" type='password'/>
                </Grid>
        </Grid>
        </CardContent>
        <CardActions>
            <Button type="submit" size="small" disabled={valid} >Submit</Button>
        </CardActions>
    </Card>
    </form>
    )
  }
}