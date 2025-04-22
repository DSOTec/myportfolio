import React from 'react'
import html from '../assets/Techstack/html.png'
import css from '../assets/Techstack/css.png'
import js from '../assets/Techstack/js.png'
import bootstrap from '../assets/Techstack/bootstrap.png'
import tailwind from '../assets/Techstack/tailwind.png'
import reactjs from '../assets/Techstack/react.png'
import vs from '../assets/Techstack/VS.png'
import git from '../assets/Techstack/git.png'
import github from '../assets/Techstack/github.png'
import figma from '../assets/Techstack/figma.png'
import npm from '../assets/Techstack/npm.png'

const Technologies = () => {
  return (
   <>
    <div>
    <h3>Tech Stack</h3>
    <p>Technologies I've been working with recently</p>
        <div>
            <img src={html} title='HTML' />    
            <img src={css} title='CSS' /> 
            <img src={bootstrap} title='Bootstrap' /> 
            <img src={tailwind} title='Tailwind CSS' /> 
            <img src={js} tiFigmatle='JavaScript' /> 
            <img src={reactjs} title='React' />    
        </div>
    </div>
    <div>
    <h3>Tools</h3>
        <div>
        <img src={vs} title='Visual Studio Code' /> 
        <img src={git} title='Git' /> 
        <img src={github} title='Github' /> 
        <img src={figma} title='Figma' /> 
        <img src={npm} title='NPM' /> 
        </div>
    </div>

   </>
  )
}

export default Technologies