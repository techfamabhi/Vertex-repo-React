import React,{useState} from 'react';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddHistory() {
  
const [name,setName]=useState('');
const [userid,setUserid]=useState('');
const [ip,setIp]=useState('');
const [mobile,setMobile]=useState('');
const [email,setEmail]=useState('');
const [wallet_amount,setWallet_amount]=useState('');
const [withdraw_request,setWithdraw_request]=useState('');
const [status,setStatus]=useState('');
const [action,setAction]=useState('');
function handleSubmit(){
const data={
  name:name,
  userid:"1",
  ip:ip,
  mobile:mobile,
  email:email,
  wallet_amount:wallet_amount,
  withdraw_request:withdraw_request,
  status:status,
  action:action
};
console.log(data);
axios.post("http://localhost:8000/api/account-history",data)
  .then((res)=>{
      const data=res.data;
      console.log(data);
      if(data[0].status=='success')
      {
          window.location.href='/AddHistory';
      }
      else
      {
          console.log(data);
      }
  })
}
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


          <div class="row">
        
            <div class="col-xl">
              <div class="card mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                  <h5 class="mb-0">Basic with Icons</h5>
                  <small class="text-muted float-end">Merged input group</small>
                </div>
                <div class="card-body">
                  <form method="post">
                    <div class="mb-3">
                      <label class="form-label" for="basic-icon-default-fullname">Name</label>
                      <div class="input-group input-group-merge">
                        <span id="basic-icon-default-fullname2" class="input-group-text"
                          ><i class="bx bx-user"></i
                        ></span>
                        <input
                        name="name"
                          type="text"
                          class="form-control"
                          id="basic-icon-default-fullname"
                          placeholder="John Doe"
                          aria-label="John Doe"
                          aria-describedby="basic-icon-default-fullname2"
                          onChange={(name) => {setName(name.target.value)}} 
                        />
                      </div>
                    </div>



                    {/* <div class="mb-3">
                        <label for="defaultSelect" class="form-label">Userid</label>
                        <select id="defaultSelect" class="form-select" name="userid"
                         onChange={(userid) => {setUserid(userid.target.value)}}
                        >
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div> */}


                    <div class="mb-3">
                      <label class="form-label" for="basic-icon-default-fullname">Ip Address</label>
                      <div class="input-group input-group-merge">
                        <span id="basic-icon-default-fullname2" class="input-group-text"
                          ><i class="bx bx-user"></i
                        ></span>
                        <input
                        name="ip"
                          type="text"
                          class="form-control"
                          id="basic-icon-default-fullname"
                          placeholder="John Doe"
                          aria-label="John Doe"
                          aria-describedby="basic-icon-default-fullname2"
                          onChange={(ip) => {setIp(ip.target.value)}} 
                        />
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="basic-icon-default-phone">Phone No</label>
                      <div class="input-group input-group-merge">
                        <span id="basic-icon-default-phone2" class="input-group-text"
                          ><i class="bx bx-phone"></i
                        ></span>
                        <input
                        name="mobile"
                          type="text"
                          id="basic-icon-default-phone"
                          class="form-control phone-mask"
                          placeholder="658 799 8941"
                          aria-label="658 799 8941"
                          aria-describedby="basic-icon-default-phone2"
                          onChange={(mobile) => {setMobile(mobile.target.value)}} 
                        />
                      </div>
                    </div>


                 
                    <div class="mb-3">
                      <label class="form-label" for="basic-icon-default-email">Email</label>
                      <div class="input-group input-group-merge">
                        <span class="input-group-text"><i class="bx bx-envelope"></i></span>
                        <input
                        name='email'
                          type="text"
                          id="basic-icon-default-email"
                          class="form-control"
                          placeholder="john.doe"
                          aria-label="john.doe"
                          aria-describedby="basic-icon-default-email2"
                          onChange={(email) => {setEmail(email.target.value)}} 
                        />
                        <span id="basic-icon-default-email2" class="input-group-text">@example.com</span>
                      </div>
                      <div class="form-text">You can use letters, numbers & periods</div>
                    </div>




                    <div class="mb-3">
                      <label class="form-label" for="basic-icon-default-company">Wallet Amount</label>
                      <div class="input-group input-group-merge">
                        <span id="basic-icon-default-company2" class="input-group-text"
                          ><i class="fa fa-inr" aria-hidden="true"></i>
                        </span>   
                        <input
                        name="wallet_amount"
                          type="text"
                          id="basic-icon-default-company"
                          class="form-control"
                          placeholder="ACME Inc."
                          aria-label="ACME Inc."
                          aria-describedby="basic-icon-default-company2"
                          onChange={(wallet_amount) => {setWallet_amount(wallet_amount.target.value)}} 
                        />
                      </div>
                    </div>
                    
                    <div class="mb-3">
                      <label class="form-label" for="basic-icon-default-company">Withdrawal Request</label>
                      <div class="input-group input-group-merge">
                        <span id="basic-icon-default-company2" class="input-group-text"
                          >                    <i class="fa fa-undo" aria-hidden="true"></i>

                        </span>   
                        <input
                        name="withdraw_request"
                          type="text"
                          id="basic-icon-default-company"
                          class="form-control"
                          placeholder="ACME Inc."
                          aria-label="ACME Inc."
                          aria-describedby="basic-icon-default-company2"
                          onChange={(withdraw_request) => {setWithdraw_request(withdraw_request.target.value)}} 
                        />
                      </div>
                    </div>
                    
                    <div class="mb-3">
                        <label for="defaultSelect" class="form-label">Status</label>
                        <select id="defaultSelect" class="form-select" name='status' onChange={(status) => {setStatus(status.target.value)}}>
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      </div>

                    

                    

                    
                    <div class="mb-3">
                        <label for="defaultSelect" class="form-label">Action</label>
                        <select id="defaultSelect" class="form-select" name='action' onChange={(action) => {setAction(action.target.value)}}>
                        <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        
                        </select>
                      </div>
                 
                    <button type="button" class="btn btn-primary"  onClick={handleSubmit}>Send</button>
                  </form>
                </div>
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
