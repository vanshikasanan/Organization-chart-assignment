export default [
  {
    name: "Adam Miller",
    role: "CEO",
    team: "Executive Team",
    children: [
      {
        name: "Emily Turner",
        role: "Director Engineering",
        team: "Engineering",
        children: [
          {
            name: "Samuel Carter",
            role: "Engineering Manager",
            team: "Engineering",
            children: [
              {
                name: "Olivia Davis",
                role: "Senior Software Engineer",
                team: "Engineering",
              },
              {
                name: "Lucas Evans",
                role: "Senior Software Engineer",
                team: "Engineering",
                children: [
                  {
                    name: "Liam Thompson",
                    role: "Software Engineer",
                    team: "Engineering",
                  },
                  {
                    name: "Ava Martinez",
                    role: "Software Engineer",
                    team: "Engineering",
                  },
                ],
              },
            ],
          },
          {
            name: "Sophia White",
            role: "Director of IT Infrastructure",
            team: "IT",
            children: [
              {
                name: "Aiden Harris",
                role: "Network Manager",
                team: "IT",
                children: [
                  {
                    name: "Emma Foster",
                    role: "Network Engineer",
                    team: "IT",
                  },
                  {
                    name: "Henry Adams",
                    role: "Network Engineer",
                    team: "IT",
                  },
                ],
              },
            ],
          },
        ],
      },
      ,
    ],
  },
];
