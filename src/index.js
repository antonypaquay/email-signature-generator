import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Template from './Template';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Robert',
      lastName: 'Schuman',
      position: 'Job Position',
      phone: '+32456789123',
      generatedEmail: null
    }
  }

  componentDidMount() {
    const getFirstName = localStorage.getItem('firstName');
    const getLastName = localStorage.getItem('lastName');
    const getPosition = localStorage.getItem('position');
    const getPhone = localStorage.getItem('phone');
    const getGenerateEmail = localStorage.getItem('generatedEmail');

    console.log(getPhone);

    if (getGenerateEmail) {
      this.setState({
        firstName: getFirstName !== null ? getFirstName : this.state.firstName,
        lastName: getLastName !== null ? getLastName : this.state.lastName,
        position: getPosition !== null ? getPosition : this.state.position,
        phone: getPhone !== null ? getPhone : this.state.phone,
        generatedEmail: getGenerateEmail
      })
    }
  }

  onChange(e) {
    const fieldText = e.target.value;
    const fieldId = e.target.id;

    switch(fieldId) {
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
        this.setState({
          phone: fieldText
        })
        break;
    }
    localStorage.setItem(fieldId, fieldText);
  }

  generateEmail() {
    const generatedEmail = document.getElementsByClassName('email')[0].innerHTML;
    this.setState({
      generatedEmail
    })
    localStorage.setItem('generatedEmail', generatedEmail);
  }

  copyCode() {
    const copyEmailCode = document.getElementById('generated--email'),
          copyBtn = document.querySelector('#copy');

    if(copyEmailCode.value !== ''){
      copyEmailCode.select();
      copyEmailCode.setSelectionRange(0, 99999);
      document.execCommand("copy", false);
      copyBtn.innerHTML = 'Copied!';
    }
  }

  render() {
    const {firstName, lastName, position, phone} = this.state;
    return (
      <Fragment>
        <div className="container">
          <div className="block">
            <h1>Email signature Generator</h1>
            <p>Change the information below and copy / paste the generated code</p>
            <form autoComplete="off" onChange={() => { this.generateEmail() }}>
              <div className="form__elt">
                <label htmlFor="name">First name *</label>
                <input require="true" onChange={(e) => { this.onChange(e) }} type="text" id="firstName" placeholder={this.state.firstName} />
              </div>
              <div className="form__elt">
                <label htmlFor="name">Last name *</label>
                <input require="true" onChange={(e) => { this.onChange(e) }} type="text" id="lastName" placeholder="Schuman" />
              </div>
              <div className="form__elt">
                <label htmlFor="position">Position *</label>
                <input require="true" onChange={(e) => { this.onChange(e) }} type="text" id="position" placeholder="Job position" />
              </div>
              <div className="form__elt">
                <label htmlFor="phone">Phone number *</label>
                <input require="true" onChange={(e) => { this.onChange(e) }} type="tel" id="phone" placeholder="+32456789123" />
              </div>
            </form>

          </div>
          <div className="block">
            <Template
              firstName={firstName}
              lastName={lastName}
              position={position}
              phone={phone}
            />
          </div>
          <div className="block">
            <textarea id="generated--email" readOnly placeholder="Copy / paste this generated code" value={this.state.generatedEmail != null ? this.state.generatedEmail : ''} />
            <a id="copy" onClick={() => { this.copyCode() }} href="#copy">Copy</a>
          </div>
        </div>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));