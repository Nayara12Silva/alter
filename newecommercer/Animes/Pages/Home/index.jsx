import React, { useEffect ,useState} from "react";
// import { Link } from "react-router-dom";
import SearchInput from "../../Components/SearchInput/search.jsx";
import { responsiveFontSizes } from "@mui/material";
const api = 'https://kitsu.io/api/edge/'

export function HomeAnimes(){
    const [animes, setAnimes] = useState({}); //inicia como um obj vazio
    const [text, setText] = useState('');

    useEffect(()=>{
        if(text){
        fetch(`${api}anime?filter[text]=${text}`)// buscar por meio do nome do anime na api kitsu
        .then((response) => response.json())
        .then((response) => {
            setAnimes(response);
        // console.log(response)
        });
        }
    },[text])
    return(
        <div className="content">
            <h1>Animes</h1>
            <SearchInput value={text} onChange={(textoDigitado)=> setText(textoDigitado)}/>

            {animes.data && (
                <ul>
                    {animes.data.map((item)=>(
                        <li key={item.id}>
                            {item.attributes.canonicalTitle}
                        </li>
                    ))}
                </ul>
                
            )}
        </div>
        )}