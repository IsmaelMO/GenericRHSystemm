import React, { Component } from 'react';
import { Modal, Button, Toast, ToastBody, ToastHeader, ToastContainer } from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
toast.configure()

var newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

export class Register extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            id: 1,
            email: '',
            userr: '',
            passwordd: '',
            status: '',
            gender: ''
        }
        this.validateForm = this.validateForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt) {
        var self = this;
        const { name, value } = evt.target
        self.setState({ [name]: value })
    }

    validateForm(evt) {
        var self = this;

        evt.preventDefault();

        if (self.state.passwordd.includes(' ')) {
            toast.info('La contraseña no puede contener espacios en blanco.')
        } else if (!self.hasUpperCase(self.state.passwordd) || !self.hasLowerCase(self.state.passwordd) || !self.hasNumber(self.state.passwordd)) {
            toast.info('La contraseña debe ser una combinación de catacteres en mayúscula, minuscula, números y símbolos.')
        } else {
            self.submitForm(self.state)
        }
        console.log(self.state)

    }

    hasUpperCase(str) {
        return (/[A-Z]/.test(str));
    }

    hasLowerCase(str) {
        return (/[a-z]/.test(str));
    }

     hasNumber(myString) {
        return /\d/.test(myString);
    }

    submitForm(data) {
        var options = {
            data: data,
            headers: { "content-type": "application/json" }
        }
        axios.post('https://localhost:44301/api/User', options)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.error(error));
    }

    render() {
        
        return (
            <div className="container-fluid">
                <a href="/home" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Regresar
                </a>
                   

                <div className="" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Registrar usuario</h5>
                            </div>
                            <div className="modal-body">
                                <div className='modal-containter'>
                                    <form name='formData' onSubmit={this.validateForm}  >
                                        <div className='row'>
                                            <div className='col-12 mb-2 pl-5 pr-5'>
                                                <label className='lbl-form col-12 font-weight-bold'>Usuario</label>
                                                <input className='input-modal col-12' type="text" name="userr" onChange={this.handleChange} required />
                                            </div>
                                            <div className='col-12 mb-2 pl-5 pr-5'>
                                                <label className='lbl-form col-12 font-weight-bold'>Correo</label>
                                                <input className='input-modal col-12' type="email" name="email" onChange={this.handleChange} required />
                                            </div>
                                            <div className='col-12 mb-2 pl-5 pr-5'>
                                                <label className='lbl-form col-12 font-weight-bold'>Contraseña</label>
                                                <input className='input-modal col-12' type="text" name="passwordd" minLength="10" onChange={this.handleChange} required />
                                            </div>
                                            
                                            <div className='col-12 mb-2 pl-5 pr-5'>
                                                <label className='lbl-form col-12 font-weight-bold'>Estatus</label>
                                                <div className='d-flex flex-row justify-content-between'>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="status" value="true" onChange={this.handleChange} required />
                                                        <label className="form-check-label" >Activo</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="status" value="false" onChange={this.handleChange} required />
                                                        <label className="form-check-label" >Inactivo</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-12 mb-2 pl-5 pr-5'>
                                                <label className='lbl-form col-12 font-weight-bold'>Género</label>
                                                <div className='d-flex flex-row justify-content-between'>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="gender" value="Masculino" onChange={this.handleChange} required />
                                                        <label className="form-check-label" >Masculino</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="gender" value="Femenino" onChange={this.handleChange} required />
                                                        <label className="form-check-label" >Femenino</label>
                                                    </div>
                                                </div>

                                            </div>
                                           

                                        </div>
                                        <div className={"d-flex justify-content-center"}>
                                            <button type="submit" className="btn btn-primary" >Guardar </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
