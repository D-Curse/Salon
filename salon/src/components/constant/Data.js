export const services = [
    {
      id: 1,
      src: "/img/service/hair.svg",
      name: "Hair",
      caption:
        "Hair stylists at JUICE believe that beauty is different for every person which is why they do not mass produce but tailor-make a look.",
    },
    {
      id: 2,
      src: "/img/service/nail.svg",
      name: "Nail",
      caption:
        "Indulge in a luxurious nail spa experience. From nail art to manicure treatments, our specialists ensure your hands and feet are flawless.",
    },
    {
      id: 3,
      src: "/img/service/makeover.svg",
      name: "Makeup",
      caption:
        "Transform your look with professional makeup tailored to your style and occasion. Whether it's a subtle glow or bold glam, we’ve got you covered.",
    },
    {
      id: 4,
      src: "/img/service/facial-massage.svg",
      name: "Massage",
      caption:
        "Relax and rejuvenate with our therapeutic massage services designed to melt away stress and leave you refreshed.",
    },
    {
      id: 5,
      src: "/img/service/glowing-skin.svg",
      name: "Facial",
      caption:
        "Achieve radiant, glowing skin with our customized facial treatments that cleanse, hydrate, and revitalize your skin.",
    },
    {
      id: 6,
      src: "/img/service/actor.svg",
      name: "And more",
      caption:
        "Explore a variety of additional beauty and wellness services tailored to meet your unique needs.",
    },
];

export const heroSlides = [
    {
      id: 1,
      src: "img/hero/slide1.jpg",
      alt: "Slide One",
    },
    {
      id: 2,
      src: "img/hero/slide2.jpg",
      alt: "Slide Two",
    },
    {
      id: 3,
      src: "img/hero/slide3.jpg",
      alt: "Slide Three",
    },
    {
        id: 4,
        src: "img/hero/slide4.jpg",
        alt: "Slide Four",
    },
];
  

export const menus = [
    {
        id: 1,
        category: "Hair",
        sub_category: [
            {
                sub_category: "Hair Cutting",
                services: [
                  [
                    { name: "Beard Crafting", price: 200 },
                    { name: "Beard Trim", price: 100 },
                    { name: "Bald", price: 300 },
                    { name: "Fringes/Bangs (Women)", price: 250 },
                    { name: "Haircut & Wash with Creative Stylist (Men)", price: 500 },
                    { name: "Haircut & Wash with Creative Stylist(Women)", price: 1000 },
                    { name: "Haircut & Wash with Senior Stylist(men)", price: 300 },
                    { name: "Haircut & Wash with Senior Stylist(Women)", price: 800 },
                    { name: "Haircut & Wash with Stylist(men)", price: 250 },
                    { name: "Haircut & Wash with Stylist(Women)", price: 700 },
                    { name: "Haircut with Creative Stylist (Men)", price: 400 },
                    { name: "Haircut with Creative Stylist(Women)", price: 800 },
                    { name: "Haircut with Senior Stylist(men)", price: 250 },
                    { name: "Haircut with Senior Stylist(Women)", price: 600 },
                    { name: "Haircut with Stylist(men)", price: 200 },
                    { name: "Haircut with Stylist(Women)", price: 500 },
                    { name: "Hairwash & Blast Dry(Women)", price: 300 },
                    { name: "Hairwash & Styling (Men)", price: 150 },
                    { name: "Kertin Wash(Women)", price: 500 },
                    { name: "Shave", price: 150 }
                ]
                ],
            },
            {
                sub_category: "Hair Color(Men)",
                services: [
                  [
                    { name: "Beard Color", price: 450 },
                    { name: "Color Side Locks", price: 250 },
                    { name: "Global Color", price: 800 },
                    { name: "Highlight", price: 800 },
                    { name: "Moustache", price: 100 },
                    { name: "Special Effect (per Lightening)", price: 700 }
                ]
                ],
            },
            {
                sub_category: "Global Color (Women)",
                services: [
                  [
                    { name: "Below Shoulder", price: 5000 },
                    { name: "Upto Neck", price: 3000 },
                    { name: "Upto Shoulder", price: 4000 },
                    { name: "Upto Waist", price: 6000 }
                ]
                ],
            },
            {
                sub_category: "Highlights(Women)",
                services: [
                  [
                    { name: "Below Shoulder", price: 5500 },
                    { name: "Upto Neck", price: 3500 },
                    { name: "Upto Shoulder", price: 4500 },
                    { name: "Upto Waist", price: 6500 }
                ]
                ],
            },
            {
                sub_category: "Hair Texture (Oleo Smooth / Oleostraight)",
                services: [
                  [
                    { name: "Below Shoulder", price: '5000/6000' },
                    { name: "Fringes", price: '1500/2000' },
                    { name: "Regrowth/Touch-up upto 2 inches", price: '3000/4000' },
                    { name: "Upto Neck", price: '3500/4500' },
                    { name: "Upto Shoulder", price: '4000/5000' },
                    { name: "Upto Waist", price: '6000/7000' }
                ]

                ],
            },
            {
                sub_category: "Hair Texture (Oleo Bond / Shine Bond)",
                services: [
                  [
                    { name: "Below Shoulder", price: '4500/5000' },
                    { name: "Upto Neck", price: 3500 },
                    { name: "Upto Shoulder", price: 4000 },
                    { name: "Upto Waist", price: 6500 }
                ]
                ],
            }
        ],
    },
    {
        id: 2,
        category: "Nail",
        sub_category: [
        {
            sub_category: "Manicure",
            services: [
              [
                { name: "Caramel Delight", price: 1350 },
                { name: "Chocolate", price: 1200 },
                { name: "Elite Wine", price: 1000 },
                { name: "Icecream", price: 1440 },
                { name: "Moisture Boost Treatment", price: 750 },
                { name: "Rose Manicure(Sensitive Skin)", price: 1440 }
            ]
            ],
        },
        {
            sub_category: "Pedicure",
            services: [
              [
                { name: "Caramel Delight", price: 1600 },
                { name: "Chocolate", price: 1500 },
                { name: "Elite Wine", price: 1200 },
                { name: "Icecream", price: 1800 },
                { name: "Moisture Boost Treatment", price: 750 },
                { name: "Rose Pedicure(Sensitive Skin)", price: 1800 }
            ]

            ],
        },
        {
            sub_category: "Nail Cut files & Polish",
            services: [
              [
                { name: "Cuccio Polish", price: 230 },
                { name: "Nail Cut & File", price: 100 },
                { name: "Nail Polish & Cut File", price: 280 },
                { name: "Nail Polish(French)", price: 260 }
            ]
            ],
        }
        ],
    },
    {
      id: 3,
      category: "Makeup",
      sub_category: [
        {
           sub_category: "Makeup (Women)",
           services: [
            { name: "Makeup (in SALON)", price: 2500 },
            { name: "Makeup (at VENUE)", price: 7500 },
           ],

        },
        {
            sub_category: "Makeup (Men)",
            services: [
              { name: "Makeup (at SALON)", price: 1500 },
              { name: "Makeup (at VENUE)", price: 2500 },
            ]
        }
      ],
    },
    {
      id: 4,
      category: "Massage",
      sub_category: [
        {
          sub_category: "Head Massage",
          services: [
            { name: "Head Massage without wash ", price: '320/400' },
            { name: "Head Massage with wash (Men)", price: 400 },
          ],
        },
        {
          sub_category: "Power Mix",
          services: [
            [
              { name: "Below Shoulder", price: 1800 },
              { name: "Upto Neck", price: 1200 },
              { name: "Upto Shoulder", price: 1500 },
              { name: "Upto Waist", price: 2000 }
          ]
          ],
        },
        {
          sub_category: "Protein Treatment",
          services: [
            [
              { name: "Below Shoulder", price: '7500/9000' },
              { name: "Fringes", price: '2600/3300' },
              { name: "Upto Neck", price: '4000/5000' },
              { name: "Upto Shoulder", price: '5500/7000' },
              { name: "Upto Waist", price: '9500/10500' }
          ]
          ],
        }

      ],
    },
    {
      id: 5,
      category: "Facial",
      sub_category: [
        {
           sub_category: "Basic Facial",
           services: [
            [
              { name: "Clarifying Acne Treatment", price: 2000 },
              { name: "Detox Facial", price: 1200 },
              { name: "Fruit Facial", price: 800 },
              { name: "Rejuvenating Facial", price: 1500 },
              { name: "Snovita (All Skin Type)", price: 1500 },
              { name: "Uplifting facial", price: 2500 },
              { name: "Youth Full Facial", price: 1400 }
          ]
           ],
        },
        {
          sub_category: "Cheryl's Special",
          services: [
            [
              { name: "Clari Glow", price: 2250 },
              { name: "Glowvita", price: 2250 },
              { name: "O3+ Diamond", price: 5000 },
              { name: "O3+ Gold", price: 4000 },
              { name: "O3+ Whiting", price: 3000 },
              { name: "Oxy Blast", price: 2250 },
              { name: "Sense Glow", price: 1800 },
              { name: "Tanclear", price: 1750 },
              { name: "Vita Lift", price: 3500 }
          ]
          ],
        },
        {
           sub_category: "Facemask",
           services: [
            [
              { name: "Black Mask - Under Arms", price: 500 },
              { name: "Black Mask Face", price: 1500 },
              { name: "Whitening Mask", price: 2000 }
          ]
           ],
        },
        {
           sub_category: "Threading",
           services: [
            [
              { name: "Chin/ Forehead", price: 50 },
              { name: "Eyebrow", price: 50 },
              { name: "Jawline/Side Locks", price: 50 },
              { name: "Upper Lip/ Lower lip", price: 40 }
          ]
            
           ],
        }
      ],
    },
    {
      id: 6,
      category: "And More",
      sub_category: [
        {
          sub_category: "D-Tan",
          services: [
            [
              { name: "Face & Neck", price: 550 },
              { name: "Feet/Palms", price: 350 },
              { name: "Full Arms", price: 1000 },
              { name: "Full Body", price: 3000 },
              { name: "Full Front/Back", price: 900 },
              { name: "Full Legs", price: 1500 },
              { name: "Half Arms", price: 500 },
              { name: "Half Front/Back", price: 600 },
              { name: "Half Legs", price: 800 },
              { name: "Under Arms", price: 250 }
          ]
          ],
        },
        {
           sub_category: "Clean-up",
           services: [
            [
              { name: "Fruitilicious (All Skin Type)", price: 650 },
              { name: "O3+", price: 1800 },
              { name: "Oxygenate (All Skin Type)", price: 1100 },
              { name: "Snovita (All Skin Types)", price: 1250 },
              { name: "Soothening Clean-up (Sensitive & Acne Skin)", price: 900 },
              { name: "Ultrawhite (Tanned & Dull SKin)", price: 1300 }
          ]
           ],
        },
        {
          sub_category: "Body Services",
          services: [
            [
              { name: "Body Polish (Black Pearl)", price: 5000 },
              { name: "Body Polish(Oatmeal & Walnut)", price: 7000 },
              { name: "Body Scrubs", price: 2500 },
              { name: "Massage Essential Oil", price: 2500 }
          ]
          ],
        },
        {
          sub_category: "Specila Care",
          services: [
            { name: "Heel Peel", price: 1800 },
          ],
        },
        {
          sub_category: "Reflexology",
          services: [
            [
              { name: "Feet", price: 800 },
              { name: "Hand", price: 600 },
              { name: "Hands & Feet", price: 1500 }
          ]
          ],
        },
        {
          sub_category: "Waxing with Regular Wax",
          services: [
            [
              { name: "Chin", price: 100 },
              { name: "Face", price: 300 },
              { name: "Full Arms", price: 350 },
              { name: "Full Body (Men)", price: 2000 },
              { name: "Full Body (Women)", price: 1800 },
              { name: "Full Front / Back (Brezleen)", price: 1500 },
              { name: "Full Legs", price: 350 },
              { name: "Half Arms", price: 150 },
              { name: "Half Front / Back", price: 450 },
              { name: "Half Legs", price: 350 },
              { name: "Side Locks / Jawline ", price: 80 },
              { name: "Stomach", price: 200 },
              { name: "Under Arms", price: 120 },
              { name: "Upper Lip", price: 100 }
          ]
          
           
          ],
        },
        {
          sub_category: "Waxing with Liposoluble Wax",
          services: [
            [
              { name: "Chin", price: 120 },
              { name: "Face", price: 500 },
              { name: "Full Arms", price: 450 },
              { name: "Full Body (Men)", price: 4000 },
              { name: "Full Body (Women)", price: 3500 },
              { name: "Full Front / Back (Brezleen)", price: 2000 },
              { name: "Full Legs", price: 750 },
              { name: "Half Arms", price: 300 },
              { name: "Half Front / Back", price: 650 },
              { name: "Half legs", price: 450 },
              { name: "Side Locks / Jawline", price: 200 },
              { name: "Stomach", price: 500 },
              { name: "Under Arms", price: 150 },
              { name: "Upper Lip", price: 150 }
          ]
          
          ],
        },
        {
          sub_category: "Waxing with Stripless Wax",
          services: [
            [
              { name: "Chin", price: 120 },
              { name: "Face", price: 700 },
              { name: "Face & Neck", price: 700 },
              { name: "Feet / Palm", price: 500 },
              { name: "Full Arms", price: 1500 },
              { name: "Full Body (Men)", price: 6500 },
              { name: "Full Body (Women)", price: 5000 },
              { name: "Full Front / Back", price: 1000 },
              { name: "Full Legs", price: 3000 },
              { name: "Half Arms", price: 500 },
              { name: "Half Front / Back", price: 900 },
              { name: "Half legs", price: 650 },
              { name: "Stomach", price: 700 },
              { name: "Under Arms", price: 250 },
              { name: "Upper Lip", price: 100 }
          ]
          
          ],
        },
        {
          sub_category: "Pre-Lightening",
          services: [
            { name: "Per Streak", price: 400 },
          ],
        }
      ]
    }
];
      