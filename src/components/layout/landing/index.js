import React from "react";
import { LandingHeader } from "../../header";
import Footer from "../../footer";

const LandingLayout = ({ children, form }) => {
  return (
    <div>
      <LandingHeader form={form} />
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
