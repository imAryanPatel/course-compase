// Course data structure and sample courses

export interface Course {
  id: number;
  name: string;
  category: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    name: "Introduction to React",
    category: "Web Development",
    description: "Learn the fundamentals of React including components, state, and props.",
  },
  {
    id: 2,
    name: "Python for Beginners",
    category: "Programming",
    description: "Start your programming journey with Python basics and practical projects.",
  },
  {
    id: 3,
    name: "UI/UX Design Fundamentals",
    category: "Design",
    description: "Master the principles of user interface and user experience design.",
  },
  {
    id: 4,
    name: "Data Science Essentials",
    category: "Data Science",
    description: "Explore data analysis, visualization, and machine learning basics.",
  },
  {
    id: 5,
    name: "JavaScript Deep Dive",
    category: "Web Development",
    description: "Advanced JavaScript concepts including closures, prototypes, and async patterns.",
  },
  {
    id: 6,
    name: "Digital Marketing Mastery",
    category: "Marketing",
    description: "Learn SEO, social media marketing, and content strategy techniques.",
  },
  {
    id: 7,
    name: "Mobile App Development",
    category: "Mobile",
    description: "Build cross-platform mobile apps using React Native framework.",
  },
  {
    id: 8,
    name: "Graphic Design Basics",
    category: "Design",
    description: "Learn color theory, typography, and layout design principles.",
  },
  {
    id: 9,
    name: "Cloud Computing with AWS",
    category: "Cloud",
    description: "Deploy and manage applications on Amazon Web Services.",
  },
  {
    id: 10,
    name: "Machine Learning Foundations",
    category: "Data Science",
    description: "Understand algorithms, neural networks, and model training basics.",
  },
  {
    id: 11,
    name: "TypeScript Masterclass",
    category: "Programming",
    description: "Add type safety to your JavaScript projects with TypeScript.",
  },
  {
    id: 12,
    name: "Cybersecurity Fundamentals",
    category: "Security",
    description: "Learn to protect systems and data from common security threats.",
  },
];
