import { Component } from '@angular/core';
import { account, profile, transaction, slider } from './data'
// import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  breadCrumbItems!: Array<{}>;
  first: any;
  profileData: any;
  accountData: any;
  transaction: any;
  endIndex: any;
  display!: boolean;
  removeIds: any;
  products!: any;
  responsiveOptions!: any[];

  ngOnInit(): void {
    // breadcrumb
    this.breadCrumbItems = [
      { label: 'Accounts' },
      { label: 'My Account', active: true }
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1300px',
        numVisible: 1,
        numScroll: 1
      },

    ];
    // fatch data
    this.accountData = account
    this.profileData = profile
    this.transaction = transaction
    this.products = slider
  }
  // carousel
  Pagination = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false
  };

  showDialog(id: any) {
    this.removeIds = id
    this.display = true;
  }

  // Delete Record
  deleteRecord() {
    this.accountData.splice(this.removeIds, 1)
    this.display = false;
  }

}
