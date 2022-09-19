import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Logo from './assets/img/logo.png';
import Template from './Template';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      position: '',
      phone: '',
      btnText: 'Copy'
    }
  }

  handleChange(e) {
    let fieldText = e.currentTarget.value;
    let fieldId = e.currentTarget.id;
    switch (fieldId) {
      case 'firstName':
        this.setState({
          firstName: fieldText
        })
        break;
      case 'lastName':
        this.setState({
          lastName: fieldText
        })
        break;
      case 'position':
        this.setState({
          position: fieldText
        })
        break;
      case 'phone':
        this.setState({
          phone: fieldText
        })
        break;
      default:
        break;
    }
  }


  copyCode() {

    this.setState({
      btnText: 'Copied!'
    });

    const selection = window.getSelection();
    const template = document.querySelector('#snc-template');

    if (selection.rangeCount > 0) {
      selection.removeAllRanges();
    }

    const range = document.createRange();
    range.selectNode(template);
    selection.addRange(range);

    // Execute 'copy', can't 'cut' in this case
    document.execCommand('copy');
  }

  render() {
    const { firstName, lastName, position, phone, btnText } = this.state;
    return (
      <Fragment>
        <div className="container">
          <img className="logo" src={Logo} alt="logo SNC" />
          <h1 className="title">Email Signature</h1>
          <p className="notice">Change the information below and copy / paste your signature</p>
          <div className="block">
            <form autoComplete="off">
              <div className="form__elt">
                <label htmlFor="name">First name*</label>
                <input require="true" onChange={(e) => this.handleChange(e)} type="text" id="firstName" value={firstName} placeholder="Robert" />
              </div>
              <div className="form__elt">
                <label htmlFor="name">Last name*</label>
                <input require="true" onChange={(e) => this.handleChange(e)} type="text" id="lastName" value={lastName} placeholder="Schuman" />
              </div>
              <div className="form__elt">
                <label htmlFor="position">Position*</label>
                <input require="true" onChange={(e) => this.handleChange(e)} type="text" id="position" value={position} placeholder="Business Developer" />
              </div>
              <div className="form__elt">
                <label htmlFor="phone">Phone number*</label>
                <input require="true" onChange={(e) => this.handleChange(e)} type="tel" id="phone" value={phone} placeholder="+32 (0)471 23 45 67" />
              </div>
            </form>
          </div>
          <div className="block block--template">
            <Template
              firstName={firstName.length > 0 ? firstName : 'Robert'}
              lastName={lastName.length > 0 ? lastName : 'Schuman'}
              position={position.length > 0 ? position : 'Business Developer'}
              phone={phone.length > 0 ? phone : '+32 (0)471 23 45 67'}
            />
          </div>
          <button id="copy" onClick={() => { this.copyCode() }}>{btnText}</button>
        </div>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));