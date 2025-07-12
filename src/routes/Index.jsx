import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Login from '../pages/login/Index'
import Register from '../pages/register/Index'
import BloodBanksAdmin from '../pages/admin/BloodbanksAdmin'
import DonationRequestsAdmin from '../pages/admin/DonationRequestsAdmin'
import DonorsAdmin from '../pages/admin/DonorsAdmin'
import BloodInventoryBankUser from '../pages/blood-bank-user/BloodInventoryBankUser'
import DonationRequestsBankUser from '../pages/blood-bank-user/DonationRequestsBankUser'
import DonorsBankUser from '../pages/blood-bank-user/DonorsBankUser'
import BloodBanks from '../pages/user/BloodBanks'
import DonationRequest from '../pages/user/DonationRequest'
import SearchDonors from '../pages/user/SearchDonors'
import MainLayout from '../pages/MainLayout'
import RegisterAsDonor from '../pages/RegisterAsDonor'


const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path='bloodbanksadmin' element={<BloodBanksAdmin/>}/>
        <Route path='donationrequestadmin' element={<DonationRequestsAdmin/>}/>
        <Route path='donorsadmin' element={<DonorsAdmin/>}/>
        <Route path='bloodinventorybankuser' element={<BloodInventoryBankUser/>}/>
        <Route path='donationrequestsbankuser' element={<DonationRequestsBankUser/>}/>
        <Route path='donorsbankuser' element={<DonorsBankUser/>}/>
        <Route path='bloodbanks' element={<BloodBanks/>}/>
        <Route path='donationrequest' element={<DonationRequest/>}/>
        <Route path='searchdonors' element={<SearchDonors/>}/>
        <Route path='registerasdonor' element={<RegisterAsDonor/>}/>
      </Route>
    </Routes>
  )
}

export default RoutesIndex