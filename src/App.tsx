import React from "react";

import ReactMarkdown from "react-markdown";
import { usePDF } from "react-to-pdf";
import remarkGfm from "remark-gfm";
const App: React.FC = () => {
  const { toPDF, targetRef } = usePDF({
    filename: "page.pdf",
    page: {
      margin: 8,
    },
  });
  const markdownContent = `
 # Job Description: Senior Frontend Engineer

## About the Role
We are looking for an experienced **Senior Frontend Engineer** to take a leading role in designing and building top-notch user interfaces that deliver exceptional user experiences. You will work in a collaborative, fast-paced environment, engaging with cross-functional teams to create visually stunning and highly performant applications. Your work will directly impact our users and define the frontend architecture for the future.
This position offers an exciting opportunity to influence product direction, mentor junior team members, and drive technical excellence across the organization.
## Key Responsibilities
### **1. Frontend Development**
- Develop and maintain high-performance, scalable, and responsive web applications.
- Write clean, reusable, and efficient code following best practices and standards.
- Collaborate with backend engineers to integrate frontend and backend systems seamlessly.

### **2. Architecture and Design**
- Drive the design and implementation of complex frontend architectures.
- Evaluate and adopt modern frontend technologies and frameworks to improve efficiency.
- Define and document coding standards and development workflows.

### **3. Collaboration**
- Partner with UX/UI designers to bring user-centric designs to life.
- Work closely with product managers to understand user needs and translate them into technical requirements.
- Act as a bridge between frontend and backend teams to ensure a unified product vision.

### **4. Quality Assurance**
- Conduct peer code reviews to maintain code quality and consistency.
- Write comprehensive unit, integration, and end-to-end tests to ensure application reliability.
- Monitor and debug production issues, providing quick and effective solutions.

### **5. Performance Optimization**
- Analyze application performance and implement enhancements to ensure smooth user experiences.
- Optimize web pages for maximum speed and scalability.
- Implement lazy loading, caching strategies, and other techniques to improve performance.

### **6. Mentorship and Leadership**
- Provide technical leadership and mentorship to junior engineers.
- Lead knowledge-sharing sessions to promote learning within the team.
- Advocate for best practices in software development and project management.

### **7. Innovation**
- Stay current with emerging frontend technologies and frameworks.
- Drive proof-of-concept projects to explore new tools and solutions.
- Contribute to strategic decisions about technology, frameworks, and workflows.

## Required Qualifications
### **Technical Expertise**
- **Languages & Frameworks**: Proficiency in JavaScript, TypeScript, and modern frontend frameworks like React, Angular, or Vue.js.
- **State Management**: Strong knowledge of Redux, MobX, or similar libraries.
- **Styling**: Expertise in CSS, SASS/SCSS, CSS-in-JS, and responsive design techniques.
- **APIs**: Experience working with RESTful APIs, GraphQL, and WebSocket integrations.
- **Tooling**: Proficiency with build tools like Webpack, Vite, or similar.
- **Testing**: Hands-on experience with testing tools like Jest, Mocha, Cypress, or Playwright.

### **Professional Experience**
- **Years of Experience**: Minimum 5+ years of professional experience in frontend development.
- Proven track record of delivering high-quality, production-grade web applications.

### **Soft Skills**
- Excellent communication skills to explain complex technical concepts to stakeholders.
- Strong analytical and problem-solving skills, with attention to detail.
- Ability to work independently while collaborating effectively in a team environment.

### **Preferred Qualifications**
- Familiarity with server-side rendering technologies (e.g., Next.js or Nuxt.js).
- Knowledge of accessibility standards (WCAG) and SEO best practices.
- Experience with internationalization (i18n) and localization (l10n).
- Exposure to CI/CD pipelines, containerization (Docker), and cloud environments (AWS, GCP, or Azure).
- Open-source contributions or side projects demonstrating technical expertise.

## Benefits & Perks
- **Competitive Compensation**: Attractive salary with performance-based bonuses.
- **Work-Life Balance**: Flexible working hours and options for remote work.
- **Learning Opportunities**: Access to industry-leading conferences, workshops, and certification programs.
- **Comprehensive Benefits**: Health insurance, paid time off, and wellness programs.
- **Dynamic Environment**: Work with a talented, passionate, and inclusive team.

## How to Apply
If you are passionate about building world-class user interfaces and love working in a collaborative environment, we’d love to hear from you!

Please send your resume, GitHub profile, and portfolio to [email@example.com].

---

**Take your frontend career to the next level. Join us today!**
  `;

  return (
    <div>
      <div ref={targetRef} id="markdown-container">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className={"whitespace-pre-wrap"}
          components={{
            p: ({ node, ...props }) => {
              return <p {...props} className="text-[35px] text-[#4e5255]" />;
            },
            h1: ({ node, ...props }) => {
              return <h1 {...props} className="text-[40px] font-bold" />;
            },
            h2: ({ node, ...props }) => {
              return (
                <h2
                  {...props}
                  className="text-[38px] font-semibold leading-[2.5]"
                />
              );
            },
            h3: ({ node, ...props }) => {
              return <h3 {...props} className="text-[35px] leading-[0.5]" />;
            },
            li: ({ node, ...props }) => {
              return (
                <li {...props} className="text-[35px] text-[#4e5255] mx-8" />
              );
            },
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
      <button onClick={() => toPDF()}>Download PDF</button>
    </div>
  );
};

export default App;
