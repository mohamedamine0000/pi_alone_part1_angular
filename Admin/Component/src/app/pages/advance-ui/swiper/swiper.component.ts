import { Component, HostListener, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwipersComponent {

  // bread crum items
  breadCrumbItems!: Array<{}>;
  @ViewChild('slickCarousel') slickCarousel!: SlickCarouselComponent;

  isRTL: any = false;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Advance UI' }, { label: 'Swiper Slider', active: true }];

    const direction = document.documentElement.getAttribute('dir')
    if (direction == 'ltr') {
      this.isRTL = false
    } else {
      this.isRTL = true
    }

    setTimeout(() => {
      this.slideConfig = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        rtl: this.isRTL
      };
      this.Navigation = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        rtl: this.isRTL
      };

      this.verticalConfig = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        rtl: this.isRTL
      }

      this.fadeConfig = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        arrows: false,
        rtl: this.isRTL
      };

      this.Responsive = {
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        dots: true,
        arrows: false,
        rtl: this.isRTL
      };

      this.coverflowConfig = {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: this.isRTL
      };

      this.Pagination = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000,
        arrows: false,
        rtl: this.isRTL
      };

      this.carouselConfig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        arrows: false,
        rtl: this.isRTL
      };
    });
  }

  slideConfig = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    rtl: this.isRTL
  };

  Navigation = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    rtl: this.isRTL
  };

  Pagination = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    arrows: false,
    rtl: this.isRTL
  };

  verticalConfig = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    rtl: this.isRTL
  };

  carouselConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    arrows: false,
    rtl: this.isRTL
  };

  fadeConfig = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
    rtl: this.isRTL
  };

  Responsive = {
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    dots: true,
    arrows: false,
    rtl: this.isRTL
  };

  coverflowConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: this.isRTL
  }

  @HostListener('mousewheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      // Scroll down (next slide)
      this.slickCarousel.slickNext();
    } else if (delta < 0) {
      // Scroll up (previous slide)
      this.slickCarousel.slickPrev();
    }
  }

}
