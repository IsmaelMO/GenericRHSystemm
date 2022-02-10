import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { users: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
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

          </tr>
        </thead>
        <tbody>
            {users.map(user =>
                <tr key={user.intId}>
                    <td>{user.intId}</td>
                    <td>{user.strUserName}</td>
                    <td>{user.strEmail}</td>
                    <td>{user.strGender}</td>
                    <td>{user.boolStatus ? "Activo": "Inactivo" }</td>
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

  async populateWeatherData() {
    const response = await fetch('users');
    const data = await response.json();
      this.setState({ users: data, loading: false });
  }
}
