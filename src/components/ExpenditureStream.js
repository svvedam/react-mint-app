import React, { Component } from 'react';
//import {Table} from 'reactstrap';
class ExpenditureStream extends Component {
// state ={
//   transactions:transactions
// }
//     expenditureByCategory(){
        
//     }
    
    render() { 
        // const {
        // transactions
        // }= this.props
      
        return ( <React.Fragment>
            <div className="container">
              <div className="row">
              {this.props.transactions.map(transaction => {
                  return (
                    <tr>
                      <td>{transaction.transaction_id}</td>
                      <td>{transaction.name}</td>
                      <td>{transaction.official_name}</td>
                      <td>{transaction.subtype}</td>
                      <td>{transaction.type}</td>
                    </tr>
                  );
                })}
              </div>
            </div>
          </React.Fragment> );
    }
}
 
export default ExpenditureStream;