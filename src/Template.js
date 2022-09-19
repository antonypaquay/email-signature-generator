import React from 'react';

const Template = ({ firstName, lastName, position, phone }) => {
    return (
        <table id="snc-template">
            <tbody>
                <tr>
                    <td colSpan="2" style={{'verticalAlign': 'top', 'paddingRight': '8px'}}>
                        <img width="32" height="32" style={{ 'display': 'block', 'maxWidth': '32px' }} src="https://www.seekandcare.com/theme_seekandcare/static/src/img/logos/square/logo-colors-square-64px@2x.png" alt="Logo SeekandCare" />
                    </td>
                    <td colSpan="8" style={{ 'lineHeight': '1' }}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <span style={{ 'fontSize': '15px', 'fontWeight': '600', 'color': '#061f38' }}>{firstName.charAt(0).toUpperCase() + firstName.slice(1) + ' ' + lastName.charAt(0).toUpperCase() + lastName.slice(1)}</span>
                                        <br />
                                        <span style={{ 'fontSize': '14px', 'fontWeight': '400', 'fontStyle': 'italic', 'color': '#445775' }} >{position}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <span style={{ 'fontSize': '11px', 'color': '#445775' }}>
                                            Email: <a style={{ 'fontWeight': '500', 'fontSize': '11px', 'color': '#3791eb' }} href={`mailto:${firstName.toLowerCase()}.${lastName.toLowerCase()}@seekandcare.com`}>{firstName.toLowerCase()}.{lastName.toLowerCase()}@seekandcare.com</a>
                                        </span>
                                        <br />
                                        <span style={{ 'fontSize': '11px', 'color': '#445775' }}>
                                            Mobile: <a style={{ 'fontWeight': '500', 'fontSize': '11px', 'color': '#3791eb' }} href={`tel:${phone}`}>{phone}</a>
                                        </span>
                                        <br />
                                        <span style={{ 'fontSize': '11px', 'color': '#445775' }}>
                                            Phone: <a style={{ 'fontWeight': '500', 'fontSize': '11px', 'color': '#3791eb' }} href="tel:+32490443088">+32 (0)490 44 30 88</a>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <span style={{ 'fontSize': '11px', 'fontWeight': '600', 'color': '#061f38' }}>AP Solutions</span>
                                        <br />
                                        <span style={{ 'fontSize': '10px', 'color': '#445775' }}>
                                            Chem. de la Vieille Cour 84, 1400 Nivelles
                                        </span>
                                        <br />
                                        <span style={{ 'fontSize': '10px', 'color': '#808db0' }}>
                                            VAT: BE0716802977
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan="1" width="10" height="10">
                                        <a style={{ 'fontWeight': '500', 'fontSize': '11px', 'color': '#3791eb' }} href="https://www.facebook.com/seekandcarecom/">
                                            Facebook
                                        </a>
                                    </td>
                                    <td colSpan="1" width="10" height="10">
                                        <a style={{ 'fontWeight': '500', 'fontSize': '11px', 'color': '#3791eb', 'marginLeft': '4px' }} href="https://www.linkedin.com/company/seek-care/">
                                            Linkedin
                                        </a>
                                    </td>
                                    <td colSpan="6">
                                        <a style={{ 'fontWeight': '500', 'fontSize': '11px', 'color': '#3791eb', 'marginLeft': '4px' }} href="https://www.seekandcare.com/">www.seekandcare.com</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Template;