import { Component, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent {
  qty: any = 1;

  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  slides: any
  isRTL: any = false;

  ngOnInit() {

    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Products' },
      { label: 'Overview', active: true }
    ];

    const direction = document.documentElement.getAttribute('dir')
    if (direction == 'ltr') {
      this.isRTL = false
    } else {
      this.isRTL = true
    }

    setTimeout(() => {
      this.slideConfig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: this.isRTL
      };
    });

    this.slides = [
      {
        previewImageSrc: 'assets/images/products/img-31.png',
        thumbnailImageSrc: 'assets/images/products/img-31.png'
      },
      {
        previewImageSrc: 'assets/images/products/img-32.png',
        thumbnailImageSrc: 'assets/images/products/img-32.png'
      },
      {
        previewImageSrc: 'assets/images/products/img-33.png',
        thumbnailImageSrc: 'assets/images/products/img-33.png'
      },
      {
        previewImageSrc: 'assets/images/products/img-34.png',
        thumbnailImageSrc: 'assets/images/products/img-34.png'
      },
      {
        previewImageSrc: 'assets/images/products/img-32.png',
        thumbnailImageSrc: 'assets/images/products/img-32.png'
      }
    ]
  }

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: this.isRTL
  };


  config = {
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
  }


  slidePreview(id: any, event: any) {
    const swiper = document.querySelectorAll('.swiperlist')

    swiper.forEach((el: any) => {
      el.classList.remove('swiper-slide-thumb-active')
    })
    event.target.closest('.swiperlist').classList.add('swiper-slide-thumb-active')
    this.slickModal.slickGoTo(id)
  }

  slickChange(event: any) {
    const swiper = document.querySelectorAll('.swiperlist')
    console.log(event.currentSlide)
  }
}
