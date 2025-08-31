export type EventTimeSlot = {
  eventDate: string;
  startTime: string;
  endTime: string;
};

export type PersonRole = {
  eventName: string;
  role: "groom" | "bride" | "birthday-person" | "other" | "babyName";
  name: string;
};


export type BookingData = {
  details: {
    category: string;
    package: string;
    name: string;
    email: string;
    phone: string;
    eventType: string;
    pinCode: string;
    location: string;
    dist:string;
    state:string;
    nearArea:string;
    areaType:string,
    forPersons: PersonRole[];
    message: string;
    totalAmount: number; // use number
    photoVideoUse: boolean;
    eventTimes: { eventDate: string; startTime: string; endTime: string }[];
  };

  selectedService: { id: string; price: number }[];
  requiredServices: {
    photography: {
      photoTypes: { id: string; price: number }[];
      albumTypes: { id: string; price: number }[];
    };

    videography: {
      videoCategory: { id: "classic" | "cinematic" | "standard"; price: number };
      videoQuality: { id: "1080p" | "4k" | "8k" | ""; price: number };
      durationMinutes: number;
      extraVideos: { id: string; price: number }[];
    };

    preWedding: { id: string; price: number }[];
    stageLights: { id: string; price: number }[];
  };
};



export type SelectedServices = {
  photography: boolean;
  videography: boolean;
  weddingOutdoor: boolean;
  droneCoverage: boolean;
  stageLighting: boolean;
  liveStreaming: boolean;
};



export type PhotoService = {
  photoTypes: string[];
  albumTypes: string[];
};

export type VideographyService = {
  videoCategory: string;
  videoType: string;
  videoQuality: string;
  durationMinutes: number;
  extraVideos: string[];
};

export type RequiredServices = {
  photoservice: PhotoService;
  videography: VideographyService;
};

export type PriceInfo = {
  mrp: number;
  discount: number;
  finalPrice: number;
};


export const initialBookingData :BookingData = {
  details: {
    category: "event",
    package: "event-premium",
    name: "",
    email: "",
    phone: "",
    eventType: "",
    pinCode: "",
    dist: "",
    state: "",
    nearArea: "",
    areaType: "urban",
    location: "",
    forPersons: [],
    message: "",
    totalAmount: 0,
    photoVideoUse: true,
    eventTimes: [{ eventDate: "", startTime: "", endTime: "" }],
  },

  requiredServices: {
    photography: {
      photoTypes: [],
      albumTypes: [],
    },
    videography: {
      videoCategory: { id: "standard", price: 0 },
      videoQuality: { id: "1080p", price: 0 },
      durationMinutes: 10,
      extraVideos: [],
    },
    preWedding: [],
    stageLights: [],
  },
  selectedService: [],
};



    // Helper function to calculate time difference in hours
   export const calculateDuration = (startTime: string, endTime: string): number => {
    if (!startTime || !endTime) return 0;

    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);

    const start = new Date();
    const end = new Date();
    start.setHours(startHour, startMinute, 0);
    end.setHours(endHour, endMinute, 0);

    if (end <= start) end.setDate(end.getDate() + 1);

    const duration = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
    return parseFloat(duration.toFixed(2));
  };



















export type Item = { id: string; price: number } ;

export type ExpandablePriceProps = {
  title: string; 
  items: Item | Item[]; 
};
