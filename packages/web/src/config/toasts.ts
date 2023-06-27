import Toast, { type PluginOptions, TYPE } from "vue-toastification";
import { PhXCircle, PhCheckCircle, PhWarning, PhWarningCircle, PhInfo } from '@phosphor-icons/vue';


const options: PluginOptions = {
  toastClassName: ['toast-styles'],
  newestOnTop: true,
  timeout: 3000,
  icon: false,
  closeButton: PhXCircle,
  toastDefaults: {
    [TYPE.ERROR]: {
      timeout: 10000,
      icon: PhWarning,
    },
    [TYPE.SUCCESS]: {
      hideProgressBar: true,
      icon: PhCheckCircle,
    },
    [TYPE.INFO]: {
      icon: PhInfo,
    },
    [TYPE.WARNING]: {
      icon: PhWarningCircle,
    }
  }
};

export { Toast, options, TYPE as ToastTypes };