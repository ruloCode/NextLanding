import { ciudades } from "./ciudadesCOL";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const keyJWT = new TextEncoder().encode(process.env.JWT_SECRET);

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const currentYear = new Date().getFullYear();

export const COLdate = () => {
  const date = new Date();
  const colombianDate = new Date(
    date.toLocaleString("en-US", { timeZone: "America/Bogota" })
  );

  const currentYear = colombianDate.getFullYear();

  const formattedDate = colombianDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  const formattedTime24hr = colombianDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  const formattedTime12hr = colombianDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });

  return {
    currentYear,
    formattedDate,
    formattedTime24hr,
    formattedTime12hr
  };
};

export const departmentNames = Object.keys(ciudades).sort();

export const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const validateBirthDay = (date) => {
  const today = new Date();

  const splittedDate = date.split("/");
  const day = parseInt(splittedDate[0], 10);
  const month = parseInt(splittedDate[1], 10) - 1;
  const year = parseInt(splittedDate[2], 10);

  const inputDate = new Date(year, month, day);

  return inputDate < today;
};

export const formattedBirthDay = (DD, MM, YYYY) =>
  `${DD.padStart(2, "0")}/${MM.padStart(2, "0")}/${YYYY}`;

export const formattedDate = (date, showYear = false, showMonth = false) => {
  let splittedDate;

  if (date === "today") {
    const today = new Date();
    const todayDD = today.getDate();
    const todayMM = today.getMonth() + 1;
    const todayYYYY = today.getFullYear();

    const formattedDay = todayDD < 10 ? `0${todayDD}` : todayDD;
    const formattedMonth = todayMM < 10 ? `0${todayMM}` : todayMM;

    splittedDate = [formattedDay, formattedMonth, todayYYYY];
  } else if (date) {
    splittedDate = date.split("/");
  } else {
    return "Invalid Date";
  }

  if (splittedDate.length !== 3) {
    return "Invalid Date Format";
  }

  const nDate = new Date(splittedDate[2], splittedDate[1] - 1, splittedDate[0]);

  const DD = nDate.getDate();
  const MM = showMonth
    ? nDate.toLocaleString("es-ES", { month: "long" })
    : nDate.toLocaleString("es-ES", { month: "short" });
  const YYYY = nDate.getFullYear();

  if (showMonth) {
    return `${DD} de ${MM}`;
  }
  return showYear ? `${DD} ${MM} ${YYYY}` : `${DD} ${MM}`;
};

export const formattedHour = (time24) => {
  // Parse the input time string
  const timeArray = time24.split(":");
  const hours = parseInt(timeArray[0], 10);
  const minutes = parseInt(timeArray[1], 10);

  // Create a Date object and set the hours and minutes
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);

  // Format the time in 12-hour format with AM/PM
  const time12 = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });

  return time12;
};

export const convertTo24Hour = (time12h) => {
  const [time, period] = time12h.split(" ");
  const [hours, minutes] = time.split(":");

  let hours24 = parseInt(hours, 10);

  if (period === "PM" && hours24 < 12) {
    hours24 += 12;
  } else if (period === "AM" && hours24 === 12) {
    hours24 = 0;
  }

  return `${hours24.toString().padStart(2, "0")}:${minutes}`;
};

export const formattedPrice = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0
  }).format(price);

export const convertGmtDate = (dateGmt) =>
  new Date(dateGmt).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

export const getDayNumber = (date) => {
  const splittedDate = date?.split("/");
  const nDate = new Date(splittedDate[2], splittedDate[1] - 1, splittedDate[0]);

  const DD = nDate.getDate();

  return DD;
};

export const getCityById = (id) => {
  let city = null;
  let department = null;
  for (let i = 0; i < Object.keys(ciudades).length; i++) {
    department = Object.keys(ciudades)[i];
    const cityFound = ciudades[department].find((element) => element.id === id);
    if (cityFound) {
      city = cityFound;
      break;
    }
  }
  return { ...city, department };
};

export const deleteFromLocalStorage = (name) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.removeItem(name);
  }
};

export const saveInLocalStorage = (name, obj) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(name, JSON.stringify(obj));
  }
};

export const removeAccents = (str) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const maskInformation = (input, type) => {
  let censoredResult;

  if (!type) return input.replace(/[a-zA-ZáéíóúÁÉÍÓÚ]/g, "*");

  if (type === "name") {
    const words = input.split(" ");

    // Process each word in the array
    const censoredWords = words.map((word) => {
      // Replace all characters in the word, except the first one, with '*'
      const censoredPart = word.length > 1 ? "*".repeat(word.length - 1) : "";

      // Combine the first letter with the censored part
      return word.charAt(0) + censoredPart;
    });

    // Join the censored words back into a string
    censoredResult = censoredWords.join(" ");
  }

  if (type === "id") {
    const firstTwo = input.slice(0, 1);
    const lastTwo = input.slice(-2);

    // Replace the middle digits with asterisks
    const censoredMiddle = "*".repeat(input.length - 3);

    // Construct the censored ID number
    censoredResult = `${firstTwo}${censoredMiddle}${lastTwo}`;
  }

  if (type === "email") {
    const [username, domain] = input.split("@");

    // Censor username (show only the first letter)
    const censoredUsername =
      username.charAt(0) + "*".repeat(username.length - 1);

    // Combine censored username and original domain
    censoredResult = `${censoredUsername}@${domain}`;
  }

  if (type === "phone") {
    const firstTwo = input.slice(0, 1);
    const lastTwo = input.slice(-2);

    // Censor the middle digits
    const censoredMiddle = input.slice(1, -2).replace(/\d/g, "*");

    // Combine the censored parts
    censoredResult = firstTwo + censoredMiddle + lastTwo;
  }

  return censoredResult;
};

export const groupByChunks = (array, chunkSize) => {
  const chunks = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const group = array.slice(i, i + chunkSize);
    chunks.push(group);
  }

  return chunks;
};

export const sha256Hash = async (inputString) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(inputString);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
};

export const sortByFirstCharOrNum = (data) => {
  return data.sort((a, b) => {
    const aFirstCharOrNum = a.label.match(/\d+|[a-zA-Z]/)[0];
    const bFirstCharOrNum = b.label.match(/\d+|[a-zA-Z]/)[0];

    // If both first characters or numbers are digits, compare them numerically
    if (!isNaN(aFirstCharOrNum) && !isNaN(bFirstCharOrNum)) {
      return parseInt(aFirstCharOrNum) - parseInt(bFirstCharOrNum);
    }

    // If both first characters or numbers are letters, compare them alphabetically
    if (isNaN(aFirstCharOrNum) && isNaN(bFirstCharOrNum)) {
      return aFirstCharOrNum.localeCompare(bFirstCharOrNum);
    }

    // If one is a digit and the other is a letter, consider the digit as smaller
    return isNaN(aFirstCharOrNum) ? 1 : -1;
  });
};

export const analyzeSubdomainUrl = (urlSub) => {
  // console.log(urlSub, "urlSub1");
  const baseDomains = ["localhost:3000", "www", "dev", "qa", "stage"];
  const alternativeDomains = ["hogar", "suscripciones", "inmediatos", "regalo"];

  let subdomain = null;
  let isMain = false;

  // console.log(!baseDomains.includes(urlSub));
  // console.log(alternativeDomains.includes(urlSub));

  if (!baseDomains.includes(urlSub) && alternativeDomains.includes(urlSub)) {
    subdomain = urlSub;
  } else {
    isMain = true;
  }

  return {
    subdomain,
    isMain
  };
};
