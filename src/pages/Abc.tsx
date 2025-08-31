"use client";

import React, { useState, useEffect } from "react";
import {
  Camera,
  Video,
  Edit,
  ArrowRight,
  Check,
  Star,
  Calendar,
  DollarSign,
  Users,
  Award,
  Clock,
  Send,
  CheckCircle,
  Package,
  Lightbulb,
  Music,
  Mic,
  Monitor,
  Zap,
  AlertTriangle,
  Play,
} from "lucide-react";
import { useAppContext } from "@/contexts/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Demo_work from "@/components/sub_Components/Demo_work";
type EventTimeSlot = {
  eventDate: string;
  startTime: string;
  endTime: string;
};

type BookingData = {
  category: string;
  package: string;
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  startTime: string;
  endTime: string;
  selectedCameras: string[];
  preferredCameraModel: string;
  videoQuality: string;
  selectedServices: string[];
  selectedDeliverables: string[];
  albumTypes: string[];
  message: string;
  totalAmount: string;
  eventTimes: EventTimeSlot[];
};

const HiringPage: React.FC = () => {
  const {
    darkMode,
    toggleDarkMode,
    mobileMenuOpen,
    setMobileMenuOpen,
    navigateToPage,
    currentPage,
  } = useAppContext();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [selectedCategory, setSelectedCategory] = useState("event");
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [showPriceCalculator, setShowPriceCalculator] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    category: "",
    package: "",
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    location: "",
    startTime: "",
    endTime: "",
    selectedCameras: [],
    preferredCameraModel: "any-camera",
    videoQuality: "hd",
    selectedServices: [],
    selectedDeliverables: [],
    albumTypes: [],
    message: "",
    totalAmount: "",
    eventTimes: [{ eventDate: "", startTime: "", endTime: "" }],
  });
  console.log(bookingData);

  // Helper function to calculate time difference in hours
  const calculateDuration = (startTime: string, endTime: string): number => {
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

  const handleEventTimeChange = (
    index: number,
    field: keyof EventTimeSlot,
    value: string
  ) => {
    const updatedTimes = [...bookingData.eventTimes];
    updatedTimes[index][field] = value;
    setBookingData((prev) => ({
      ...prev,
      eventTimes: updatedTimes,
    }));
  };

  const addEventTimeBlock = () => {
    setBookingData((prev) => ({
      ...prev,
      eventTimes: [
        ...prev.eventTimes,
        { eventDate: "", startTime: "", endTime: "" },
      ],
    }));
  };

  const removeEventTimeBlock = (index: number) => {
    const updatedTimes = [...bookingData.eventTimes];
    updatedTimes.splice(index, 1);
    setBookingData((prev) => ({
      ...prev,
      eventTimes: updatedTimes,
    }));
  };

  const totalDuration = bookingData.eventTimes.reduce(
    (sum, slot) => sum + calculateDuration(slot.startTime, slot.endTime),
    0
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const [dateError, setDateError] = useState("");
  const [durationHours, setDurationHours] = useState(0);

  const categories = [
    {
      id: "event",
      icon: Package,
      title: "Complete Event",
      description: "Full event coverage with customizable services",
    },
    {
      id: "editor",
      icon: Edit,
      title: "Editor",
      description: "Skilled post-production specialists",
    },
    {
      id: "cameraman",
      icon: Camera,
      title: "Cameraman",
      description: "Professional videographers and photographers",
    },
    {
      id: "equipment",
      icon: Video,
      title: "Equipment",
      description: "High-end cameras and production gear",
    },
  ];

  // Enhanced service options with individual pricing
  const serviceOptions = {
    event: [
      {
        id: "photography",
        name: "Photography",
        price: 8000,
        icon: Camera,
        description: "Professional event photography",
      },
      {
        id: "videography",
        name: "Videography",
        price: 12000,
        icon: Video,
        description: "High-quality video recording",
      },
      {
        id: "stage-lighting",
        name: "Stage Lighting",
        price: 15000,
        icon: Lightbulb,
        description: "Professional stage lighting setup",
      },
      {
        id: "umbrella-lighting",
        name: "Umbrella Lighting",
        price: 6000,
        icon: Lightbulb,
        description: "Portable umbrella lighting",
      },
      {
        id: "sound-system",
        name: "Sound System",
        price: 10000,
        icon: Mic,
        description: "Professional audio equipment",
      },
      {
        id: "live-streaming",
        name: "Live Streaming",
        price: 18000,
        icon: Monitor,
        description: "Real-time event streaming",
      },
      {
        id: "drone-coverage",
        name: "Drone Coverage",
        price: 20000,
        icon: Video,
        description: "Aerial photography and videography",
      },
      {
        id: "photo-album",
        name: "Photo Album",
        price: 5000,
        icon: Camera,
        description: "Professional photo album creation",
      },
      {
        id: "video-editing",
        name: "Video Editing",
        price: 8000,
        icon: Edit,
        description: "Post-production video editing",
      },
      {
        id: "music-video",
        name: "Music Video Production",
        price: 25000,
        icon: Music,
        description: "Complete music video production",
      },
      {
        id: "wedding-outdoor",
        name: "Wedding Outdoor Shooting",
        price: 15000,
        icon: Camera,
        description: "Outdoor wedding coverage",
      },
    ],
    cameraman: [
      {
        id: "wedding-photographer",
        name: "Wedding Photographer",
        price: 15000,
        icon: Camera,
        description: "Specialized wedding photography",
      },
      {
        id: "event-videographer",
        name: "Event Videographer",
        price: 18000,
        icon: Video,
        description: "Professional event videography",
      },
      {
        id: "portrait-photographer",
        name: "Portrait Photographer",
        price: 12000,
        icon: Camera,
        description: "Professional portrait sessions",
      },
      {
        id: "commercial-photographer",
        name: "Commercial Photographer",
        price: 22000,
        icon: Camera,
        description: "Commercial and product photography",
      },
      {
        id: "documentary-filmmaker",
        name: "Documentary Filmmaker",
        price: 25000,
        icon: Video,
        description: "Documentary style filming",
      },
    ],
    equipment: [
      {
        id: "dslr-camera",
        name: "DSLR Camera Kit",
        price: 3000,
        icon: Camera,
        description: "Professional DSLR with lenses",
      },
      {
        id: "cinema-camera",
        name: "Cinema Camera",
        price: 8000,
        icon: Video,
        description: "4K cinema camera setup",
      },
      {
        id: "lighting-kit",
        name: "Professional Lighting Kit",
        price: 5000,
        icon: Lightbulb,
        description: "Complete lighting setup",
      },
      {
        id: "audio-equipment",
        name: "Audio Equipment",
        price: 4000,
        icon: Mic,
        description: "Professional microphones and recorders",
      },
      {
        id: "drone",
        name: "Drone with Operator",
        price: 12000,
        icon: Video,
        description: "Professional drone with certified operator",
      },
      {
        id: "gimbal-stabilizer",
        name: "Gimbal Stabilizer",
        price: 2000,
        icon: Video,
        description: "Professional camera stabilization",
      },
    ],
    editor: [
      {
        id: "basic-editing",
        name: "Basic Video Editing",
        price: 5000,
        icon: Edit,
        description: "Standard video editing and cuts",
      },
      {
        id: "advanced-editing",
        name: "Advanced Editing",
        price: 10000,
        icon: Edit,
        description: "Advanced editing with effects",
      },
      {
        id: "color-grading",
        name: "Color Grading",
        price: 6000,
        icon: Edit,
        description: "Professional color correction",
      },
      {
        id: "motion-graphics",
        name: "Motion Graphics",
        price: 12000,
        icon: Edit,
        description: "Custom animations and graphics",
      },
      {
        id: "sound-design",
        name: "Sound Design",
        price: 8000,
        icon: Mic,
        description: "Professional audio post-production",
      },
    ],
  };

  // Camera options with pricing
  const cameraOptions = [
    {
      id: "dslr-basic",
      name: "DSLR Basic",
      price: 2000,
      description: "Canon EOS 90D, Nikon D7500",
    },
    {
      id: "dslr-pro",
      name: "DSLR Professional",
      price: 4000,
      description: "Canon 5D Mark IV, Nikon D850",
    },
    {
      id: "mirrorless-basic",
      name: "Mirrorless Basic",
      price: 3000,
      description: "Sony A7III, Canon R6",
    },
    {
      id: "mirrorless-pro",
      name: "Mirrorless Professional",
      price: 6000,
      description: "Sony A7R V, Canon R5",
    },
    {
      id: "cinema-basic",
      name: "Cinema Basic",
      price: 8000,
      description: "BlackMagic 6K, Sony FX3",
    },
    {
      id: "cinema-pro",
      name: "Cinema Professional",
      price: 15000,
      description: "RED Komodo, ARRI Alexa Mini",
    },
  ];

  // Professional camera models
  const cameraModels = [
    { value: "any-camera", label: "Any Camera (Default)", multiplier: 1.0 },
    { value: "canon-r5", label: "Canon R5", multiplier: 1.3 },
    { value: "canon-r6", label: "Canon R6", multiplier: 1.2 },
    { value: "sony-a7iii", label: "Sony A7III", multiplier: 1.1 },
    { value: "sony-a7iv", label: "Sony A7IV", multiplier: 1.25 },
    { value: "sony-fx3", label: "Sony FX3", multiplier: 1.4 },
    { value: "nikon-z6", label: "Nikon Z6", multiplier: 1.15 },
    { value: "nikon-z9", label: "Nikon Z9", multiplier: 1.35 },
    { value: "blackmagic-6k", label: "BlackMagic 6K", multiplier: 1.3 },
    { value: "red-komodo", label: "RED Komodo", multiplier: 1.5 },
    { value: "arri-alexa", label: "ARRI Alexa Mini", multiplier: 1.6 },
  ];

  // Video quality options
  const videoQualityOptions = [
    { value: "hd", label: "HD (1080p)", multiplier: 1.0 },
    { value: "4k", label: "4K (2160p)", multiplier: 1.2 },
    { value: "8k", label: "8K (4320p)", multiplier: 1.4 },
  ];

  // Deliverables options
  const deliverableOptions = [
    { id: "edited-photos", name: "Edited Photos (200-500)", price: 5000 },
    { id: "raw-photos", name: "Raw Photos (All)", price: 3000 },
    { id: "highlight-video", name: "Highlight Video (2-3 min)", price: 8000 },
    { id: "full-video", name: "Full Event Video", price: 12000 },
    { id: "teaser-video", name: "Teaser Video (30-60 sec)", price: 4000 },
    { id: "social-media-clips", name: "Social Media Clips", price: 3000 },
    { id: "drone-footage", name: "Drone Footage", price: 6000 },
    { id: "live-stream-recording", name: "Live Stream Recording", price: 5000 },
  ];

  // Enhanced album options with multiple selection
  const albumOptions = [
    {
      id: "digital-basic",
      name: "Digital Album (Basic)",
      price: 0,
      description: "Online gallery with download links",
    },
    {
      id: "digital-premium",
      name: "Digital Album (Premium)",
      price: 2000,
      description: "Enhanced online gallery with slideshow",
    },
    {
      id: "printed-standard",
      name: "Printed Album (Standard)",
      price: 8000,
      description: "50 pages, 8x10 inch, matte finish",
    },
    {
      id: "printed-premium",
      name: "Printed Album (Premium)",
      price: 15000,
      description: "100 pages, 12x12 inch, glossy finish",
    },
    {
      id: "printed-luxury",
      name: "Printed Album (Luxury)",
      price: 25000,
      description: "150 pages, 14x14 inch, leather bound",
    },
    {
      id: "canvas-prints",
      name: "Canvas Prints (Set of 5)",
      price: 12000,
      description: "Professional canvas prints of best shots",
    },
    {
      id: "photo-frames",
      name: "Photo Frames (Set of 10)",
      price: 8000,
      description: "Premium frames with selected photos",
    },
    {
      id: "usb-drive",
      name: "Custom USB Drive",
      price: 3000,
      description: "Branded USB with all photos and videos",
    },
  ];


  //packages
  const packages = {
    cameraman: [
      {
        id: "cam-basic",
        name: "Basic Cameraman",
        price: "₹12,000/day",
        duration: "Half Day (4 hours)",
        features: [
          "Professional cameraman",
          "Basic camera setup (DSLR/Mirrorless)",
          "Standard lens kit",
          "Basic lighting equipment",
          "Memory cards included",
          "Raw footage delivery",
        ],
        popular: false,
      },
      {
        id: "cam-pro",
        name: "Professional Cameraman",
        price: "₹20,000/day",
        duration: "Full Day (8 hours)",
        features: [
          "Experienced lead cameraman",
          "Cinema camera (RED/ARRI)",
          "Premium lens collection",
          "Professional lighting setup",
          "Audio recording equipment",
          "Assistant cameraman",
          "Same-day highlight reel",
          "Cloud backup included",
        ],
        popular: true,
      },
      {
        id: "cam-premium",
        name: "Premium Cameraman",
        price: "₹32,000/day",
        duration: "Multi-Day Project",
        features: [
          "Award-winning cinematographer",
          "Full cinema camera rig",
          "Specialized equipment (drones, gimbals)",
          "Multi-camera setup",
          "Professional crew (3-5 people)",
          "Live streaming capability",
          "On-site director",
          "Priority post-production",
          "Dedicated project manager",
        ],
        popular: false,
      },
    ],
    equipment: [
      {
        id: "eq-basic",
        name: "Starter Equipment Kit",
        price: "₹6,000/day",
        duration: "Daily Rental",
        features: [
          "DSLR Camera (Canon/Sony)",
          "2-3 Prime lenses",
          "Tripod and monopod",
          "Basic LED light panel",
          "64GB memory cards",
          "Camera bag and accessories",
        ],
        popular: false,
      },
      {
        id: "eq-pro",
        name: "Professional Equipment Kit",
        price: "₹16,000/day",
        duration: "Daily/Weekly Rental",
        features: [
          "Cinema camera (BlackMagic/Sony FX)",
          "Professional lens set",
          "Gimbal stabilizer",
          "Professional lighting kit",
          "Wireless audio system",
          "External monitor",
          "Multiple batteries and chargers",
          "Professional carrying cases",
        ],
        popular: true,
      },
      {
        id: "eq-premium",
        name: "Cinema Equipment Package",
        price: "₹40,000/day",
        duration: "Weekly/Monthly Rental",
        features: [
          "RED/ARRI cinema camera",
          "Master Prime lens set",
          "Professional rigging system",
          "Advanced lighting setup",
          "Wireless follow focus",
          "Director's monitor setup",
          "Professional audio gear",
          "Drone with operator",
          "Technical support included",
        ],
        popular: false,
      },
    ],
    editor: [
      {
        id: "ed-basic",
        name: "Basic Video Editing",
        price: "₹4,000/hour",
        duration: "1-3 Days Turnaround",
        features: [
          "Video cutting and trimming",
          "Basic color correction",
          "Simple transitions",
          "Text and title cards",
          "Music synchronization",
          "Export in HD (1080p)",
          "2 rounds of revisions",
        ],
        popular: false,
      },
      {
        id: "ed-pro",
        name: "Professional Video Editing",
        price: "₹8,000/hour",
        duration: "3-7 Days Turnaround",
        features: [
          "Advanced video editing",
          "Professional color grading",
          "Motion graphics and animations",
          "Audio mixing and cleanup",
          "Multi-camera synchronization",
          "Custom transitions and effects",
          "4K export capability",
          "Unlimited revisions",
          "Project file delivery",
        ],
        popular: true,
      },
      {
        id: "ed-premium",
        name: "Cinema Post-Production",
        price: "₹12,000/hour",
        duration: "1-2 Weeks Turnaround",
        features: [
          "Hollywood-grade editing",
          "Advanced VFX and compositing",
          "Professional sound design",
          "Custom motion graphics",
          "Film-quality color grading",
          "Multi-format delivery",
          "8K capability",
          "Dedicated project manager",
          "Rush delivery available",
          "Full project archive",
        ],
        popular: false,
      },
    ],
    event: [
      {
        id: "event-basic",
        name: "Essential Event Package",
        price: "Custom Pricing",
        duration: "Based on Selected Services",
        features: [
          "Choose your required services",
          "Professional team assignment",
          "Flexible service combinations",
          "Custom pricing based on selection",
          "Quality guarantee",
          "Professional delivery",
        ],
        popular: false,
      },
      {
        id: "event-pro",
        name: "Premium Event Package",
        price: "Custom Pricing",
        duration: "Based on Selected Services",
        features: [
          "All available services to choose from",
          "Priority team assignment",
          "Advanced equipment options",
          "Flexible timing and duration",
          "Custom service combinations",
          "Dedicated project coordinator",
        ],
        popular: true,
      },
      {
        id: "event-luxury",
        name: "Luxury Event Package",
        price: "Custom Pricing",
        duration: "Full Service Coverage",
        features: [
          "Complete service selection available",
          "Premium team and equipment",
          "Unlimited service combinations",
          "VIP treatment and priority",
          "Dedicated event manager",
          "Same-day delivery options",
        ],
        popular: false,
      },
    ],
  };

  const getEventTypeOptions = () => {
    switch (selectedCategory) {
      case "cameraman":
        return [
          { value: "basic", label: "Basic Cameraman" },
          { value: "moderate", label: "Moderate Cameraman" },
          { value: "experienced", label: "Experienced Cameraman" },
        ];
      case "equipment":
        return [
          { value: "basic", label: "Basic Equipment" },
          { value: "professional", label: "Professional Equipment" },
          { value: "premium", label: "Premium Equipment" },
        ];
      case "editor":
        return [
          { value: "basic", label: "Basic Editor" },
          { value: "moderate", label: "Moderate Editor" },
          { value: "experienced", label: "Experienced Editor" },
        ];
      case "event":
        return [
          { value: "wedding", label: "Wedding" },
          { value: "party", label: "Party" },
          { value: "reception", label: "Reception" },
          { value: "corporate", label: "Corporate Event" },
          { value: "commercial", label: "Commercial" },
          { value: "music-video", label: "Music Video" },
          { value: "documentary", label: "Documentary" },
          { value: "other", label: "Other" },
        ];
      default:
        return [];
    }
  };

  useEffect(() => {
    // const duration = calculateDuration(
    //   bookingData.startTime,
    //   bookingData.endTime
    // );
    setDurationHours(totalDuration);

    if (
      selectedCategory &&
      (bookingData.selectedServices.length > 0 ||
        bookingData.selectedCameras.length > 0)
    ) {
      let totalPrice = 0;

      // Base service costs
      const services =
        serviceOptions[selectedCategory as keyof typeof serviceOptions] || [];
      bookingData.selectedServices.forEach((serviceId) => {
        const service = services.find((s) => s.id === serviceId);
        if (service) {
          totalPrice += service.price;
        }
      });

      // Camera costs
      bookingData.selectedCameras.forEach((cameraId) => {
        const camera = cameraOptions.find((c) => c.id === cameraId);
        if (camera) {
          totalPrice += camera.price;
        }
      });

      // Team size multiplier
      // const photographers = parseInt(bookingData.numPhotographers) || 1;
      // const videographers = parseInt(bookingData.numVideographers) || 1;
      // const totalTeam = photographers + videographers;

      // if (totalTeam > 2) {
      //   totalPrice *= 1 + (totalTeam - 2) * 0.3; // 30% per additional team member
      // }

      // Camera model premium
      const cameraModel = cameraModels.find(
        (c) => c.value === bookingData.preferredCameraModel
      );
      if (cameraModel) {
        totalPrice *= cameraModel.multiplier;
      }

      // Video quality premium
      const videoQuality = videoQualityOptions.find(
        (q) => q.value === bookingData.videoQuality
      );
      if (videoQuality) {
        totalPrice *= videoQuality.multiplier;
      }

      // Duration multiplier (base 8 hours, 15% per additional hour)
      if (totalDuration > 8) {
        totalPrice *= 1 + (totalDuration - 8) * 0.15;
      }

      // Deliverables costs
      bookingData.selectedDeliverables.forEach((deliverableId) => {
        const deliverable = deliverableOptions.find(
          (d) => d.id === deliverableId
        );
        if (deliverable) {
          totalPrice += deliverable.price;
        }
      });

      // Album costs
      bookingData.albumTypes.forEach((albumId) => {
        const album = albumOptions.find((a) => a.id === albumId);
        if (album) {
          totalPrice += album.price;
        }
      });

      setCalculatedPrice(Math.round(totalPrice));
    } else {
      setCalculatedPrice(0);
    }
  }, [
    bookingData.selectedServices,
    bookingData.selectedCameras,
    // bookingData.numPhotographers,
    // bookingData.numVideographers,
    bookingData.preferredCameraModel,
    bookingData.videoQuality,
    bookingData.selectedDeliverables,
    bookingData.albumTypes,
    bookingData.startTime,
    bookingData.endTime,
    selectedCategory,
  ]);

  // Validate booking date (minimum 1 day gap)
  const validateDate = (selectedDate: string) => {
    if (!selectedDate) {
      setDateError("Event date is required for booking.");
      return false;
    }

    const today = new Date();
    const bookingDate = new Date(selectedDate);
    const timeDiff = bookingDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (daysDiff < 1) {
      setDateError(
        "Emergency bookings not allowed. Minimum 1 day advance booking required."
      );
      return false;
    } else {
      setDateError("");
      return true;
    }
  };

  const handleBooking = (packageId: string) => {
    setSelectedPackage(packageId);
    console.log("asdfgh")
    const bookingElement = document.getElementById("booking-form");
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "eventDate") {
      validateDate(value);
    }

    setBookingData({
      ...bookingData,
      [name]: value,
    });
  };

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    const updatedServices = checked
      ? [...bookingData.selectedServices, serviceId]
      : bookingData.selectedServices.filter((id) => id !== serviceId);

    setBookingData({
      ...bookingData,
      selectedServices: updatedServices,
    });
  };

  const handleCameraChange = (cameraId: string, checked: boolean) => {
    const updatedCameras = checked
      ? [...bookingData.selectedCameras, cameraId]
      : bookingData.selectedCameras.filter((id) => id !== cameraId);

    setBookingData({
      ...bookingData,
      selectedCameras: updatedCameras,
    });
  };

  const handleDeliverableChange = (deliverableId: string, checked: boolean) => {
    const updatedDeliverables = checked
      ? [...bookingData.selectedDeliverables, deliverableId]
      : bookingData.selectedDeliverables.filter((id) => id !== deliverableId);

    setBookingData({
      ...bookingData,
      selectedDeliverables: updatedDeliverables,
    });
  };

  const handleAlbumChange = (albumId: string, checked: boolean) => {
    const updatedAlbums = checked
      ? [...bookingData.albumTypes, albumId]
      : bookingData.albumTypes.filter((id) => id !== albumId);

    setBookingData({
      ...bookingData,
      albumTypes: updatedAlbums,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(bookingData);

    // Existing validation...

    // setIsSubmitting(true);

    // try {
    //   const response = await fetch("/api/hiring", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(bookingData),
    //   });

    //   if (!response.ok) {
    //     const { error } = await response.json();
    //     alert(error || "Failed to submit form");
    //     return;
    //   }

    //   setIsSubmitted(true);
    // setBookingData({
    //   name: '',
    //   email: '',
    //   phone: '',
    //   eventType: '',
    //   eventDate: '',
    //   location: '',
    //   startTime: '',
    //   endTime: '',
    //   numPhotographers: '1',
    //   numVideographers: '1',
    //   selectedCameras: [],
    //   preferredCameraModel: 'any-camera',
    //   videoQuality: 'hd',
    //   selectedServices: [],
    //   selectedDeliverables: [],
    //   albumTypes: [],
    //   message: ''
    // })
    //   setTimeout(() => setIsSubmitted(false), 5000);
    // } catch (error) {
    //   console.error("Submission error:", error);
    //   alert("Something went wrong. Please try again.");
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const getFormTitle = () => {
    switch (selectedCategory) {
      case "cameraman":
        return "Book Cameraman";
      case "equipment":
        return "Rent Equipment";
      case "editor":
        return "Hire Editor";
      case "event":
        return "Book Complete Event";
      default:
        return "Book Event";
    }
  };

  const getButtonText = () => {
    switch (selectedCategory) {
      case "cameraman":
        return "Book Cameraman";
      case "equipment":
        return "Rent Equipment";
      case "editor":
        return "Hire Editor";
      case "event":
        return "Book Complete Event";
      default:
        return "Book Event";
    }
  };

  const [openId, setOpenId] = useState<string | null>(null);

  const toggleDetails = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          navigateToPage={navigateToPage}
          currentPage={currentPage}
        />

        <div className="pt-8 min-h-screen bg-white dark:bg-gray-900">
          {/* Header */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Professional Video Services
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-white">
                  Customizable Packages for Every Need
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Choose exactly what you need from our comprehensive range of
                  services. Mix and match to create your perfect package.
                </p>
              </div>
            </div>
          </div>

          {/* Category Selection */}
          <div className="py-4 md:py-12 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-2 sm:px-6 lg:px-8">
              <div
                className="flex justify-center md:mb-10 mb-6
              "
              >
                <div className="grid grid-cols-2 md:grid-cols-4 w-[100%] gap-4 max-w-[800px] bg-gray-100 dark:bg-gray-800 rounded-2xl p-2">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setBookingData((prev) => ({
                            ...prev,
                            category: category.id,
                            selectedServices: [],
                            selectedCameras: [],
                            selectedDeliverables: [],
                            albumTypes: [],
                          }));
                          setShowPriceCalculator(false);
                        }}
                        className={`flex justify-center items-center space-x-2 px-2 py-2 md:py-3 rounded-xl min-h-[65px] md:min-h-[20px] bg-white dark:bg-black transition-all duration-200 font-semibold ${
                          selectedCategory === category.id
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                            : "text-gray-600 bg-slate-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        }`}
                      >
                        <IconComponent className="h-5 w-5" />
                        <span>{category.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Category Info */}
              {/* Price Calculator Button */}
              {/* <div className="text-center mb-4 md:mb-16">
                <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                  {categories.find((cat) => cat.id === selectedCategory)?.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-3">
                  {
                    categories.find((cat) => cat.id === selectedCategory)
                      ?.description
                  }
                </p>

              
                <button
                  onClick={() => setShowPriceCalculator(!showPriceCalculator)}
                  className="inline-flex items-center px-8 py-3  md:py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <DollarSign className="h-5 w-5 mr-2" />
                  {showPriceCalculator
                    ? "Hide Price Calculator"
                    : "Check Service Prices"}
                </button>
              </div> */}

              {/* Price Calculator Section */}
              {/* {showPriceCalculator && (
                <div className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                    Service Pricing Calculator
                  </h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceOptions[
                      selectedCategory as keyof typeof serviceOptions
                    ]?.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <div
                          key={service.id}
                          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                        >
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-800 dark:text-white">
                                {service.name}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                {service.description}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                              ₹{service.price.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-500">
                              per service
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )} */}

              {/* Packages Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                <h3 className="text-2xl md:hidden font-bold text-center mt-8 text-gray-800 dark:text-white">
                  OUR PACKAGES
                </h3>
                {packages[selectedCategory as keyof typeof packages].map(
                  (pkg) => {
                    const isOpen = openId === pkg.id;
                    return (
                      <div
                        key={pkg.id}
                        className={`relative bg-white ring-2 dark:bg-gray-800 rounded-xl m-3 md:mm-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                          pkg.popular
                            ? "ring-blue-500 scale-103"
                            : "dark:ring-white/30 ring-black/10"
                        }`}
                      >
                        {pkg.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-current" />
                              <span>Most Popular</span>
                            </div>
                          </div>
                        )}

                        <div className="p-4 md:p-8">
                          <div className="text-center mb-6">
                            <h3 className="md:text-2xl text-[21px] whitespace-nowrap overflow-hidden text-ellipsis font-bold text-blue-600 dark:text-blue-400">
                              {pkg.name}
                            </h3>

                            {/* Conditional Details */}
                            <div
                              className={`${
                                isOpen ? "block" : "hidden"
                              } lg:block`}
                            >
                              {/* <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                {pkg.price}
                              </div> */}
                              <div className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {pkg.duration}
                              </div>

                              <ul className="space-y-3 mb-8">
                                {pkg.features.map((feature, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start space-x-3"
                                  >
                                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                                      {feature}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          {/* Toggle Button - hidden on lg+ */}
                          <button
                            onClick={() => toggleDetails(pkg.id)}
                            className="lg:hidden w-full py-2 px-6 mb-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            {isOpen ? "Hide Details" : "Show Details"}
                          </button>

                          <button
                            onClick={() => handleBooking(pkg.id)}
                            className="w-full py-2 md:py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                          >
                            <Calendar className="h-5 w-5" />
                            <span>Book Now</span>
                            <ArrowRight className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>

              <div className="mb-4">
                {/* Booking Section */}
                <div
                  id="booking-form"
                  className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {getFormTitle()}
                      </span>
                    </h3>
                    {getFormTitle() == "Book Complete Event" && (
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        Fill out the form below and select your required
                        services
                      </p>
                    )}

                    {getFormTitle() !== "Book Complete Event" && (
                      <p className="text-lg text-red-600 dark:text-red-600">
                        This Service is Currently not Available
                      </p>
                    )}
                  </div>
                  {getFormTitle() == "Book Complete Event" && (
                    <form
                      onSubmit={handleSubmit}
                      className="max-w-4xl mx-auto space-y-8"
                    >
                      {/* Basic Information */}
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                        <h4 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                          Basic Information
                        </h4>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={bookingData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={bookingData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                              placeholder="your@email.com"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={bookingData.phone}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                              placeholder="+91 98765 43210"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="eventType"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                              {selectedCategory === "event"
                                ? "Event Type"
                                : `Type of ${
                                    categories.find(
                                      (cat) => cat.id === selectedCategory
                                    )?.title
                                  }`}{" "}
                              *
                            </label>
                            <select
                              id="eventType"
                              name="eventType"
                              value={bookingData.eventType}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                            >
                              <option value="">
                                Select{" "}
                                {selectedCategory === "event"
                                  ? "event type"
                                  : `type of ${selectedCategory}`}
                              </option>
                              {getEventTypeOptions().map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="mt-4">
                          <label
                            htmlFor="location"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                          >
                            Event Location *
                          </label>
                          <input
                            type="text"
                            id="location"
                            name="location"
                            value={bookingData.location}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                            placeholder="Event venue or address"
                          />
                        </div>
                      </div>

                      {/* Event Details */}

                      {}
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                          Event Schedule
                        </h2>

                        {bookingData.eventTimes.map((slot, index) => {
                          const duration = calculateDuration(
                            slot.startTime,
                            slot.endTime
                          );

                          return (
                            <div
                              key={index}
                              className="grid grid-cols-3 gap-4 mb-6 pb-6 relative bg-white dark:bg-gray-800 p-4"
                            >
                              {/* Event Date */}
                              <div>
                                <label
                                  htmlFor={`eventDate-${index}`}
                                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                  Event Date *
                                </label>
                                <input
                                  type="date"
                                  id={`eventDate-${index}`}
                                  name={`eventDate-${index}`}
                                  value={slot.eventDate}
                                  min={
                                    new Date(Date.now() + 86400000)
                                      .toISOString()
                                      .split("T")[0]
                                  }
                                  onChange={(e) =>
                                    handleEventTimeChange(
                                      index,
                                      "eventDate",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                  required
                                />
                              </div>

                              {/* Start Time */}
                              <div>
                                <label
                                  htmlFor={`startTime-${index}`}
                                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                  Start Time *
                                </label>
                                <input
                                  type="time"
                                  id={`startTime-${index}`}
                                  name={`startTime-${index}`}
                                  value={slot.startTime}
                                  onChange={(e) =>
                                    handleEventTimeChange(
                                      index,
                                      "startTime",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                  required
                                />
                              </div>

                              {/* End Time */}
                              <div>
                                <label
                                  htmlFor={`endTime-${index}`}
                                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                  End Time *
                                </label>
                                <input
                                  type="time"
                                  id={`endTime-${index}`}
                                  name={`endTime-${index}`}
                                  value={slot.endTime}
                                  onChange={(e) =>
                                    handleEventTimeChange(
                                      index,
                                      "endTime",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                  required
                                />
                              </div>

                              {/* Duration Display */}
                              {duration > 0 && (
                                <div className="md:col-span-3 text-sm text-blue-700 dark:text-blue-300 mt-2">
                                  Duration: {duration} hour
                                  {duration !== 1 ? "s" : ""}
                                </div>
                              )}

                              {/* Remove Button */}
                              {bookingData.eventTimes.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => removeEventTimeBlock(index)}
                                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
                                  title="Remove this slot"
                                >
                                  ✕
                                </button>
                              )}
                            </div>
                          );
                        })}

                        {/* Add Another Slot Button */}
                        <div
                          className={`text-right mb-4 md:flex  ${
                            totalDuration ? "justify-between" : "justify-end"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={addEventTimeBlock}
                            className="text-sm md:order-2 order-1 text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            + Add another date/time slot
                          </button>

                          {/* Total Duration */}
                          {totalDuration > 0 && (
                            <div className="text-right md:order-1 order-2 font-extralight text-gray-700 dark:text-gray-200">
                              Total Event Duration: {totalDuration.toFixed(2)}{" "}
                              hours
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Professional Requirements */}
                      {bookingData.eventTimes.length  && (
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                          <h4 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                            Professional Requirements
                          </h4>

                          {/* Team Size */}
                          {/* <div className="grid md:grid-cols-2 gap-6 mb-6"> */}
                            {/* <div>
                              <label
                                htmlFor="numPhotographers"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                              >
                                Number of Photographers *
                              </label>
                              <select
                                id="numPhotographers"
                                name="numPhotographers"
                                value={bookingData.numPhotographers}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                              >
                                <option value="1">1 Photographer</option>
                                <option value="2">2 Photographers</option>
                                <option value="3">3 Photographers</option>
                                <option value="4">4 Photographers</option>
                                <option value="5">5+ Photographers</option>
                              </select>
                            </div> */}
                            {/* <div>
                              <label
                                htmlFor="numVideographers"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                              >
                                Number of Videographers *
                              </label>
                              <select
                                id="numVideographers"
                                name="numVideographers"
                                value={bookingData.numVideographers}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                              >
                                <option value="1">1 Videographer</option>
                                <option value="2">2 Videographers</option>
                                <option value="3">3 Videographers</option>
                                <option value="4">4 Videographers</option>
                                <option value="5">5+ Videographers</option>
                              </select>
                            </div> */}
                          {/* </div> */}

                          {/* Camera Model & Quality */}
                          {/* <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <label
                                htmlFor="preferredCameraModel"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                              >
                                Preferred Camera Model
                              </label>
                              <select
                                id="preferredCameraModel"
                                name="preferredCameraModel"
                                value={bookingData.preferredCameraModel}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                              >
                                {cameraModels.map((camera) => (
                                  <option
                                    key={camera.value}
                                    value={camera.value}
                                  >
                                    {camera.label}{" "}
                                    {camera.multiplier > 1 &&
                                      `(+${(
                                        (camera.multiplier - 1) *
                                        100
                                      ).toFixed(0)}%)`}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label
                                htmlFor="videoQuality"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                              >
                                Video Quality
                              </label>
                              <select
                                id="videoQuality"
                                name="videoQuality"
                                value={bookingData.videoQuality}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                              >
                                {videoQualityOptions.map((quality) => (
                                  <option
                                    key={quality.value}
                                    value={quality.value}
                                  >
                                    {quality.label}{" "}
                                    {quality.multiplier > 1 &&
                                      `(+${(
                                        (quality.multiplier - 1) *
                                        100
                                      ).toFixed(0)}%)`}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div> */}

                          {/* Services Selection */}
                          <div className="mb-6">
                            <h5 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                              Required Services
                            </h5>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {serviceOptions[
                                selectedCategory as keyof typeof serviceOptions
                              ]?.map((service) => {
                                const IconComponent = service.icon;
                                const isSelected =
                                  bookingData.selectedServices.includes(
                                    service.id
                                  );
                                return (
                                  <label
                                    key={service.id}
                                    className={`flex items-center space-x-3 p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                                      isSelected
                                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                        : "border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600"
                                    }`}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={isSelected}
                                      onChange={(e) =>
                                        handleServiceChange(
                                          service.id,
                                          e.target.checked
                                        )
                                      }
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <IconComponent className="h-5 w-5 text-blue-600" />
                                    <div className="flex-1">
                                      <div className="font-medium text-gray-800 dark:text-white">
                                        {service.name}
                                      </div>
                                      {/* <div className="text-sm text-blue-600 dark:text-blue-400">
                                        ₹{service.price.toLocaleString()}
                                      </div> */}
                                    </div>
                                  </label>
                                );
                              })}
                            </div>
                          </div>

                          {/* Camera Equipment Selection */}
                    {
                      bookingData.selectedServices && (
                        <div> camera required</div>
                      )
                    }
                          <div className="mb-6">
                            <h5 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                              Camera Equipment (Optional)
                            </h5>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {cameraOptions.map((camera) => {
                                const isSelected =
                                  bookingData.selectedCameras.includes(
                                    camera.id
                                  );
                                return (
                                  <label
                                    key={camera.id}
                                    className={`flex items-center space-x-3 p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                                      isSelected
                                        ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                                        : "border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600"
                                    }`}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={isSelected}
                                      onChange={(e) =>
                                        handleCameraChange(
                                          camera.id,
                                          e.target.checked
                                        )
                                      }
                                      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                                    />
                                    <Camera className="h-5 w-5 text-purple-600" />
                                    <div className="flex-1">
                                      <div className="font-medium text-gray-800 dark:text-white">
                                        {camera.name}
                                      </div>
                                      <div className="text-xs text-gray-600 dark:text-gray-400">
                                        {camera.description}
                                      </div>
                                      <div className="text-sm text-purple-600 dark:text-purple-400">
                                        ₹{camera.price.toLocaleString()}
                                      </div>
                                    </div>
                                  </label>
                                );
                              })}
                            </div>
                          </div>

                          {/* Deliverables */}
                          <div className="mb-6">
                            <h5 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                              Deliverables
                            </h5>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {deliverableOptions.map((deliverable) => {
                                const isSelected =
                                  bookingData.selectedDeliverables.includes(
                                    deliverable.id
                                  );
                                return (
                                  <label
                                    key={deliverable.id}
                                    className={`flex items-center space-x-3 p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                                      isSelected
                                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                                        : "border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-600"
                                    }`}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={isSelected}
                                      onChange={(e) =>
                                        handleDeliverableChange(
                                          deliverable.id,
                                          e.target.checked
                                        )
                                      }
                                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                                    />
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                    <div className="flex-1">
                                      <div className="font-medium text-gray-800 dark:text-white">
                                        {deliverable.name}
                                      </div>
                                      <div className="text-sm text-green-600 dark:text-green-400">
                                        ₹{deliverable.price.toLocaleString()}
                                      </div>
                                    </div>
                                  </label>
                                );
                              })}
                            </div>
                          </div>

                          {/* Album Types - Multiple Selection */}
                          <div className="mb-6">
                            <h5 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                              Album Options (Multiple Selection)
                            </h5>
                            <div className="grid md:grid-cols-2 gap-4">
                              {albumOptions.map((album) => {
                                const isSelected =
                                  bookingData.albumTypes.includes(album.id);
                                return (
                                  <label
                                    key={album.id}
                                    className={`flex items-start space-x-3 p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                                      isSelected
                                        ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                                        : "border-gray-200 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-600"
                                    }`}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={isSelected}
                                      onChange={(e) =>
                                        handleAlbumChange(
                                          album.id,
                                          e.target.checked
                                        )
                                      }
                                      className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 mt-1"
                                    />
                                    <Award className="h-5 w-5 text-orange-600 mt-1" />
                                    <div className="flex-1">
                                      <div className="font-medium text-gray-800 dark:text-white">
                                        {album.name}
                                      </div>
                                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                        {album.description}
                                      </div>
                                      <div className="text-sm text-orange-600 dark:text-orange-400">
                                        {album.price === 0
                                          ? "Free"
                                          : `₹${album.price.toLocaleString()}`}
                                      </div>
                                    </div>
                                  </label>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Price Display */}
                      {calculatedPrice > 0 && (
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-700">
                          <div className="text-center mb-4">
                            <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                              Estimated Total Price
                            </h4>
                            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                              ₹{calculatedPrice.toLocaleString()}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                              *Final price may vary based on specific
                              requirements and location
                            </p>
                          </div>

                          {/* Price Breakdown */}
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Included:
                              </h5>
                              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                                {/* <li>
                                  • {bookingData.numPhotographers}{" "}
                                  Photographer(s)
                                </li> */}
                                {/* <li>
                                  • {bookingData.numVideographers}{" "}
                                  Videographer(s)
                                </li> */}
                                <li>
                                  • {durationHours.toFixed(1)} hours coverage
                                </li>
                                <li>
                                  •{" "}
                                  {
                                    cameraModels.find(
                                      (c) =>
                                        c.value ===
                                        bookingData.preferredCameraModel
                                    )?.label
                                  }
                                </li>
                                <li>
                                  •{" "}
                                  {
                                    videoQualityOptions.find(
                                      (q) =>
                                        q.value === bookingData.videoQuality
                                    )?.label
                                  }
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Selected Services:
                              </h5>
                              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                                {bookingData.selectedServices.length > 0 && (
                                  <li>
                                    • {bookingData.selectedServices.length}{" "}
                                    Service(s)
                                  </li>
                                )}
                                {bookingData.selectedCameras.length > 0 && (
                                  <li>
                                    • {bookingData.selectedCameras.length}{" "}
                                    Camera(s)
                                  </li>
                                )}
                                {bookingData.selectedDeliverables.length >
                                  0 && (
                                  <li>
                                    • {bookingData.selectedDeliverables.length}{" "}
                                    Deliverable(s)
                                  </li>
                                )}
                                {bookingData.albumTypes.length > 0 && (
                                  <li>
                                    • {bookingData.albumTypes.length} Album
                                    Option(s)
                                  </li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </form>
                  )}
                </div>

                {/* Additional Info */}
                <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <DollarSign className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        Duration-Based Pricing
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Fair pricing based on actual event duration. Extended
                        events get proportional pricing adjustments.
                      </p>
                    </div>
                    <div>
                      <Calendar className="h-12 w-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        Mandatory Advance Booking
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Minimum 1 day advance booking required with date
                        selection mandatory for quality assurance.
                      </p>
                    </div>
                    <div>
                      <Check className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        Multiple Options Available
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Choose multiple cameras, album types, and deliverables
                        to create your perfect package.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Demo_work />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default HiringPage;
