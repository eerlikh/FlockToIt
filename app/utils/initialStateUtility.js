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
    currentDetailsIndices: [
      2,
      1,
      1,
      1,
      1
    ],
    resultsObjects: [
      {
        nextPageToken: 'CoQC_AAAANlpipTZrF4jz7NVCENkf2iUIk2f4pJylG7E8Sj6pTwcnX6pgiPNAkvYPdjGTpSdv7wqZ0NBDTe279_2GXjfXvRNFO4X3g4a_UI8DEm3bbSc8SyaALYSYbtUbe7MK9vY8fu1aFAaSdHzGF5jYVJqROnC1a5ZmxENXR4njMRSErysgj1O9rEgTMzKu4TfPT8QEDHNGpmCMHnObRgY8QwSCN7dpQSjlKxfvqSpNIlrOg_VyTiVecrM9-Ev5M8KMC_e2L-GW6YV0J6YdRp7t_VBIUxe5GaAZgx09SGh1QnazXFkpirMm0ZWKbRKQi4gllfp29SY5KvWeXeQmaqouXpEX34SEBYd7n9QgZMc0fGgwscpVv4aFIHAsL9Lrj0q7_bCuMmlf4Qftbp3',
        placeIds: [
          'ChIJpzBpPPCAhYARSVWETFcLf8M',
          'ChIJD133lZOAhYAR0De3-sdCMlI',
          'ChIJHSGzi_yAhYARiglBCzssM5A',
          'ChIJ5-f9Go6AhYARpWIuP0BigH4',
          'ChIJ17DaPI-AhYAREOECg4pbfpE',
          'ChIJP5PrLYSAhYARBcWhJXs55P4',
          'ChIJ-WNBZ4-AhYAR9Y2WG1sRo7Q',
          'ChIJg9S11vGAhYARvx3q7Tgri2k',
          'ChIJj61NN6KAhYARMWDXrggZTH8',
          'ChIJuycG4HyAhYAR0VkDJ3NUlzk',
          'ChIJM7I8HemAhYARjCsAkDZd_D8',
          'ChIJk6jRv46AhYARbE6mIQ6VDsg',
          'ChIJZzXiBzmHhYARipcxKBQpZrY',
          'ChIJNaVGk6aAhYARYeQRy60bAqs',
          'ChIJI0aSfo6AhYARBIYUs_nsZAk',
          'ChIJbUWnOuWAhYAR7_98jTo6d_w',
          'ChIJcZIFZRJ-j4ARqh74LBAr2Po',
          'ChIJJ1KXVFSHhYARfpcWTVtPums',
          'ChIJf3O2KkN-j4ARz0xAx-3_q1A',
          'ChIJFaeBneGAhYARnxI6Yco7NMk'
        ],
        names: [
          'The Italian Homemade Company',
          'Colombini Italian Cafe Bistro',
          'Swiss Louis Italian & Seafood Restaurant',
          'Fino Ristorante & Bar',
          'Kuleto\'s Restaurant',
          '54 Mint',
          'Puccini & Pinetti',
          'Trattoria Contadina',
          'Il Borgo',
          'Ristorante Umbria',
          'Amarena',
          'Scala\'s Bistro',
          'Bella Trattoria',
          'Uva Enoteca',
          'Cesario\'s',
          'Fior d\'Italia',
          'Lupa Trattoria',
          'Bambino\'s Ristorante',
          'Emmy\'s Spaghetti Shack',
          'Cioppino\'s'
        ]
      },
      {
        placeIds: [
          'ChIJiVTSH_WAhYARkvP7ChmMLks',
          'ChIJ4ZJBBq5_j4AR9nQJXkvC0ME'
        ],
        names: [
          'ZOZI',
          'M5 Industries'
        ]
      },
      {
        nextPageToken: 'CoQC-wAAAM2kmlwwa9MMwd789Q4rb7rYcKbFCHa-pqoqP-FrxNUYGkg1C1gK2bvIc5nQv5-k2Z_nxelaIfOnYHiYZ4HE0NJ6zvHBCheBefNEcN-jVTObPsZtr_z0B4UXIa5Psfm5H5_r199XcZb17ZTCgd91AgJ450K3aFSrsXE5WTGVd6uM6LAhYFWZQ52irY09QvPrWH9RWDgbVu8YLUKahDrs9TjjdoDdNQst1HwNfxInVOxZBL7bcJ05scBo21ojSg4BoaHja1x8tvDWoyjQnW6RPPqdMeo06e9VHvSsXK9QaDIgoKpmG1rhv2vzw78ul53MocyyX2cQPf-lolGrHpAwl24SEGPBWlpjGUasEnXxlSZZwxIaFGrgVidSbIJnOikRwHphxmyxVkQ9',
        placeIds: [
          'ChIJ4QU1LoSAhYAR5u7S0AIFmpE',
          'ChIJ75fLhWKAhYAR9oNaPxBn_wU',
          'ChIJy4kpbIaAhYAR30Ot7uoup_0',
          'ChIJCewOUtB_j4AR8bnZrrDQA_8',
          'ChIJBTVtZn2AhYARHb3leJmdfVU',
          'ChIJH7w1a5qAhYARSHYy_wjbPr4',
          'ChIJ17mcM2KAhYARFGk0jnUJMEs',
          'ChIJdQfz0dZ_j4AR0eK1uTOUYgc',
          'ChIJ3UFdD2KAhYARYOHf4j7DshM',
          'ChIJj_accpeAhYARCFHwr-ZG7uM',
          'ChIJjX_6QSJ-j4ARUKV1G9o5QxM',
          'ChIJf-V9OIKAhYARu8bBG2S6RME',
          'ChIJH3-XPzd-j4ARxc5pUq9X8CU',
          'ChIJqeR09ImAhYARGfBflMi114A',
          'ChIJm8vaiT5-j4ARU2MyuxNCc2s',
          'ChIJ70taCKKAhYARDqB5RsSPUJc',
          'ChIJsU3K7vSAhYARv8bNtVUBHYo',
          'ChIJ6VMNOxt-j4ARQvNJc_JGJOw',
          'ChIJ75fLhWKAhYAREjwehlV26Tk',
          'ChIJb_n5rZSAhYARb3iHP5fRL8U'
        ],
        names: [
          'Blue Bottle Coffee',
          'Peet\'s Coffee',
          'Peet\'s Coffee & Tea',
          'Réveille Coffee Co.',
          'Sightglass Coffee',
          'Philz Coffee',
          'Philz Coffee',
          'Philz Coffee',
          'Blue Bottle Coffee',
          'Philz Coffee',
          'Stanza Coffee',
          'Sightglass Coffee',
          'Sightglass Coffee',
          'Peet\'s Coffee',
          'Ritual Coffee Roasters',
          'Ritual Coffee Roasters',
          'Réveille Coffee Co.',
          'Réveille Coffee Co.',
          'Peet\'s Coffee',
          'Contraband Coffee Bar'
        ]
      },
      {
        nextPageToken: 'CoQC_gAAALKdYtvrqSpV8lAg5wXIsz9BsYMf674kN3iAMVGmgZVZIZj4OoZmWK_2iKaG5vfHq7ExSIohJ8Z1h_stokOLZan7s_33bKffSPwGDC0FGI3x-5hsZdWKhRHGhLeqqeMN1txH9Z9FAOK4O-u7JMqDUtrU-nvaXu2Ko9Kqhcr5B8Ho1jRqvX_iwsNjrvlJSlvt6eEHBAcmKLmNMnjjs2y9qBDtRlTBAnu2BYPGJyyNUPqmujgHtv5zOIcQm7YMVpTGT6NKLQ6VP7d8mUG2tlCHhT7CHmIyqlvWx5zaSOG3rXluZ_4laj7GoCA6rXbVXhWdVLfotK4XjmfMWrWKE67e5PoSENFlX-mvavGfVBvzIlpJGMgaFAy61ns_QJSy7Fv0ySK7n9Dxhtc5',
        placeIds: [
          'ChIJLQTEoLmAhYARUC12cP0QvYU',
          'ChIJJY1CfjWHhYARZHT05e_Z2vs',
          'ChIJ-zhtDYeAhYARMeFTplM45o4',
          'ChIJaV-IIpGAhYARCFJAF-_ZW1E',
          'ChIJ2VDngyR-j4AR9-mq_FmeRG8',
          'ChIJUQ43h4WAhYAR6-zLII4QAP4',
          'ChIJh_AmfTF-j4ARUx__ACGqWt4',
          'ChIJhXbgKlKHhYAR2Atejo6NBKw',
          'ChIJE5T3YoqAhYARtxUohSbFVDc',
          'ChIJy5qaL2h-j4ARdJVONVA5ymQ',
          'ChIJrRowdh5-j4ARP3zFkqxV3F0',
          'ChIJ89UQqNd_j4ARKoqcRIR-dhs',
          'ChIJN515hpGAhYARjEGvqkBQW7Y',
          'ChIJEyMo8EZ-j4AROmhpeTjErsg',
          'ChIJKQ2pgt2AhYARL_-nx10__Fo',
          'ChIJMTCYLn2AhYARCMowlgqh6UA',
          'ChIJ8fdwjbKAhYARR7XNGRBhGIs',
          'ChIJ80Dqo5CAhYARJnv2ig0-txw',
          'ChIJTx2ix9SAhYARjNIgHLlm7rI',
          'ChIJpVZ7r6-AhYARKukA_jhcpxs'
        ],
        names: [
          'Fillmore Billiard',
          'Family Billiards',
          'Jillian\'s',
          'King Kong',
          'Slate',
          'Union Square Sports Bar',
          'Mission Hill Saloon',
          'Murio\'s Trophy Room',
          'Wayfare Tavern',
          'The BAR – on Dolores',
          'Blackbird',
          'Lucky Strike',
          'The Royale',
          'Phone Booth',
          'Black Magic Voodoo Lounge',
          'Steffs',
          'Bistro Central Parc',
          'Emperor Norton\'s Boozeland',
          'Final Final',
          'Madrone Art Bar'
        ]
      },
      {
        placeIds: [
          'ChIJb-ZPI-GAhYARFHMlv3-_hjI',
          'ChIJr-ZJBo-AhYAR7bSfRlxKrU0',
          'ChIJ7-MUZOGAhYARevweMeuCkNc'
        ],
        names: [
          'GoCar Tours',
          'GoCar Tours',
          'GoCar Rentals Inc'
        ]
      }
    ],
    currentResultsIndex: 0,
    nextTermInThemeIndex: 5,
    detailsJson: {
      html_attributions: [],
      result: {
        address_components: [
          {
            long_name: '2',
            short_name: '2',
            types: [
              'street_number'
            ]
          },
          {
            long_name: 'Pier 39 Concourse',
            short_name: 'Pier 39 Concourse',
            types: [
              'route'
            ]
          },
          {
            long_name: 'North Beach',
            short_name: 'North Beach',
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
            long_name: '94133',
            short_name: '94133',
            types: [
              'postal_code'
            ]
          }
        ],
        adr_address: '<span class="street-address">2 Pier 39 Concourse</span>, <span class="locality">San Francisco</span>, <span class="region">CA</span> <span class="postal-code">94133</span>, <span class="country-name">USA</span>',
        formatted_address: '2 Pier 39 Concourse, San Francisco, CA 94133, USA',
        formatted_phone_number: '(415) 421-2913',
        geometry: {
          location: {
            lat: 37.8100636,
            lng: -122.4107356
          },
          viewport: {
            northeast: {
              lat: 37.8106336,
              lng: -122.41042975
            },
            southwest: {
              lat: 37.80987360000001,
              lng: -122.41083755
            }
          }
        },
        icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
        id: '4270db2cea4d40e60901b94c518bd14e9dfce459',
        international_phone_number: '+1 415-421-2913',
        name: 'Swiss Louis Italian & Seafood Restaurant',
        opening_hours: {
          open_now: true,
          periods: [
            {
              close: {
                day: 0,
                time: '2100'
              },
              open: {
                day: 0,
                time: '1100'
              }
            },
            {
              close: {
                day: 1,
                time: '2100'
              },
              open: {
                day: 1,
                time: '1100'
              }
            },
            {
              close: {
                day: 2,
                time: '2100'
              },
              open: {
                day: 2,
                time: '1100'
              }
            },
            {
              close: {
                day: 3,
                time: '2100'
              },
              open: {
                day: 3,
                time: '1100'
              }
            },
            {
              close: {
                day: 4,
                time: '2100'
              },
              open: {
                day: 4,
                time: '1100'
              }
            },
            {
              close: {
                day: 5,
                time: '2200'
              },
              open: {
                day: 5,
                time: '1100'
              }
            },
            {
              close: {
                day: 6,
                time: '2200'
              },
              open: {
                day: 6,
                time: '1100'
              }
            }
          ],
          weekday_text: [
            'Monday: 11:00 AM – 9:00 PM',
            'Tuesday: 11:00 AM – 9:00 PM',
            'Wednesday: 11:00 AM – 9:00 PM',
            'Thursday: 11:00 AM – 9:00 PM',
            'Friday: 11:00 AM – 10:00 PM',
            'Saturday: 11:00 AM – 10:00 PM',
            'Sunday: 11:00 AM – 9:00 PM'
          ]
        },
        photos: [
          {
            height: 4128,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/107721404123505875377/photos">albert lee</a>'
            ],
            photo_reference: 'CoQBdwAAAENMFnfbau53_-Tbsd72alLKJA07V1M7kWyVr9In7-hAaM2C5IZTVsZsbhp3x0FuZEWSplElJui2T5P5yyHH-7Wb7CQKt6KbdSAqphXm2YZ8hVC_YAO13T5G45hzQ9-RhY4FwSu0XWvM5p-XrjrPbEgud-yNzoR6dDJVu_vts7IMEhDZBrGpd23OszBTle0iR1EzGhT7-Q18mL1uZSwBElS_2ZO-2I9Ffw',
            width: 3096
          },
          {
            height: 3024,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/109333948507056450195/photos">Lisa Honda</a>'
            ],
            photo_reference: 'CoQBdwAAAFKlbA_92j27xB0d8bVTfomgQOXi-Umn5IXYzzh287kHOdIrnCRL2DAYnvxrOIXqdYE1npep_SIg4pQPb9GtPRbOYGEquAEGgyysKsaJqOhY0TEhFHUGSJ4pNnyLdCHCfQQWWqgQVaQWh56ploi5nQvoDRpZAshTCUTxJx5TBvEgEhCBWm8d0Bi6Z7XHB913Fod1GhRXgx3IsXFLE1tKlmklUghwQhfcsA',
            width: 4032
          },
          {
            height: 2717,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/105152295717764347247/photos">Swiss Louis</a>'
            ],
            photo_reference: 'CoQBdwAAAJC913_G6jjujwvJlsf5j59hkiAnPIdV-058qmxRK5J3J92wtQffdH5EaHtgbxBRgMIsuGFfXno8LbIhloyz_pCp-CK9mJLNCMIGYXIM_R_FJPYBM7tr3X2M5WJ4Nvso87IMG6XBAzQZ49z8qzdtHD61YbelBzag8NfcHzk0MWOEEhDMUUa-7nbsqjx3_jD5MTCvGhTJDELEaIXpmvmTfaWxq-pfyoXF2A',
            width: 4075
          },
          {
            height: 2992,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/108837028597240779538/photos">Sean Van de Riet</a>'
            ],
            photo_reference: 'CoQBdwAAAMO8cJgWwvkBuFNkBZz8Ne0OgDcPHJuIIf7057HemaIlB42-w71y4XyYpIrZjXsS2JUo8JOl3z6fePdafD83XJ9kZyDRLl_5_67TL3WSZq3VPORWD1u49Zsnmo3W2RTvh5ijI10FvvniiOPilF_gSmTqi77eB3eWTmmdMWHAGOVCEhBM59ZnqkVMFOLyF7bZCBD3GhQS_J_IzrG8rRWRqSy3wsiFybC29A',
            width: 4000
          },
          {
            height: 1365,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/107669708792204260592/photos">Swiss Louis Italian &amp; Seafood Restaurant</a>'
            ],
            photo_reference: 'CoQBdwAAAFPWyP9FMwmtiBiNSHYeuEEMoRH3aagyy8uiJgGIsoQMqsrVLxy3SuDXJiJXCh_CjflhiWuzUqoWYaayDXOerag3jZwE2kw9zkdnEWi4flPedFj2K307zwj5IpeyW4p0QkT54yfAgLu1lGvL1tbRvSmvp6v54XcmCwT-Sf9qtKGEEhC-L_cvQhozzCsj_HyeP8w8GhTD8eN62UJYupR0W2tz-iqcjyU7yQ',
            width: 2048
          },
          {
            height: 3024,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/115018204518672496077/photos">黃銘文</a>'
            ],
            photo_reference: 'CoQBdwAAAEPbT91skOeuP1Jnws7fjZ6KQOymd3b_-zRpjn_AF6GTY_ZzbRH8rIiCRGtIwtop3VjUN6c-8YnZREsWRfmgbwy8ZrT-sXsnmvu3fVyworloktBDPwKs2NFmX4-k-_MJ9e48jnXRcPFlS-ri2xTeo2YYRfzf3HOMqfvxm-fZ0_MsEhBSHupKFPuArVxam-ryHw-UGhSQInpj2pjuLtCc8PiYwXD-PrPSUw',
            width: 5376
          },
          {
            height: 2048,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/105152295717764347247/photos">Swiss Louis</a>'
            ],
            photo_reference: 'CoQBdwAAAGi0mp9rsjW_NioYz1EcwmA1IunQnV3h8V2ZbAwjWQRnBqPkpcA3LBHs_m0TeBH12-JymfzT4olN9KOLNe0xKvQrzKpPjkbbHHS7RdK5Kb6hPkR7tMlR8PoeWs9tPEjlQ7U5ry9dAPc2E8U32QRN_sX2QxufcPsbMBt71-g9k-F2EhAV-9bT0UHQ0YqhD_b6U14SGhS1plBG7UnycmB8V3Cqp9sJ64oBew',
            width: 1365
          },
          {
            height: 2048,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/105152295717764347247/photos">Swiss Louis</a>'
            ],
            photo_reference: 'CoQBdwAAAMr3x25-w034PVTT9Na-E5rtsuGOpQgMSSikED3mDCBk_q9i7bY-qKYH5WNNk5AOG4TpEHxmP6YJH1f2oYJCoLD7HlqpvIyDBlQMUstYVYvODBy4U-_GjWiUmrTzDRG3glV4hzFq7hhHxiO-GSjHCPZrV1JphkhpdgLsDZ9XmaEvEhBOqnuVfEUh4hz9PnXZSbZmGhSsaY0Wjc9_yVWH6QUUHlERmdhgSw',
            width: 1365
          },
          {
            height: 2560,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/112553682773777087170/photos">Sophie Clement</a>'
            ],
            photo_reference: 'CoQBdwAAAG5-Ys4ke8PfWSGqJPuIzFAbEPJY5NA9shBfv7SRb_bwsCFpEHRTAaQQWqn7QLbSJqoMXImxjBupHrvM2pAOvBLm3hA3inWVPiYTsbwxJ9owBw94NgYp6T-pSjYCUUg9aaUgC8tCQHx4GC3NgDBMIRCEesWj9PI1uh3qQMBdHWDyEhAlZJEzNHBERGgm-dtJof_yGhTOQxrrXaj4AzeXZYwecnNiop5unQ',
            width: 1440
          },
          {
            height: 509,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/115773819818545356777/photos">Reba Trent</a>'
            ],
            photo_reference: 'CoQBdwAAADWtgMhpsr59u846oBA-WfoEa2pgyhIjEBQvRIUodYLW53ImOXdBDTpojFovW1ctYBPbXRIUh2ko9qyWBpQXTtgj0Q8cerPesW0ONA8mF-kvoYAssRQXWXbR1Zhr7d_3g-63fm8hCtrz4AJy2SqNy9dpFpEV8L7E0KtIrtGsxtA2EhBKN-FDpIngxImLKODWkMzHGhSFKO8uPCM5s7I8YR6CtZTsOPKGpA',
            width: 334
          }
        ],
        place_id: 'ChIJHSGzi_yAhYARiglBCzssM5A',
        price_level: 2,
        rating: 3.6,
        reference: 'CmRSAAAACP9B8pKhPpIjwRvOCSYaDO6gFrLcutoL2KcHdOI2k8ERKb7RHTuEbPl__wpA5qXAITAGcQRQhZIXaXdyxmgDzlreuuXeFTDmmYnWeCEBNWEejmSCB_0vJJKJldgUJm51EhA5TMxDqs5RNlvjITwFOuCZGhQIfUDKJ4xELjq1K39uOMDYaMu-mw',
        reviews: [
          {
            aspects: [
              {
                rating: 3,
                type: 'overall'
              }
            ],
            author_name: 'Sean Obrien',
            author_url: 'https://www.google.com/maps/contrib/101709709592336082494/reviews',
            language: 'en',
            profile_photo_url: '//lh3.googleusercontent.com/-Xw7Yy_FdvzI/AAAAAAAAAAI/AAAAAAAAARc/ZtWRcoz9nQ4/photo.jpg',
            rating: 5,
            relative_time_description: '4 months ago',
            text: 'This review is only for their new server, Umberto. \n\nHis knowledge, kindness, and professionalism at our table was just outstanding. My gf and I visit SF about once a year, and we discovered this gem a couple years ago. After 3 visits, the first two always lacked the service we expected of such a place, but on our latest visit, we were very, very pleased to discover this excellent new server.\n\nI guess the 3rd time really is a charm. We will definitely be coming back, and he is absolutely have the reason.',
            time: 1469382794
          },
          {
            aspects: [
              {
                rating: 3,
                type: 'overall'
              }
            ],
            author_name: 'Sophie Clement',
            author_url: 'https://www.google.com/maps/contrib/112553682773777087170/reviews',
            language: 'en',
            rating: 5,
            relative_time_description: 'a week ago',
            text: 'The view is incredible, the Christmas decorations were just beautiful, the lasagna, marsala, mussels and Margarita pizza were fabulous, and relatively low proced for how fancy it was. Our server, Daniel, was extremely attentive and accommodating. Definitely eating here again!',
            time: 1480448858
          },
          {
            aspects: [
              {
                rating: 0,
                type: 'overall'
              }
            ],
            author_name: 'Mandy Mechenbaker',
            author_url: 'https://www.google.com/maps/contrib/100276529097320495018/reviews',
            language: 'en',
            rating: 1,
            relative_time_description: 'a week ago',
            text: 'Tourist trap. Would give zero stars if I could. Went there with a group of five. Service was awful. Worst service we have ever (!!!) experienced. Our waitress was super slow and rude. She actually walked away before all of us had ordered. Just walked away. My husband had to go find someone else who then put in the rest of our order. No apology. Didn\'t get refills until we specifically asked and even then it took her forever. Pasta looked like it was thrown on a plate and smothered in sauce. No Parmesan cheese was even offered. In an Italian restaurant?! The fish and chips were good but that was about it. Ladies restrooms were filthy and disgusting. Three people in our group got diarrhea after their meals. And then we had to pay a lot of money for crappy service, crappy food and diarrhea. We usually try to tip very generously but this waitress didn\'t even deserve a minimum tip. Do yourself a favor and walk past this place.',
            time: 1480485761
          },
          {
            aspects: [
              {
                rating: 3,
                type: 'overall'
              }
            ],
            author_name: 'Pablo Stefanini',
            author_url: 'https://www.google.com/maps/contrib/114581113136610500078/reviews',
            language: 'en',
            profile_photo_url: '//lh6.googleusercontent.com/-iy1dVV7ghG0/AAAAAAAAAAI/AAAAAAAAB7s/I_TY2VqDweU/photo.jpg',
            rating: 5,
            relative_time_description: '2 months ago',
            text: 'We had dinner here and the sunset sets right above the golden gate, it was the best view ever. The prices are ok, and the food was delicious. Not too crowded and great staff.',
            time: 1476034594
          },
          {
            aspects: [
              {
                rating: 1,
                type: 'overall'
              }
            ],
            author_name: 'Stacey Warren',
            author_url: 'https://www.google.com/maps/contrib/116789933877161585371/reviews',
            language: 'en',
            profile_photo_url: '//lh5.googleusercontent.com/-zrm041GF0w4/AAAAAAAAAAI/AAAAAAAAO-c/E8AhImFpLWI/photo.jpg',
            rating: 3,
            relative_time_description: 'in the last week',
            text: 'View is beautiful and the staff is nice. Food is meh. You\'d think since they make you pay for bread that it wouldn\'t taste stale. It\'s not cheap either. ',
            time: 1480947824
          }
        ],
        scope: 'GOOGLE',
        types: [
          'restaurant',
          'food',
          'point_of_interest',
          'establishment'
        ],
        url: 'https://maps.google.com/?cid=10390697397377370506',
        utc_offset: -480,
        vicinity: '2 Pier 39 Concourse, San Francisco',
        website: 'http://www.swisslouis.com/'
      },
      status: 'OK'
    },
    detailsData: {
      name: 'Swiss Louis Italian & Seafood Restaurant',
      currentDay: 5,
      hours: 'Saturday: 11:00 AM – 10:00 PM',
      rating: '3.6',
      distance: '1.69'
    },
    imageUrls: {
      url1: 'https://maps.googleapis.com/maps/api/place/photo?photoreference=CoQBdwAAAENMFnfbau53_-Tbsd72alLKJA07V1M7kWyVr9In7-hAaM2C5IZTVsZsbhp3x0FuZEWSplElJui2T5P5yyHH-7Wb7CQKt6KbdSAqphXm2YZ8hVC_YAO13T5G45hzQ9-RhY4FwSu0XWvM5p-XrjrPbEgud-yNzoR6dDJVu_vts7IMEhDZBrGpd23OszBTle0iR1EzGhT7-Q18mL1uZSwBElS_2ZO-2I9Ffw&maxheight=600&key=AIzaSyAm_J6lNvrsnHrKMJYXILl6SqgRNCYbm9k',
      url2: 'https://maps.googleapis.com/maps/api/place/photo?photoreference=CoQBdwAAAFKlbA_92j27xB0d8bVTfomgQOXi-Umn5IXYzzh287kHOdIrnCRL2DAYnvxrOIXqdYE1npep_SIg4pQPb9GtPRbOYGEquAEGgyysKsaJqOhY0TEhFHUGSJ4pNnyLdCHCfQQWWqgQVaQWh56ploi5nQvoDRpZAshTCUTxJx5TBvEgEhCBWm8d0Bi6Z7XHB913Fod1GhRXgx3IsXFLE1tKlmklUghwQhfcsA&maxheight=600&key=AIzaSyAm_J6lNvrsnHrKMJYXILl6SqgRNCYbm9k',
      url3: 'https://maps.googleapis.com/maps/api/place/photo?photoreference=CoQBdwAAAJC913_G6jjujwvJlsf5j59hkiAnPIdV-058qmxRK5J3J92wtQffdH5EaHtgbxBRgMIsuGFfXno8LbIhloyz_pCp-CK9mJLNCMIGYXIM_R_FJPYBM7tr3X2M5WJ4Nvso87IMG6XBAzQZ49z8qzdtHD61YbelBzag8NfcHzk0MWOEEhDMUUa-7nbsqjx3_jD5MTCvGhTJDELEaIXpmvmTfaWxq-pfyoXF2A&maxheight=600&key=AIzaSyAm_J6lNvrsnHrKMJYXILl6SqgRNCYbm9k',
      url4: 'https://maps.googleapis.com/maps/api/place/photo?photoreference=CoQBdwAAAMO8cJgWwvkBuFNkBZz8Ne0OgDcPHJuIIf7057HemaIlB42-w71y4XyYpIrZjXsS2JUo8JOl3z6fePdafD83XJ9kZyDRLl_5_67TL3WSZq3VPORWD1u49Zsnmo3W2RTvh5ijI10FvvniiOPilF_gSmTqi77eB3eWTmmdMWHAGOVCEhBM59ZnqkVMFOLyF7bZCBD3GhQS_J_IzrG8rRWRqSy3wsiFybC29A&maxheight=600&key=AIzaSyAm_J6lNvrsnHrKMJYXILl6SqgRNCYbm9k'
    }
  },
  settings: {
    theme: [
      'italian',
      'paintball',
      'coffee',
      'billiards',
      'karts',
      'lake',
      'hookah',
      'cafe',
      'mexican'
    ],
    radius: 5000,
    maxPrice: 4,
    latitude: '37.785834',
    longitude: '-122.406417'
  }
}
}
