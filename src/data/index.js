export default [
  {
    name: "Adam Miller",
    email: "adam.miller@example.com",
    designation: "CEO",
    reporting_manager: null,
    children: [
      {
        name: "Dennis Rice",
        email: "dennis.rice@example.net",
        designation: "CTO",
        reporting_manager: "CEO",
        children: [
          {
            name: "Emily Turner",
            email: "emily.turner@example.org",
            designation: "Director of Software Development",
            reporting_manager: "CTO",
            children: [
              {
                name: "Samuel Carter",
                email: "samuel.carter@example.com",
                designation: "Software Development Manager",
                reporting_manager: "emily.turner@example.org",
                children: [
                  {
                    name: "Olivia Davis",
                    email: "olivia.davis@example.net",
                    designation: "Senior Software Engineer",
                    reporting_manager: "samuel.carter@example.com",
                  },
                  {
                    name: "Lucas Evans",
                    email: "lucas.evans@example.net",
                    designation: "Senior Software Engineer",
                    reporting_manager: "samuel.carter@example.com",
                  },
                ],
              },
            ],
          },
          {
            name: "Sophia White",
            email: "sophia.white@example.net",
            designation: "Director of IT Infrastructure",
            reporting_manager: "CTO",
            // children: [
            //   {
            //     name: "Aiden Harris",
            //     email: "aiden.harris@example.com",
            //     designation: "Network Manager",
            //     reporting_manager: "sophia.white@example.net",
               
            //   },
             
            // ],
          },
        ],
      },
    ],
  },
];
