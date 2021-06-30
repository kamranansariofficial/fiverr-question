const data = [
  {
    question:
      "Time for an upgrade? Let’s find you the best car financing options:",
    answers: ["yes please!", "No need", "tell me more about credit finance"],
    goto: 1,
  },
  {
    question: "Are you looking for a new or used car?",
    answers: ["Pre-owned", "fresh and new", "not sure yet"],
    goto: 2,
    goback: 0,
  },
  {
    question:
      "Let us get to know you a bit more. Have you ever filed for bankruptcy?",
    answers: ["Yes ", "No"],
    goto: 3,
    goback: 1,
  },
  {
    question:
      "Before we work it out, we need to know how you work it! Have you been in your current job for more than three months?",
    answers: ["Yes ", "No"],
    goto: 4,
    goback: 2,
  },
  {
    question:
      "We’re nearly there! Are you happy if one our go-to finance pro’s contact you to help? Yes please  that would be great orries! ",
    answers: ["Please pop in your email address and phone number"],
    goto: 4,
    goback: 3,
    href: "https://www.mont-tremblant.ca/en/what-to-do/winter/alpine-skiing-and-snowboarding?utm_campaign=hiver20192020&utm_medium=display&utm_source=crucial&utm_content=ski_970x250&utm_term=toronto",
  },
];
export default data;
