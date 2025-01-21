import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Merchant from "./pages/Merchant/Merchant";
import CreateMerchant from "./pages/Merchant/CreateMerchant/CreateMerchant";
import Customers from "./pages/Customers/index";
import CreateSegmentation from "./pages/Customers/CreateSegmentation/CreateSegmentation";
import CustomerEmport from "./pages/Customers/CustomerEmport";
import CustomerExpert from "./pages/Customers/CustomerExport/CustomerExport";
import Coupons from "./pages/Coupons";
import BusinessAnalytics from "./pages/Analytics/BusinessAnalytics";
import Reviews from "./pages/Analytics/Reviews";
import Reports from "./pages/Analytics/Reports";
import Settings from "./pages/Settings";
import General from "./pages/Settings/General/General";
import UsersPermissions from "./pages/Settings/UsersPermissions/UsersPermissions";
import ServiceableZone from "./pages/Settings/ServiceableZones/ServiceableZones";
import Order from "./pages/Settings/Order";
import OrderExpert from "./pages/OrderExpert";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/merchant" element={<Merchant />} />
        <Route path="/merchant/create" element={<CreateMerchant />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/segmentation/create" element={<CreateSegmentation />} />
        <Route path="/customer-import" element={<CustomerEmport />} />
        <Route path="/customer-export" element={<CustomerExpert />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/analytics/business-analytics" element={<BusinessAnalytics />} />
        <Route path="/analytics/reviews" element={<Reviews />} />
        <Route path="/analytics/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/general" element={<General />} />
        <Route path="/settings/users" element={<UsersPermissions />} />
        <Route path="/settings/serviceable-zones" element={<ServiceableZone />} />
        <Route path="/settings/order" element={<Order />} />
        <Route path="/order-expert" element={<OrderExpert />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
