export const dummyFreelance = (category: string) => {
  switch (category) {
    case "Administrative & Operations":
      return [
        {
          id:1,
          imageUrl:
            "https://res.cloudinary.com/gurucom/image/upload/f_auto,w_128,h_128,dpr_2/pimg/1/891/1891022/photo_636001735363451538_guruImgLarge_1839478a-46a7-4e7d-b510-fd222d9979f0.jpg",
          address: "Gurgaon, Haryana, India",
          pay: "30,236",
          name: "Anu Mittal",
          tag: [
            "File Management",
            "HR Management",
            "HRM",
            "Management",
            "Office Assistant",
          ],
        },
        {
          id:2,
          imageUrl:
            "/images/20170805_093502_636375411570945345_guruImgLarge_2ebdefde-bbe7-46c8-8a43-de8febdc8532.avif",
          address: "Chelsea, OK, USA",
          pay: "Past Earnings",
          name: "Ashley Boswell",
          tag: [
            "Medical",
            "Microsoft",
            "Bookkeeping",
            "Insurance Consulting",
            "Marketing",
          ],
        },
        {
          id:3,
          imageUrl:
            "/images/Arun_637227661339530961_guruImgLarge_3429529e-2cf6-46e8-b66a-245421803c8e.avif",
          address: "Mumbai, Maharashtra, India",
          pay: "Past Earnings",
          name: "Arun Kumar (Certified GTD Trainer)",
          tag: [
            "Business Analysis",
            "Business Communications",
            "Business Consultant",
          ],
        },
        {
          id:4,
          imageUrl:
            "https://res.cloudinary.com/gurucom/image/upload/f_auto,w_128,h_128,dpr_2/v1679495317/pimg/FreelancerFiles/4/745/4745079/etezjdinjepkxqwpurpt.jpg",
          address: "Havant, England, United Kingdom",
          pay: "1,768",
          name: "Martin Jackson",
          tag: [
            "Business Analysis",
            "Business Consulting",
            "Business Development",
            "Business Management",
          ],
        },
      ];
    case "Interior design/Architecture":
      return [
        {
          id:5,
          imageUrl: "/images/pzxb4pejakj8u0rwywe7.avif",
          address: "Mexico, Nuevo Leon, Mexico",
          name: "Yvone Castillo",
          tag: ["3D Design", "3D Modeling", "3D Rendering", "Building Design"],
        },
        {
          id:6,
          imageUrl:
            "https://res.cloudinary.com/gurucom/image/upload/f_auto,w_128,h_128,dpr_2/pimg/2/184/2184858/PHOTO%20ALI_ABIDI_636358240520549748_guruImgLarge_961dcf55-1fa2-4a52-8007-108e04a90c3c.jpg",
          address: "Bou-Salem, Jendouba, Tunisia",
          pay: "2,962",
          name: "ALI ABIDI",
          tag: ["3D Design", "3D Modeling", "3D Rendering", "Building Design"],
        },
      ];
    case "Sales marketing":
      return [
        {
          id:7,
          imageUrl:
            "https://res.cloudinary.com/gurucom/image/upload/f_auto,w_128,h_128,dpr_2/pimg/3/564/3564755/fullsizeoutput_677_637407362734441747_guruImgExtraLarge7220878c-e48f-45df-83c5-32b306895068.jpeg",
          address: "Carson, CA, USA",
          pay: "134,320",
          name: "Nicole Lunan",
          tag: [
            "Accounting",
            "Customer Service",
            "Lead Generation",
            "Marketing",
          ],
        },
        {
          id:8,
          imageUrl: "/images/b7qjyajgsx8qxb89pt1h.avif",
          address: "newport coast, CA, USA",
          pay: "20,600",
          name: "Josclyn Virrey",
          tag: [
            "Affiliate Marketing",
            "Business Proposal Writing",
            "Sales and Marketing",
          ],
        },
        {
          id:9,
          imageUrl:
            "https://res.cloudinary.com/gurucom/image/upload/f_auto,w_128,h_128,dpr_2/v1641725175/pimg/FreelancerFiles/4/094/4094905/v4thah8g6nymt8adedcu.jpg",
          address: "Dhule, Maharashtra, India",
          pay: "17,050",
          name: "Aishwarya Shinde 1",
          tag: ["Content Marketing", "Digital Marketing", "Google Ads"],
        },
      ];
    case "Human Resources":
      return [
        {
          id:10,
          imageUrl:
            "/images/headshotlulu_635338001201004201_guruImgLarge_dd61030f-d940-43be-870e-e3c1366c52f1.avif",
          address: "katy, TX, USA",

          name: "Leo Valk",
          tag: ["Benefits", "Consultant", "Management", "WordPress"],
        },
        {
          id:11,
          imageUrl: "/images/xejsruhf95ekwv1cmlib.avif",
          address: "Lahore, Punjab, Pakistan",
          name: "M. Azam Khan",
          verified: "ID Verified",
          tag: ["GitHub", "LinkedIn", "Onboarding", "Skype"],
        },
        {
          id:12,
          imageUrl: "/images/ob29qrbp3sx8zkhquwpl.avif",
          address: "Indore, Madhya Pradesh, India",
          name: "PeopleCrop",
          tag: ["Benefits Design", "IT Recruitment", "Onboarding", "Payroll"],
        },
      ];
    case "Logistics and Supply-chain":
      return [
        {
          id:13,
          imageUrl: "/images/jpv8wttyewfn7lgbjjhk.avif",
          address: "Ajman, Ajman, United Arab Emirates",
          name: "Shweta Kulkarni1",
          tag: ["Drafting", "Construction", "Training", "Rate Contracts"],
        },
        {
          id:14,
          imageUrl:
            "/images/BoxLogicSep201915_637097624163401196_guruImgLarge_d85c9113-0e8d-48f7-b3e0-25e47ae48e19.avif",
          address: "Southampton, England, United Kingdom",
          name: "Nishit Nisudan",
          tag: [
            "Logistics",
            "Logistics Consulting",
            "Logistics Design",
            "Consultant",
          ],
        },
        {
          id:15,
          imageUrl:
            "/images/Linkedin Photo_636831174243587906_guruImgLarge_eead0e25-f58d-4e4f-9b7f-1855190e8554.avif",
          address: "Ronkonkoma, NY, USA",
          name: "Jonathan Riker",
          pay: "150",
          tag: ["Consultant", "ERP", "Programming", "Oracle Hyperion"],
        },
      ];
  }
};
