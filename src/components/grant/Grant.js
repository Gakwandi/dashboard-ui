import React from 'react';
import People from './People';
import TopNavbar from '../containerFluid/TopNavbar';
import SideNavbar from '../containerFluid/SideNavbar';

function Grant() {
    return(
        <div>
            <TopNavbar/>
            <SideNavbar>
                <div className="row">
                    <nav aria-label="breadcrumb" className="breadC" style={{width: '100%'}}>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item active" aria-current="page">Comptabilite</li>
                            <li class="breadcrumb-item" aria-current="page">DON ET SUBVENTION</li>
                        </ol>
                    </nav>
                    <div className="card" style={{fontSize: '14px'}}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card border">
                                        <div className="card-body">
                                            <div className="row mb-2">
                                                <div className="col">
                                                    <h5>Information du Client</h5>
                                                </div>
                                                <div className="col-auto">
                                                    <button className="btn btn-success btn-sm">Enregister</button>
                                                </div>
                                            </div>
                                            <form>
                                                <div className="row" style={{fontSize: '14px'}}>
                                                    <div className="col">
                                                        <div className="form-group row">
                                                            <label className="col-sm-5">Date:</label>
                                                            <div className="col-sm-7">
                                                                <input type="text" className="form-control form-control-sm" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-5">No Reference:</label>
                                                            <div className="col-sm-7">
                                                                <input type="text" className="form-control form-control-sm" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-5">Compte de Financement:</label>
                                                            <div className="col-sm-7">
                                                                <select className="form-control form-control-sm">
                                                                    <option selected>ENABEL</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-5">Montant:</label>
                                                            <div className="col-sm-7">
                                                                <input type="text" className="form-control form-control-sm" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group row">
                                                            <label className="col-sm-3">Compte Destinataire:</label>
                                                            <div className="col-sm-9">
                                                            <select className="form-control form-control-sm">
                                                                    <option selected>BANCOBU</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-sm-3">Narration:</label>
                                                            <div className="col-sm-9">
                                                                <textarea className="form-control form-control-sm" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="card border mt-4" style={{fontSize: '14px'}}>
                                        <div className="card-header bg-success">
                                            <span className="text-white">Fonds recus recemment</span>
                                        </div>
                                        <div className="card-body">
                                        <nav className="breadC p-2" style={{width: '100%', backgroundColor:'#e9ecef', borderRadius:'4px'}}>
                                            <span className="mr-md-2"><i className="fa fa-print"></i> Print</span>
                                            <span className="mr-md-2"><i className="fa  fa-file-excel-o"></i> Excel</span>
                                        </nav>
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-sm table-centered mb-0 font-14">
                                                    <thead className="bg-light">
                                                        <tr>
                                                            <th>Date</th>
                                                            <th>COMPTE DE FINACEMENT</th>
                                                            <th>MONTANT</th>
                                                            <th>NARRATION</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            People.map((item) => {
                                                                return (
                                                                    <tr>
                                                                        <td>{item.date}</td>
                                                                        <td>{item.account}</td>
                                                                        <td>{item.fees}</td>
                                                                        <td>{item.narration}</td>
                                                                    </tr>
                                                                );
                                                            })
                                                        }
                                                    </tbody>
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

export default Grant;