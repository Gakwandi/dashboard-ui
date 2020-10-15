import React from 'react';
import People from './People';
import TopNavbar from '../containerFluid/TopNavbar';
import SideNavbar from '../containerFluid/SideNavbar';

function Accounting() {
    return(
        <div>
            <TopNavbar/>
            <SideNavbar>
                <div className="row">
                    <nav aria-label="breadcrumb" className="breadC" style={{width: '100%'}}>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active" aria-current="page">Comptabilite</li>
                            <li class="breadcrumb-item" aria-current="page">Client</li>
                        </ol>
                    </nav>
                    <div className="card" style={{fontSize: '14px'}}>
                        <div className="card-header text-gray">
                            <span className="mr-md-2"><i className="fa fa-user"></i> Nouveau</span>
                            <span className="mr-md-2"><i className="fa fa-print"></i> Print</span>
                            <span className="mr-md-2"><i className="fa  fa-file-excel-o"></i> Excel</span>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 border">
                                    <table class="table table-striped table-bordered mx-auto mt-2" style={{fontSize: '14px'}}>
                                        <thead>
                                            <tr>
                                            <th scope="col">Client</th>
                                            <th scope="col">Creances</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                People.map((item) => {
                                                    return (
                                                        <tr>
                                                            <td>{item.client}</td>
                                                            <td>{item.income}</td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-8">
                                    <div className="card border">
                                        <div className="card-body">
                                            <div className="row mb-2">
                                                <div className="col">
                                                    <h5>Information du Client</h5>
                                                </div>
                                                <div className="col-auto">
                                                    <button className="btn btn-success btn-sm">Reactualiser</button>
                                                </div>
                                            </div>
                                            <form>
                                                <div className="row" style={{fontSize: '14px'}}>
                                                    <div className="col">
                                                        <div className="form-group row">
                                                            <label className="col-sm-5">Nom du client:</label>
                                                            <div className="col-sm-7">
                                                                <input type="text" className="form-control form-control-sm" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-5">Telephone:</label>
                                                            <div className="col-sm-7">
                                                                <input type="text" className="form-control form-control-sm" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-5">Registre de commerce:</label>
                                                            <div className="col-sm-7">
                                                                <input type="text" className="form-control form-control-sm" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-5">Secteur d'Activite:</label>
                                                            <div className="col-sm-7">
                                                                <input type="text" className="form-control form-control-sm" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group row">
                                                            <label className="col-sm-3">NIF:</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control form-control-sm" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-3">TVA:</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control form-control-sm" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-3">Addresse:</label>
                                                            <div className="col-sm-9">
                                                                <textarea class="form-control" rows="3" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card border mt-4" style={{fontSize: '14px'}}>
                                        <div className="card-header bg-success">
                                            <span className="text-white">Transactions recentes</span>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-sm table-centered mb-0 font-14">
                                                    <thead className="bg-light">
                                                        <tr>
                                                            <th>Date</th>
                                                            <th>Motif</th>
                                                            <th>Montant</th>
                                                            <th>Reference</th>
                                                        </tr>
                                                    </thead>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SideNavbar>
        </div>
    )
};

export default Accounting;