import React, { Component } from 'react';

export class Portal extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 text-black">

                        <div class="px-5 ms-xl-4 mb-4 d-flex justify-content-center">
                           
                            <img src={" https://www.axsistec.com/web/images/logo.png"}
                                alt="Login image" class="mb-5"
                                style={{ width: '140px !important', heigth: '50px !important' }} />
                        </div>

                        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                            <form style={{ width: '23rem'}}>

                                <h3 class="fw-normal mb-3 pb-3" style={{ letterspacing: '1px', textAlign: 'center'}}>Log in</h3>

                                <div class="form-outline mb-4">
                                    <label class="form-label" for="form2Example18">Usuario</label>
                                    <input type="text" id="form2Example18" class="form-control form-control-lg" />
                                </div>

                                <div class="form-outline mb-4">
                                    <label class="form-label" for="form2Example28">Contraseña</label>
                                    <input type="password" id="form2Example28" class="form-control form-control-lg" />
                                </div>
                                

                                <div class="pt-1 mb-4">
                                    <a href="/home" class="btn btn-info btn-lg btn-block" type="button">Iniciar sesión</a>
                                </div>
                                {/*
                                <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">¿Olvidó su contraseña?</a></p>
                                <p>¿No tienes una cuenta? <a href="#!" class="link-info">Regístrate</a></p>
                                */}
                            </form>

                        </div>

                    </div>
                    <div class="col-sm-6 px-0 d-none d-sm-block">
                        <img src={"https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            alt="Login image" class="w-100 vh-100"
                            style={{ objectFit: 'cover', objectPosition: 'left'}} />
      
                    </div>
                </div>
            </div>

        );
    }
}
