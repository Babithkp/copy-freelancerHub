export const findTopFreelanceCategory = (category: string) => {
  switch (category) {
    case "Interior design/Architecture":
      return [
        {
          icon: "/svg/architecture-svgrepo-com.svg",
          title: "Interior designer/Architect ",
          subTitle: "274,207 Freelancers",
          link: "#",
        },
      ];
    case "Logistics and Supply-chain":
      return [
        {
          icon: "/svg/logistics-truck-ultrathin-vehicle-outline-svgrepo-com.svg",
          title: "Logistic consultant ",
          subTitle: "274,207 Freelancers",
          link: "#",
        },
        {
          icon: "/svg/logistics-truck-ultrathin-vehicle-outline-svgrepo-com.svg",
          title: "Supply Chain consultant ",
          subTitle: "274,207 Freelancers",
          link: "#",
        },
        {
          icon: "/svg/logistics-truck-ultrathin-vehicle-outline-svgrepo-com.svg",
          title: "Procurement consultant ",
          subTitle: "274,207 Freelancers",
          link: "#",
        },
        {
          icon: "/svg/logistics-truck-ultrathin-vehicle-outline-svgrepo-com.svg",
          title: "Freight forwarding agent",
          subTitle: "274,207 Freelancers",
          link: "#",
        },
      ];
    case "Human Resources":
      return [
        {
          icon: "/svg/human-resources-svgrepo-com.svg",
          title: "Recruiter",
          subTitle: "274,207 Freelancers",
          link: "#",
        },
        {
          icon: "/svg/human-resources-svgrepo-com.svg",
          title: "HR consultant",
          subTitle: "274,207 Freelancers",
          link: "#",
        },
        {
          icon: "/svg/human-resources-svgrepo-com.svg",
          title: "Payroll administrator",
          subTitle: "274,207 Freelancers",
          link: "#",
        },
      ];
    case "Sales marketing":
      return [
        {
          icon: "/svg/marketing-laptop-chat-comment-dialogue-svgrepo-com.svg",
          title: "Digital marketing",
          subTitle: "274,207 Freelancers",
          link: "#",
        },
        {
          icon: "/svg/marketing-laptop-chat-comment-dialogue-svgrepo-com.svg",
          title: "Lead generation",
          subTitle: "274,207 Freelancers",
          link: "#",
        },
      ];
    case "Administrative & Operations":
      return [
        {
          icon: "/svg/administrator-analytics-svgrepo-com.svg",
          title: "Virtual Assistant",
          subTitle: "274,207 Freelancers",
          link: "#",
        },
        {
          icon: "/svg/administrator-analytics-svgrepo-com.svg",
          title: "Business consultant",
          subTitle: "274,207 Freelancers",
          link: "#",
        },
      ];
  }
};
