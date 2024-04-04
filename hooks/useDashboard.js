import { useContext } from "react";

import {
  Context
} from "../lib/providers/dashboardProvider/DashboardProvider";

const useDashboard = () => useContext(Context);

export default useDashboard;
