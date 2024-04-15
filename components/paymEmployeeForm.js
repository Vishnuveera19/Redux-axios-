import { Grid,Card,
    TextField,
    Button,
    Typography,
    Box,
    CardContent,
    Select,
  MenuItem  
  } from '@mui/material';
  import {connect} from "react-redux"
  import { addEntity,viewById } from '../reduxcomp/actions/actionfunctions'
  import {inputpaymEmployeeForm} from './paymEmployee';
  import { useState,useEffect } from 'react';
   import { getRequest, postRequest } from '../serverconfiguration/requestcomp';  
 import { ServerConfig } from '../serverconfiguration/serverconfig';
import { PAYMCOMPANIES,PAYMBRANCHES, PAYMEMPLOYEE } from '../serverconfiguration/controllers';
   function EmployeeForm(props) {
    const [branchData,setBranchData]=useState([])
   
    const [companydata,setCompanyData]=useState([])
    
   const [companyId,setCompanyId]=useState(0)
   const [branchId,setBranchId]=useState(0)
    useEffect(()=>{
      getRequest(ServerConfig.url,PAYMCOMPANIES).then((e)=>{
        console.log(e.data)
        setCompanyData(e.data)
      })
      getRequest(ServerConfig.url,PAYMBRANCHES).then((e)=>{
        console.log(e.data)
        setBranchData(e.data)
      })
     

    },[])
    const[formData,setFormData]=useState([])
   
    const margin={margin:"0 5px"}

   return (
      <div className="App">
        <Grid style ={{ padding: "80px 5px0 5px" }}>
        <Card style ={{ maxWidth: 600, margin: "0 auto" ,font:'initial'}}>
        <CardContent>
        <Typography sx={{ mt: 3 }} align='center' color='primary' variant="h5">Paym Employee</Typography>
        <form onSubmit={(e)=>{
        e.preventDefault()
        let pnCompanyID=companyId
        let pnBranchId=branchId
        let employeecode=e.currentTarget.elements.EmployeeCode.value
        let empfirstname=e.currentTarget.elements.Employee_First_Name.value
        let empmiddlename=e.currentTarget.elements.Employee_Middle_Name.value
        let emplastname=e.currentTarget.elements.Employee_Last_Name.value
        let dateofbirth="1992-12-07T00:00:00"
        let password=e.currentTarget.elements.Password.value
        let gender=e.currentTarget.elements.Gender.value
        let status=e.currentTarget.elements.Status.value

        let empfullname=e.currentTarget.elements.Employee_Full_Name.value

        let readerid=e.currentTarget.elements.Reader_Id.value

        let oteligible=e.currentTarget.elements.OT_Eligible.value
        let pfno=e.currentTarget.elements.PF_No.value

        let esino=e.currentTarget.elements.Esi_No.value

        let otCalc=e.currentTarget.elements.OT_Calc.value
        let ctc=e.currentTarget.elements.CTC.value
        let basicsalary=e.currentTarget.elements.Basic_Salary.value
        let bankcode=e.currentTarget.elements.Bank_code.value
        let bankname=e.currentTarget.elements.Bank_Name.value
        let branchname=e.currentTarget.elements.Branch_Name.value

        let accounttype=e.currentTarget.elements.Account_Type.value

        let micrCode=e.currentTarget.elements.MICR_code.value

        let ifscCode=e.currentTarget.elements.IFSC_Code.value

        let address=e.currentTarget.elements.Address.value

        let otherinfo=e.currentTarget.elements.Other_Info.value

        let reportingperson=e.currentTarget.elements.Reporting_Person.value
        let reportingid=e.currentTarget.elements.Reporting_Id.value

        let reportingEmail=e.currentTarget.elements.Reporting_Email.value

        let  panNo =e.currentTarget.elements.Pan_No.value

        let cardNo=e.currentTarget.elements.Card_No.value
        let  salaryType =e.currentTarget.elements.Salary_Type.value
        let  tdsApplicable =e.currentTarget.elements.TDS_Applicable.value
        let  flag =e.currentTarget.elements.Flag.value
        let  role =e.currentTarget.elements.Role.value
      

       
       var obj= {
          "pnCompanyId": pnCompanyID,
          "pnBranchId": pnBranchId,
          "employeeCode": employeecode,
          "employeeFirstName": empfirstname,
          "employeeMiddleName": empmiddlename,
          "employeeLastName": emplastname,
          "dateofBirth":dateofbirth,
          "password": password,
          "gender": gender,
          "status": status,
          "employeeFullName": empfullname,
          "readerid": readerid,
          "otEligible":oteligible,
          "pfno": pfno,
          "esino": esino,
          "otCalc":otCalc,
          "ctc": ctc,
          "basicSalary":basicsalary,
          "bankCode": bankcode,
          "bankName": bankname,
          "branchName": branchname,
          "accountType": accounttype,
          "micrCode":micrCode,
          "ifscCode":ifscCode,
          "address": address,
          "otherInfo":otherinfo,
          "reportingPerson": reportingperson,
          "reportingId": reportingid,
          "reportingEmail": reportingEmail,
          "panNo": panNo,
          "cardNo": cardNo,
          "salaryType": salaryType,
          "tdsApplicable": tdsApplicable,
          "flag": flag,
          "role": role
      }


alert(obj)

postRequest(ServerConfig.url,PAYMEMPLOYEE,obj).then((e)=>console.log(e)).catch((e)=>console.log(e))




        }} id="frmemployee">
         
          <Grid container spacing={2} columns={12} >
          <Grid xs={12} sm={5}>
           <Select id="companyId" onChange={(e)=>{
            e.preventDefault()
            setCompanyId(e.target.value)
           }}>
             {
          companydata.map((e)=>{
            return <MenuItem value={e.pnCompanyId}>{e.pnCompanyId}</MenuItem>
          })
        }
            </Select>  
          </Grid>
          <Grid xs={12} sm={5}>
           <Select id="branchId" onChange={(e)=>{setBranchId(e.target.value)}}>
        {
          branchData.map((e)=>{
            return <MenuItem value={e.pnBranchId}>{e.pnBranchId}</MenuItem>
          })
        }
            </Select>  
          </Grid>
            {
            inputpaymEmployeeForm.map(input=> <Grid xs={input.xs} sm={input.sm} item>
                              <TextField {...input}  InputLabelProps={{shrink:true}}
                                 
                            ></TextField>
           </Grid>
          )
       
            }
             <Grid container spacing={1}>
             <Grid item xs={12} align="right">
              <Button type="reset" variant="contained" color="primary"style={{paddingRight:'3'}} >Reset</Button>
            <Button  type="submit" variant="contained" color="primary"
          
        
            >Submit</Button>
              </Grid>
            </Grid>
           
          </Grid>
        </form>
        </CardContent>
        </Card>
        </Grid>
      </div>
    );
  }
  const mapStateToProps=(state)=>({state:state})
const mapDispatchToProps=(dispatch)=>({dispatch:dispatch})
 export default (connect)(mapStateToProps,mapDispatchToProps)(EmployeeForm)