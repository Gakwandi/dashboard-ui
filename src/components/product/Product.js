import React from 'react';
import TopNavbar from '../containerFluid/TopNavbar';
import SideNavbar from '../containerFluid/SideNavbar';

function Product() {
    return(
        <div>
            <TopNavbar/>
            <SideNavbar>
            <div className="card border mt-4" style={{fontSize: '14px'}}>
                <div className="card-body">
                    <nav className="breadC p-2" style={{width: '100%', backgroundColor:'#e9ecef', borderRadius:'4px'}}>
                        <div className="row">
                            <div className="col-lg-8">
                                <span className="mr-md-2"><i className="fa fa-file"></i> Ajouter</span>
                                <span className="mr-md-2"><i className="fa fa-print"></i> Print</span>
                                <span className="mr-md-2"><i className="fa  fa-file-excel-o"></i> Excel</span>
                            </div>
                            <div className="col-lg-4 text-right">
                                <div className="input-group input-group-sm">
                                    <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                        <option selected>Veuillez selectionner ...</option>
                                        <option value={1}>One</option>
                                    </select>
                                    <button className="btn btn-success btn-sm" type="button">Afficher</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="table-responsive">
                                            <table className="table table-bordered table-sm table-centered mb-0 font-14">
                                                <thead className="bg-light">
                                                    <tr>
                                                        <th rowSpan={2}>Project/Activites</th>
                                                        <th className="w-15" rowSpan={2}>Produits</th>
                                                        <th rowSpan={2}>Unite de Mesure</th>
                                                        <th rowSpan={2}>PV/HTVA</th>
                                                        <th colSpan={5}>Cout de revient direct</th>
                                                        <th rowSpan={3}>Marge brute (%)</th>
                                                    </tr>
                                                    <tr>
                                                        <td rowSpan={2}>Matieres premiere par unite</td>
                                                        <td rowSpan={2}>Conditionement par unite</td>
                                                        <td rowSpan={2}>Cout Main d'ouevre par unite</td>
                                                        <td rowSpan={2}>Cout Transport par unite</td>
                                                        <td rowSpan={2}>TOTAL par unite</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <select className="form-control form-control-sm">
                                                                <option></option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <select className="form-control form-control-sm">
                                                                <option></option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <select className="form-control form-control-sm">
                                                                <option></option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <select className="form-control form-control-sm">
                                                                <option></option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                        <tr>
                                                            <td>MENUISERIE</td>
                                                            <td>Salon complet</td>
                                                            <td>Piece</td>
                                                            <td>200000</td>
                                                            <td>100000</td>
                                                            <td>15000</td>
                                                            <td>30000</td>
                                                            <td>0</td>
                                                            <td>145000</td>
                                                            <td className="bg-danger">28</td>
                                                        </tr>
                                                        <tr>
                                                            <td>MENUISERIE</td>
                                                            <td>Portes simple</td>
                                                            <td>Piece</td>
                                                            <td>4000</td>
                                                            <td>5000</td>
                                                            <td>3000</td>
                                                            <td>5000</td>
                                                            <td>2000</td>
                                                            <td>15000</td>
                                                            <td className="bg-success">50</td>
                                                        </tr>
                                                        <tr>
                                                            <td>COUTURE</td>
                                                            <td>Costume</td>
                                                            <td>Prestation</td>
                                                            <td>200000</td>
                                                            <td>100000</td>
                                                            <td>15000</td>
                                                            <td>30000</td>
                                                            <td>0</td>
                                                            <td>145000</td>
                                                            <td className="bg-danger">28</td>
                                                        </tr>
                                                </tbody>
                                            </table>
                                        </div> {/* end table-responsive*/}

                </div>
            </div>
            </SideNavbar>
        </div>
    );
}

export default Product;