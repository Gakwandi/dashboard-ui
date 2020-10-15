import React from 'react';

function TopNavbar() {
  return (
        <div>
            <nav class="navbar navbar-light bg-light shadow-style fixed-top">
                <a class="navbar-brand" href="#">
                    <h3 className="text-capitalize">
                        <i className="fa fa-building mx-2"></i>progiciel de gestion formation emploi</h3>
                </a>
                <a className="mr-sm-2">
                    <i className="fa fa-power-off mx-2"></i>Deconnecter
                </a>
            </nav>
        </div>
  );
}

export default TopNavbar;
