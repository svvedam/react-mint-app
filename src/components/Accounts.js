import React, { Component } from "react";
//import TableStyle from '../css/Accounts.css';
import {Table} from 'reactstrap';
class Accounts extends Component {
  render() {
    // const {
    //   account_id,
    //   //balances, //available, current,limit
    //   name,
    //   official_name,
    //   subtype,
    //   type
    // } = this.props;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <Table striped>
              <thead>
                <tr>
                  <th scope="col">Account_id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Official name</th>
                  <th scope="col">Sub type</th>
                  <th scope="col">Type</th>
                </tr>
              </thead>
              <tbody>
                {this.props.accounts.map(account => {
                  return (
                    <tr>
                      
                      <td>{account.account_id}</td>
                      <td>{account.name}</td>
                      <td>{account.official_name}</td>
                      <td>{account.subtype}</td>
                      <td>{account.type}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Accounts;
