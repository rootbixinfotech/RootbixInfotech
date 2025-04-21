import React from 'react';
import ServicesSidebar from './ServicesSidebar';


export const services = [
    {
        title: 'OUR SERVICES',
        link: '/services/sap-consulting',
    },
    {
        title: 'SAP Consulting Services',
        link: '/services/sap-consulting',
    },
    {
        title: 'SAP Implementation & Development Services',
        link: '/services/sap-implementation',
    },
    {
        title: 'SAP Managed Services And Support',
        link: '/services/sap-managed',
    },
    {
        title: 'SAP Enterprise Digital Transformation',
        link: '/services/sap-enterprise',
    },
    {
        title: 'SAP Data Migration & Upgrade Services',
        link: '/services/sap-data-migration',
    },
    {
        title: 'SAP Staffing Services',
        link: '/services/sap-staffing',
    },
]

const OurServicesBox = () => {
  return (
    <>
        <ServicesSidebar services={services}/>
    </>
  )
}

export default OurServicesBox