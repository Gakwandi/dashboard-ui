import React from 'react';
import linksDetails from './LinksDetails';
import TopNavbar from '../containerFluid/TopNavbar';
import SideNavbar from '../containerFluid/SideNavbar';

function Accounting() {
    return(
        <div>
            <TopNavbar/>
            <SideNavbar>
                <nav aria-label="breadcrumb" className="breadC">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Comptabilite</li>
                        <li class="breadcrumb-item" aria-current="page">PLAN D'AFFAIRES</li>
                    </ol>
                </nav>
                <div className="row">
                {
                    linksDetails.map((item, i) => {
                        return(
                            <div className="col-3 mt-3">
                                <div className="card text-center">
                                    <div className="card-header bg-success text-white">
                                        {item.title}
                                    </div>
                                    <div className="card-body">
                                        <i className={`${item.icon} fontText`}/>
                                        <br/>
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                </div>
            </SideNavbar>
        </div>
    )
};

export default Accounting;