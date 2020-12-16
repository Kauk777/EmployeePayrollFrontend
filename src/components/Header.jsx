import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
               <header>
                   <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                       <div>
                           <a className="navbar-brand">Employee Payroll App</a>
                       </div>
                   </nav>
               </header>
                
            </div>
        );
    }
}

export default Header
