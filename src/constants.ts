import { IAirport } from "./components/Orders/types";

export const basePath =
  "https://028f6f62-8162-41c5-a8bf-28355a25292f.mock.pstmn.io";

export const airports = [
  {
    name: "Ottawa Macdonald-Cartier International Airport",
    code: "YOW",
    city: "Ottawa",
    country: "CA",
    country_full: "Canada",
    updated_at: 1678208582,
    offset: -5,
    latitude: 45.32083,
    longitude: -75.672775,
    disputed: false,
  },
  {
    name: "Billy Bishop Toronto City Centre Airport",
    code: "YTZ",
    city: "Toronto",
    country: "CA",
    country_full: "Canada",
    updated_at: 1678354183,
    offset: -5,
    latitude: 43.632023,
    longitude: -79.39585,
    disputed: false,
  },
  {
    name: "Lester B. Pearson International Airport",
    code: "YYZ",
    city: "Toronto",
    country: "CA",
    country_full: "Canada",
    updated_at: 1678353703,
    offset: -5,
    latitude: 43.681583,
    longitude: -79.61146,
    disputed: false,
  },
  {
    name: "Tampa International Airport",
    code: "TPA",
    city: "Tampa",
    country: "US",
    country_full: "United States",
    updated_at: 1677537004,
    offset: -5,
    latitude: 27.97987,
    longitude: -82.535416,
    disputed: false,
  },
  {
    name: "London Heathrow Airport",
    code: "LHR",
    city: "London",
    country: "GB",
    country_full: "United Kingdom",
    updated_at: 1678374962,
    offset: 0,
    latitude: 51.469604,
    longitude: -0.453566,
    disputed: false,
  },
  {
    name: "Montreal / Pierre Elliott Trudeau International Airport",
    code: "YUL",
    city: "Montréal",
    country: "CA",
    country_full: "Canada",
    updated_at: 1678351982,
    offset: -5,
    latitude: 45.457714,
    longitude: -73.74991,
    disputed: false,
  },
  {
    name: "Ronald Reagan Washington National Airport",
    code: "DCA",
    city: "Washington",
    country: "US",
    country_full: "United States",
    updated_at: 1677556804,
    offset: -5,
    latitude: 38.853436,
    longitude: -77.04346,
    disputed: false,
  },
] as IAirport[];

export const trips = {
  "c0031207-4cbb-4781-b44e-9b8d8ca3ebb0": {
    id: "c0031207-4cbb-4781-b44e-9b8d8ca3ebb0",
    flights: [
      {
        aircraft: {
          name: "Canadair (Bombardier) Regional Jet 200",
          code: "CR2",
          model: "CR2",
          image: null,
          group: null,
        },
        aita_order: {
          provider: "amadeus",
          order_id: "2UOQIK",
          agent: null,
          booking_reference: "2UOQIK",
          airline_locator: "2UOQIK",
          outbound: [
            "2ebc35df-ed4e-4733-a718-3e8f38ae58ca",
            "938c9612-c3f3-498f-9888-f101eccb27f9",
          ],
          inbound: [],
          outbound_segments: [
            {
              id: "2ebc35df-ed4e-4733-a718-3e8f38ae58ca",
              origin: "DCA",
              destination: "YUL",
              number: "8824",
              carrier: "AC",
              airline: {
                code: "AC",
                name: "Air Canada",
                logo_url:
                  "https://storage.googleapis.com/iappintheair.appspot.com/Airlines/SquaredLogos/AC.png",
              },
              duration: 100,
              departure_date: 1677686400,
              arrival_date: 1677692400,
              equipment: {
                code: "CR2",
                name: "Canadair (Bombardier) Regional Jet 200",
              },
              departure_terminal: "1",
              arrival_terminal: null,
            },
            {
              id: "938c9612-c3f3-498f-9888-f101eccb27f9",
              origin: "YUL",
              destination: "LHR",
              number: "864",
              carrier: "AC",
              airline: {
                code: "AC",
                name: "Air Canada",
                logo_url:
                  "https://storage.googleapis.com/iappintheair.appspot.com/Airlines/SquaredLogos/AC.png",
              },
              duration: 410,
              departure_date: 1677698400,
              arrival_date: 1677741000,
              equipment: {
                code: "333",
                name: "Airbus A330-300",
              },
              departure_terminal: null,
              arrival_terminal: "2",
            },
          ],
          inbound_segments: [],
          price: 490.8,
          currency: "USD",
          segments: {
            "2ebc35df-ed4e-4733-a718-3e8f38ae58ca": {
              priceClass: {},
              code: "V",
              cabin: "BASIC",
            },
            "938c9612-c3f3-498f-9888-f101eccb27f9": {
              priceClass: {},
              code: "V",
              cabin: "BASIC",
            },
          },
          passengers: [
            {
              passenger_id: "PAX-2",
              title: "MS",
              first_name: "ARKADY",
              middle_name: null,
              last_name: "DVORKOVICH",
              gender: "Male",
              birth_date: "1980-12-14",
              passenger_type: "ADT",
              email: "deararkasha@gmail.com",
              phone: "79101020999",
              ffp: null,
              ssr: null,
              document: null,
            },
          ],
          services: [],
          order_type: "personal",
          status: 1,
        },
        airline: {
          id: 27020,
          name: "Air Canada",
          code: "AC",
          iata: "AC",
          icao: "ACA",
          logo_url:
            "https://storage.googleapis.com/iappintheair.appspot.com/Airlines/SquaredLogos/AC.png",
          alliance: "SA",
          checkin_url:
            "https://www.aircanada.com/us/en/aco/home/fly/check-in.html",
          checkin_available: true,
          website: "https://www.aircanada.com/en/",
          email: "",
          phone: "+1-514-393-3333, +1-514-393-3333",
          twitter: "AirCanada",
          baggage_rules_url:
            "https://www.aircanada.com/en/travelinfo/airport/baggage/index.html",
          checkin_close_int: 60,
          checkin_close_dom: 45,
          checkin_open_hrs: 24,
          boarding_till_mins: 20,
        },
      },
      {
        aircraft: {
          name: "Airbus A330-300",
          code: "333",
          model: "333",
          image: null,
          group: "Airbus A330",
        },
        aita_order: {
          provider: "amadeus",
          order_id: "2UOQIK",
          agent: null,
          booking_reference: "2UOQIK",
          airline_locator: "2UOQIK",
          outbound: [
            "2ebc35df-ed4e-4733-a718-3e8f38ae58ca",
            "938c9612-c3f3-498f-9888-f101eccb27f9",
          ],
          inbound: [],
          outbound_segments: [
            {
              id: "2ebc35df-ed4e-4733-a718-3e8f38ae58ca",
              origin: "DCA",
              destination: "YUL",
              number: "8824",
              carrier: "AC",
              airline: {
                code: "AC",
                name: "Air Canada",
                logo_url:
                  "https://storage.googleapis.com/iappintheair.appspot.com/Airlines/SquaredLogos/AC.png",
              },
              duration: 100,
              departure_date: 1677686400,
              arrival_date: 1677692400,
              equipment: {
                code: "CR2",
                name: "Canadair (Bombardier) Regional Jet 200",
              },
              departure_terminal: "1",
              arrival_terminal: null,
            },
            {
              id: "938c9612-c3f3-498f-9888-f101eccb27f9",
              origin: "YUL",
              destination: "LHR",
              number: "864",
              carrier: "AC",
              airline: {
                code: "AC",
                name: "Air Canada",
                logo_url:
                  "https://storage.googleapis.com/iappintheair.appspot.com/Airlines/SquaredLogos/AC.png",
              },
              duration: 410,
              departure_date: 1677698400,
              arrival_date: 1677741000,
              equipment: {
                code: "333",
                name: "Airbus A330-300",
              },
              departure_terminal: null,
              arrival_terminal: "2",
            },
          ],
          inbound_segments: [],
          price: 490.8,
          currency: "USD",
          segments: {
            "2ebc35df-ed4e-4733-a718-3e8f38ae58ca": {
              priceClass: {},
              code: "V",
              cabin: "BASIC",
            },
            "938c9612-c3f3-498f-9888-f101eccb27f9": {
              priceClass: {},
              code: "V",
              cabin: "BASIC",
            },
          },
          passengers: [
            {
              passenger_id: "PAX-2",
              title: "MS",
              first_name: "ARKADY",
              middle_name: null,
              last_name: "DVORKOVICH",
              gender: "Male",
              birth_date: "1980-12-14",
              passenger_type: "ADT",
              email: "deararkasha@gmail.com",
              phone: "79101020999",
              ffp: null,
              ssr: null,
              document: null,
            },
          ],
          services: [],
          order_type: "personal",
          status: 1,
        },
        airline: {
          id: 27020,
          name: "Air Canada",
          code: "AC",
          iata: "AC",
          icao: "ACA",
          logo_url:
            "https://storage.googleapis.com/iappintheair.appspot.com/Airlines/SquaredLogos/AC.png",
          alliance: "SA",
          checkin_url:
            "https://www.aircanada.com/us/en/aco/home/fly/check-in.html",
          checkin_available: true,
          website: "https://www.aircanada.com/en/",
          email: "",
          phone: "+1-514-393-3333, +1-514-393-3333",
          twitter: "AirCanada",
          baggage_rules_url:
            "https://www.aircanada.com/en/travelinfo/airport/baggage/index.html",
          checkin_close_int: 60,
          checkin_close_dom: 45,
          checkin_open_hrs: 24,
          boarding_till_mins: 20,
        },
      },
    ],
    departure: 1677704400,
    arrival: 1677741000,
    departure_airport_code: "DCA",
    arrival_airport_code: "LHR",
    deleted: false,
    hotels: [],
  },
  "ce4a0831-dfe2-47df-9f77-dc22fd218667": {
    id: "ce4a0831-dfe2-47df-9f77-dc22fd218667",
    flights: [
      {
        aircraft: {
          name: "Airbus A319",
          code: "319",
          model: "319",
          image: null,
          group: "Airbus A319",
        },
        aita_order: {
          provider: "amadeus",
          order_id: "3FZ8BE",
          agent: null,
          booking_reference: "3FZ8BE",
          airline_locator: "3FZ8BE",
          outbound: ["1db4ef43-be88-42f2-a7b7-481a7090adb4"],
          inbound: [],
          outbound_segments: [
            {
              id: "1db4ef43-be88-42f2-a7b7-481a7090adb4",
              origin: "TPA",
              destination: "YOW",
              number: "1695",
              carrier: "AC",
              airline: {
                code: "AC",
                name: "Air Canada",
                logo_url:
                  "https://storage.googleapis.com/iappintheair.appspot.com/Airlines/SquaredLogos/AC.png",
              },
              duration: 179,
              departure_date: 1677666300,
              arrival_date: 1677677040,
              equipment: {
                code: "319",
                name: "Airbus A319",
              },
              departure_terminal: null,
              arrival_terminal: null,
            },
          ],
          inbound_segments: [],
          price: 373.95,
          currency: "USD",
          segments: {
            "1db4ef43-be88-42f2-a7b7-481a7090adb4": {
              priceClass: {},
              code: "S",
              cabin: "BASIC",
            },
          },
          passengers: [
            {
              passenger_id: "PAX-2",
              title: "MR",
              first_name: "ARKASHA",
              middle_name: null,
              last_name: "PERS",
              gender: "Male",
              birth_date: "2002-01-25",
              passenger_type: "ADT",
              email: "deararkasha@gmail.com",
              phone: "79101020992",
              ffp: "574745",
              ssr: null,
              document: null,
            },
          ],
          services: [],
          order_type: "personal",
          status: 1,
        },
        airline: {
          id: 27020,
          name: "Air Canada",
          code: "AC",
          iata: "AC",
          icao: "ACA",
          logo_url:
            "https://storage.googleapis.com/iappintheair.appspot.com/Airlines/SquaredLogos/AC.png",
          alliance: "SA",
          checkin_url:
            "https://www.aircanada.com/us/en/aco/home/fly/check-in.html",
          checkin_available: true,
          website: "https://www.aircanada.com/en/",
          email: "",
          phone: "+1-514-393-3333, +1-514-393-3333",
          twitter: "AirCanada",
          baggage_rules_url:
            "https://www.aircanada.com/en/travelinfo/airport/baggage/index.html",
          checkin_close_int: 60,
          checkin_close_dom: 45,
          checkin_open_hrs: 24,
          boarding_till_mins: 20,
        },
      },
    ],
    departure: 1677684300,
    arrival: 1677695040,
    departure_airport_code: "TPA",
    arrival_airport_code: "YOW",
    deleted: false,
    hotels: [],
  },
  "77801d5c-4a22-4716-bc8b-6cd079c07d06": {
    id: "77801d5c-4a22-4716-bc8b-6cd079c07d06",
    flights: [
      {
        aircraft: {
          name: "Airbus A320",
          code: "320",
          model: "320",
          image: null,
          group: "Airbus A320",
        },
        aita_order: {
          provider: "amadeus",
          order_id: "32XBAH",
          agent: null,
          booking_reference: "32XBAH",
          airline_locator: "32XBAH",
          outbound: ["32bbb88d-53cf-4769-adf3-ac0074560340"],
          inbound: ["0d3b66af-f6c0-4ac0-b316-558406013913"],
          outbound_segments: [
            {
              id: "32bbb88d-53cf-4769-adf3-ac0074560340",
              origin: "YOW",
              destination: "YYZ",
              number: "186",
              carrier: "AC",
              airline: {
                code: "AC",
                name: "Air Canada",
                logo_url:
                  "https://storage.googleapis.com/iappintheair.appspot.com/Airlines/SquaredLogos/AC.png",
              },
              duration: 60,
              departure_date: 1678192200,
              arrival_date: 1678195800,
              equipment: null,
              departure_terminal: null,
              arrival_terminal: null,
            },
          ],
          inbound_segments: [
            {
              id: "0d3b66af-f6c0-4ac0-b316-558406013913",
              origin: "YTZ",
              destination: "YOW",
              number: "7710",
              carrier: "AC",
              airline: {
                code: "AC",
                name: "Air Canada",
                logo_url:
                  "https://storage.googleapis.com/iappintheair.appspot.com/Airlines/SquaredLogos/AC.png",
              },
              duration: 59,
              departure_date: 1678292400,
              arrival_date: 1678295940,
              equipment: {
                code: "DH4",
                name: "De Havilland (Bombardier) DHC-8-400 Dash 8Q",
              },
              departure_terminal: null,
              arrival_terminal: null,
            },
          ],
          price: 310.34,
          currency: "USD",
          segments: {
            "32bbb88d-53cf-4769-adf3-ac0074560340": {
              priceClass: {},
              code: "K",
              cabin: "STANDARD",
            },
            "0d3b66af-f6c0-4ac0-b316-558406013913": {
              priceClass: {},
              code: "K",
              cabin: "STANDARD",
            },
          },
          passengers: [
            {
              passenger_id: "PAX-2",
              title: "MR",
              first_name: "ARKADY",
              middle_name: "H",
              last_name: "DVORKOVICH",
              gender: "Male",
              birth_date: "1969-12-14",
              passenger_type: "ADT",
              email: "deararkasha@gmail.com",
              phone: "79101020999",
              ffp: null,
              ssr: "WCHR",
              document: {
                type: "ID",
                number: "R9581",
                country_code: "AF",
                expiry_date: "2047-12-29",
              },
            },
          ],
          services: [],
          order_type: "business",
          status: 1,
        },
        airline: {
          id: 27020,
          name: "Air Canada",
          code: "AC",
          iata: "AC",
          icao: "ACA",
          logo_url:
            "https://storage.googleapis.com/iappintheair.appspot.com/Airlines/SquaredLogos/AC.png",
          alliance: "SA",
          checkin_url:
            "https://www.aircanada.com/us/en/aco/home/fly/check-in.html",
          checkin_available: true,
          website: "https://www.aircanada.com/en/",
          email: "",
          phone: "+1-514-393-3333, +1-514-393-3333",
          twitter: "AirCanada",
          baggage_rules_url:
            "https://www.aircanada.com/en/travelinfo/airport/baggage/index.html",
          checkin_close_int: 60,
          checkin_close_dom: 45,
          checkin_open_hrs: 24,
          boarding_till_mins: 20,
        },
      },
      {
        aircraft: {
          name: "De Havilland (Bombardier) DHC-8-400 Dash 8Q",
          code: "DH4",
          model: "DH4",
          image: null,
          group: null,
        },
        aita_order: {
          provider: "amadeus",
          order_id: "32XBAH",
          agent: null,
          booking_reference: "32XBAH",
          airline_locator: "32XBAH",
          outbound: ["32bbb88d-53cf-4769-adf3-ac0074560340"],
          inbound: ["0d3b66af-f6c0-4ac0-b316-558406013913"],
          outbound_segments: [
            {
              id: "32bbb88d-53cf-4769-adf3-ac0074560340",
              origin: "YOW",
              destination: "YYZ",
              number: "186",
              carrier: "AC",
              airline: {
                code: "AC",
                name: "Air Canada",
                logo_url:
                  "https://storage.googleapis.com/iappintheair.appspot.com/Airlines/SquaredLogos/AC.png",
              },
              duration: 60,
              departure_date: 1678192200,
              arrival_date: 1678195800,
              equipment: null,
              departure_terminal: null,
              arrival_terminal: null,
            },
          ],
          inbound_segments: [
            {
              id: "0d3b66af-f6c0-4ac0-b316-558406013913",
              origin: "YTZ",
              destination: "YOW",
              number: "7710",
              carrier: "AC",
              airline: {
                code: "AC",
                name: "Air Canada",
                logo_url:
                  "https://storage.googleapis.com/iappintheair.appspot.com/Airlines/SquaredLogos/AC.png",
              },
              duration: 59,
              departure_date: 1678292400,
              arrival_date: 1678295940,
              equipment: {
                code: "DH4",
                name: "De Havilland (Bombardier) DHC-8-400 Dash 8Q",
              },
              departure_terminal: null,
              arrival_terminal: null,
            },
          ],
          price: 310.34,
          currency: "USD",
          segments: {
            "32bbb88d-53cf-4769-adf3-ac0074560340": {
              priceClass: {},
              code: "K",
              cabin: "STANDARD",
            },
            "0d3b66af-f6c0-4ac0-b316-558406013913": {
              priceClass: {},
              code: "K",
              cabin: "STANDARD",
            },
          },
          passengers: [
            {
              passenger_id: "PAX-2",
              title: "MR",
              first_name: "ARKADY",
              middle_name: "H",
              last_name: "DVORKOVICH",
              gender: "Male",
              birth_date: "1969-12-14",
              passenger_type: "ADT",
              email: "deararkasha@gmail.com",
              phone: "79101020999",
              ffp: null,
              ssr: "WCHR",
              document: {
                type: "ID",
                number: "R9581",
                country_code: "AF",
                expiry_date: "2047-12-29",
              },
            },
          ],
          services: [],
          order_type: "business",
          status: 1,
        },
        airline: {
          id: 27020,
          name: "Air Canada",
          code: "AC",
          iata: "AC",
          icao: "ACA",
          logo_url:
            "https://storage.googleapis.com/iappintheair.appspot.com/Airlines/SquaredLogos/AC.png",
          alliance: "SA",
          checkin_url:
            "https://www.aircanada.com/us/en/aco/home/fly/check-in.html",
          checkin_available: true,
          website: "https://www.aircanada.com/en/",
          email: "",
          phone: "+1-514-393-3333, +1-514-393-3333",
          twitter: "AirCanada",
          baggage_rules_url:
            "https://www.aircanada.com/en/travelinfo/airport/baggage/index.html",
          checkin_close_int: 60,
          checkin_close_dom: 45,
          checkin_open_hrs: 24,
          boarding_till_mins: 20,
        },
      },
    ],
    departure: 1678210200,
    arrival: 1678313940,
    departure_airport_code: "YOW",
    arrival_airport_code: "YOW",
    deleted: false,
    hotels: [
      {
        date_from: 1678287600,
        date_to: 1680346800,
        guests: 1,
        image_url:
          "https://storage.googleapis.com/iappintheair-test.appspot.com/Users/Hotels/XDYOWAAH",
        name: "Days Inn by Wyndham Ottawa West",
        stars: 2,
        address: "350 moodie dr",
        phone: "1-613-726-1717",
        city: "Ottawa",
        aita_order: {
          provider: "amadeusExpedia",
          hotel_id: "XDYOWAAH",
          order_id: "2MLW36",
          hotel_booking_ref: "7086140673705",
          confirmation_id: "b491ef39-66a0-4a1a-add9-5b9df88435fd",
          pin: null,
          price: 2835.36,
          currency: "USD",
          status: 0,
          date_from: 1678287600,
          date_to: 1680346800,
          guests: 1,
          fare: {
            base: {
              value: 2302.8,
              currency: "USD",
            },
            rate: {
              amount: {
                value: 95.95,
                currency: "USD",
              },
              changes: [
                {
                  date: "2023-03-08",
                  amount: {
                    value: -414.41999999999996,
                    currency: "USD",
                  },
                  frequency: "Day",
                },
              ],
              frequency: "Daily",
            },
            taxes: [],
            total: {
              value: 2835.36,
              currency: "USD",
            },
            policy: {
              cancel:
                "Free cancellation until Mar 7, 2023 7:00 PM (Hotel local time). After that penalty will be 1 night(s) price.",
              cancellationInfos: null,
              cancellationDescription:
                "Free cancellation until Mar 7, 2023 7:00 PM (Hotel local time). After that penalty will be 1 night(s) price.",
            },
            comments: [
              "Прибыт и е: За размещение дополнительных гостей может взиматься доплата в зависимости от внутренних правил отеляПри регистрации по прибытии необходимо предъявить официальное удостоверение личности с фотографией, а также кредитную (или дебетовую) карту или оставить залог наличными на случай возникновения непредвиденных затратВыполнение особых запросов зависит от ситуации на момент регистрации по прибытии и не гарантируется. Может взиматься дополнительная платаЭтот объект оборудован следующими средствами безопасности: детектор дымаПодготовьтесь: перед поездкой ознакомьтесь с актуальными требованиями для путешественников и мерами профилактики COVID-19, действующими в месте назначения. Портье или персонал стойки регистрации встретит гостей по прибытии.",
              "Taxes and Fees: This charge includes estimated amounts the travel service provider (i.e. hotel, car rental company) pays for their taxes, and/or taxes that we pay, to taxing authorities on your booking (including but not limited to sales, occupancy, and value added tax). This amount may also include any amounts charged to us for resort fees, cleaning fees, and other fees and/or a fee we, the hotel supplier and/or the website you booked on, retain as part of the compensation for our and/or their services, which varies based on factors such as location, the amount, and how you booked. For more details, please see the Terms and Conditions. https://developer.expediapartnersolutions.com/terms/en",
            ],
            ratePlan: {
              code: "PRO",
              type: null,
              category: null,
            },
            description:
              "Номер, 2 двуспальные кровати «Квин-сайз», для некурящих-2 двуспальные кровати «Квин-сайз» Бесплатный завтрак Бесплатная самостоятельная парковка Бесплатный Wi-Fi Закрытая распродажа: сэкономьте 10 % Только для участников",
            paymentTerms:
              "By Booking this hotel you accept [Supplier Terms and Conditions](https://developer.expediapartnersolutions.com/terms/en).\n\nThis payment will be processed in the US.",
            prepayRequired: true,
            roomDescription:
              "Номер, 2 двуспальные кровати «Квин-сайз», для некурящих-2 двуспальные кровати «Квин-сайз» Бесплатный завтрак Бесплатная самостоятельная парковка Бесплатный Wi-Fi Закрытая распродажа: сэкономьте 10 % Только для участников",
            nonIncludedTaxes: [
              {
                code: "13",
                title: "Sales tax",
                value: 532.56,
                currency: "USD",
                included: false,
              },
            ],
            allowedPaymentCards: ["DS", "DC", "CA", "AX", "CA", "CA", "VI"],
          },
          key_collection: null,
          booker: {
            email: "deararkasha@gmail.com",
            phone: "+79101020999",
            country: "us",
            last_name: "Dvorkovich",
            first_name: "Arkady",
            businessAccountId: "18c731b4-ede1-436b-b42d-36e1e8e62314",
          },
          is_canceled: false,
          extra_guests: [],
          order_type: "business",
        },
        latitude: 45.32311,
        longitude: -75.83401,
      },
    ],
  },
  "e7025b73-9c81-47be-8fca-a0ae925bd29d": {
    id: "e7025b73-9c81-47be-8fca-a0ae925bd29d",
    flights: [],
    departure: 1686009600,
    arrival: 1686096000,
    departure_airport_code: null,
    arrival_airport_code: null,
    deleted: false,
    updated: 1677517875,
    hotels: [
      {
        date_from: 1686009600,
        date_to: 1686096000,
        guests: 2,
        image_url:
          "https://storage.googleapis.com/iappintheair-test.appspot.com/Users/Hotels/RTMILGRA",
        name: "ibis Milano Ca Granda",
        stars: 3,
        address: "Viale suzzani 13",
        phone: "39/02/66103000",
        city: "Milano",
        aita_order: {
          provider: "amadeusGds",
          hotel_id: "RTMILGRA",
          order_id: "2OVVSW",
          hotel_booking_ref: "1135XF5500",
          confirmation_id: "36d10c73-dbb8-461c-99a7-fd6193e72838",
          pin: null,
          price: 49.08,
          currency: "EUR",
          status: 0,
          date_from: 1686009600,
          date_to: 1686096000,
          guests: 2,
          fare: {
            base: {
              value: 49,
              currency: "EUR",
              convertedValue: 51.69,
              convertedCurrency: "USD",
            },
            rate: {
              amount: {
                value: 49,
                currency: "EUR",
              },
              changes: [
                {
                  date: "2023-06-06",
                  amount: {
                    value: 49,
                    currency: "EUR",
                  },
                  frequency: "Day",
                },
              ],
              frequency: "Daily",
            },
            taxes: [
              {
                code: "X",
                title: "Additional tax",
                value: 0.0799999999999983,
                currency: "EUR",
                included: true,
              },
            ],
            total: {
              value: 49.08,
              currency: "EUR",
              convertedValue: 51.78,
              convertedCurrency: "USD",
            },
            policy: {
              cancel: "Cannot be cancelled",
            },
            comments: [
              "Rate does not include tourist tax which will be applied from 01/09/2012 by Milano City.",
            ],
            ratePlan: {
              code: "D20",
              type: null,
              category: null,
            },
            description:
              "Happy 20 rate - no change, no cancellation - see conditions",
            paymentTerms: null,
            prepayRequired: false,
            roomDescription:
              "MRate avail Happy 20 Rate1234564569877896541\nRoom with 1 double bedMaximum occupancy - 2 people per roomRJ 11 outlet - Wi-Fi in the communal areasWi-Fi in your room - AirconditioningSweet Bed - Accessible bathroomBathtub - Hair dryer in bathroomShower - ToiletsAudible smoke alarms in rooms - Deadbolts and/or locks in roomsEmergency info in rooms - Keycard-operated door locksSmoke alarm in room - Satellite/cable colour TVDirect dial telephone - Radio in room",
            nonIncludedTaxes: [],
            allowedPaymentCards: ["AX", "CA", "DC", "EC", "IK", "VI"],
          },
          key_collection: null,
          booker: {
            id: "d12d402c-6465-4934-a87f-a60904ca763f",
            email: "dorogoileonid@gmail.com",
            phone: "79101020998",
            country: "us",
            last_name: "Dorogoi",
            first_name: "Leonid",
            businessAccountId: "d12d402c-6465-4934-a87f-a60904ca763f",
          },
          is_canceled: false,
          extra_guests: [
            {
              first_name: "Arkady",
              last_name: "Dvorkovich",
              email: null,
            },
          ],
          order_type: "business",
        },
        latitude: 45.506,
        longitude: 9.19768,
      },
    ],
  },
};