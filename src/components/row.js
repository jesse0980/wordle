import React from 'react';
import {useState} from 'react';
import Box from './box.js'
import './row.css'

export default function Row(props){
    var dict = {}

    for(let i = 0; i < props.target.length; i++){
        if(props.target[i] in dict){
            dict[props.target[i]]++;
        }
        else{
            dict[props.target[i]] = 1;
        }
    }
    console.log(dict);


    const [word, setWord] = useState();
    const [used, setUsed] = useState();
    console.log(props.ch);
    let boxComps = [];
    if(props.ch === true){
        for(let i = 0; i < 5; i++){
            if(i < props.word.length){
                if(props.target.indexOf(props.word[i]) > -1 && (dict[props.word[i]] > 0 || props.word[i] == props.target[i])){
                    dict[props.word[i]]--;
                    if(props.word[i] == props.target[i]){
                        boxComps.push(<Box check="in" lett={props.word[i]}/>);
                    }
                    else{
                        boxComps.push(<Box check="in-wrong" lett={props.word[i]}/>);
                    }
                }
                else{
                    boxComps.push(<Box check="out" lett={props.word[i]}/>);
                }
            }
            else{
                boxComps.push(<Box check="none" lett={''}/>)
            }
        }
    }
    else{
        for(let i = 0; i < 5; i++){
        if(i < props.word.length){
                boxComps.push(<Box check="border" lett={props.word[i]}/>);
        }
        else{
            boxComps.push(<Box check="none" lett={''}/>)
        }
    }
}
    return(
        <div className='row'>
            {boxComps}
            
        </div>
    )
}