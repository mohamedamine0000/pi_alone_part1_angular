import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Inject, Output, Renderer2, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EventService } from 'src/app/core/services/event.service';
import { LanguageService } from 'src/app/core/services/language.service';
import { notification } from './data';
import { items } from './data';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  displayCenter: any;
  element: any;
  countryName: any;
  flagvalue: any;
  valueset: any;
  cookieValue: any;
  mode: string | undefined;
  searchmodal: boolean = false;
  removemodal: any
  recentmodal: boolean = false;
  notifications: any
  removeids: any;
  cartVisible = false
  notiVisible = false
  isDropdownOpen = false
  changesMode = false
  isFixedPosition = false;
  cart: any;
  selectedItems: any;
  badgeValue: number = 5; // Initial value for the badge
  isCartEmpty: boolean = false;
  totalNotify: any;
  newNotify: any;
  readNotify: any;
  notificationActionsVisible = false;
  @Output() mobileMenuButtonClicked = new EventEmitter();

  // notificationActionsVisible: any;
  constructor(@Inject(DOCUMENT) private document: any, private eventService: EventService, public languageService: LanguageService, public _cookiesService: CookieService) {
  }

  ngOnInit(): void {
    this.element = document.documentElement;
    // fetch data
    this.notifications = notification
    this.cart = items
    this.notifications.forEach((element: any) => {
      this.totalNotify += element.items.length
      if (element.title == 'New') {
        this.newNotify = element.items.length
      } else {
        this.readNotify = element.items.length
      }
    });
  }
  showCenterDialog() {
    this.displayCenter = true;
  }
  showModal() {
    this.removemodal = true;
  }
  // hide cart
  hideCartItem(index: number) {
    if (index >= 0 && index < this.cart.length) {
      // Remove the item from the cart array
      this.cart.splice(index, 1);

      // Check if the cart is empty
      this.isCartEmpty = this.cart.length === 0;

      // Update the badge value to the new cart length
      this.updateBadgeValue(this.cart.length);
    }
  }

  updateBadgeValue(newValue: number): void {
    this.badgeValue = newValue;
  }


  showDialog() {
    this.searchmodal = true;
  }

  windowScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      (document.getElementById('back-to-top') as HTMLElement).style.display = "block";
      document.getElementById('page-topbar')?.classList.add('topbar-shadow')
    } else {
      (document.getElementById('back-to-top') as HTMLElement).style.display = "none";
      document.getElementById('page-topbar')?.classList.remove('topbar-shadow')
    }
  }

  /**
 * Toggle the menu bar when having mobile screen
 */
  toggleMobileMenu(event: any) {
    document.querySelector('.hamburger-icon')?.classList.toggle('open')
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  /**
* Topbar Light-Dark Mode Change
*/
  changeMode(mode: string) {
    this.mode = mode;
    document.documentElement.setAttribute('data-bs-theme', mode)
    document.documentElement.setAttribute('data-sidebar', mode);
    document.documentElement.setAttribute('data-topbar', mode);

  }

  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement && !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }// In your component



  // Search Topbar
  Search() {
    this.recentmodal = true
    var searchOptions = document.getElementById("search-close-options") as HTMLAreaElement;
    var dropdown = document.getElementById("search-dropdown") as HTMLAreaElement;
    var input: any, filter: any, ul: any, li: any, a: any | undefined, i: any, txtValue: any;
    input = document.getElementById("search-options") as HTMLAreaElement;
    filter = input.value.toUpperCase();
    var inputLength = filter.length;

    if (inputLength > 0) {
      dropdown.classList.add("show");
      searchOptions.classList.remove("d-none");
      var inputVal = input.value.toUpperCase();
      var notifyItem = document.getElementsByClassName("notify-item");
      var notifyItem = document.getElementsByClassName("notify-item");
      Array.from(notifyItem).forEach(function (element: any) {
        var notifiTxt = ''
        if (element.querySelector("h6")) {
          var spantext = element.getElementsByTagName("span")[0].innerText.toLowerCase()
          var name = element.querySelector("h6").innerText.toLowerCase()
          if (name.includes(inputVal)) {
            notifiTxt = name
          } else {
            notifiTxt = spantext
          }
        } else if (element.getElementsByTagName("span")) {
          notifiTxt = element.getElementsByTagName("span")[0].innerText.toLowerCase()
        }
        if (notifiTxt)
          element.style.display = notifiTxt.includes(inputVal) ? "block" : "none";

      });
    } else {
      dropdown.classList.remove("show");
      searchOptions.classList.add("d-none");
    }
  }

  /**
   * Search Close Btn
   */
  closeBtn() {
    var searchOptions = document.getElementById("search-close-options") as HTMLAreaElement;
    var dropdown = document.getElementById("search-dropdown") as HTMLAreaElement;
    var searchInputReponsive = document.getElementById("search-options") as HTMLInputElement;
    dropdown.classList.remove("show");
    searchOptions.classList.add("d-none");
    searchInputReponsive.value = "";
  }
  toggleCart() {
    this.cartVisible = !this.cartVisible
  }
  ToggleNotification() {
    this.notiVisible = !this.notiVisible
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  toggleFixedPosition() {
    this.isFixedPosition = !this.isFixedPosition;
  }
  toggleChange() {
    this.changesMode = !this.changesMode;
  }

  // Remove Notification
  checkedValGet: any[] = [];
  onCheckboxChange(event: any, id: any) {
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.notifications.length; i++) {
      for (var x = 0; x < this.notifications[i].items.length; x++) {
        if (this.notifications[i].items[x].state == true) {
          result = this.notifications[i].items[x].id;
          checkedVal.push(result);
        }
      }
    }
    this.checkedValGet = checkedVal
    checkedVal.length > 0 ? (document.getElementById("notification-actions") as HTMLElement).style.display = 'block' : (document.getElementById("notification-actions") as HTMLElement).style.display = 'none';
  }

  notificationDelete() {
    for (var i = 0; i < this.checkedValGet.length; i++) {
      for (var j = 0; j < this.notifications.length; j++) {
        for (var x = 0; x < this.notifications[j].items.length; x++) {
          if (this.notifications[j].items[x].id == this.checkedValGet[i]) {
            this.notifications[j].items.splice(x, 1)
          }
        }
      }
    }
    this.calculatenotification()
    this.removemodal = false;
  }
  calculatenotification() {
    this.totalNotify = 0;
    this.checkedValGet = []
    this.notifications.forEach((element: any) => {
      this.totalNotify += element.items.length
      if (element.title == 'New') {
        this.newNotify = element.items.length
      } else {
        this.readNotify = element.items.length
      }
    });

    if (this.totalNotify == 0) {
      document.querySelector('.empty-notification-elem')?.classList.remove('d-none')
      this.toggleNotificationActions();
    }
    this.checkedValGet.length > 0 ? (document.getElementById("notification-actions") as HTMLElement).style.display = 'block' : (document.getElementById("notification-actions") as HTMLElement).style.display = 'none';
  }

  toggleNotificationActions() {
    this.notificationActionsVisible = !this.notificationActionsVisible;
  }
}
