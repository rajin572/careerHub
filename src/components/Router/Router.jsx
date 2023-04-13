import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Homepage from "../Pages/HomePage/Homepage";
import JobDetails from "../Pages/JobDetails/JobDetails";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: ({ params }) => fetch(`Jobs.json/${params.id}`),
      },
      {
        path: "/appliedJob",
        element: <AppliedJobs />,
      },
    ],
  },
]);

export default route;
