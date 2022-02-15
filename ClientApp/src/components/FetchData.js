import React, { Component } from 'react';
import axios from 'axios';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { users: [], loading: true };
  }

  componentDidMount() {
   //   this.populateWeatherData();
      let APIurl = "https://localhost:44301/api/User";
      let headers = {
          'Content-Type': 'application/json',
          'Accept': "*/*"
      };
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.get(APIurl, headers)
          .then(response => {
              var self = this;
              if (response.status == 200) {
                  self.setState({ users: response.data, loading: false });
              }

          })
          .catch(error => console.error(error));
    }



    static renderUsersTable(users) {
        return (
          <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
              <tr>
                <th>Id</th>
                <th>Usuario</th>
                <th>Correo</th>
                <th>Sexo</th>
                <th>Estatus</th>
                <th>Acciones</th>

              </tr>
            </thead>
            <tbody>
                {users.map(user =>
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.userr}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.status ? "Activo": "Inactivo" }</td>
                        <td>
                            <button className="btn btn-blue-primary text-white btn-blue-primary mr-4" style={{ minWidth: "28px", background: 'cadetblue' }} target="_blank" data-toggle="tooltip" data-placement="top" data-original-title="Order form">
                                Eliminar
                            </button>
                            <button className="btn btn-blue-primary text-white btn-blue-primary" style={{ minWidth: "28px", background: 'cadetblue' }} target="_blank" data-toggle="tooltip" data-placement="top" data-original-title="Order form">
                                Editar
                            </button>
                        </td>
                </tr>
                  
              )}
            </tbody>
          </table>
        );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Cargando...</em></p>
        : FetchData.renderUsersTable(this.state.users);

    return (
      <div>
        <h1 id="tabelLabel" >Consulta de usuarios</h1>
        <p></p>
        {contents}
      </div>
    );
  }

 
}
