import { Component, OnInit, } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, EventInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { events, createEventId } from './data';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-calender',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

/**
 * Calendar Component
 */
export class CalendarComponent implements OnInit {

  calendarEvents!: EventInput[];
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  // calender

  // Calendar click Event
  formData!: UntypedFormGroup;

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: events, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.openModal.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)

  };
  currentEvents: EventApi[] = [];

  editEvent: any;
  modalService: any;
  newEventDate: any;
  submitted: boolean | undefined;
  upcomingEvents: any;
  constructor(private formBuilder: UntypedFormBuilder) {
  }
  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Apps' },
      { label: 'Calendar', active: true }
    ];

    // Validation
    this.formData = this.formBuilder.group({
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      location: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
      payment: ['', Validators.required]
    });

    this.calendarEvents = events;
  }

  editmodalShow!: boolean;



  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  /**
    * Event add modal
    */
  openModal(events?: any) {
    this.editmodalShow = true;
    setTimeout(() => {
      var modaltitle = document.querySelector('.modal-title') as HTMLAreaElement;
      modaltitle.innerHTML = "Add Event";

      var modalbtn = document.querySelector('#btn-save-event') as HTMLAreaElement;
      modalbtn.innerHTML = "Add Event";

      document.getElementById('btn-delete-event')?.classList.add('d-none');

      (document.querySelector(".event-details") as HTMLElement).style.display = "none";
      (document.querySelector(".event-form") as HTMLElement).style.display = "block";
    }, 0);

    this.submitted = false;
    this.newEventDate = events;
  }

  /**
   * Event click modal show
   */
  handleEventClick(clickInfo: EventClickArg) {
    this.editEvent = clickInfo.event;

    setTimeout(() => {
      (document.querySelector(".event-details") as HTMLElement).style.display = "block";
      (document.querySelector(".event-form") as HTMLElement).style.display = "none";

      document.getElementById('btn-delete-event')?.classList.remove('d-none');

      var editbtn = document.querySelector('#edit-event-btn') as HTMLAreaElement;
      editbtn.innerHTML = 'edit';

      (document.getElementById('btn-save-event') as HTMLElement).setAttribute("hidden", "true");

      var modaltitle = document.querySelector('.modal-title') as HTMLAreaElement;
      modaltitle.innerHTML = this.editEvent.title

      var startdate = document.getElementById('event-start-date-tag') as HTMLAreaElement;
      startdate.innerHTML = this.editEvent.start

      var payment = document.getElementById("event-payment-tag") as HTMLAreaElement;
      payment.innerHTML = this.editEvent.extendedProps['payment']

      var location = document.getElementById('event-location-tag') as HTMLAreaElement;
      location.innerHTML = this.editEvent.extendedProps['location']

      var description = document.getElementById('event-description-tag') as HTMLAreaElement;
      description.innerHTML = this.editEvent.extendedProps['description']
    }, 0);

    this.formData = this.formBuilder.group({
      title: clickInfo.event.title,
      category: clickInfo.event.classNames[0],
      location: clickInfo.event.extendedProps['location'],
      description: clickInfo.event.extendedProps['description'],
      date: clickInfo.event.start,
      start: (clickInfo.event.start ? clickInfo.event.start : ''),
      end: (clickInfo.event.end ? clickInfo.event.end : ''),
      payment: clickInfo.event.extendedProps['payment'],
    });
    this.editmodalShow = true;
  }

  /**
 * Event Data Get
 */
  get form() {
    return this.formData.controls;
  }
  /**
    * Events bind in calander
    * @param events events
    */
  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }


  showeditEvent() {
    if (document.querySelector('#edit-event-btn')?.innerHTML == 'cancel') {
      this.editmodalShow = false;
    } else {
      (document.querySelector(".event-details") as HTMLElement).style.display = "none";
      (document.querySelector(".event-form") as HTMLElement).style.display = "block";
      (document.getElementById('btn-save-event') as HTMLElement).removeAttribute("hidden");
      var modalbtn = document.querySelector('#btn-save-event') as HTMLAreaElement;
      modalbtn.innerHTML = "Update Event"
      var editbtn = document.querySelector('#edit-event-btn') as HTMLAreaElement;
      editbtn.innerHTML = 'cancel'
    }
  }
  /**
  * Close event modal
  */
  closeEventModal() {
    this.formData = this.formBuilder.group({
      title: '',
      category: '',
      location: '',
      description: '',
      date: '',
      start: '',
      end: '',
      payment: ''
    });
    this.editmodalShow = false;
  }

  /**
   * Save the event
   */
  saveEvent() {
    if (document.querySelector('#btn-save-event')?.innerHTML == 'Add Event') {
      if (this.formData.valid) {
        const className = this.formData.get('category')!.value;
        const title = this.formData.get('title')!.value;
        const location = this.formData.get('location')!.value;
        const description = this.formData.get('description')!.value
        const date = this.formData.get('date')!.value
        const starttime = this.formData.get('start')!.value;
        const endtime = this.formData.get('end')!.value;
        const yy = new Date(date).getFullYear();
        const mm = new Date(date).getMonth() + 1;
        const dd = new Date(date).getDate();

        const start = new Date(starttime).toTimeString().split(' ')[0];
        // start.setHours((starttime.split(' ')[0]).split(':')[0]);
        // start.setMinutes((starttime.split(' ')[0]).split(':')[1]);
        const end = new Date(endtime).toTimeString().split(' ')[0];;
        // const end = new Date(mm + '-' + dd + '-' + yy);
        // end.setHours((endtime.split(' ')[0]).split(':')[0]);
        // end.setMinutes((endtime.split(' ')[0]).split(':')[1]);
        const calendarApi = this.newEventDate.view.calendar;

        calendarApi.addEvent({
          id: createEventId(),
          title,
          date,
          starttime,
          endtime,
          location,
          description,
          className: className,

        });
        this.formData = this.formBuilder.group({
          title: '',
          category: '',
          location: '',
          description: '',
          date: '',
          start: '',
          end: '',

        });
        this.editmodalShow = false
        this.submitted = true;
      }
    } else {
      this.editEventSave()
    }
  }
  /**
   * save edit event data
   */
  editEventSave() {

    const editTitle = this.formData.get('title')!.value;
    const editCategory = this.formData.get('category')!.value;
    const editdate = this.formData.get('date')!.value;
    const editstart = this.formData.get('date')!.value;
    const editend = this.formData.get('end')!.value;
    const editlocation = this.formData.get('location')!.value;
    const editdescription = this.formData.get('description')!.value;
    const editpayment = this.formData.get('payment')!.value;


    const editId = this.calendarEvents.findIndex(
      (x) => x.id + '' === this.editEvent.id + ''
    );

    this.editEvent.setProp('title', editTitle);
    this.editEvent.setProp('classNames', editCategory);
    this.editEvent.setProp('date', editdate);
    this.editEvent.setProp('start', editdate);
    this.editEvent.setProp('end', editend);
    this.editEvent.setProp('location', editlocation);
    this.editEvent.setProp('description', editdescription);
    this.editEvent.setProp('payment', editpayment);

    this.calendarEvents[editId] = {
      // ...this.editEvent,
      allDay: false,
      title: editTitle,
      id: this.editEvent.id,
      classNames: editCategory,
      start: editstart,
    };
    this.formData = this.formBuilder.group({
      title: '',
      category: '',
      location: '',
      description: '',
      date: '',
      start: '',
      end: '',

    });
    this.editmodalShow = false
  }

  /**
   * Delete event
   */
  deleteEventData() {
    this.editEvent.remove();
    this.formData = this.formBuilder.group({
      title: '',
      category: '',
      location: '',
      description: '',
      date: '',
      start: '',
      end: ''
    });
    this.editmodalShow = false
  }
}