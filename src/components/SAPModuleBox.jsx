import React from 'react';
import ServicesSidebar from './ServicesSidebar';


export const modules = [
    {
        title: 'SAP MODULES',
        link: '/services/ewm',
    },
    {
        title: 'SAP Extended Warehouse Management (SAP EWM)',
        link: '/services/ewm',
    },
    {
        title: 'SAP Transportation Management Services',
        link: '/services/tms',
    },
    {
        title: 'SAP Warehouse Robotics/Automation',
        link: '/services/warehouse',
    },
    {
        title: 'SAP Yard Logistics',
        link: '/services/yard-logistics',
    },
    {
        title: 'SAP Business Network For Logistics',
        link: '/services/business-network',
    },
    {
        title: 'SAP S/4 HANA',
        link: '/services/hana',
    },
]

const SAPModuleBox = () => {
  return (
    <>
        <ServicesSidebar services={modules}/>
    </>
  )
}

export default SAPModuleBox