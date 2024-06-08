import {
  Android,
  Browser,
  Download,
  People,
  Privacy,
  Puzzale,
  Keypad,
  Location,
  Messages,
  Unlimiteddata,
  Settings,
  Simple,
  Instant,
  ContectBook,
  Messages2,
  Location2,
  Locateicon,
  Trackicon,
  Unlimited,
  Track,
  Multiple,
  Protect,
  Money,
  Private,
} from "./Icons";
import { Facebook, Insta, Linkedin, Twiter } from "../common/Icons";

export const items = [
  {
    img: <Puzzale />,
    title: "compatible for every phone",
    description:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
  },
  {
    img: <Browser />,
    title: "Covers all networks",
    description:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
  },
  {
    img: <Download />,
    title: "No installation required",
    description:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
  },
  {
    img: <Privacy />,
    title: "Totally private",
    description:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
  },
];
export const advantages = [
  {
    icon: <Instant />,
    title: "Instant location lookups",
    description:
      "Check the location of your registered phones whenever you choose. Add up to 5 phones to your account.",
  },
  {
    icon: <Android />,
    title: "Android & iPhone compatible",
    description:
      "Our service works with any Android or iPhone device, and takes just minutes to set up.",
  },
  {
    icon: <Simple />,
    title: "Simple to use",
    description:
      "Our service has been designed to be simple to use. Just follow our walkthrough wizard to locate your phone.",
  },
  {
    icon: <People />,
    title: "Keep your family safe",
    description:
      "Keep track of your family using our tools. Know that your children or elderly relatives are safe.",
  },
];

export const trackerdata = [
  {
    img: <Settings />,
    description:
      "Cell Tracker runs on all phones and configurations, of all brands",
  },

  {
    img: <Location />,
    description: "Grab real-time location as precise coordinates",
  },
  {
    img: <Messages />,
    description:
      "Customize the message you want the recipient to recieve. Or use the one suggested by default",
  },

  {
    img: <Keypad />,
    description: "Any mobile number in the world can be tracked",
  },

  {
    img: <Unlimiteddata />,
    title: "No installation required",
    description: "Send unlimited geo-location requests",
  },
];

export const locatedata = [
  {
    img: <Locateicon />,
    title: "Locate the people important to you, from any web device",
    description:
      "Family will always be number one and keeping them safe has never been more important. Locateaphone.com allows you to keep track of up to 5 mobile phones, providing you with accurate location information from any web enabled device. Keep them safe without being invasive.",
  },

  {
    img: <Trackicon />,
    title: "Accurate location info for any phone on any network.",
    description:
      "Instantly track the location of a mobile phone at any time. No apps, no downloads, Locateaphone.com works with any Android or iPhone device. Locateaphone.com uses a range of different tools to find the location of a phone. Our unique phone location walkthrough process will determine the best tools to use for each situation.",
  },
];

export const worksData = [
  {
    icon: <ContectBook />,
    title: "Provide target phone number",
    description:
      "Enter the mobile number you want to locate in the provided field.",
  },
  {
    icon: <Messages2 />,
    title: "Customize the message",
    description:
      "Create a message that will make them approve access to their location. You can always choose the one by default. Specify sender name.",
  },
  {
    icon: <Location2 />,
    title: "Receive their precise location",
    description:
      "Get notification as soon as GEOfinder locates the pesron on a map. View their accurate position.",
  },
];
// 24 HOURS TRIAL LIST
export const trialList = [
  { icon: <Unlimited />, title: "Unlimited location searches" },
  { icon: <Track />, title: "Track up to 5 phones" },
  { icon: <Multiple />, title: "Multiple ways to locate a phone" },
  { icon: <Protect />, title: "Protect your family" },
  { icon: <Money />, title: "14 day money back guarantee" },
  { icon: <Private />, title: "Private & confidential" },
];

// footer

export const links = [
  { path: "home", landingText: "Home", otherText: "Help" },
  {
    path: "how-it-works",
    landingText: "How It Works",
    otherText: "Contact us",
  },
  { path: "features", landingText: "Features", otherText: "Found Phone" },
];

// socialmeadia
export const socialLinks = [
  { href: "https://in.linkedin.com/", icon: <Linkedin /> },
  { href: "https://www.instagram.com/", icon: <Insta /> },
  { href: "https://www.facebook.com/", icon: <Facebook /> },
  { href: "https://x.com/?lang=en", icon: <Twiter /> },
];

// countercode

export const countryCodes = [
  { value: "91", label: "+91" },
  { value: "82", label: "+82" },
  { value: "92", label: "+92" },
  { value: "71", label: "+71" },
  { value: "10", label: "+10" },
];
