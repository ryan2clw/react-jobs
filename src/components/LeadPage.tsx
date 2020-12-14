import React, { useLayoutEffect, useState } from "react";
import LeadTable from './LeadTable';
import '../App.css';
import getLeads from "../services/LeadService";

const LeadPage = () => {

  const [leads, setLeads] = useState([]);

    useLayoutEffect(() => {
      getLeads().then(data=>{
        console.log("Component receives data", data);
        setLeads(data);
      });
      return () => {
        console.log("Component loses scope");
      };
    }, [])

    return (
        <div className="App App-header">
          <h3 className="my-3">
            Job Leads for Ryan Dines
          </h3>
            <div className="d-flex flex-row align-content-center justify-items-center mx-5">
              <LeadTable 
                data={leads}
              />
            </div>
            <p className="mt-3">
              This application was made with
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
        </div>
      );
}
export default LeadPage;