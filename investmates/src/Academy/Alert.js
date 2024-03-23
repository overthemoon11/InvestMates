import Swal from 'sweetalert2';

const Alert = () => {
    Swal.fire({
        title: 'Subscription Required',
        text: 'To access exclusive premium content and unlock a world of valuable insights, subscribe now!',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Subscribe Now',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          // Handle subscription logic here, e.g., redirect to subscription page
          console.log('Redirecting to subscription page...');
        } else {
          // Handle cancelation logic here
          console.log('Subscription canceled.');
        }
      });
      
}

export default Alert;