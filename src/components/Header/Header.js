import React from 'react'
import classes from './Header.module.css'
import image from '../../assets/header_logo.png'

function Header() {
    return(
        <div className = {classes.header}>
                <img src = {image} className = {classes.logo} alt = "healthcare-img"/>
            
                <h2 className = {classes['app-name']}>React Healthcare</h2>
             
                    <button className = {classes['profile-image']}></button>
               
            
        </div>
    )
}

export default Header