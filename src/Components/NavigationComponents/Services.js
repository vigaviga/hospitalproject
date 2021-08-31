import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PiExpectations from '../TabContents/PiExpectations';
import ProjectDevelopment from '../TabContents/ProjectDevelopment';
import BiostatisticsAndFunding from '../TabContents/BiostatisticsAndFunding';
import GrantsAndFunding from '../TabContents/GrantsAndFunding';
import Manuscript from '../TabContents/Manuscript';
import RegulatoryAndCompliance from '../TabContents/RegulatoryAndCompliance';
import StudyCondact from '../TabContents/StudyCondact';

import '../../Styles/Services.css';

const Services = () => {

  const [value, setValue] = React.useState(0);
  const [tabContent, setTabContent] = React.useState(PiExpectations)

  const handleChange = (event, newValue) => {
    setValue(newValue)

    switch (newValue) {
      case 0:
        setTabContent(PiExpectations);
        break;
      case 1:
        setTabContent(ProjectDevelopment);
        break;
      case 2:
        setTabContent(RegulatoryAndCompliance);
        break;
      case 3:
        setTabContent(BiostatisticsAndFunding);
        break;
      case 4:
        setTabContent(GrantsAndFunding);
        break;
      case 5:
        setTabContent(StudyCondact);
        break;
      case 6:
        setTabContent(Manuscript);
        break;     
      default:
        break;
    }
  }
  return (
    <div>
      <div className = "ServicesContainer">
      <p>
        <b>            The OSCAR Program</b> was established to facilitate clinical research in Department of Orthopedics,
        and strives to meet the research needs of all our investigators.  For a consultation, please 
        submit your request through our Services Request form below.  The OSCAR Research Director 
        will review each request, and respond via email within 48 hours. 
      </p>
      <a className = "RequestForm" href="https://www.google.com/">
        <u>OSCAR Services Request Form</u>
      </a>
      </div>
      <div className="TabsContainer">
        <div className="ServiceTabs">
          <Tabs value={value} onChange={handleChange} orientation="vertical">
            <Tab className="Tab" label="PI EXPECTATIONS" />
            <Tab className="Tab" label="PROJECT DEVELOPMENT" />
            <Tab className="Tab" label="REGULATORY AND COMPLIANCE" />
            <Tab className="Tab" label="BIOSTATISTICS AND ANALYTICS" />
            <Tab className="Tab" label="GRANTS AND FUNDING" />
            <Tab className="Tab" label="STUDY CONDUCT" />
            <Tab className="Tab" label="MANUSCRIPT WRITING &#38; EDITING" />
          </Tabs>
        </div>
        <div className="TabsTextsContainer">
          {tabContent}
        </div>
      </div>

    </div>
  );
};

export default Services;

