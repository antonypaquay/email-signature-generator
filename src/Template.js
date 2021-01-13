import React from 'react';
import './index.scss';

const Template = ({ firstName, lastName, position, phone }) => {
    return (
        <div className="email">
            <table>
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <img width="65" height="65" style={{ 'display': 'block', 'maxWidth': '65px' }} src="https://www.seekandcare.com/theme_snc/static/src/img/emails/logo.png" alt="Logo SeekandCare" />
                        </td>
                        <td colSpan="8">
                            <h1 style={{ 'fontSize': '20px', 'color': '#283e76', 'marginBottom': '8px' }}>{firstName} {lastName}<br /><span style={{ 'display': 'block', 'fontWeight': '500', 'fontSize': '16px', 'fontStyle': 'italic' }}>{position}</span></h1>
                            <p style={{ 'margin': '4px 0', 'fontSize': '0.875rem', 'color': '#808db0' }}>
                                Email: <a style={{ 'fontWeight': '500', 'fontSize': '14px', 'color': '#3791eb' }} href={`mailto:${firstName.toLowerCase()}.${lastName.toLowerCase()}@seekandcare.com`}>{firstName.toLowerCase()}.{lastName.toLowerCase()}@seekandcare.com</a>
                            </p>
                            <p style={{ 'margin': '4px 0', 'fontSize': '0.875rem', 'color': '#808db0' }}>
                                Phone: <a style={{ 'fontWeight': '500', 'fontSize': '14px', 'color': '#3791eb' }} href={`${phone}`}>{phone}</a>
                            </p>
                            <address style={{ 'fontSize': '14px', 'color': '#283e76', 'marginBottom': '4px' }}>
                                Rue de l'industrie, 20 1400 Nivelles Belgique
                            </address>
                            <table>
                                <tr>
                                    <td colSpan="1" width="10" height="10" style={{ 'backgroundColor': '#283e76', 'borderRadius': '20px' }}>
                                        <a style={{ 'display': 'block', 'padding': '6px'}} href="https://www.facebook.com/seekandcarecom/">
                                            <img width="10" height="10" style={{ 'display': 'block', 'maxWidth': '12px' }} src="https://www.seekandcare.com/theme_snc/static/src/img/emails/facebook.png" alt="Facebook" />
                                        </a>
                                    </td>
                                    <td colSpan="1" width="10" height="10" style={{ 'backgroundColor': '#283e76', 'borderRadius': '20px' }}>
                                        <a style={{ 'display': 'block', 'padding': '6px'}} href="https://www.linkedin.com/company/seek-care/">
                                            <img width="10" height="10" style={{ 'display': 'block', 'maxWidth': '12px' }} src="https://www.seekandcare.com/theme_snc/static/src/img/emails/linkedin.png" alt="Linkedin" />
                                        </a>
                                    </td>
                                    <td colSpan="6">
                                        <a style={{ 'fontWeight': '500', 'fontSize': '14px', 'color': '#3791eb', 'marginLeft': '4px' }} href="https://www.seekandcare.com/">https://www.seekandcare.com/</a>
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