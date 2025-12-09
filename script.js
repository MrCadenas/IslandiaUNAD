const translations = {
  es: {
    navInicio: "Inicio",
    navTradiciones: "Tradiciones",
    navHistoria: "Historia",
    navEventos: "Eventos",
    navContacto: "Contacto",
    heroTitle: "Carnaval de Basilea",
    heroText: "Descubre la magia del carnaval más fascinante de Suiza, Patrimonio Cultural Inmaterial de la UNESCO",
    heroButton: "Explorar Tradiciones",

    // PANTALLA DE INICIO
    startupTitle: "Carnaval de Basilea",
    startupText: "Bienvenido. Selecciona idioma y presiona continuar.",
    startupNext: "Siguiente",

    tradicionesTitle: "Tradiciones Únicas",
    unescoBanner: "🏛️ Patrimonio Cultural Inmaterial de la UNESCO desde 2017",
    historiaTitle: "Una Tradición Centenaria",
    historiaText: "El Carnaval de Basel es más que una celebración; es una expresión cultural profundamente arraigada en la identidad de la ciudad. Con elementos que equilibran lo tradicional y lo moderno, esta festividad única combina arte, música, sátira social y comunidad en una experiencia que atrae a visitantes de todo el mundo.",
    eventosTitle: "Eventos Principales",
    submenuMainEvents: "Eventos principales",
    submenuSchedule: "Tradiciones",
    submenuContact: "Historia",
    schedule: {
      title: "Programa Completo",
      subtitle: "Todos los eventos del Carnaval de Basilea",
      days: [
        {
          key: "mon",
          label: "Lunes",
          events: [
            { time: "04:00", title: "Morgestraich", place: "Centro de la ciudad" },
            { time: "06:30", title: "Desayuno tradicional", place: "Plazas principales" },
            { time: "13:30", title: "Cortège – Primer desfile", place: "Ruta tradicional" },
            { time: "18:00", title: "Guggenkonzerte", place: "Varios locales" },
            { time: "20:00", title: "Schnitzelbank", place: "Restaurantes locales" }
          ]
        },
        {
          key: "tue",
          label: "Martes",
          events: [
            { time: "09:00", title: "Actividades infantiles", place: "Parque de la ciudad" },
            { time: "11:00", title: "Talleres de máscaras", place: "Centros culturales" },
            { time: "14:00", title: "Conciertos callejeros", place: "Calles del centro" },
            { time: "18:00", title: "Guggenkonzerte", place: "Varios locales" },
            { time: "21:00", title: "Bailes tradicionales", place: "Salón de fiestas" }
          ]
        },
        {
          key: "wed",
          label: "Miércoles",
          events: [
            { time: "13:30", title: "Cortège – Segundo desfile", place: "Ruta tradicional" },
            { time: "16:00", title: "Desfile infantil", place: "Centro peatonal" },
            { time: "18:00", title: "Guggenkonzerte finales", place: "Varios locales" },
            { time: "20:00", title: "Ceremonia de clausura", place: "Plaza principal" },
            { time: "22:00", title: "Fin del carnaval", place: "Toda la ciudad" }
          ]
        }
      ],
      legend: { mon: "Lunes", tue: "Martes", wed: "Miércoles" }
    },
    contactTitle: "Información Oficial de Contacto",
    contactAddressLabel: "📍 Dirección",
    contactAddress: "Barfüsserplatz 1<br>4051 Basel, Suiza",
    contactPhoneLabel: "📞 Teléfono",
    contactPhone: "+41 61 123 45 67",
    contactEmailLabel: "✉️ Email",
    contactEmail: "info@baslerfasnacht.ch",
    contactSocialLabel: "Síguenos en redes sociales",
    contactFormTitle: "Envíanos un mensaje",
    contactFormNameLabel: "Nombre",
    contactFormEmailLabel: "Email",
    contactFormMessageLabel: "Mensaje",
    contactFormSend: "Enviar mensaje",
    contactMapLabel: "Mapa de Basilea<br><span style='font-size: 0.95rem;'>Ubicación del carnaval</span>",
    contactEmergencyTitle: "⚠ Contacto de Emergencia",
    contactEmergencyInfo: "Durante el carnaval: <span style='color: #222;'>+41 117 (Emergencias)</span> | <span style='color: #222;'>+41 61 123 45 99 (Información)</span>",
    footerTourismTitle: "Información Turística",
    footerGuide: "Guía del Visitante",
    footerDates: "Fechas 2026",
    footerAccommodation: "Alojamiento",
    footerTransport: "Transporte",
    footerCultureTitle: "Cultura y Historia",
    footerMuseum: "Museo del Carnaval",
    footerArchive: "Archivo Histórico",
    footerTraditions: "Tradiciones",
    footerEvents: "Eventos",
    footerContactTitle: "Contacto",
    footerForm: "Formulario de Contacto",
    footerSocial: "Redes Sociales",
    footerNewsletter: "Newsletter",
    footerBottom: "&copy; 2026 Carnaval de Basilea. Todos los derechos reservados.<br>Página hecha por Camilo Ernesto Rodríguez Cárdenas - UNAD",
    greeting: {
      morning: "¡Buenos días! Bienvenido al Carnaval de Basilea.",
      afternoon: "¡Buenas tardes! Disfruta descubriendo el Carnaval de Basilea.",
      night: "¡Buenas noches! Recorre la magia del Carnaval de Basilea."
    },
    traditionsDetailed: {
      larvenTitle: "Las Larven (Máscaras)",
      larvenText: "Las máscaras tradicionales, a menudo grotescas o satíricas, son verdaderas obras de arte artesanal que representan la esencia del carnaval de Basel. Cada máscara cuenta una historia única.",
      morgesTitle: "Morgestraich",
      morgesText: "El inicio mágico del carnaval a las 4 AM en absoluta oscuridad, iluminado únicamente por los hermosos faroles pintados a mano. Un espectáculo visual inolvidable.",
      piccoloTitle: "Música de Piccolos y Tambores",
      piccoloText: "La banda sonora única del carnaval que resuena por las calles de Basel, creando una atmósfera mágica y envolvente que define el espíritu festivo.",
      schnitzelTitle: "Schnitzelbänke",
      schnitzelText: "Canciones satíricas que comentan con humor e inteligencia la actualidad política y social, manteniendo viva la tradición crítica del carnaval.",
      rappliTitle: "Räppli (Confeti)",
      rappliText: "El colorido confeti tradicional que llena las calles de Basel durante los tres días de carnaval, creando una atmósfera festiva y alegre.",
      mehlsuppeTitle: "Mehlsuppe",
      mehlsuppeText: "La tradicional sopa de harina que se sirve durante el carnaval, manteniendo a los participantes con energía durante las largas jornadas festivas."
    },
    events: {
      opening: {
        title: "Desfile de Apertura",
        text: "El tradicional desfile que marca el inicio del carnaval, con comparsas, música y coloridas carrozas que recorren las calles de Basilea.",
        date: "Fecha: 2 de marzo, 2026"
      },
      morges: {
        title: "Morgestraich",
        text: "El evento más emblemático: luces apagadas, faroles pintados a mano y música tradicional a las 4 de la mañana en punto.",
        date: "Fecha: 3 de marzo, 2026"
      },
      piccolos: {
        title: "Concierto de Piccolos y Tambores",
        text: "Presentaciones en vivo que muestran el talento local y la atmósfera única del carnaval con música tradicional suiza.",
        date: "Fecha: 4 de marzo, 2026"
      }
    }
  },
  de: {
    navInicio: "Startseite",
    navTradiciones: "Traditionen",
    navHistoria: "Geschichte",
    navEventos: "Veranstaltungen",
    navContacto: "Kontakt",
    heroTitle: "Basler Fasnacht",
    heroText: "Entdecke die Magie des faszinierendsten Karnevals der Schweiz, UNESCO Kulturerbe",
    heroButton: "Traditionen entdecken",

    startupTitle: "Basler Fasnacht",
    startupText: "Willkommen. Wähle eine Sprache und klicke auf Weiter.",
    startupNext: "Weiter",

    tradicionesTitle: "Einzigartige Traditionen",
    unescoBanner: "🏛️ UNESCO Immaterielles Kulturerbe seit 2017",
    historiaTitle: "Eine jahrhundertealte Tradition",
    historiaText: "Die Basler Fasnacht ist mehr als ein Fest; sie ist ein kultureller Ausdruck, der tief in der Identität der Stadt verwurzelt ist.",
    eventosTitle: "Veranstaltungen",
    submenuMainEvents: "Hauptveranstaltungen",
    submenuSchedule: "Traditionen",
    submenuContact: "Geschichte",
    schedule: {
      title: "Komplettes Programm",
      subtitle: "Alle Veranstaltungen der Basler Fasnacht",
      days: [
        {
          key: "mon",
          label: "Montag",
          events: [
            { time: "04:00", title: "Morgestraich", place: "Innenstadt" },
            { time: "06:30", title: "Traditionelles Frühstück", place: "Hauptplätze" },
            { time: "13:30", title: "Cortège – Erster Umzug", place: "Traditionelle Route" },
            { time: "18:00", title: "Guggenkonzerte", place: "Verschiedene Orte" },
            { time: "20:00", title: "Schnitzelbank", place: "Lokale Restaurants" }
          ]
        },
        {
          key: "tue",
          label: "Dienstag",
          events: [
            { time: "09:00", title: "Kinderaktivitäten", place: "Stadtpark" },
            { time: "11:00", title: "Maskenworkshops", place: "Kulturzentren" },
            { time: "14:00", title: "Straßenkonzerte", place: "Innenstadt" },
            { time: "18:00", title: "Guggenkonzerte", place: "Verschiedene Orte" },
            { time: "21:00", title: "Traditionelle Tänze", place: "Festsaal" }
          ]
        },
        {
          key: "wed",
          label: "Mittwoch",
          events: [
            { time: "13:30", title: "Cortège – Zweiter Umzug", place: "Traditionelle Route" },
            { time: "16:00", title: "Kinderumzug", place: "Altstadt" },
            { time: "18:00", title: "Finale Guggenkonzerte", place: "Verschiedene Orte" },
            { time: "20:00", title: "Abschlusszeremonie", place: "Hauptplatz" },
            { time: "22:00", title: "Ende des Karnevals", place: "Gesamte Stadt" }
          ]
        }
      ],
      legend: { mon: "Montag", tue: "Dienstag", wed: "Mittwoch" }
    },
    contactTitle: "Offizielle Kontaktinformation",
    contactAddressLabel: "📍 Adresse",
    contactAddress: "Barfüsserplatz 1<br>4051 Basel, Schweiz",
    contactPhoneLabel: "📞 Telefon",
    contactPhone: "+41 61 123 45 67",
    contactEmailLabel: "✉️ E-Mail",
    contactEmail: "info@baslerfasnacht.ch",
    contactSocialLabel: "Folgen Sie uns",
    contactFormTitle: "Schreiben Sie uns",
    contactFormNameLabel: "Name",
    contactFormEmailLabel: "E-Mail",
    contactFormMessageLabel: "Nachricht",
    contactFormSend: "Nachricht senden",
    contactMapLabel: "Karte von Basel<br><span style='font-size: 0.95rem;'>Standort des Karnevals</span>",
    contactEmergencyTitle: "⚠ Notfallkontakt",
    contactEmergencyInfo: "Während des Karnevals: <span style='color: #222;'>+41 117 (Notfall)</span> | <span style='color: #222;'>+41 61 123 45 99 (Information)</span>",
    footerTourismTitle: "Touristische Informationen",
    footerGuide: "Besucherguide",
    footerDates: "Termine 2026",
    footerAccommodation: "Unterkunft",
    footerTransport: "Transport",
    footerCultureTitle: "Kultur und Geschichte",
    footerMuseum: "Karnevalsmuseum",
    footerArchive: "Historisches Archiv",
    footerTraditions: "Traditionen",
    footerEvents: "Veranstaltungen",
    footerContactTitle: "Kontakt",
    footerForm: "Kontaktformular",
    footerSocial: "Soziale Netzwerke",
    footerNewsletter: "Newsletter",
    footerBottom: "&copy; 2026 Basler Fasnacht. Alle Rechte vorbehalten.<br>Seite erstellt von Camilo Ernesto Rodríguez Cárdenas - UNAD",
    greeting: {
      morning: "Guten Morgen! Willkommen bei der Basler Fasnacht.",
      afternoon: "Guten Tag! Entdecke die Basler Fasnacht.",
      night: "Gute Nacht! Erlebe die Magie der Basler Fasnacht."
    },
    traditionsDetailed: {
      larvenTitle: "Las Larven (Masken)",
      larvenText: "Die traditionellen Masken, oft grotesk oder satirisch, sind wahre Handwerkskunst und zeigen das Wesen der Basler Fasnacht. Jede Maske erzählt ihre eigene Geschichte.",
      morgesTitle: "Morgestraich",
      morgesText: "Der magische Beginn des Karnevals um 4 Uhr morgens in völliger Dunkelheit, nur erleuchtet von handbemalten Laternen. Ein unvergessliches Schauspiel.",
      piccoloTitle: "Piccolos und Trommeln",
      piccoloText: "Die einzigartige Klangkulisse des Karnevals, die durch die Straßen Basels hallt und die festliche Stimmung prägt.",
      schnitzelTitle: "Schnitzelbänke",
      schnitzelText: "Satirische Lieder, die mit Humor und Intelligenz aktuelle politische und gesellschaftliche Themen kommentieren.",
      rappliTitle: "Räppli (Konfetti)",
      rappliText: "Das bunte traditionelle Konfetti, das während der drei Karnevalstage die Straßen von Basel füllt.",
      mehlsuppeTitle: "Mehlsuppe",
      mehlsuppeText: "Die traditionelle Mehlsuppe, die während des Karnevals serviert wird, um die Teilnehmer zu stärken."
    },
    events: {
      opening: {
        title: "Eröffnungsumzug",
        text: "Der traditionelle Umzug, der den Beginn des Karnevals markiert, mit Gruppen, Musik und farbenprächtigen Wagen durch die Straßen von Basel.",
        date: "Datum: 2. März 2026"
      },
      morges: {
        title: "Morgestraich",
        text: "Das emblematische Ereignis: Dunkelheit um 4 Uhr morgens, nur von handbemalten Laternen erleuchtet.",
        date: "Datum: 3. März 2026"
      },
      piccolos: {
        title: "Piccolos und Trommeln Konzert",
        text: "Live-Auftritte, die das lokale Talent zeigen und die einzigartige Atmosphäre des Karnevals mit traditioneller Schweizer Musik schaffen.",
        date: "Datum: 4. März 2026"
      }
    }
  },
  en: {
    navInicio: "Home",
    navTradiciones: "Traditions",
    navHistoria: "History",
    navEventos: "Events",
    navContacto: "Contact",
    heroTitle: "Basel Carnival",
    heroText: "Discover the magic of Switzerland's most fascinating carnival, UNESCO Intangible Cultural Heritage",
    heroButton: "Explore Traditions",

    startupTitle: "Basel Carnival",
    startupText: "Welcome. Select a language and press continue.",
    startupNext: "Next",

    tradicionesTitle: "Unique Traditions",
    unescoBanner: "🏛️ UNESCO Intangible Cultural Heritage since 2017",
    historiaTitle: "A Centuries-old Tradition",
    historiaText: "Basel Carnival is more than a celebration; it is a cultural expression deeply rooted in the city's identity.",
    eventosTitle: "Main Events",
    submenuMainEvents: "Main events",
    submenuSchedule: "Traditions",
    submenuContact: "History",
    schedule: {
      title: "Full Program",
      subtitle: "All events of the Basel Carnival",
      days: [
        {
          key: "mon",
          label: "Monday",
          events: [
            { time: "04:00", title: "Morgestraich", place: "City center" },
            { time: "06:30", title: "Traditional breakfast", place: "Main squares" },
            { time: "13:30", title: "Cortège – First parade", place: "Traditional route" },
            { time: "18:00", title: "Guggenkonzerte", place: "Various venues" },
            { time: "20:00", title: "Schnitzelbank", place: "Local restaurants" }
          ]
        },
        {
          key: "tue",
          label: "Tuesday",
          events: [
            { time: "09:00", title: "Children's activities", place: "City park" },
            { time: "11:00", title: "Mask workshops", place: "Cultural centers" },
            { time: "14:00", title: "Street concerts", place: "Downtown streets" },
            { time: "18:00", title: "Guggenkonzerte", place: "Various venues" },
            { time: "21:00", title: "Traditional dances", place: "Ballroom" }
          ]
        },
        {
          key: "wed",
          label: "Wednesday",
          events: [
            { time: "13:30", title: "Cortège – Second parade", place: "Traditional route" },
            { time: "16:00", title: "Children's parade", place: "Old town" },
            { time: "18:00", title: "Final Guggenkonzerte", place: "Various venues" },
            { time: "20:00", title: "Closing ceremony", place: "Main square" },
            { time: "22:00", title: "End of the carnival", place: "Whole city" }
          ]
        }
      ],
      legend: { mon: "Monday", tue: "Tuesday", wed: "Wednesday" }
    },
    contactTitle: "Official Contact Information",
    contactAddressLabel: "📍 Address",
    contactAddress: "Barfüsserplatz 1<br>4051 Basel, Switzerland",
    contactPhoneLabel: "📞 Phone",
    contactPhone: "+41 61 123 45 67",
    contactEmailLabel: "✉️ Email",
    contactEmail: "info@baslerfasnacht.ch",
    contactSocialLabel: "Follow us on social media",
    contactFormTitle: "Send us a message",
    contactFormNameLabel: "Name",
    contactFormEmailLabel: "Email",
    contactFormMessageLabel: "Message",
    contactFormSend: "Send message",
    contactMapLabel: "Map of Basel<br><span style='font-size: 0.95rem;'>Carnival location</span>",
    contactEmergencyTitle: "⚠ Emergency Contact",
    contactEmergencyInfo: "During the carnival: <span style='color: #222;'>+41 117 (Emergency)</span> | <span style='color: #222;'>+41 61 123 45 99 (Information)</span>",
    footerTourismTitle: "Tourist Information",
    footerGuide: "Visitor Guide",
    footerDates: "2026 Dates",
    footerAccommodation: "Accommodation",
    footerTransport: "Transport",
    footerCultureTitle: "Culture and History",
    footerMuseum: "Carnival Museum",
    footerArchive: "Historical Archive",
    footerTraditions: "Traditions",
    footerEvents: "Events",
    footerContactTitle: "Contact",
    footerForm: "Contact Form",
    footerSocial: "Social Media",
    footerNewsletter: "Newsletter",
    footerBottom: "&copy; 2026 Basel Carnival. All rights reserved.<br>Page created by Camilo Ernesto Rodríguez Cárdenas - UNAD",
    greeting: {
      morning: "Good morning! Welcome to the Basel Carnival.",
      afternoon: "Good afternoon! Enjoy discovering the Basel Carnival.",
      night: "Good evening! Explore the magic of the Basel Carnival."
    },
    traditionsDetailed: {
      larvenTitle: "Las Larven (Masks)",
      larvenText: "Traditional masks, often grotesque or satirical, are handcrafted artworks that capture the essence of the Basel carnival. Each mask tells a unique story.",
      morgesTitle: "Morgestraich",
      morgesText: "The magical start of the carnival at 4 AM in total darkness, lit only by beautifully hand-painted lanterns. An unforgettable visual spectacle.",
      piccoloTitle: "Piccolos and Drums",
      piccoloText: "The carnival's unique soundtrack that echoes through Basel's streets, creating an immersive festive atmosphere.",
      schnitzelTitle: "Schnitzelbänke",
      schnitzelText: "Satirical songs that humorously and cleverly comment on current political and social events, keeping the carnival's critical tradition alive.",
      rappliTitle: "Räppli (Confetti)",
      rappliText: "The colorful traditional confetti that fills Basel's streets during the three carnival days, creating a joyous atmosphere.",
      mehlsuppeTitle: "Mehlsuppe",
      mehlsuppeText: "The traditional flour soup served during the carnival to keep participants energized throughout the long festive days."
    },
    events: {
      opening: {
        title: "Opening Parade",
        text: "The traditional parade that marks the carnival's start, with troupes, music and colorful floats moving through Basel's streets.",
        date: "Date: March 2, 2026"
      },
      morges: {
        title: "Morgestraich",
        text: "The emblematic event: lights off at 4 AM, illuminated only by beautifully hand-painted lanterns.",
        date: "Date: March 3, 2026"
      },
      piccolos: {
        title: "Piccolos and Drums Concert",
        text: "Live performances showcasing local talent and the carnival's unique atmosphere with traditional Swiss music.",
        date: "Date: March 4, 2026"
      }
    }
  }
};

function renderSchedule(lang) {
  const cfg = translations[lang].schedule;
  document.getElementById('schedule-title').textContent = cfg.title;
  document.getElementById('schedule-subtitle').textContent = cfg.subtitle;
  document.getElementById('legend-mon').textContent = cfg.legend.mon;
  document.getElementById('legend-tue').textContent = cfg.legend.tue;
  document.getElementById('legend-wed').textContent = cfg.legend.wed;

  const grid = document.getElementById('schedule-grid');
  grid.innerHTML = '';
  cfg.days.forEach(day => {
    const dayClass = day.key === 'mon' ? 'day--mon' : day.key === 'tue' ? 'day--tue' : 'day--wed';
    const card = document.createElement('div');
    card.className = `day-card ${dayClass}`;
    card.innerHTML = `
      <div class="day-head">${day.label}</div>
      <div class="day-body">
        ${day.events.map(ev => `
          <div class="event">
            <div class="event-time">${ev.time}</div>
            <div class="event-content">
              <b>${ev.title}</b>
              <small>${ev.place}</small>
            </div>
          </div>
        `).join('')}
      </div>`;
    grid.appendChild(card);
  });
}

function changeLanguage(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;

  // NAV
  document.querySelector('.nav-links a[href="#inicio"]').textContent = t.navInicio;
  document.querySelector('.nav-links a[href="#tradiciones"]').textContent = t.navTradiciones;
  document.querySelector('.nav-links a[href="#historia"]').textContent = t.navHistoria;
  document.querySelector('.nav-links a[href="#eventos"]').textContent = t.navEventos;
  document.querySelector('.nav-links a[href="#contacto"]').textContent = t.navContacto;

  // HERO
  document.querySelector('.hero-content h1').textContent = t.heroTitle;
  document.querySelector('.hero-content p').textContent = t.heroText;
  document.querySelector('.cta-button').textContent = t.heroButton;

  // PANTALLA DE INICIO
  const stTitle = document.getElementById('startup-title');
  const stText  = document.getElementById('startup-text');
  const stNext  = document.getElementById('startup-next');
  if (stTitle && stText && stNext) {
    stTitle.textContent = t.startupTitle;
    stText.textContent  = t.startupText;
    stNext.textContent  = t.startupNext;
  }

  // SECCIONES
  document.querySelector('#tradiciones h2').textContent = t.tradicionesTitle;
  document.querySelector('.unesco-banner').innerHTML =
    '<span aria-hidden="true">🏛️</span> ' + t.unescoBanner.replace('🏛️ ', '');
  document.querySelector('#historia h2').textContent = t.historiaTitle;
  document.querySelector('#historia p').textContent = t.historiaText;
  document.querySelector('#eventos h2').textContent = t.eventosTitle;

  // CONTACTO
  document.getElementById('contact-title').textContent = t.contactTitle;
  document.getElementById('contact-address-label').innerHTML =
    '<span aria-hidden="true">' + t.contactAddressLabel.substring(0, 2) + '</span> ' +
    t.contactAddressLabel.substring(3);
  document.getElementById('contact-address').innerHTML = t.contactAddress;
  document.getElementById('contact-phone-label').innerHTML =
    '<span aria-hidden="true">' + t.contactPhoneLabel.substring(0, 2) + '</span> ' +
    t.contactPhoneLabel.substring(3);
  document.getElementById('contact-phone').textContent = t.contactPhone;
  document.getElementById('contact-email-label').innerHTML =
    '<span aria-hidden="true">' + t.contactEmailLabel.substring(0, 3) + '</span> ' +
    t.contactEmailLabel.substring(4);
  document.getElementById('contact-email').textContent = t.contactEmail;
  document.getElementById('contact-social-label').textContent = t.contactSocialLabel;
  document.getElementById('contact-form-title').textContent = t.contactFormTitle;
  document.getElementById('contact-form-name-label').textContent = t.contactFormNameLabel;
  document.getElementById('contact-form-email-label').textContent = t.contactFormEmailLabel;
  document.getElementById('contact-form-message-label').textContent = t.contactFormMessageLabel;
  document.getElementById('contact-form-send').textContent = t.contactFormSend;
  document.getElementById('contact-map-label').innerHTML = t.contactMapLabel;
  document.getElementById('contact-emergency-title').innerHTML =
    '<span aria-hidden="true">⚠</span> ' + t.contactEmergencyTitle.replace('⚠ ', '');
  document.getElementById('contact-emergency-info').innerHTML = t.contactEmergencyInfo;

  // FOOTER
  document.getElementById('footer-tourism-title').textContent = t.footerTourismTitle;
  document.getElementById('footer-guide').textContent = t.footerGuide;
  document.getElementById('footer-dates').textContent = t.footerDates;
  document.getElementById('footer-accommodation').textContent = t.footerAccommodation;
  document.getElementById('footer-transport').textContent = t.footerTransport;
  document.getElementById('footer-culture-title').textContent = t.footerCultureTitle;
  document.getElementById('footer-museum').textContent = t.footerMuseum;
  document.getElementById('footer-archive').textContent = t.footerArchive;
  document.getElementById('footer-traditions').textContent = t.footerTraditions;
  document.getElementById('footer-events').textContent = t.footerEvents;
  document.getElementById('footer-contact-title').textContent = t.footerContactTitle;
  document.getElementById('footer-form').textContent = t.footerForm;
  document.getElementById('footer-social').textContent = t.footerSocial;
  document.getElementById('footer-newsletter').textContent = t.footerNewsletter;
  document.getElementById('footer-bottom').innerHTML = t.footerBottom;

  // Helper para claves tipo "traditionsDetailed.larvenTitle"
  function getByPath(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : null, obj);
  }

  // data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n.trim();
    const val = getByPath(t, key);
    if (val != null) {
      if (/<\/?[a-z][\s\S]*>/i.test(val)) el.innerHTML = val;
      else el.textContent = val;
    }
  });

  // IDs opcionales para tradiciones (por si algún día los usas)
  const idMap = {
    '#larven-title': 'traditionsDetailed.larvenTitle',
    '#larven-text': 'traditionsDetailed.larvenText',
    '#morges-title': 'traditionsDetailed.morgesTitle',
    '#morges-text': 'traditionsDetailed.morgesText',
    '#piccolo-title': 'traditionsDetailed.piccoloTitle',
    '#piccolo-text': 'traditionsDetailed.piccoloText',
    '#schnitzel-title': 'traditionsDetailed.schnitzelTitle',
    '#schnitzel-text': 'traditionsDetailed.schnitzelText',
    '#rappli-title': 'traditionsDetailed.rappliTitle',
    '#rappli-text': 'traditionsDetailed.rappliText',
    '#mehlsuppe-title': 'traditionsDetailed.mehlsuppeTitle',
    '#mehlsuppe-text': 'traditionsDetailed.mehlsuppeText'
  };
  Object.entries(idMap).forEach(([selector, key]) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const val = getByPath(t, key);
    if (val == null) return;
    if (/<\/?[a-z][\s\S]*>/i.test(val)) el.innerHTML = val;
    else el.textContent = val;
  });

  // Submenú si existiera
  const submenuMain = document.getElementById('submenu-main-events');
  const submenuSchedule = document.getElementById('submenu-schedule');
  const submenuContact = document.getElementById('submenu-contact');
  if (submenuMain) submenuMain.textContent = t.submenuMainEvents;
  if (submenuSchedule) submenuSchedule.textContent = t.submenuSchedule;
  if (submenuContact) submenuContact.textContent = t.submenuContact;

  renderSchedule(lang);
}

function initDropdownMenu() {
  const dropdown = document.querySelector('.dropdown');
  if (!dropdown) return;

  const toggle = dropdown.querySelector('.dropdown-toggle');
  const menu = dropdown.querySelector('.dropdown-menu');
  if (!toggle || !menu) return;

  let hideTimeout = null;

  function showMenu() {
    // cancelar cualquier cierre pendiente
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
    menu.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function hideMenu() {
    menu.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  }

  // MOSTRAR al entrar con el mouse en cualquier parte del dropdown
  dropdown.addEventListener('mouseover', () => {
    showMenu();
  });

  // OCULTAR solo si el mouse sale COMPLETAMENTE del dropdown
  dropdown.addEventListener('mouseout', (e) => {
    const toElement = e.relatedTarget;
    // Si el mouse sigue dentro del dropdown (sobre el menú o el enlace), no cerrar
    if (toElement && dropdown.contains(toElement)) {
      return;
    }
    // pequeño delay para que se sienta suave
    hideTimeout = setTimeout(hideMenu, 200);
  });
}

function initSlider() {
  const slider = document.getElementById('image-slider');
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll('.slide'));
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');

  if (slides.length === 0) return;

  let current = 0;
  let intervalId = null;

  function showSlide(index) {
    if (slides[current]) slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    if (slides[current]) slides[current].classList.add('active');
  }

  function nextSlide() {
    showSlide(current + 1);
  }

  function prevSlide() {
    showSlide(current - 1);
  }

  function startAuto() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 4000);
  }

  function resetInterval() {
    if (intervalId) clearInterval(intervalId);
    startAuto();
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
  }

  showSlide(0);
  startAuto();
}

function initGreeting(lang = 'es') {
  const msgEl = document.getElementById('welcome-message');
  if (!msgEl) return;
  const hour = new Date().getHours();
  const g = (translations[lang] && translations[lang].greeting)
    ? translations[lang].greeting
    : translations['es'].greeting;
  let message = '';
  if (hour < 12) message = g.morning;
  else if (hour < 19) message = g.afternoon;
  else message = g.night;
  msgEl.textContent = message;
}

document.addEventListener('DOMContentLoaded', () => {
  // Idioma inicial según botón activo del header
  const mapBtnToLang = { 'DE': 'de', 'EN': 'en', 'ES': 'es' };
  const activeBtn = document.querySelector('.language-switch button.active');
  const defaultLang = activeBtn ? mapBtnToLang[activeBtn.textContent.trim()] || 'es' : 'es';

  changeLanguage(defaultLang);
  initGreeting(defaultLang);
  initDropdownMenu();
  initSlider();

  // Botones de idioma del header
  document.querySelectorAll('.language-switch button').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.language-switch button').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-pressed', 'true');
      const langMap = { 'DE': 'de', 'EN': 'en', 'ES': 'es' };
      const lang = langMap[this.textContent.trim()] || 'es';
      changeLanguage(lang);
      initGreeting(lang);
    });
  });

  // ===== PANTALLA DE INICIO =====
  const screen = document.getElementById('startup-screen');
  const btnNext = document.getElementById('startup-next');

  if (screen && btnNext) {
    btnNext.addEventListener('click', () => {
      screen.style.transition = 'opacity 0.4s ease';
      screen.style.opacity = '0';
      setTimeout(() => {
        screen.style.display = 'none';
      }, 400);
    });

    // Selector de idioma de la pantalla de inicio
    document.querySelectorAll('.startup-lang button').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.startup-lang button')
          .forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const lang = btn.dataset.lang || 'es';
        changeLanguage(lang);
        initGreeting(lang);
      });
    });
  }
});
