export type Member = {
  name: string;
  role: string;
  image: string;
};

export type TeamYear = {
  /** e.g. "2025-2026" */
  year: string;
  members: Member[];
};

/** Newest first. Mirrors the team listing on the previous vvce.acm.org site. */
export const teams: TeamYear[] = [
  {
    year: "2025-2026",
    members: [
      { name: "Hamsaveni M", role: "Faculty Sponsor", image: "/Assets/Crop/2022/hamsaveni.jpg" },
      {
        name: "Akshatha Manjunath",
        role: "Faculty Co-ordinator",
        image: "/Assets/Crop/akshatha.jpeg",
      },
      {
        name: "Lakshmi B S",
        role: "Faculty Co-ordinator",
        image: "/Assets/Crop/2023/Lakshmi1-229x300.jpg",
      },
      { name: "Sanjit V K", role: "Chair", image: "/Assets/Crop/sanchit.jpeg" },
      { name: "Sanjana R", role: "Vice-Chair", image: "/Assets/Crop/sanjana.jpeg" },
      { name: "Praneeth G", role: "Secretary", image: "/Assets/Crop/praneeth.jpeg" },
      { name: "Nischala", role: "Treasurer", image: "/Assets/Crop/nischala.jpeg" },
      { name: "Sreevathsa R", role: "Technical Head", image: "/Assets/Crop/vathsa.jpeg" },
      { name: "Sneha", role: "Web Master", image: "/Assets/Crop/sneha.jpeg" },
    ],
  },
  {
    year: "2024-2025",
    members: [
      { name: "Hamsaveni M", role: "Faculty Sponsor", image: "/Assets/Crop/2022/hamsaveni.jpg" },
      {
        name: "Lakshmi B S",
        role: "Faculty Co-ordinator",
        image: "/Assets/Crop/2023/Lakshmi1-229x300.jpg",
      },
      { name: "Kasturi Rangan", role: "Web Sponsor", image: "/Assets/Crop/2023/rkis.jpg" },
      { name: "Rachana H S", role: "Chair", image: "/Assets/Crop/2024/Rachana_H_S.jpeg" },
      { name: "Aditi P", role: "Vice-Chair", image: "/Assets/Crop/2024/Aditi.jpg" },
      { name: "Aiman Shariff", role: "Secretary", image: "/Assets/Crop/2024/Aiman_Shariff.jpeg" },
      { name: "Syed Nawaz", role: "Treasurer", image: "/Assets/Crop/2024/Syed_Nawaz.jpeg" },
      { name: "Sanjit V K", role: "Web Master", image: "/Assets/Crop/2024/Sanjit_V_K.jpeg" },
      { name: "Prathap Raj", role: "Media Head", image: "/Assets/Crop/2024/Prathap_Raj.jpeg" },
    ],
  },
  {
    year: "2023-2024",
    members: [
      { name: "Hamsaveni M", role: "Faculty Sponsor", image: "/Assets/Crop/2022/hamsaveni.jpg" },
      {
        name: "Lakshmi B S",
        role: "Faculty Co-ordinator",
        image: "/Assets/Crop/2023/Lakshmi1-229x300.jpg",
      },
      { name: "Kasturi Rangan", role: "Web Sponsor", image: "/Assets/Crop/2023/rkis.jpg" },
      { name: "Sampath Rakshith", role: "Chair", image: "/Assets/Crop/2023/rakshit.jpg" },
      { name: "Sathvik S R", role: "Vice-Chair", image: "/Assets/Crop/2023/sthvik.jpg" },
      { name: "Bhargavi N M", role: "Secretary", image: "/Assets/Crop/2023/Bhargavi.jpg" },
      { name: "Deepika K S", role: "Treasurer", image: "/Assets/Crop/2023/deepika.jpg" },
      {
        name: "Somen Das",
        role: "Web Master",
        image: "/Assets/Crop/2023/WhatsApp Image 2024-03-27 at 13.21.23_58c3c11f.jpg",
      },
      { name: "Pranava Thejaswi N M", role: "Media Head", image: "/Assets/Crop/2023/pranava.jpg" },
    ],
  },
  {
    year: "2022-2023",
    members: [
      { name: "Hamsaveni M", role: "Faculty Sponsor", image: "/Assets/Crop/2022/hamsaveni.jpg" },
      { name: "Dr. Gururaj H L", role: "Faculty Sponsor", image: "/Assets/Crop/Gururaj.png" },
      {
        name: "Lavanya M C",
        role: "Faculty Co-ordinator",
        image: "/Assets/Crop/2022/lavanya.jpeg",
      },
      { name: "Prof. Vidyashree K P", role: "Web Sponsor", image: "/Assets/Crop/2021/VKP.jpg" },
      { name: "Suhas G", role: "Chair", image: "/Assets/Crop/2022/suhas.jpeg" },
      { name: "Madhushree M", role: "Vice-Chair", image: "/Assets/Crop/2022/madhushree.jpg" },
      { name: "Sanjay S", role: "Secretary", image: "/Assets/Crop/2022/sanjay.jpeg" },
      { name: "Sampath Rakshith", role: "Treasurer", image: "/Assets/Crop/2022/sampath.jpeg" },
      {
        name: "Sudarshan Hiregouda",
        role: "Web Master",
        image: "/Assets/Crop/2022/sudarshan.jpeg",
      },
      { name: "Sathvik S R", role: "Media Head", image: "/Assets/Crop/2022/sathvik.jpg" },
      { name: "Kruthika Urs", role: "Technical Head", image: "/Assets/Crop/2022/Kruthika.jpg" },
    ],
  },
  {
    year: "2021-2022",
    members: [
      { name: "Dr. Gururaj H L", role: "Faculty Sponsor", image: "/Assets/Crop/Gururaj.png" },
      { name: "Prof. Vidyashree K P", role: "Web Sponsor", image: "/Assets/Crop/2021/VKP.jpg" },
      { name: "Saathvik D M", role: "Chair", image: "/Assets/Crop/2021/saathvik.jpg" },
      { name: "Nydile", role: "Vice-Chair", image: "/Assets/Crop/2021/nydile.jpg" },
      { name: "Maanyatha M", role: "Secretary", image: "/Assets/Crop/2021/maanyatha.jpg" },
      { name: "Madhurya M J", role: "Treasurer", image: "/Assets/Crop/2021/madhurya.jpg" },
      { name: "Suhas G", role: "Web Master", image: "/Assets/Crop/2021/suhas.jpg" },
      {
        name: "Mohammed Kaif Khan Ghori",
        role: "Technical Head",
        image: "/Assets/Crop/2021/Kaif.jpg",
      },
    ],
  },
  {
    year: "2020-2021",
    members: [
      { name: "Dr. Gururaj H L", role: "Faculty Sponsor", image: "/Assets/Crop/Gururaj.png" },
      { name: "Neha R", role: "Chair", image: "/Assets/Crop/Neha.png" },
      { name: "Reena Reddy", role: "Vice-Chair", image: "/Assets/Crop/Reena.png" },
      { name: "Suraj G", role: "Secretary", image: "/Assets/Crop/SurajG.png" },
      { name: "Sathya Pramod", role: "Treasurer", image: "/Assets/Crop/Pramod.png" },
      { name: "Nithin B O", role: "Web Master", image: "/Assets/Crop/Nithin.png" },
      { name: "Saathvik D M", role: "Web Master", image: "/Assets/Crop/Saathvik.png" },
      { name: "Vishal B", role: "Event Co-ordinator", image: "/Assets/Crop/Vishal.png" },
      { name: "Sharmila", role: "Event Co-ordinator", image: "/Assets/Crop/Sharmila.png" },
      { name: "Shrivatsa G", role: "Event Co-ordinator", image: "/Assets/Crop/Sri.png" },
    ],
  },
  {
    year: "2019-2020",
    members: [
      { name: "Dr. Gururaj H L", role: "Faculty Sponsor", image: "/Assets/Crop/Gururaj.png" },
      { name: "Manoj Athreya", role: "Chair", image: "/Assets/Crop/2019/Manoj.png" },
      { name: "Neha R", role: "Vice-Chair", image: "/Assets/Crop/Neha.png" },
      { name: "Reena Reddy", role: "Secretary", image: "/Assets/Crop/Reena.png" },
      { name: "Ashwin A Kumar", role: "Treasurer", image: "/Assets/Crop/2019/Ashwin.png" },
      { name: "Parikshith H", role: "Web Master", image: "/Assets/Crop/2019/Parikshith.png" },
      {
        name: "Ismael R Nadaf",
        role: "Head Creative & Design",
        image: "/Assets/Crop/2019/ismael.png",
      },
      { name: "Sinchana C", role: "Event Convener", image: "/Assets/Crop/2019/Sinchana.png" },
      {
        name: "Vijay Kumar",
        role: "Publicity and Outreach Co-ordinator",
        image: "/Assets/Crop/2019/Vijay.png",
      },
    ],
  },
  {
    year: "2018-2019",
    members: [
      { name: "Dr. Gururaj H L", role: "Faculty Sponsor", image: "/Assets/Crop/Gururaj.png" },
      { name: "Keerthana M C", role: "Chair", image: "/Assets/Crop/2018/keerthana.png" },
      { name: "Shashank Athreya", role: "Vice-Chair", image: "/Assets/Crop/2018/shashank.png" },
      { name: "Shreyas Dixit", role: "Secretary", image: "/Assets/Crop/2018/ShreyasD.png" },
      { name: "Madhurish Katta", role: "Treasurer", image: "/Assets/Crop/2018/Madhurish.png" },
      { name: "Shreyas V", role: "Web Master", image: "/Assets/Crop/2018/Shreyas.jpg" },
    ],
  },
];

/** `teams` is never empty, so index 0 is always the newest council. */
export const currentTeam = teams[0] as TeamYear;
