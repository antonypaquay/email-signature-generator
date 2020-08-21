import React from 'react';
import './index.scss';
import Facebook from './assets/img/facebook.png';
import Linkedin from './assets/img/linkedin.png';



const Social = {
    'listStyle': 'none',
    'padding': '0',
    'margin': '0 8px 0 0',
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'space-between',
    'alignItems': 'center',
    'width': '60px'
}

const Template = ({ firstName, lastName, position, phone }) => {
    return (
        <div className="email">
            <table>
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <img style={{ 'display': 'block', 'width': '65px', 'height': 'auto' }} src="https://www.seekandcare.com/t_theme_seekandcare/static/src/img/logo-colors-square-64px@2x.png" alt="Logo SeekandCare" />
                        </td>
                        <td colSpan="8">
                            <h1 style={{ 'fontSize': '1.25rem', 'color': '#3C3C46', 'marginBottom': '8px' }}>{firstName} {lastName}<span style={{ 'display': 'block', 'fontWeight': '500', 'fontSize': '1rem', 'fontStyle': 'italic' }}>{position}</span></h1>
                            <p style={{ 'margin': '4px 0', 'fontSize': '0.875rem' }}>
                                Email: <a style={{ 'fontWeight': '500', 'fontSize': '0.875rem', 'color': '#508BAF' }} href={`mailto:${firstName.toLowerCase()}.${lastName.toLowerCase()}@seekandcare.com`}>{firstName.toLowerCase()}.{lastName.toLowerCase()}@seekandcare.com</a>
                            </p>
                            <p style={{ 'margin': '4px 0', 'fontSize': '0.875rem' }}>
                                Phone: <a style={{ 'fontWeight': '500', 'fontSize': '0.875rem', 'color': '#508BAF' }} href={`${phone}`}>{phone}</a>
                            </p>
                            <address style={{ 'fontSize': '0.875rem', 'color': '#3C3C46', 'marginBottom': '4px' }}>
                                Rue de l'industrie, 20 1400 Nivelles Belgique
                            </address>
                            <div style={{ 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'flex-start', 'alignItems': 'center' }}>
                                <ul style={Social}>
                                    <li style={{ 'backgroundColor': '#C8DDE9', 'padding': '8px', 'borderRadius': '20px' }}>
                                        <a style={{ 'display': 'block', 'width': '100%', 'height': '100%' }} href="https://www.facebook.com/seekandcarecom/">
                                            <img style={{ 'display': 'block', 'width': '12px', 'height': 'auto' }} src={Facebook} alt="Facebook" />
                                        </a>
                                    </li>
                                    <li style={{ 'backgroundColor': '#C8DDE9', 'padding': '8px', 'borderRadius': '20px' }}>
                                        <a style={{ 'display': 'block', 'width': '100%', 'height': '100%' }} href="https://www.linkedin.com/company/seek-care/">
                                            <img style={{ 'display': 'block', 'width': '12px', 'height': 'auto' }} src={Linkedin} alt="Linkedin" />
                                        </a>
                                    </li>
                                </ul>
                                <a style={{ 'fontWeight': '500', 'fontSize': '0.875rem', 'color': '#508BAF' }} href="https://seekandcare.com">https://seekandcare.com</a>
                            </div>
                            <small style={{ 'fontSize': '0.75rem' }}>AP Solutions <span>VAT: BE0716802977</span></small>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Template;