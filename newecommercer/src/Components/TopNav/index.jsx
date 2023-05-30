import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Components/Logo";
import SearchInput from "../../Components/PesquisaIcon";
import { AccountCircle, ShoppingBag} from '@mui/icons-material';
import './topNav.css'
import { IconButton } from "@mui/material";

export function Cabecalho(){
    return(
       <>
        <div className="topNav">
            <Logo/>
            <SearchInput/>
            <div className="btn">
                <IconButton>
                    <AccountCircle style={{ fontSize: '40px' }}/>
                </IconButton>
                <IconButton>
                    <ShoppingBag style={{ fontSize: '40px' }}/>
                </IconButton>
            </div>
        </div>
       </>
    )
}