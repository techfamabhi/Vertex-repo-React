import React, { useState, useEffect } from 'react';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddHistory() {
    const [history,setHistory]=useState([]);
    function fetchhistory(){
      axios.get("http://localhost:8000/api/account-history")
      .then((res)=>{
        const data=res.data;
        setHistory(data);
      })
    }
    function editOption(id)
    {
        window.location.href='edithistory/'+id;
    }
    function deleteOption(id)
    {
      axios.delete("http://localhost:8000/api/account-history/"+id)
      .then((res)=>{
        const data=res.data;
        if(data[0].status=='status')
        {
            window.location.href='/history';
        }
        else
        {
           console.log(data);
        }
      })
    }
    useEffect(()=>{
      fetchhistory()
    },[])


  return (
    <div>

<div class="layout-wrapper layout-content-navbar">
  <div class="layout-container">




<Sidebar/>

    <div class="layout-page">

<Navbar/>



      <div class="content-wrapper">


        <div class="container-xxl flex-grow-1 container-p-y">
          <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Forms/</span> Vertical Layouts</h4>

              <div class="card">
                <h5 class="card-header">Account History Table</h5>
                <div class="card-body">
                  <div class="table-responsive text-nowrap">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                        <th>S.No</th>
                         <th>Name</th>
                          <th>User ID</th>
                          <th>IP Address</th>
                          <th>Mobile No</th>
                          <th>Email</th>
                          <th>Wallet Amount</th>
                          <th>Withdrawal Request</th>
                          <th>Status</th>
                          <th>Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                    
                          







                          
                          {
          history.map((obj)=>{
            return(
              <tr>
              <td> <strong>{obj.id}</strong></td>
              <td> {obj.name}</td>
              <td> {obj.userid}</td>
              <td> {obj.ip}</td>
              <td> {obj.mobile}</td>
              <td> {obj.email}</td>
              <td> <span class="badge bg-label-primary me-1">{obj.wallet_amount}</span> </td>
              <td> {obj.withdraw_request}</td>
              <td> {obj.status}</td>
              <td><span class="badge bg-label-primary me-1"> {obj.action}</span></td>
              
              <td>
                <div className="dropdown">
                  <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <i className="bx bx-dots-vertical-rounded"></i>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" onClick={()=>editOption(obj.id)}><i className="bx bx-edit-alt me-1"></i> Edit</a>
                    <a className="dropdown-item" onClick={()=>deleteOption(obj.id)}><i className="bx bx-trash me-1"></i> Delete</a>
                  </div>
                </div>
              </td>
              </tr>
            )
          })
        }
         
                    
                   
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

        </div>




<Footer/>



        <div class="content-backdrop fade"></div>
      </div>

    </div>

  </div>


  <div class="layout-overlay layout-menu-toggle"></div>
</div>


<div class="buy-now">
  <a
    href="https://themeselection.com/products/sneat-bootstrap-html-admin-template/"
    target="_blank"
    class="btn btn-danger btn-buy-now"
    >Upgrade to Pro</a
  >
</div>
<ToastContainer />
    </div>
  )
}

export default AddHistory
