import React, { useContext, useState } from "react";
import HeroSection from "components/HeroSection";
import Footer from "components/Footer";
import { useQuestions } from "../../context/AssessmentContext";
import { UserContext } from "../../context/UserContext";
import { Text } from "../../components";

export default function AssessmentPage() {
  const { questions, takeAssessment } = useQuestions();
  const { currentUser } = useContext(UserContext);
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionId, rating) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedAnswers = questions.map((question) => ({
      question_id: question.id,
      rating: answers[question.id] || 0 // Default to 0 or another value if not answered
    }));

    const raw = JSON.stringify({
      "user_id": currentUser.id,
      "answers": formattedAnswers
    });

    console.log(raw)

    takeAssessment(raw);
  };

  

  return (
    <>
      <div className="flex flex-col  justify-start w-full gap-[716px] bg-white-A700 gap-0" >
        <HeroSection className="bg-gradient flex flex-col items-end justify-start md:pl-10 pl-20 sm:pl-5 pt-20 w-full" aboutustext="Assessment" />
        <div className="flex flex-col flex-wrap content-center self-center items-center justify-start w-full p-5 ">
            <Text className=" text-[28px] italic text-black-900" size="txtManropeBold28Black900">Rate(1-5) each of the following.</Text>
            <Text className=" text-[28px] italic text-black-900"
            >Moods(Normal, Depressed, Content, Anxious, Unhappy)</Text>
          <form onSubmit={handleSubmit}>
            {questions.map((question) => (
              <div key={question.id}>
                <Text
            className=" text-[35px] text-black-900"
            size="txtManropeBold35Black900"
          >
            {question.question_text}
          </Text>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label
                    className=" text-[35px] text-black-900 mr-4"
                   key={rating}>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={rating}
                      onChange={() => handleAnswerChange(question.id, rating)}
                      checked={answers[question.id] === rating}
                    />
                    {rating}
                  </label>
                ))}
              </div>
            ))}
            <div className="flex justify-center">
            <button className="text-white bg-deep_orange-400 rounded-[10px] p-3.5  mt-5" type="submit"><span
              className="text-[35px] text-white-A700"
            >Submit</span></button>
            </div>
          </form>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
