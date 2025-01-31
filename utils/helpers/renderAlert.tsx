import React from "react";
import { ToastProps } from "react-native-toast-notifications/lib/typescript/toast";

import { Alerts } from "../../src/components/organisms/alerts/Alerts";
import { StatusTypes } from "../../src/models/app/App";

export const renderAlert = (type: StatusTypes, toast: ToastProps) => (
  <Alerts type={type} alertText={toast.message} callBack={toast.onHide} />
);
