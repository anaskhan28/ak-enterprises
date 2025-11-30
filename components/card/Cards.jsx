import React from "react";
import { ServiceImages } from "../../utils/Images";
import Card from "./Card";

const Cards = () => {
  return (
    <>
      <Card
        img={ServiceImages.Lockers}
        title="Locker AMC & Relocation"
        subtitle="Secure Handling"
        des="Secure shifting, alignment, and maintenance of bank lockers with strict safety protocols and zero disruption."
      />

      <Card
        img={ServiceImages.Bank}
        title="Vault Door Servicing"
        subtitle="Strong Room Support"
        des="Professional servicing of vault & strong room doors to ensure smooth operations and compliance-readiness."
      />

      <Card
        img={ServiceImages.Shifting}
        title="Branch Shifting"
        subtitle="End-to-End Execution"
        des="Complete shifting of lockers, furniture, and equipment with safe transport and fast completion."
      />

      <Card
        img={ServiceImages.Furniture}
        title="Space Optimization"
        subtitle="Clean & Efficient"
        des="Reorganization, dismantling, and setup of banking spaces for better operational efficiency."
      />

      <Card
        img={ServiceImages.Ac}
        title="Confidential Disposal"
        subtitle="RBI-Compliant"
        des="Secure disposal of scrap & confidential items with proper documentation for audit compliance."
      />

      <Card
        img={ServiceImages.Machines}
        title="Equipment Removal"
        subtitle="Safe Disposal"
        des="Removal & compliant disposal of old machinery, strong room assets, and obsolete equipment."
      />

      <Card
        img={ServiceImages.BankWork}
        title="Branch Revamp Support"
        subtitle="Selective Dismantling"
        des="Careful dismantling & interior removal during branch upgrades without impacting daily operations."
      />

      <Card
        img={ServiceImages.Metals}
        title="Scrap Collection"
        subtitle="Audit-Ready"
        des="Secure removal of metal & asset scrap with proper records, reports, and transparent process."
      />

      <Card
        img={ServiceImages.Computer}
        title="E-Waste Compliance"
        subtitle="Secure Handling"
        des="Responsible disposal of electronic items with certification and recycling compliance."
      />
    </>
  );
};

export default Cards;
