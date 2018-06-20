import React from 'react';
import Typist from 'react-typist';         

const Typer = () => (
    <Typist cursor={{show: false}}>
        <span className="h1-responsive font-weight-bold mt-sm-5">Hey I'm Chris,<br/></span>                  
        <Typist.Delay ms={1500} />
        <span className="h1-responsive font-weight-bold mt-sm-5">I like to build things.</span>
        <Typist.Backspace count={21} delay={1500}  />
        <span className="h1-responsive font-weight-bold mt-sm-5">build web applications.</span>
        <Typist.Backspace count={23} delay={1500}  />
        <span className="h1-responsive font-weight-bold mt-sm-5">create user interfaces.</span>   
        <Typist.Backspace count={23} delay={1500}  />
        <span className="h1-responsive font-weight-bold mt-sm-5">love React/Redux.</span>  
        <Typist.Backspace count={17} delay={1500}  />
        <span className="h1-responsive font-weight-bold mt-sm-5">like minimalist design.</span>                     
        <Typist.Backspace count={25} delay={1500}  />
        <span className="h1-responsive font-weight-bold mt-sm-5">What can I build for you?</span>                    
    </Typist>
)

export default Typer;