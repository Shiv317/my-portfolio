import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated Computer Science student at York University, with a strong foundation in both software development and data science. My passion lies in creating innovative, data-driven solutions, and I have hands-on experience in machine learning, web development, and data analytics. My approach to problem-solving is grounded in a deep understanding of modern technology stacks, from building efficient front-end interfaces to crafting robust back-end systems. I have a proven track record of working with frameworks such as React, Vue.js, and machine learning libraries like TensorFlow and Scikit-learn to deliver real-world solutions. I am driven by curiosity and a desire to apply my technical expertise to solve challenging problems, whether it's through analyzing complex datasets or building scalable web applications.`;

export const ABOUT_TEXT = `I am currently pursuing my Bachelor of Science in Computer Science at York University, with an expected graduation date of April 2025. Throughout my academic journey, I have developed a keen interest in data science and full-stack development. I have honed my skills in various programming languages, including Python, JavaScript, SQL, and C++, and have gained practical experience using frameworks such as React.js, Vue.js, and Django. My academic projects have ranged from implementing machine learning models to developing interactive web applications, which have strengthened my understanding of both front-end and back-end development. I enjoy working in collaborative environments where I can apply my skills to solve complex problems, whether it be designing systems for large-scale data analysis or building seamless user experiences in web applications. Outside of academics, I am always eager to learn and experiment with new technologies, contributing to open-source projects, and staying up-to-date with industry trends.`;

export const EXPERIENCES = [
  {
    year: "October 2024 - Present",
    role: "Data Science Intern",
    company: "CodeClause",
    description: `As a Data Science Intern at CodeClause, I was responsible for developing a comprehensive customer segmentation tool using K-Means clustering, allowing the company to better understand and target distinct customer groups. I also implemented predictive models for customer lifetime value, which enabled more informed business decisions based on expected revenue from different customer segments. This project required the use of various machine learning algorithms and data processing techniques, including regression models, feature engineering, and data visualization. Working primarily with Python, Streamlit, and Scikit-learn, I also gained valuable experience in deploying models for real-time user interaction. The internship allowed me to improve my ability to translate business needs into technical solutions, enhance my machine learning skills, and collaborate effectively within a team. Technologies and frameworks used in this role include Python, Pandas, Streamlit for UI development, Scikit-learn for machine learning models, and NumPy for data manipulation.`,
    technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy"],
  },
];

export const PROJECTS = [
  {
    year: "August 2024",
    title: "Portfolio Website",
    image: project3,
    description:
      "I designed and developed a fully responsive personal portfolio website to showcase my projects, technical skills, and professional background. Built using React and Tailwind CSS, the site features clean, modern design principles with a focus on usability and accessibility. The website serves as a centralized hub for prospective employers and collaborators to explore my work, view my technical expertise, and connect with me. I also integrated performance optimization techniques, ensuring that the website loads quickly across devices. This project allowed me to strengthen my front-end development skills while also applying modern design patterns and ensuring a mobile-first approach.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    year: "August 2024",
    title: "Fake News Detection using Logistic Regression",
    image: project2,
    description:
      "In this project, I developed a fake news detection system to classify news articles as real or fake based on their content. Using logistic regression as the classification algorithm, I preprocessed the text data with TF-IDF vectorization to convert raw text into meaningful numerical features. The model was trained on a large dataset and achieved a 97.9% accuracy rate on the test set. This project demonstrates my ability to work with natural language processing (NLP) techniques and apply machine learning algorithms to solve complex problems. The fake news detection tool could be applied in media outlets or social media platforms to identify misleading or false information, providing real-world utility. Technologies and frameworks used in this project include Python for the main application, Scikit-learn for machine learning, NLTK for text processing, and TF-IDF for feature extraction.",
    technologies: ["Python", "Scikit-learn", "NLTK", "TF-IDF", "Pandas"],
  },
  {
    year: "September 2024",
    title: "Face Mask Detection using Convolutional Neural Networks",
    image: project1,
    description:
      "This project involved the development of a Convolutional Neural Network (CNN) for real-time face mask detection, a crucial task during the COVID-19 pandemic. The model, implemented using TensorFlow and Keras, achieved a 99.97% accuracy on the training set and 93.5% on the test set after extensive training over 100 epochs. By integrating OpenCV, I enabled the system to detect whether a person is wearing a mask in real time, making it suitable for public safety applications. This project gave me deeper insights into deep learning architectures and their practical applications in computer vision. Additionally, I learned about the importance of data preprocessing and model tuning in achieving high accuracy on real-world tasks. Technologies used in this project include TensorFlow/Keras for deep learning, OpenCV for real-time image processing, and Python for data handling and model implementation.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Keras", "NumPy"],
  },
  {
    year: "September 2024",
    title: "Movie Recommender System Using Content-Based Filtering",
    image: project4,
    description:
      "The Movie Recommender System is a project where I implemented a content-based filtering algorithm to suggest movies based on their metadata, such as genres, cast, and crew. By calculating similarity scores between movies using this metadata, the system can recommend movies that are similar to what the user has previously watched. This project was deployed using Streamlit, which allows for real-time user interaction and recommendations. I also integrated data from the TMDB API, making it easier to fetch relevant movie data for the recommendations. This project highlights my ability to work with APIs, manage datasets, and develop machine learning models for personalized user experiences. Technologies and frameworks used include Python for data manipulation and machine learning, Pandas for data analysis, Scikit-learn for building recommendation models, and the TMDB API for fetching movie metadata.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit", "TMDB API"],
  },
];

export const CONTACT = {
  address: "Toronto, ON, Canada",
  phoneNo: "(437)-339-9349",
  email: "shivailanand2003@gmail.com",
};
