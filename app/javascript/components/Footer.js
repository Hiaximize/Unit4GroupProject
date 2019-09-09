import React from 'react'

class Footer extends React.Component{
    render(){
        return(
          <div id="footerContainer">
            <a href="#" id="top">TOP</a>
          <h3 id="footerTitle">Development Team</h3>
            <div id="footer">
                <div id="derek">
                  <ul>
                    <h4 className="devNames">Derek</h4>
                    <li><a href="https://www.linkedin.com/in/dbarkerit/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://www.github.com/hiaximize">Github</a></li>
                    <li><a href="mailto:dbarkerit@gmail.com" target="_blank">E-mail</a></li>
                  </ul>
                </div>
                <div id="colton">

                  <ul>
                    <h4 className="devNames">Colton</h4>
                    <li><a href="https://www.linkedin.com/in/coltonkayser/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/ColtonKayser" target="_blank">Github</a></li>
                    <li><a href="mailto:coltonkayser@gmail.com" target="_blank">E-mail</a></li>
                  </ul>
                </div>
            </div>
          </div>
        )
    }
}

export default Footer
