import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';


export const StyledLink = styled(Link)(
    {
        textDecoration:"none",
        color:"#EE82EE",
        "&:focus, &:hover, &:visited, &:link, &:active":{
            textDecoration:"none",
            color:"#EE82EE"
        }
    }
)

;