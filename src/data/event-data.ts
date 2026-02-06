import { IEventDT } from "@/types/event-d-t";

export const university_classic_event_data: IEventDT[] = [
  {
    id: 1,
    title: "Oil & Gas Fire Protection Systems",
    location:
      "Fire Foam Monitors, Rim seal fire protection, Inert gas fire suppression",
    image: "/assets/img/event/pinch_valves111.png",
    linkText: "",
  },
  {
    id: 2,
    title: "Oil & Gas Fluid Handling Equipment",
    location: "Ball valves, Pump and valve diaphragms",
    image: "/assets/img/event/metal_expanion_joints1.png",
    linkText: "",
  },
  {
    id: 3,
    title: "Oil & Gas Sealing Solutions",
    location:
      "High-performance gaskets, advanced diaphragms, Metal expansion joints.",
    image: "/assets/img/event/remote_asset_monitoring1.png",
    linkText: "",
  },
];

export const kids_event_data: IEventDT[] = [
  {
    id: 5,
    title: "Oil & Gas Safety & Compliance Conference",
    image: "/assets/img/event/event-3-thumb-1.jpg",
    location: "United States",
    linkText: "",
  },
  {
    id: 6,
    image: "/assets/img/event/event-3-thumb-2.jpg",
    title: "Global Oil & Gas Operations Summit",
    location: "United States",
    linkText: "",
  },
  {
    id: 7,
    image: "/assets/img/event/event-3-thumb-3.jpg",
    title: "Future Technologies in Oil & Gas Industry",
    location: "United States",
    linkText: "",
  },
];

export const high_school_events: IEventDT[] = [
  {
    id: 8,
    title: "Oil & Gas Industrial Innovation Expo",
    location: "United States",
    image: "/assets/img/event/event-4-thumb-1.jpg",
    linkText: "",
  },
  {
    id: 9,
    title: "Oil & Gas Equipment & Engineering Fair",
    location: "United States",
    image: "/assets/img/event/event-4-thumb-2.jpg",
    linkText: "",
  },
  {
    id: 10,
    title: "Oil & Gas Technology Summit 2024",
    location: "United States",
    image: "/assets/img/event/event-4-thumb-3.jpg",
    linkText: "",
  },
];

export const event_data = [
  {
    id: 11,
    date: { day: "08", month: "November", year: 2024 },
    title: "Oil & Gas Industry Safety Workshop",
    time: "10:00 AM - 5:00 PM",
    location: "United States",
    image: "/assets/img/event/event/eventpic1.jpg",
    linkText: "Read More",
  },
  {
    id: 12,
    date: { day: "08", month: "November", year: 2024 },
    title: "Global Oil & Gas Industry Expo",
    time: "11:00 AM - 4:00 PM",
    location: "United States",
    image: "/assets/img/event/event/eventpic2.jpg",
    linkText: "Read More",
  },
  {
    id: 13,
    date: { day: "08", month: "November", year: 2024 },
    title: "Oil & Gas Engineering Innovations Forum",
    time: "9:00 AM - 3:00 PM",
    location: "United States",
    image: "/assets/img/event/event/eventpic3.jpg",
    linkText: "Read More",
  },
  {
    id: 14,
    date: { day: "08", month: "November", year: 2024 },
    title: "Oil & Gas Digital Transformation Forum",
    time: "10:00 AM - 6:00 PM",
    location: "United States",
    image: "/assets/img/event/event/eventpic4.jpg",
    linkText: "Read More",
  },
  {
    id: 15,
    date: { day: "08", month: "November", year: 2024 },
    title: "Oil & Gas Asset Management Workshop",
    time: "2:00 PM - 5:00 PM",
    location: "United States",
    image: "/assets/img/event/event/eventpic6.jpg",
    linkText: "Read More",
  },
  {
    id: 16,
    date: { day: "08", month: "November", year: 2024 },
    title: "Oil & Gas Industry Safety Workshop",
    time: "2:00 PM - 5:00 PM",
    location: "United States",
    image: "/assets/img/event/event/eventpic4.jpg",
    linkText: "Read More",
  },
  {
    id: 17,
    date: { day: "08", month: "November", year: 2024 },
    title: "International Oil & Gas Trade Fair",
    time: "11:00 AM - 4:00 PM",
    location: "United States",
    image: "/assets/img/event/event/eventpic7.jpg",
    linkText: "Read More",
  },
  {
    id: 18,
    title: "Our Projects",
    date: { day: "08", month: "November", year: 2024 },
    location: "Engineering Excellence in Action",
    image: "/assets/img/event/event/eventpic1.jpg",
    linkText: "Read More",
    link: "/projects",
  },
  {
    id: 19,
    title: "Gallery",
    date: { day: "08", month: "November", year: 2024 },
    location: "Explore Our Work & Moments",
    image: "/assets/img/about/4/erith_dubai_run.jpeg",
    linkText: "Read More",
    link: "/gallery",
  },
  {
    id: 20,
    title: "Follow Us on LinkedIn",
    date: { day: "08", month: "November", year: 2024 },
    location: "Stay Updated with Our Latest News",
    image: "/assets/img/blog/blog-stories/linkedin-2.JPEG",
    linkText: "Read More",
    link: "https://www.linkedin.com/company/erith-global/",
  },
  // {
  //   id: 13,
  //   date: { day: "08", month: "November", year: 2024 },
  //   title: "Advanced Solutions for Oil & Gas Industry",
  //   time: "9:00 AM - 3:00 PM",
  //   location: "United States",
  //   image: "/assets/img/event/event/eventpic8.jpg",
  //   linkText: "Read More",
  // },
];

export const sidebar_data: IEventDT[] = [
  {
    id: 18,
    title: "Our Projects",

    location: "United States",
    image: "/assets/img/event/event/eventpic1.jpg",
    linkText: "Read More",
  },
  {
    id: 19,
    title: "Gallery",
    location: "United States",
    image: "/assets/img/event/event/eventpic2.jpg",
    linkText: "Read More",
  },
  {
    id: 20,
    title: "Follow Us on LinkedIn",

    location: "United States",
    image: "/assets/img/event/event/eventpic3.jpg",
    linkText: "Read More",
  },
];

export const all_events = [
  ...university_classic_event_data,
  ...kids_event_data,
  ...high_school_events,
  ...event_data,
  ...sidebar_data,
];
