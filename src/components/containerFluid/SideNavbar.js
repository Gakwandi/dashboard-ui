import React from 'react';
import linksDetails from './LinksDetails';

function SideNavbar({children}) {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 noPaddingMargin d-xs-none">
              <ul class="nav flex-column" id="fixed">
                {
                  linksDetails.map((item, i) =>{
                    return(
                      <li class="nav-item" key={i}>
                        <a class="nav-link" href={item.link}><i className={`${item.icon} mx-2`}></i>{item.title}</a>
                      </li>
                    );
                  })
                }
              </ul>
          </div>
          <div className="col-md-8 ml-md-4" style={{top:"80px"}}>
            {children}
          </div>
        </div>
    </div>
  );
}

export default SideNavbar;
