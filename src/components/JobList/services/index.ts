import { NextRouter } from "next/router";

import { IJobResponse } from "types";

interface IGetJobs {
  router?: NextRouter;
  setJobRes: React.Dispatch<React.SetStateAction<IJobResponse>>;
  setSearchClick: React.Dispatch<React.SetStateAction<boolean>>;
  setMoreClick: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setMoreLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const getJobs = ({
  router,
  setJobRes,
  setLoading,
  setMoreClick,
  setMoreLoading,
  setSearchClick,
}: IGetJobs) => {
  fetch(
    router
      ? "https://jabama-devjobs-api.vercel.app/api/v1/jobs?" +
          new URLSearchParams({
            fullTimeOnly: router.query.fullOnly === "true" ? "true" : "",
            keyword: (router.query.keyword as string) ?? "",
            location: (router.query.loc as string) ?? "",
            limit: (router.query.limit as string) ?? "9",
            page: "1",
          }).toString()
      : "https://jabama-devjobs-api.vercel.app/api/v1/jobs?limit=9"
  )
    .then((res) => {
      {
        res.json().then((data: IJobResponse) => setJobRes(data));
      }
    })
    .finally(() => {
      setSearchClick(false);
      setMoreClick(false);
      setLoading(false);
      setMoreLoading(false);
    });
};
