export function getInitialState() {
  return {
  navigationState: {
    loginNavigationState: {
      index: 1,
      routes: [
        {
          key: 'Login'
        },
        {
          key: 'Main Navigator'
        }
      ]
    },
    mainNavigationState: {
      index: 1,
      routes: [
        {
          key: 'Settings'
        },
        {
          key: 'Discovery Navigator'
        },
        {
          key: 'Dashboard'
        }
      ]
    },
    discoveryNavigationState: {
      index: 0,
      routes: [
        {
          key: 'Discovery'
        }
      ]
    }
  },
  googleData: {
    detailsIndices: [
      18,
      18
    ],
    resultsObjects: [
      {
        nextPageToken: 'CoQC_AAAAAcH3uLxZDh9p9SDiNIKM4lpeX0ij0WdB6ayrLwA6wWdrjVt7NIYSYmgG-keU4MzW1mUuxR4dwuTIPlAR8wwQkRXMmIzARIRoWjA5ZUBBNf-j0HBhDn47K_-3vt3OSg42YvNMLiL8XNmwJkqDST3H3DIVGsntNDJKj8FsA2U-SODGSgmVpyIkElXzjkn2Oqebl3TBcBwRap15uxUSg7nT37HNpnwcZYaSORjcVyXDNjTLo2kkM0PJZUu_SaJLexT7VIrhBOnyncNDS4D_cPN9bm9h0zYwB9GNqpsPUzMiRQ-UfowSZhDofspnXmyd597T3_b_0rsjhD1QTZJT0AdKrgSEM2gSM3jkwDeRDgq6we0oWgaFDXs98WK0xy4fyi7PRBmEwdtS0Om',
        placeIds: [
          'ChIJ816kUY6AhYARYWi1Uf1JnCI',
          'ChIJkwTTmA-HhYARYHsd-PJFcbs',
          'ChIJq8GWyZ1-hYARhQTKTkY_QnI',
          'ChIJiYoH-4idj4ARlr9MWyW8vg4',
          'ChIJkTQUbxqfj4ARnwE0LebF5Gg',
          'ChIJ3RIWKGSfj4ARD-Qjdggg7aU',
          'ChIJfcaly4eAhYARSIvvfFpH64w',
          'ChIJMZ9U5rWahYARFlXfqaBuefg',
          'ChIJm_SgdLKAj4ARFZbKlfEhGB4',
          'ChIJxznM_r9-hYARgTkkLOY-fVU',
          'ChIJz78Q6S58hYARClo5WbpPAi0',
          'ChIJLw3ApJiAhYAR_wGEbwDJDgE',
          'ChIJTxXE6Nd_j4ARtj7K1--pYQY',
          'ChIJ6Z5t1n6AhYARaY_WxdP44r0',
          'ChIJpRCVS7N0j4AR_ZY6Wb-vBRM',
          'ChIJ_ayiI9SAhYARV0D99eF9Ouk',
          'ChIJfRMInHqej4AR-4NtZnaL4q0',
          'ChIJEXc08AWRj4AR8WhRnoj2wik',
          'ChIJ72Rg-1yHhYARsL1mUXF-7Qw',
          'ChIJJ2TnmBx-j4ARpk5wewbcSYc'
        ],
        names: [
          'Colibri Mexican Bistro',
          'Tommy\'s',
          'Fresco Mexican Grill',
          'Gabriel & Daniel\'s Mexican Grill',
          'Fernando\'s Mexican Restaurant',
          'Coyote\'s Mexican Cafe',
          'Tropisueno',
          'Lucinda\'s Mexican Food To Go',
          'Xolo',
          'La Mission',
          'Remy\'s',
          'Papito Hayes',
          'TRES',
          'Garaje',
          'Spanishtown Mexican Restaurant',
          'Mamacita',
          'Pancho Villa Taqueria',
          'The Mexican Restaurant & Bar',
          'Nopalito',
          'Tacorgasmico'
        ]
      },
      {
        nextPageToken: 'CoQC_AAAAEzjERQR1S85KLCrZJMfjJXeTJc4s7oYUn4hPYzzIGQk7M2fVVhY0cuBoHhUDWx7HZ8mETCP0hv4wmE3gWhzO3TD16ao9RxkBKa0SiCTR8t0SyNLLXXWztdvlkh1QsxdkihGcGNIRS1sIYakSfIq0esjlme4mnNbTXlyepWcEKCUkP4h1I1BcycdB6CfXgU_Z8ZVIbbRec6fKjgiX7p9Z7AKBvPIUVkPb1Nlrp3VrgrJsFeMnavNKyMPnrcawe8_4FbioPFjISsnyjpzGwXsWo-hdlRxky2MFjBSbtSL5QQy74fyGUSj2MJOO-EYi3OAVJm82ePFxEguFjUCw2nni74SEGCtTbMqOZl1HEPmXwTiY9waFI0NRJ6sLc2eA4W5WPod4NknX-ES',
        placeIds: [
          'ChIJpzBpPPCAhYARSVWETFcLf8M',
          'ChIJD133lZOAhYAR0De3-sdCMlI',
          'ChIJM3dQjkaHj4ARzRwlSrDaCv8',
          'ChIJbZ0UK5J9j4ARm1sAyGJogdI',
          'ChIJT4N1gVx-hYARMflOCR7X-Go',
          'ChIJPeOeSBCHhYARVLTDHMhc1N4',
          'ChIJN8lbz5dhhYARbNQFe-yo9kY',
          'ChIJHSGzi_yAhYARiglBCzssM5A',
          'ChIJpXKUmAWHhYARuxXcsAzYodc',
          'ChIJURAyA_R-hYARpbqoLkV6NRo',
          'ChIJ5-f9Go6AhYARpWIuP0BigH4',
          'ChIJ17DaPI-AhYAREOECg4pbfpE',
          'ChIJP5PrLYSAhYARBcWhJXs55P4',
          'ChIJ-WNBZ4-AhYAR9Y2WG1sRo7Q',
          'ChIJNWkGDM59hYAR0Guspf0tdhA',
          'ChIJj61NN6KAhYARMWDXrggZTH8',
          'ChIJuycG4HyAhYAR0VkDJ3NUlzk',
          'ChIJM7I8HemAhYARjCsAkDZd_D8',
          'ChIJZzXiBzmHhYARipcxKBQpZrY',
          'ChIJNaVGk6aAhYARYeQRy60bAqs'
        ],
        names: [
          'The Italian Homemade Company',
          'Colombini Italian Cafe Bistro',
          'Barlago Italian Kitchen',
          'The Gold Mirror Italian Restaurant',
          'HOT ITALIAN',
          'Gaspare\'s Pizza House & Italian Restaurant',
          'Tullio\'s Family Style Italian Restaurant',
          'Swiss Louis Italian & Seafood Restaurant',
          'Ernesto\'s Italian Restaurant',
          'Riva Cucina',
          'Fino Ristorante & Bar',
          'Kuleto\'s Restaurant',
          '54 Mint',
          'Puccini & Pinetti',
          'Trattoria La Siciliana',
          'Il Borgo',
          'Ristorante Umbria',
          'Amarena',
          'Bella Trattoria',
          'Uva Enoteca'
        ]
      }
    ],
    currentResultsIndex: 1,
    nextTermInThemeIndex: 2,
    detailsObject: {
      html_attributions: [],
      result: {
        address_components: [
          {
            long_name: '3854',
            short_name: '3854',
            types: [
              'street_number'
            ]
          },
          {
            long_name: 'Geary Boulevard',
            short_name: 'Geary Blvd',
            types: [
              'route'
            ]
          },
          {
            long_name: 'Inner Richmond',
            short_name: 'Inner Richmond',
            types: [
              'neighborhood',
              'political'
            ]
          },
          {
            long_name: 'San Francisco',
            short_name: 'SF',
            types: [
              'locality',
              'political'
            ]
          },
          {
            long_name: 'San Francisco County',
            short_name: 'San Francisco County',
            types: [
              'administrative_area_level_2',
              'political'
            ]
          },
          {
            long_name: 'California',
            short_name: 'CA',
            types: [
              'administrative_area_level_1',
              'political'
            ]
          },
          {
            long_name: 'United States',
            short_name: 'US',
            types: [
              'country',
              'political'
            ]
          },
          {
            long_name: '94118',
            short_name: '94118',
            types: [
              'postal_code'
            ]
          },
          {
            long_name: '3211',
            short_name: '3211',
            types: [
              'postal_code_suffix'
            ]
          }
        ],
        adr_address: '<span class="street-address">3854 Geary Blvd</span>, <span class="locality">San Francisco</span>, <span class="region">CA</span> <span class="postal-code">94118-3211</span>, <span class="country-name">USA</span>',
        formatted_address: '3854 Geary Blvd, San Francisco, CA 94118, USA',
        formatted_phone_number: '(415) 221-0305',
        geometry: {
          location: {
            lat: 37.7813812,
            lng: -122.4609365
          },
          viewport: {
            northeast: {
              lat: 37.7814523,
              lng: -122.46093125
            },
            southwest: {
              lat: 37.78116790000001,
              lng: -122.46095225
            }
          }
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
        id: 'c87698a958152794e93cf88ffbf90d5f50116052',
        international_phone_number: '+1 415-221-0305',
        name: 'Bella Trattoria',
        opening_hours: {
          open_now: false,
          periods: [
            {
              close: {
                day: 0,
                time: '2100'
              },
              open: {
                day: 0,
                time: '1600'
              }
            },
            {
              close: {
                day: 1,
                time: '2130'
              },
              open: {
                day: 1,
                time: '1730'
              }
            },
            {
              close: {
                day: 2,
                time: '2130'
              },
              open: {
                day: 2,
                time: '1730'
              }
            },
            {
              close: {
                day: 3,
                time: '2130'
              },
              open: {
                day: 3,
                time: '1730'
              }
            },
            {
              close: {
                day: 4,
                time: '2130'
              },
              open: {
                day: 4,
                time: '1730'
              }
            },
            {
              close: {
                day: 5,
                time: '1430'
              },
              open: {
                day: 5,
                time: '1200'
              }
            },
            {
              close: {
                day: 5,
                time: '2230'
              },
              open: {
                day: 5,
                time: '1700'
              }
            },
            {
              close: {
                day: 6,
                time: '2230'
              },
              open: {
                day: 6,
                time: '1700'
              }
            }
          ],
          weekday_text: [
            'Monday: 5:30 – 9:30 PM',
            'Tuesday: 5:30 – 9:30 PM',
            'Wednesday: 5:30 – 9:30 PM',
            'Thursday: 5:30 – 9:30 PM',
            'Friday: 12:00 – 2:30 PM, 5:00 – 10:30 PM',
            'Saturday: 5:00 – 10:30 PM',
            'Sunday: 4:00 – 9:00 PM'
          ]
        },
        photos: [
          {
            height: 2988,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/112752248619379477043/photos">Christine Shellenbarger</a>'
            ],
            photo_reference: 'CoQBdwAAAPqblvhzFE_FGzWNQ-nEcPVwCUpevqG6SSoLqibrWHnxkCbmwg8_2Ey2JMrMZEaJRB6BxcKOHTstG1rD7vOhhSo8XOWU5rYrz8TdD8fTUFWcOisrmGFg6vy1EUfRhFxrrTH8kewVY6cVPHdGgbu51pAGD5x8hODyd2r5sHtBzr3TEhBWR5AFvxUqnDHXfdCfbpLzGhRtQ5TNFGOtLd04kRaa2L9tll49ow',
            width: 5312
          },
          {
            height: 1536,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/106127734294477096706/photos">Andreas Schlehahn</a>'
            ],
            photo_reference: 'CoQBdwAAAGu_e9jSvKM-PG5Z3Rl0QLBvw8WHm-Cln9ck5o5UEKWyTBAQXYv12XVxx8krCvCIODI3UavN07kSMaWm2OdcwVRFXzNmFAiyTRv-HShKhLlYgInig1WhwhMHYG8k6fsGxLcAC6RA_NNl6IwU-K7ou98VBw0Ddy8PNSjDqcVh4wrqEhDNgXSmU0jX2njMh1AkeAa_GhQYJdSO44zqo4tpaFbSrBYML0jCyQ',
            width: 2048
          },
          {
            height: 2808,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/108230289207003255200/photos">Chris Shellenbarger</a>'
            ],
            photo_reference: 'CoQBdwAAAOsoSg_iTsnRNpXf50pp2Bt-8nc7dEh9DUIAFYqVMz_OSzWw1BCJji4LOtznQzH1OqiCHtHXPeT1thxJ_LDMQ8sAG3JZjfXpcJaGcexfbeL1WyLZvTsxVJ3N3SaA_-0y7YkZGa0AzW1Mc1XCl49fazrL39jqHdRj9cFBXacDihYbEhB_YoHiaSLv7AqQV4k8yaGPGhT79mr52Y4rVb2xH0Kp_jAoikJjaw',
            width: 3613
          },
          {
            height: 2340,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/101732644601678179778/photos">Michael Sippel</a>'
            ],
            photo_reference: 'CoQBdwAAAOJQ1KgXRJeJgvuGdvTwvhVjHFcjRyKPrDrQ3O4TTIk4H5bfEuBFTpTy2mewDcQ9evGz3pFlDH1WabgXjLVvoEMY1UM8DLStkYluokNuoqZF4IKkp-Nam4UT1skkaNxSdiv_FdVDcCjrrUAtGV34FVNnipsyCR-tiNMnChIHC6SSEhB44Wr4prvdgkHcVShlUUtHGhSmZH6ZWdkbxMo-pOcSiAV5mBdWYQ',
            width: 4160
          },
          {
            height: 3559,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/100812520536922965576/photos">Tom B.</a>'
            ],
            photo_reference: 'CoQBdwAAAC8G0xyY7j8JH7HnWNAGFgRTBJ-1JGojOO79H1aa8DHnHZlY3YdzES677P7_LmqS8uM9kdsN5LE-K8CTNlHSc-mwhZqfpMERyky1gVskDGJssJ8kB6nQbqn36HowLFG4A__aa4VBV3E88Hl8fEDVOuSdhOD1KGzBxBEfE7BaXYU7EhD4dYp5EGbQ-RVIDNnym5ENGhRb6WDUca2kBoQU6O85ve0QNuDraw',
            width: 3036
          },
          {
            height: 2992,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/100421462921493567754/photos">Sam Bush</a>'
            ],
            photo_reference: 'CoQBdwAAAOu9d0lM2WtDkaLAuG3J6UosrqH8xNwY6aKxuRf8_WnSMXEtLIODzUjjY_soSiRIWyRrCW0grq5Ef3MWvj4qWZBFerar0cgiDHWK7uYkIskd3jl80KS2zv-_F2oweKIz-H94c6wRsYyOfctp7uXqbhxtEmLrfNVBonCd3urML9kDEhBjl8jQAc0HAdDtZpk3obD5GhTTw0S5WSFODjMcvKkJhPL2gXcyxw',
            width: 4000
          }
        ],
        place_id: 'ChIJZzXiBzmHhYARipcxKBQpZrY',
        price_level: 3,
        rating: 4.3,
        reference: 'CmRSAAAAoGdGQV9FZcFiPsb2LcRRRXK_7_pxnT-98KyOmaXGtILTqxnxmu-Fm01KAUzp7N_IMFKlLtaxXrIYeJSKwc1-mnrOs7uDJ83HP5eDsCncL9FzrpsoUy511KmCfvu11AkuEhDTnz8mFM-Y2TrCYaT-3BGwGhQAhKwlLP-0IkP9AQzUhPONAFf8aw',
        reviews: [
          {
            aspects: [
              {
                rating: 3,
                type: 'overall'
              }
            ],
            author_name: 'Noel R.',
            author_url: 'https://www.google.com/maps/contrib/112650346516403890734/reviews',
            language: 'en',
            rating: 5,
            relative_time_description: '2 months ago',
            text: 'Incredibly delicious pastas and fresh seafood make this restaurant a great spot for some classy dining. They offer an extensive wine list as well. Gets packed in the evenings.',
            time: 1474231917
          },
          {
            aspects: [
              {
                rating: 3,
                type: 'overall'
              }
            ],
            author_name: 'Kiwi Cam',
            author_url: 'https://www.google.com/maps/contrib/103019654755013214527/reviews',
            language: 'en',
            profile_photo_url: '//lh3.googleusercontent.com/-d6oRhHRkCWI/AAAAAAAAAAI/AAAAAAAAAPU/I5-tULj0WnM/photo.jpg',
            rating: 5,
            relative_time_description: '3 months ago',
            text: 'Came here for dinner tonight while on our honeymoon in San Fran. One of our Uber drivers recommended this place and we couldn\'t be happier! It\'s a small restaurant with limited seating, so I\'m glad we made a reservation. We\'ve never been to Italy before so we can\'t compare it to authentic Italian, but this was the best Italian food we\'ve ever had in the states. On top of that, the service was phenomenal. There were 4 staff members running the front of the house and it felt like we had a team of wait staff at our service. Everyone was extremely friendly and wanted to ensure we enjoyed our meal, and we did! We didn\'t order dessert but they brought us out a complimentary panna cotta at the end of our meal. I have a boring sweet tooth and generally only like chocolate desert but this was out of this world! A great way to end the evening. Thank you Bella Trattoria, we will be back next time we\'re in San Fran!',
            time: 1471582468
          },
          {
            aspects: [
              {
                rating: 3,
                type: 'overall'
              }
            ],
            author_name: 'Michael Sippel',
            author_url: 'https://www.google.com/maps/contrib/101732644601678179778/reviews',
            language: 'en',
            profile_photo_url: '//lh5.googleusercontent.com/-i0RYtDBMRQY/AAAAAAAAAAI/AAAAAAAAD14/s0KSyaxRIIQ/photo.jpg',
            rating: 5,
            relative_time_description: '2 months ago',
            text: 'This place has a good atmosphere and amazing authentic food. ',
            time: 1475267184
          },
          {
            aspects: [
              {
                rating: 2,
                type: 'overall'
              }
            ],
            author_name: 'Lisette Paras',
            author_url: 'https://www.google.com/maps/contrib/106031163670646068440/reviews',
            language: 'en',
            profile_photo_url: '//lh3.googleusercontent.com/-mT27uv7XJ70/AAAAAAAAAAI/AAAAAAAAVA4/81k9SUsOf5c/photo.jpg',
            rating: 4,
            relative_time_description: '3 months ago',
            text: 'Unassuming restaurant on busy Geary Street. Small and cosy when you go in, with a mood lighting fit for date night. Attentive staff and yummy homemade food - pasta is made fresh daily. Tried the lasagna, squid ink spaghetti, tiramisu and panna cotta, plus drinks. Everything delicious except panna cotta (I don\'t really dig balsamic vinegar in my desserts though). Worth checkIng out, you\'ll be stuffed afterwards.',
            time: 1472410141
          },
          {
            aspects: [
              {
                rating: 2,
                type: 'overall'
              }
            ],
            author_name: 'Matthew Gast',
            author_url: 'https://www.google.com/maps/contrib/116104228720249251802/reviews',
            language: 'en',
            profile_photo_url: '//lh6.googleusercontent.com/-9v-BT7IzQq0/AAAAAAAAAAI/AAAAAAAABh8/Zv7VXZ20ENI/photo.jpg',
            rating: 4,
            relative_time_description: '5 months ago',
            text: 'The building looks kind of like tiramisu.  Food is well done and not standard Italian fare.',
            time: 1466456221
          }
        ],
        scope: 'GOOGLE',
        types: [
          'restaurant',
          'food',
          'point_of_interest',
          'establishment'
        ],
        url: 'https://maps.google.com/?cid=13143237729077794698',
        utc_offset: -480,
        vicinity: '3854 Geary Boulevard, San Francisco',
        website: 'http://www.bellatrattoriasf.com/'
      },
      status: 'OK'
    },
    detailsData: {
      name: 'Bella Trattoria',
      currentDay: 4,
      hours: 'Friday: 12:00 – 2:30 PM, 5:00 – 10:30 PM',
      rating: '4.3',
      distance: '2.99'
    },
    imageUrls: {
      url1: 'https://maps.googleapis.com/maps/api/place/photo?photoreference=CoQBdwAAAPqblvhzFE_FGzWNQ-nEcPVwCUpevqG6SSoLqibrWHnxkCbmwg8_2Ey2JMrMZEaJRB6BxcKOHTstG1rD7vOhhSo8XOWU5rYrz8TdD8fTUFWcOisrmGFg6vy1EUfRhFxrrTH8kewVY6cVPHdGgbu51pAGD5x8hODyd2r5sHtBzr3TEhBWR5AFvxUqnDHXfdCfbpLzGhRtQ5TNFGOtLd04kRaa2L9tll49ow&maxheight=600&key=AIzaSyAm_J6lNvrsnHrKMJYXILl6SqgRNCYbm9k',
      url2: 'https://maps.googleapis.com/maps/api/place/photo?photoreference=CoQBdwAAAGu_e9jSvKM-PG5Z3Rl0QLBvw8WHm-Cln9ck5o5UEKWyTBAQXYv12XVxx8krCvCIODI3UavN07kSMaWm2OdcwVRFXzNmFAiyTRv-HShKhLlYgInig1WhwhMHYG8k6fsGxLcAC6RA_NNl6IwU-K7ou98VBw0Ddy8PNSjDqcVh4wrqEhDNgXSmU0jX2njMh1AkeAa_GhQYJdSO44zqo4tpaFbSrBYML0jCyQ&maxheight=600&key=AIzaSyAm_J6lNvrsnHrKMJYXILl6SqgRNCYbm9k',
      url3: 'https://maps.googleapis.com/maps/api/place/photo?photoreference=CoQBdwAAAOsoSg_iTsnRNpXf50pp2Bt-8nc7dEh9DUIAFYqVMz_OSzWw1BCJji4LOtznQzH1OqiCHtHXPeT1thxJ_LDMQ8sAG3JZjfXpcJaGcexfbeL1WyLZvTsxVJ3N3SaA_-0y7YkZGa0AzW1Mc1XCl49fazrL39jqHdRj9cFBXacDihYbEhB_YoHiaSLv7AqQV4k8yaGPGhT79mr52Y4rVb2xH0Kp_jAoikJjaw&maxheight=600&key=AIzaSyAm_J6lNvrsnHrKMJYXILl6SqgRNCYbm9k',
      url4: 'https://maps.googleapis.com/maps/api/place/photo?photoreference=CoQBdwAAAOJQ1KgXRJeJgvuGdvTwvhVjHFcjRyKPrDrQ3O4TTIk4H5bfEuBFTpTy2mewDcQ9evGz3pFlDH1WabgXjLVvoEMY1UM8DLStkYluokNuoqZF4IKkp-Nam4UT1skkaNxSdiv_FdVDcCjrrUAtGV34FVNnipsyCR-tiNMnChIHC6SSEhB44Wr4prvdgkHcVShlUUtHGhSmZH6ZWdkbxMo-pOcSiAV5mBdWYQ&maxheight=600&key=AIzaSyAm_J6lNvrsnHrKMJYXILl6SqgRNCYbm9k'
    }
  },
  settings: {
    theme: [
      'mexican',
      'italian'
    ],
    radius: 50000,
    maxPrice: 4,
    latitude: '37.785834',
    longitude: '-122.406417'
  }
}
}
