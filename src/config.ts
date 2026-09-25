// كل دراسة حالة تحتوي slug ثابت
// يمكن إعادة استخدام نفس المكوّن لاحقاً في /work/[slug] عبر getStaticPaths دون تعديل العرض
export const siteConfig = {
  name: "Ahmed Abdo Mahmoud",
  title: "Web Developer",
  description:
    "Web developer building business web applications, dashboards, internal tools, and API-driven systems with Django, React, and modern web technologies.",
  accentColor: "#1d4ed8",
  social: {
    email: "go.ahmed.abdu@gmail.com",
    linkedin: "https://www.linkedin.com/in/ahmed-abdu-57202224/",
    github: "https://github.com/010555",
  },
  aboutMe:
    "I build business web applications, dashboards, and internal tools. My focus is on turning manual processes into structured applications with role-based access, clear workflows, and a REST API behind the interface.",
  services: [
    {
      title: "Business Web Applications",
      description:
        "Web applications built around business workflows: project tracking, task management, records, and reporting.",
    },
    {
      title: "Dashboards & Internal Tools",
      description:
        "Role-based dashboards and internal tools that give teams one place to view and update operational data.",
    },
    {
      title: "Existing System Improvements",
      description:
        "Work on existing codebases: adding features, fixing defects, and improving structure and maintainability.",
    },
    {
      title: "API & System Integrations",
      description:
        "REST APIs and integrations that connect separate systems so data moves between them without manual copying.",
    },
  ],
  capabilities: [
    {
      group: "Backend",
      items: ["Django", "Django REST Framework", "REST APIs", "JWT Authentication"],
    },
    {
      group: "Frontend",
      items: ["React", "Vite", "JavaScript"],
    },
    {
      group: "Testing",
      items: ["Automated Testing", "Playwright", "End-to-End Testing"],
    },
  ],
  // حقل purpose بدل problem: المشروع ذاتي التوجيه ولا يوجد عميل
  // لذلك نصف الغرض بدل ادعاء مشكلة عميل أو نتيجة تجارية
  caseStudies: [
    {
      slug: "project-management-system",
      title: "Project Management System",
      type: "Self-directed project",
      summary:
        "A project management system built to organize projects, tasks, team members, and day-to-day workflow in a role-based environment.",
      purpose:
        "A self-directed build of a role-based system for organizing projects, tasks, and team workflows. The goal was to design and implement a complete full-stack application, not work delivered for a client.",
      approach:
        "Django and Django REST Framework provide the API layer, with JWT authentication and role-based access control. React and Vite power the interface, including project, manager, and employee dashboards, task status workflows, comments, and user management. Automated backend and frontend tests are supported by Playwright end-to-end tests.",
      role: "Designed and built the project end to end: data model, REST API, authentication and access control, React interface, dashboards, and automated tests.",
      capabilities: [
        "Project and task management",
        "Role-based access control",
        "JWT authentication",
        "Task status workflows and transitions",
        "Comments and collaboration",
        "Project, manager, and employee dashboards",
        "User management",
        "REST API architecture",
        "Automated backend and frontend testing",
        "Playwright end-to-end testing",
      ],
      stack: [
        "Django",
        "Django REST Framework",
        "React",
        "Vite",
        "REST API",
        "JWT",
        "Playwright",
      ],
      outcomes: [
        "A working application covering project, task, member, and workflow management.",
        "Role separation for managers and employees enforced in the interface and the API.",
        "Automated backend, frontend, and end-to-end test coverage.",
      ],
    },
  ],
  experience: [],
  education: [],
};
