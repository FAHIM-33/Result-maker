import Swal from 'sweetalert2/dist/sweetalert2.js';
import '@sweetalert2/theme-dark/dark.css'
// import { Swal } from "sweetalert2/dist/sweetalert2";

export const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});