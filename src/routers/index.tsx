import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import {
  AddCourse,
  AddTutor,
  AddVoucher,
  Course,
  CourseDetail,
  Homepage,
  Payment,
  Tutor,
  Voucher,
} from "../containers";
import { Customer } from "../containers/Customer/Customer";
import { Login } from "../containers/Login/Login";
import { TutorDetail } from "../containers/TutorDetail/TutorDetail";
import { VoucherDetail } from "../containers/VoucherDetail/VoucherDetail";
import { BlankLayout, SidebarLayout } from "../layouts";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
export const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRouter
          exact={true}
          path={"/customer"}
          component={Customer}
          layout={SidebarLayout}
        />
        <PrivateRouter
          exact={true}
          path={"/"}
          component={Tutor}
          layout={SidebarLayout}
        />
        <PrivateRouter
          exact={true}
          path={"/add-tutor"}
          component={AddTutor}
          layout={SidebarLayout}
        />
        <PrivateRouter
          exact={true}
          path={"/tutor-detail/:uid"}
          component={TutorDetail}
          layout={SidebarLayout}
        />
        <PrivateRouter
          exact={true}
          path={"/payment"}
          component={Payment}
          layout={SidebarLayout}
        />
        {/* <PrivateRouter
          exact={true}
          path={"/order"}
          component={Payment}
          layout={SidebarLayout}
        /> */}
        <PrivateRouter
          exact={true}
          path={"/course"}
          component={Course}
          layout={SidebarLayout}
        />
        <PrivateRouter
          exact={true}
          path={"/add-course"}
          component={AddCourse}
          layout={SidebarLayout}
        />
        <PrivateRouter
          exact={true}
          path={"/course-detail/:uid"}
          component={CourseDetail}
          layout={SidebarLayout}
        />
        <PrivateRouter
          exact={true}
          path={"/voucher"}
          component={Voucher}
          layout={SidebarLayout}
        />
        <PrivateRouter
          exact={true}
          path={"/add-voucher"}
          component={AddVoucher}
          layout={SidebarLayout}
        />
        <PrivateRouter
          exact={true}
          path={"/voucher-detail"}
          component={VoucherDetail}
          layout={SidebarLayout}
        />
        <PublicRouter
          exact={true}
          path={"/login"}
          component={Login}
          layout={BlankLayout}
        />
        <PublicRouter
          exact={true}
          path={"/order"}
          component={Homepage}
          layout={SidebarLayout}
        />
      </Switch>
    </BrowserRouter>
  );
};
