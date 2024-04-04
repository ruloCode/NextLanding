import { useContext } from "react";

import {
  Context,
  IToastContext
} from "@/lib/providers/ToastProvider/ToastProvider";

const useToastFeedback = () => useContext(Context);

export default useToastFeedback;
