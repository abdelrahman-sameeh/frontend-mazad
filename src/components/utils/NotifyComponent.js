import { toast } from "react-toastify";

// notification for any component
export const notify = (msg, type) => {
  if (type === "warn") {
    toast.warn(msg);
  } else if (type === "success") {
    toast.success(msg);
  } else {
    toast.error(msg);
  }
};