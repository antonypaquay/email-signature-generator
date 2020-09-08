import React from 'react';
import './index.scss';
import Facebook from './assets/img/facebook.png';
import Linkedin from './assets/img/linkedin.png';

const Template = ({ firstName, lastName, position, phone }) => {
    return (
        <div className="email">
            <table>
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <img width="65" height="65" style={{ 'display': 'block', 'maxWidth': '65px' }} src="https://www.seekandcare.com/t_theme_seekandcare/static/src/img/logo-colors-square-64px@2x.png" alt="Logo SeekandCare" />
                        </td>
                        <td colSpan="8">
                            <h1 style={{ 'fontSize': '20px', 'color': '#3C3C46', 'marginBottom': '8px' }}>{firstName} {lastName}<br /><span style={{ 'display': 'block', 'fontWeight': '500', 'fontSize': '16px', 'fontStyle': 'italic' }}>{position}</span></h1>
                            <p style={{ 'margin': '4px 0', 'fontSize': '0.875rem' }}>
                                Email: <a style={{ 'fontWeight': '500', 'fontSize': '14px', 'color': '#508BAF' }} href={`mailto:${firstName.toLowerCase()}.${lastName.toLowerCase()}@seekandcare.com`}>{firstName.toLowerCase()}.{lastName.toLowerCase()}@seekandcare.com</a>
                            </p>
                            <p style={{ 'margin': '4px 0', 'fontSize': '0.875rem' }}>
                                Phone: <a style={{ 'fontWeight': '500', 'fontSize': '14px', 'color': '#508BAF' }} href={`${phone}`}>{phone}</a>
                            </p>
                            <address style={{ 'fontSize': '14px', 'color': '#3C3C46', 'marginBottom': '4px' }}>
                                Rue de l'industrie, 20 1400 Nivelles Belgique
                            </address>
                            <table>
                                <tr>
                                    <td colSpan="1" width="12" height="12" style={{ 'backgroundColor': '#C8DDE9', 'borderRadius': '20px' }}>
                                        <a style={{ 'display': 'block', 'padding': '8px'}} href="https://www.facebook.com/seekandcarecom/">
                                            <img width="12" height="12" style={{ 'display': 'block', 'maxWidth': '12px' }} src={Facebook} alt="Facebook" />
                                        </a>
                                    </td>
                                    <td colSpan="1" width="12" height="12" style={{ 'backgroundColor': '#C8DDE9', 'borderRadius': '20px' }}>
                                        <a style={{ 'display': 'block', 'padding': '8px'}} href="https://www.linkedin.com/company/seek-care/">
                                            <img width="12" height="12" style={{ 'display': 'block', 'maxWidth': '12px' }} src={Linkedin} alt="Linkedin" />
                                        </a>
                                    </td>
                                    <td colSpan="6">
                                        <a style={{ 'fontWeight': '500', 'fontSize': '14px', 'color': '#508BAF', 'marginLeft': '4px' }} href="https://seekandcare.com">https://seekandcare.com</a>
                                    </td>
                                </tr>
                            </table>
                            <small style={{ 'fontSize': '12px' }}>AP Solutions <span>VAT: BE0716802977</span></small>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Template;