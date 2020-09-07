import React, { createContext } from 'react';
import { withSnackbar } from 'notistack';

const ToastContext = createContext();
const { Provider } = ToastContext;

const ToastProvider = ({ children, enqueueSnackbar }) => {
  const addToast = (title, color) => {
    enqueueSnackbar(title, { variant: color, autoHideDuration: 5000 });
  };

  return (
    <Provider
      value={{
        addToast
      }}>
      {children}
    </Provider>
  );
};

const SnackBarProvider = withSnackbar(ToastProvider);

export { ToastContext, SnackBarProvider };

// {toasts.map((toast, index) => (
//         <Snackbar
//           anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//           autoHideDuration={5000}
//           key={index}
//           onClose={e => handleClose(e, index)}
//           open={toast.show}>
//           <Alert onClose={e => handleClose(e, index)} severity={toast.color}>
//             {toast.title}
//           </Alert>
//         </Snackbar>
//       ))}
