export interface IJobDetail {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
}

export interface IJobResponse {
  result: {
    items: IJobDetail[];
    meta: {
      page: number;
      pageSize: number;
      total: number;
    };
  };
  success: boolean;
}

export interface IJobRequest {
  fullTimeOnly?: boolean;
  keyword?: string;
  location?: string;
  limit?: number;
  page?: number;
}

export interface IHomePage {
  jobResponse: IJobResponse;
}
