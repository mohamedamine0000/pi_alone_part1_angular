import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sweetalert',
  templateUrl: './sweetalert.component.html',
  styleUrls: ['./sweetalert.component.scss']
})
export class SweetalertComponent implements OnInit {
  modalService: any;
  breadCrumbItems!: Array<{}>;

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Advance UI' },
      { label: 'Sweet Alerts', active: true }
    ];
  }

  basicMessage() {
    Swal.fire({ text: 'Any fool can use a computer', confirmButtonColor: '#4b93ff' });
  }


  titleText() {
    Swal.fire({
      title: 'The Internet?',
      text: 'That thing is still around?',
      icon: 'question',
      iconColor: '#1ea6d3',
      confirmButtonColor: '#4b93ff',
    });
  }


  successmsg() {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#4b93ff',
      cancelButtonColor: '#ef476f',
      confirmButtonText: 'OK',

    });
  }

  modelTitle() {
    Swal.fire({
      title: 'Oops...',
      text: 'Something went wrong!',
      icon: 'error',
      footer: '<a href="">Why do I have this issue?</a>',
      confirmButtonColor: '#4b93ff',
      confirmButtonText: 'OK'
    }).then(result => {
      if (result.value) {
        Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', confirmButtonColor: 'rgb(3, 142, 220)', icon: 'success', });
      }
    });
  }


  confirm() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(3, 142, 220)',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', confirmButtonColor: 'rgb(3, 142, 220)', icon: 'success', });
      }
    });
  }
  imageHeader() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'assets/images/logo-sm.png',
      imageHeight: 50,
      confirmButtonColor: 'rgb(3, 142, 220)'
    });
  }
  timer() {
    let timerInterval: any;
    Swal.fire({
      title: 'Auto close alert!',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        // Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getHtmlContainer();
          if (content) {
            const b: any = content.querySelector('b');
            if (b) {
              b.textContent = Swal.getTimerLeft();
            }
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
  }

  custom() {
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="mdi mdi-thumb-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: ' <i class= "mdi mdi-thumb-down"></i>',
      confirmButtonColor: '#06d6a0',
      cancelButtonColor: '#ef476f',
    });
  }

  customImg() {
    Swal.fire({
      imageUrl: 'https://placeholder.pics/svg/300x1500',
      imageHeight: 1500,
      confirmButtonText: 'OK',
      confirmButtonColor: '#4b93ff',
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
    });
  }


  threeBtn() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ms-2',
        denyButton: 'btn btn-info ms-2'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Do you want to save the changes?',
        confirmButtonText: 'Save',
        denyButtonText: 'Don\'t save',
        cancelButtonText: 'Cancel',
        showCancelButton: true,

      })
      .then(result => {
        if (result.value) {
          Swal.fire({
            title: 'Saved!',
            confirmButtonColor: 'btn btn-primary',
            icon: 'success',
          }
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire({
            title: 'Cancelled',
            confirmButtonColor: 'rgb(3, 142, 220)',
            icon: 'error',
          }
          );

        }
      });
  }
  position() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  customBackground() {
    Swal.fire({
      title: 'Custom width, padding, background.',
      width: 600,
      padding: 100,
      confirmButtonColor: '#556ee6',
      background: '#ffff',
    });
  }

  ajax() {
    Swal.fire({
      title: 'Submit email to run ajax request',
      input: 'email',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      confirmButtonColor: 'btn btn-primary',
      cancelButtonColor: 'btn btn-danger',
      preConfirm: (email) => {
        // eslint-disable-next-line no-unused-vars
        return new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            if (email === 'taken@example.com') {
              Promise.reject(new Error('This email is already taken.'));
            } else {
              resolve();
            }
          }, 2000);
        });
      },

      allowOutsideClick: false,
    }).then((email) => {
      Swal.fire({
        icon: 'success',
        title: 'Ajax request finished!',
        confirmButtonColor: '#4b93ff',
        html: 'Submitted email: ' + email,
      });
    });
  }

  successModel() {
    Swal.fire({
      html: '<div class="mt-3">' +
        '<div class="mt-4 pt-2 fs-15">' +
        '<h4>Well done !</h4>' +
        '<p class="text-muted mx-4 mb-0">Aww yeah, you successfully read this important message.</p>' +
        '</div>' +
        '</div>',
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: 'Back',
      cancelButtonColor: '#4b93ff',
      showCloseButton: true
    })
  }

  ErrorMsg() {
    Swal.fire({
      html: '<div class="mt-3">' +
        '<div class="mt-4 pt-2 fs-15">' +
        '<h4>Oops...! Something went Wrong !</h4>' +
        '<p class="text-muted mx-4 mb-0">Your email Address is invalid</p>' +
        '</div>' +
        '</div>',
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: 'Dismiss',
      cancelButtonColor: '#4b93ff ',
      showCloseButton: true
    })
  }

  WaningMsg() {
    Swal.fire({
      html: '<div class="mt-3">' +
        '<div class="mt-4 pt-2 fs-15 mx-5">' +
        '<h4>Are you Sure ?</h4>' +
        '<p class="text-muted mx-4 mb-0">Are you Sure You want to Delete this Account ?</p>' +
        '</div>' +
        '</div>',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete It!',
      showCloseButton: true,
      confirmButtonColor: '#4b93ff',
      cancelButtonColor: '#ef476f',
    })
  }

  JoinMsg() {
    Swal.fire({
      title: 'Join Our Community',
      html: '<div class="mt-3 text-start">' +
        '<label for="input-email" class="form-label fs-13">Email</label>' +
        '<input type="email" class="form-control" id="input-email" placeholder="Enter Email Address">' +
        '</div>',
      imageUrl: '../assets/images/logo-sm.png',
      footer: '<p class="fs-13 text-muted mb-0">Already have an account ? <a href="javascript:void();" class="fw-semibold text-decoration-underline"> Signin </a> </p>',
      imageHeight: 40,
      confirmButtonText: 'Register <i class="ri-arrow-right-line ms-1 align-bottom"></i>',
      text: 'Are you Sure You want to Delete this Account ?',
      showCloseButton: true,
      confirmButtonColor: '#4b93ff ',
    });
  }

  EmailMsg() {
    Swal.fire({
      html: '<div class="mt-3">' +
        '<div class="avatar-lg mx-auto">' +
        '<div class="avatar-title bg-light text-success display-5 rounded-circle">' +
        '<i class="ri-mail-send-fill"></i>' +
        '</div>' +
        '</div>' +
        '<div class="mt-4 pt-2 fs-15">' +
        '<h4 class="fs-20 fw-semibold">Verify Your Email</h4>' +
        '<p class="text-muted mb-0 mt-3 fs-13">We have sent you verification email <span class="fw-medium text-body">example@abc.com</span>, <br/> Please check it.</p>' +
        '</div>' +
        '</div>',
      showCancelButton: false,
      confirmButtonText: 'Verify Email',
      footer: '<p class="fs-14 text-muted mb-0">Didn\'t receive an email ? <a href="javascript:void();" class="fw-semibold text-decoration-underline">Resend</a></p>',
      confirmButtonColor: '#4b93ff ',
      showCloseButton: true
    })
  }

  notificationMsg() {
    Swal.fire({
      html: '<div class="mt-3">' +
        '<div class="avatar-lg mx-auto">' +
        '<img src="../assets/images/users/avatar-2.jpg" class="rounded-circle img-thumbnail" alt="thumbnail">' +
        '</div>' +
        '<div class="mt-4 pt-2 fs-15">' +
        '<h4 class="fs-18 fw-semibold">Welcome <span class="fw-semibold">Mike Mayer</span></h4>' +
        '<p class="text-muted mb-0 fs-13">You have <span class="fw-semibold text-success">2</span> Notifications</p>' +
        '</div>' +
        '</div>',
      showCancelButton: false,
      confirmButtonText: 'Show Me <i class="ri-arrow-right-line ms-1 align-bottom"></i>',
      confirmButtonColor: '#4b93ff ',
      showCloseButton: true
    })
  }
}


