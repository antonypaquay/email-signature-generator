import React from 'react';
import './index.scss';

const Template = ({ firstName, lastName, position, phone }) => {
    console.log(firstName);
    return (
        <div className="email">
            <table>
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <img width="65" height="65" style={{ 'display': 'block', 'maxWidth': '65px' }} src="https://www.seekandcare.com/theme_seekandcare/static/src/img/logos/square/logo-colors-square-64px@2x.png" alt="Logo SeekandCare" />
                        </td>
                        <td colSpan="8">
                            <h1 style={{ 'fontSize': '20px', 'color': '#283e76', 'marginBottom': '8px' }}>{firstName + ' ' + lastName}<br /><span style={{ 'display': 'block', 'fontWeight': '500', 'fontSize': '16px', 'fontStyle': 'italic' }} >{position}</span></h1>
                            <p style={{ 'margin': '4px 0', 'fontSize': '0.875rem', 'color': '#808db0' }}>
                                Email: <a style={{ 'fontWeight': '500', 'fontSize': '14px', 'color': '#3791eb' }} href={`mailto:${firstName.toLowerCase()}.${lastName.toLowerCase()}@seekandcare.com`}>{firstName.toLowerCase()}.{lastName.toLowerCase()}@seekandcare.com</a>
                            </p>
                            <p style={{ 'margin': '4px 0', 'fontSize': '0.875rem', 'color': '#808db0' }}>
                                M: <a style={{ 'fontWeight': '500', 'fontSize': '14px', 'color': '#3791eb' }} href={`tel:+32${phone}`}>+32 (0){phone}</a>
                            </p>
                            <p style={{ 'margin': '4px 0', 'fontSize': '0.875rem', 'color': '#808db0' }}>
                                T: <a style={{ 'fontWeight': '500', 'fontSize': '14px', 'color': '#3791eb' }} href="tel:+3267883658">+32 (0)67 88 36 58</a>
                            </p>
                            <address style={{ 'fontSize': '14px', 'color': '#283e76', 'marginBottom': '4px' }}>
                                Rue de l'industrie, 20 1400 Nivelles Belgique
                            </address>
                            <table>
                                <tr>
                                    <td colSpan="1" width="10" height="10">
                                        <a style={{ 'fontWeight': '500', 'fontSize': '14px', 'color': '#3791eb'}} href="https://www.facebook.com/seekandcarecom/">
                                            Facebook
                                        </a>
                                    </td>
                                    <td colSpan="1" width="10" height="10">
                                        <a style={{ 'fontWeight': '500', 'fontSize': '14px', 'color': '#3791eb', 'marginLeft': '4px' }} href="https://www.linkedin.com/company/seek-care/">
                                            Linkedin
                                        </a>
                                    </td>
                                    <td colSpan="6">
                                        <a style={{ 'fontWeight': '500', 'fontSize': '14px', 'color': '#3791eb', 'marginLeft': '4px' }} href="https://www.seekandcare.com/">www.seekandcare.com/</a>
                                    </td>
                                </tr>
                            </table>
                            <small style={{ 'fontSize': '12px', 'color': '#808db0' }}>AP Solutions <span>VAT: BE0716802977</span></small>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Template;