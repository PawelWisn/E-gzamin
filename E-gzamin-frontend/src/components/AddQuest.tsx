import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import "./AddQuest.css";
import QuestionsTable from "./QuestionsTable";
import CategoryFilter from "./CategoryFilter";
import QuestionCreator from "./QuestionCreator";
import CourseSelect from "./CourseSelect";

const questions = [
  {
    id: 0,
    question: "How much does an average male german shepherd (dog) weigh?",
  },
  {
    id: 1,
    question:
      "How much does an average male german shepherd (dog) weigh How much does an average male german shepherd (dog) weigh?",
  },
  { id: 2, question: "fdsfsdfsdfsdfs" },
  { id: 3, question: "fdsfgsdgsfdgsdgfsd" },
  { id: 4, question: "fdsfsdfsdfsdfs" },
  { id: 5, question: "fdsfgsdgsfdgsdgfsd" },
  { id: 6, question: "fdsfsdfsdfsdfs" },
  { id: 7, question: "fdsfgsdgsfdgsdgfsd" },
  { id: 8, question: "fdsfsdfsdfsdfs" },
  { id: 9, question: "fdsfgsdgsfdgsdgfsd" },
  { id: 10, question: "fdsfsdfsdfsdfs" },
  { id: 11, question: "fdsfgsdgsfdgsdgfsd" },
  { id: 12, question: "fdsfsdfsdfsdfs" },
  { id: 13, question: "fdsfgsdgsfdgsdgfsd" },
  { id: 14, question: "fdsfsdfsdfsdfs" },
  { id: 15, question: "fdsfgsdgsfdgsdgfsd" },
  { id: 16, question: "fdsfsdfsdfsdfs" },
  { id: 17, question: "fdsfgsdgsfdgsdgfsd" },
  { id: 18, question: "fdsfsdfsdfsdfs" },
  { id: 19, question: "fdsfgsdgsfdgsdgfsd" },
  { id: 20, question: "fdsfsdfsdfsdfs" },
  { id: 21, question: "fdsfgsdgsfdgsdgfsd" },
  { id: 22, question: "fdsfsdfsdfsdfs" },
  { id: 23, question: "fdsfgsdgsfdgsdgfsd" },
];

const categories = [
  { id: 0, name: "math" },
  { id: 1, name: "physics" },
  { id: 2, name: "math" },
  { id: 3, name: "physics" },
  { id: 4, name: "math" },
  { id: 5, name: "math" },
  { id: 6, name: "math" },
  { id: 7, name: "physics" },
  { id: 8, name: "math" },
  { id: 9, name: "physics" },
  { id: 10, name: "math" },
  { id: 11, name: "math" },
  { id: 12, name: "math" },
  { id: 13, name: "physics" },
  { id: 14, name: "math" },
  { id: 15, name: "physics" },
  { id: 16, name: "math" },
  { id: 17, name: "math" },
];

const courses = [
  { id: 3, name: "physics" },
  { id: 4, name: "math" },
  { id: 5, name: "math" },
  { id: 6, name: "math" },
  { id: 7, name: "physics" },
  { id: 8, name: "math" },
  { id: 9, name: "physics" },
  { id: 10, name: "math" },
  { id: 11, name: "math" },
  { id: 12, name: "math" },
  { id: 13, name: "physics" },
  { id: 14, name: "math" },
  { id: 15, name: "physics" },
  { id: 16, name: "math" },
  { id: 17, name: "math" },
];

const useStyles = makeStyles((theme) => ({
  addQuest: {
    width: "inherit",
    backgroundColor: theme.palette.background.default,
  },
  questionDetails: {
    display: "flex",
    flexDirection: "row",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseSelect: {
    minWidth: "250px",
    margin: "20px",
  },
  courseSelectSelect: {
    width: "100%",
  },
}));

function AddQuest() {
  const styles = useStyles();

  const x: string = "AddQuest";
  return (
    <div className={styles.addQuest}>
      <div className={styles.header}>
        <CategoryFilter
          categories={categories}
          onCategoryClick={(c) => () => {}}
        />
        <CourseSelect courses={courses} />
      </div>
      <div className={styles.questionDetails}>
        <QuestionsTable questions={questions} />
        <QuestionCreator />
      </div>
    </div>
  );
}

type CourseType = {
  id: number;
  name: string;
};

type CourseSelectType = {
  styles: Record<string | number | symbol, string>;
  courses: Array<CourseType>;
};

export default AddQuest;
