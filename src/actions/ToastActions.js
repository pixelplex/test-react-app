import { toast } from 'react-toastify';

const OPTIONS = {
	autoClose: 3000,
};

class ToastActionsClass {

	/**
	 * Toast about successful event
	 * @param {string} text
	 */
	toastSuccess(text) {
		toast.success(text, OPTIONS);
	}

	/**
	 * Toast with information message
	 * @param {string} text
	 */
	toastInfo(text) {
		toast.info(text, OPTIONS);
	}

	/**
	 * Toast about unsuccessful event
	 * @param {string|object} error
	 */
	toastError(error) {
		if (typeof error === 'string') {
			toast.error(error, OPTIONS);
		} else if (typeof error === 'object') {
			if (error.message) {
				toast.error(error.message, OPTIONS);
				return;
			}

			Object.keys(error).forEach((index) => {
				error[index].forEach((text) => toast.error(`${index}: ${text}`, OPTIONS));
			});
		}
	}

}

const ToastActions = new ToastActionsClass();
export default ToastActions;

