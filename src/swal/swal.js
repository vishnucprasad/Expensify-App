import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ReactSwal = withReactContent(Swal);

const MySwal = ReactSwal.mixin({
    customClass: {
        container: 'swal-container',
        popup: 'swal-container__popup',
        icon: 'swal-container__icon',
        title: 'swal-container__title',
        confirmButton: 'button button--success button--swal',
        cancelButton: 'button button--danger button--swal'
    },
    buttonsStyling: false
})

const Toast = MySwal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

export { MySwal as default, Toast };