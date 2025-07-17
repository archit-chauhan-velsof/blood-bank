import React, { lazy, Suspense } from "react";
import { Router, Routes, Route } from "react-router-dom";
// import BloodBanks from "../pages/user/BloodBanks";
// import DonationRequest from "../pages/user/DonationRequest";
// import SearchDonors from "../pages/user/SearchDonors";
// import MainLayout from "../main/MainLayout";
// import RegisterAsDonor from "../pages/user/RegisterAsDonor";
import Loading from "../components/Loading";
import {
  BLOOD_BANKS_ADMIN_URL,
  DONATION_REQUEST_ADMIN_URL,
  DONORS_ADMIN_URL,
  BLOOD_INVENTORY_BANK_USER_URL,
  DONATION_REQUESTS_BANK_USER_URL,
  DONORS_BANK_USER_URL,
  BLOOD_BANKS_URL,
  DONATION_REQUEST_URL,
  SEARCH_DONORS_URL,
  REGISTER_AS_DONOR_URL,
} from "./url_constant";

const BloodBanksAdmin = lazy(() => import("../pages/admin/BloodbanksAdmin"));
const DonationRequestsAdmin = lazy(() =>
  import("../pages/admin/DonationRequestsAdmin")
);
const DonorsAdmin = lazy(() => import("../pages/admin/DonorsAdmin"));
const BloodInventoryBankUser = lazy(() =>
  import("../pages/blood-bank-user/BloodInventoryBankUser")
);
const DonationRequestsBankUser = lazy(() =>
  import("../pages/blood-bank-user/DonationRequestsBankUser")
);
const DonorsBankUser = lazy(() =>
  import("../pages/blood-bank-user/DonorsBankUser")
);

const BloodBanks = lazy(() => import("../pages/user/BloodBanks"));
const DonationRequest = lazy(() => import("../pages/user/DonationRequest"));
const SearchDonors = lazy(() => import("../pages/user/SearchDonors"));
const MainLayout = lazy(() => import("../main/MainLayout"));
const RegisterAsDonor = lazy(() => import("../pages/user/RegisterAsDonor"));

const AppRoutes = ({ resetToken }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainLayout resetToken={resetToken} />}>
          <Route path={BLOOD_BANKS_ADMIN_URL} element={<BloodBanksAdmin />} />
          <Route
            path={DONATION_REQUEST_ADMIN_URL}
            element={<DonationRequestsAdmin />}
          />
          <Route path={DONORS_ADMIN_URL} element={<DonorsAdmin />} />
          <Route
            path={BLOOD_INVENTORY_BANK_USER_URL}
            element={<BloodInventoryBankUser />}
          />
          <Route
            path={DONATION_REQUESTS_BANK_USER_URL}
            element={<DonationRequestsBankUser />}
          />
          <Route path={DONORS_BANK_USER_URL} element={<DonorsBankUser />} />
          <Route path={BLOOD_BANKS_URL} element={<BloodBanks />} />
          <Route path={DONATION_REQUEST_URL} element={<DonationRequest />} />
          <Route path={SEARCH_DONORS_URL} element={<SearchDonors />} />
          <Route path={REGISTER_AS_DONOR_URL} element={<RegisterAsDonor />} />
        </Route>
        <Route path="*" element={<MainLayout />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
