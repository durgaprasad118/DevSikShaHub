import React, { useState } from 'react'
import Panel from './Panel'
const data = [
  {
    title: "Can I get a refund if I'm not satisfied with a course?",
    description:
      'Refund policies can vary depending on the course and the instructor. You can find detailed information on our refund policy in the course description.',
    id: 0,
  },
  {
    title: "How can I search for courses on DevSikShaHub?",
    description:
      'You can search for courses using the search bar on the homepage. You can also browse through categories and filter results based on your preferences. ',
    id: 1,
  },
  {
    title: 'What if I encounter technical issues while accessing a course?    ',
    description:
      "If you face technical problems, please contact our support team. We'll assist you in resolving any issues as quickly as possible.      ",
    id: 2,
  },
  {
    title: "I'm an instructor. How can I add my courses to DevSikShaHub?",
    description:
      'As an instructor, you can register as an admin, log in to your account, and then access the "Add Course" option to upload your courses, including details and content.',
    id: 3,
  },
  {
    title: 'What are the free courses on DevSikShaHub, and how can I access them?    ',
    description:
      'We offer a selection of free courses that you can access without any charge. Simply browse our "Free Courses" section to explore and enroll in them.',
    id: 4,
  },
  {
    title: 'What are tech-related roadmaps, and how do they work?    ',
    description:
      'Tech roadmaps are curated learning paths to help you master a specific technology or skill. You can follow these step-by-step guides to achieve your learning goals.',
    id: 5,
  },
]

const Accordian = () => {
  const [isActive, setisActive] = useState(-1)
  function handleclick(id) {
    setisActive(isActive === id ? -1 : id)
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center space-y-4 ">
      {data.map((x) => {
        return (
          <Panel
            key={x.id}
            title={x.title}
            id={x.id}
            description={x.description}
            // isActive={isActive}
            // handleclick={handleclick}
          ></Panel>
        )
      })}
    </div>
  )
}
export default Accordian
