/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/logo.png';
import { useEffect, useRef } from 'react';


export default function IframeLab() {

  return (
    
    <div className="embed-container" style={{
        width: '100%',
        height: '60vh',
        marginBottom: '4vh'
    }} >
        <iframe style={{width: '100%',
height: '-webkit-fill-available'}} src="https://laboratorios.vercel.app/valvula-neumatica" frameborder="0" allowfullscreen></iframe>
    </div>
  );
}
