import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        
    }

  render () {
    return (
      <div>
            <h1>Bienvenido { }</h1>
            <p>Bienvenido al Sistema Generico RH de Axis TI</p>

            <div className="col-2 d-flex flex-column">
                <a href='/register' className="btn btn-primary mb-3" >Alta de usuarios</a>
                <a href='/fetch-data' className="btn btn-primary mb-3">Consultar usuarios</a>
            </div>
        
      </div>
    );
  }
}
