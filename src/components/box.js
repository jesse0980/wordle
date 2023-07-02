import React from 'react';
import {useState} from 'react';
import './box.css'

export default function Box(props){
    if(props.check=="in"){
        return(
            <div className='in'><h1>{props.lett.toUpperCase()}</h1></div>
        )
    }
    else if(props.check=="in-wrong"){
        return(
            <div className='in-wrong'><h1>{props.lett.toUpperCase()}</h1></div>
        )
        }
    else if(props.check=="out"){
        return(
            <div className='out'><h1>{props.lett.toUpperCase()}</h1></div>
        )
        }
    else{
        return(
            <div className='border'><h1>{props.lett.toUpperCase()}</h1></div>
        )
    }
}

