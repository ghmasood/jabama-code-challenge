import JobCart from "components/JobCart";
import JobList from "components/JobList";
import React from "react";
import { IJobDetail } from "types";

interface IPlaygroundProps {
  customClass?: string;
}
const temp: IJobDetail = {
  id: 1,
  company: "Scoot",
  logo: "https://jabama-devjobs-api.vercel.app/public/images/scoot.svg",
  logoBackground: "hsl(36, 87%, 49%)",
  position: "Senior Software Engineer",
  postedAt: "20h ago",
  contract: "Full Time",
  location: "United Kingdom",
};
function Playground({ customClass = "" }: IPlaygroundProps) {
  return <JobList />;
}

export default Playground;
