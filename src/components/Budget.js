import React, { Component } from "react";
import "../css/Budget.css";



class Budget extends Component {
  render() {
        const budget ={
            "incomeStreams":[
                {
                    "name":"paycheck",
                    "amount":2000,
                    "frequency":2,
                },
            ],

            "expenses":[
                {
                    "name":"Mortgage",
                    "amount":2000,
                },
                {
                    "name":"Internet",
                    "amount":60,
                },
                {
                    "name":"Phone",
                    "amount":120,
                },
                {
                    "name":"Liquor",
                    "amount":400,
                },
            ]
        }

    return (
      <div className="Budget">
        <h1>Budget</h1>
        <div>
          <h2>Income Streams</h2>
          <table>
              <thead>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Frequency</th>
              </thead>
              <tbody>
                  <tr>
                      <td>PayCheck</td>
                      <td>$2000</td>
                      <td>2</td>
                  </tr>
              </tbody>
          </table>
        </div>
        <div>
            <h2>Expenses</h2>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Amount</th>
                </thead>
            
            <tbody>
                <tr>
                    <td>Mortgage</td>
                    <td>$1300</td>
                </tr>
                <tr>
                    <td>Internet</td>
                    <td>$60</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>$120</td>
                </tr>
                <tr>
                    <td>Liquor</td>
                    <td>$400</td>
                </tr>
            </tbody>
            </table>
        </div>
        
      </div>
    );
  }
}

export default Budget;
