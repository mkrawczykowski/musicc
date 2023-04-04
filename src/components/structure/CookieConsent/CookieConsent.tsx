import React, {useEffect} from 'react';
import 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

export default function CookieConsent() {
    useEffect(() => {

        if (!document.getElementById('cc--main')) {
            // window.CookieConsentApi = window.initCookieConsent();
            // // window.CookieConsentApi.run({
                let cc = window.initCookieConsent();
                console.log('cookieconsent');

                cc.run({
                    current_lang: "pl",
                    autoclear_cookies: true, // default: false
                    page_scripts: true, // default: false
                    auto_language: "document", // default: null; could also be 'browser' or 'document'
                    force_consent: true,
                
                    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
                    // delay: 0,                               // default: 0
                    // autorun: true,                          // default: true
                    // force_consent: false,                   // default: false
                    // hide_from_bots: false,                  // default: false
                    // remove_cookie_tables: false             // default: false
                    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
                    // cookie_expiration: 182,                 // default: 182 (days)
                    // cookie_necessary_only_expiration: 182   // default: disabled
                    // cookie_domain: location.hostname,       // default: current domain
                    // cookie_path: '/',                       // default: root
                    // cookie_same_site: 'Lax',                // default: 'Lax'
                    // use_rfc_cookie: false,                  // default: false
                    // revision: 0,                            // default: 0
                
                    onFirstAction: function (user_preferences, cookie) {
                        // callback triggered only once on the first accept/reject action
                    },
                
                    onAccept: function (cookie) {
                        // callback triggered on the first accept/reject action, and after each page load
                    },
                
                    onChange: function (cookie, changed_categories) {
                        // callback triggered when user changes preferences after consent has already been given
                    },
                
                    gui_options: {
                        consent_modal: {
                        layout: "bar", // box/cloud/bar
                        position: "center", // bottom/middle/top + left/right/center  bottom right
                        transition: "slide", // zoom/slide
                        swap_buttons: false // enable to invert buttons
                        },
                        settings_modal: {
                        layout: "box", // box/bar
                        //position: "left", // left/right
                        transition: "slide" // zoom/slide
                        }
                    },
                
                    languages: {
                        pl: {
                        consent_modal: {
                            title: "",
                            description: '<div id="cm_scroll"><p>PanWybierak.pl przetwarza Twoje dane osobowe zbierane w Internecie, w tym informacje zapisywane za pomocą technologii służących do ich śledzenia i przechowywania, takich jak pliki cookies, sygnalizatory WWW lub innych podobnych technologii umożliwiających świadczenie dopasowanych i bezpiecznych usług, personalizację treści oraz reklamy, udostępnianie funkcji mediów społecznościowych oraz analizowanie ruchu w Internecie.</p><p>Kliknij \"AKCEPTUJĘ I PRZECHODZĘ DO SERWISU\", aby wyrazić zgodę na korzystanie w Internecie z technologii automatycznego śledzenia i zbierania danych, dostęp do informacji na Twoim urządzeniu końcowym i ich przechowywanie oraz na przetwarzanie Twoich danych osobowych przez PanWybierak.pl w celach marketingowych (w tym do zautomatyzowanego dopasowania reklam do Twoich zainteresowań i mierzenia ich skuteczności) i pozostałych, które wskazujemy poniżej.</p><p>Twoje dane osobowe zbierane w Internecie, takie jak adresy IP, identyfikatory Twoich urządzeń końcowych i identyfikatory plików cookie, informacje o Twoich wyszukiwaniach w Internecie będą przetwarzane przez PanWybierak.pl w celu: przechowywania informacji na urządzeniu lub dostęp do nich, wyboru podstawowych reklam, wyboru spersonalizowanych reklam, tworzenia profilu spersonalizowanych reklam, tworzenia profilu spersonalizowanych treści, wyboru spersonalizowanych treści, pomiaru wydajności reklam, pomiaru wydajności treści, stosowania badań rynkowych w celu generowania opinii odbiorców, opracowywania i ulepszania produktów, zapewnienia bezpieczeństwa, zapobiegania oszustwom i usuwania błędów, technicznego dostarczania reklam lub treści.</p><p>Ponadto PanWybierk.pl przetwarza Twoje dane na potrzeby funkcji i funkcji specjalnych, które ułatwiają nam świadczenie dopasowanych i bezpiecznych usług, personalizację treści oraz reklamy, udostępnianie funkcji mediów społecznościowych oraz analizowanie ruchu w Internecie: dopasowywania i połączenia źródeł danych offline, łączenia różnych urządzeń, użycia dokładnych danych geolokalizacyjnych, odbierania i wykorzystywania automatycznie wysłanej charakterystyki urządzenia do identyfikacji.</p><p>Cele przetwarzania szczegółowo opisujemy w ustawieniach zaawansowanych.</p><p>Zgoda jest dobrowolna i możesz ją w dowolnym momencie wycofać w ustawieniach zaawansowanych.</p><p>Ponadto masz prawo żądania dostępu, sprostowania, usunięcia lub ograniczenia przetwarzania danych. W polityce prywatności znajdziesz informacje jak zakomunikować nam Twoją wolę skorzystania z tych praw.</p><p>Cele przetwarzania Twoich danych bez konieczności uzyskania Twojej zgody w oparciu o uzasadniony interes PanWybierak.pl oraz informacje o możliwości sprzeciwienia się takiemu przetwarzaniu znajdziesz w polityce prywatności.<br>Szczegółowe informacje na temat przetwarzania Twoich danych znajdują się w polityce prywatności.</p><p>Używamy cookies i podobnych technologii m.in. w celach: świadczenia usług, reklamy, statystyk. Korzystanie z witryny bez zmiany ustawień Twojej przeglądarki oznacza, że będą one umieszczane w Twoim urządzeniu końcowym. Pamiętaj, że zawsze możesz zmienić te ustawienia. Szczegóły znajdziesz w <a target="_blank" href="https://panwybierak.pl/regulamin/polityka-prywatnosci-panwybierakpl/10">polityce prywatności</a>.</p><button type="button" data-cc="c-settings" class="cc-link">Ustawienia zaawansowane</button></div>',
                            secondary_btn: {
                                text: "Odrzucam wszystkie pliki cookies",
                                role: "accept_necessary" // 'accept_selected' or 'accept_all'
                            },
                            primary_btn: {
                                text: "Akceptuję i przechodzę do serwisu",
                                role: "accept_all" // 'settings' or 'accept_necessary'
                            }
                        },
                        settings_modal: {
                            title: "Ustawienia plików cookie",
                            save_settings_btn: "Zapisz ustawienia",
                            accept_all_btn: "Akceptuję wszystkie pliki cookies",
                            reject_all_btn: "Odrzucam wszystkie pliki cookies",
                            close_btn_label: "Close",
                            cookie_table_headers: [
                            { col1: "Name" },
                            { col2: "Domain" },
                            { col3: "Expiration" },
                            { col4: "Description" }
                            ],
                            blocks: [
                            {
                                title: "",
                                description: 'Użyj tej strony, aby skonfigurować wybrane ustawienia. W każdym momencie możesz zmienić ustawienia plików cookie.'
                            },
                            {
                                title: "Niezbędne pliki cookie",
                                description:
                                "Te pliki cookie są niezbędne dla funkcjonowania strony internetowej i nie mogą zostać wyłączone. Dane gromadzone przez te pliki są niezbędne w celu zagwarantowania działania witryny od strony technicznej, w celu zapewnienia podstawowych funkcji związanych z zakupami, jak również w celu zapewnienia bezpieczeństwa oraz zapobiegania oszustwom. Te pliki cookie nie przechowują żadnych danych osobowych.",
                                toggle: {
                                value: "functionality_storage",
                                enabled: true,
                                readonly: true // cookie categories with readonly=true are all treated as "necessary cookies"
                                }
                            },
                            {
                                title: "Pliki cookie związane z reklamami i ich odbiorcami",
                                description:
                                "Te pliki cookie są ustawiane przez Facebooka w celu wyświetlania reklam na Facebooku lub na platformie cyfrowej obsługiwanej przez reklamy Facebooka po odwiedzeniu strony internetowej.",
                                toggle: {
                                value: "ad_storage",
                                enabled: false,
                                readonly: false
                                }
                            },
                            {
                                title: "Skuteczność strony internetowej i analityka",
                                description:
                                "Zainstalowane pliki cookie przez Google Analytics i przechowują informacje o tym, w jaki sposób odwiedzający korzystają ze strony internetowej, jednocześnie tworząc raport analityczny dotyczący wydajności strony internetowej. Niektóre gromadzone dane obejmują liczbę odwiedzających, ich źródło i strony, które odwiedzają anonimowo. Plik instalowany przez Google Analytics, oblicza dane dotyczące odwiedzających, sesji i kampanii, a także śledzi wykorzystanie witryny na potrzeby raportu analitycznego witryny. Plik cookie przechowuje informacje anonimowo i przypisuje losowo wygenerowany numer w celu rozpoznania unikalnych użytkowników. Pliki dostarczone przez Google Tag Manager w celu eksperymentowania z efektywnością reklamową stron internetowych korzystających z ich usług.",
                                toggle: {
                                value: "analytics_storage", // your cookie category
                                enabled: false,
                                readonly: false
                                }
                            },
                            // {
                            //     title: "More information",
                            //     description:
                            //     'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.'
                            // }
                            ]
                        }
                        },
                    }
                });
        }

    }, []);

    return null;
}