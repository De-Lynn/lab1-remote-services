import { writeFileSync } from "fs";
import path from "path";

const { lesson } = process.env;

// Part 1
const filePathForTask1 = path.resolve(__dirname, "output", "output1.json");
const { arr_length } = process.env;

const task1 = () => {
  if (typeof arr_length !== "string" || arr_length.length === 0) {
    writeFileSync(filePathForTask1, JSON.stringify({ message: "Агрумент arr_length не был передан" }));
    return;
  }

  const int_arr_length = Number(arr_length)

  let randChar = () => {
    return Array.from({ length: int_arr_length }, () => Math.random() * 50);
  }

  const result = randChar()

  let print_result = () => {
    console.log(result)
  }

  print_result()

  writeFileSync(
    filePathForTask1,
    JSON.stringify({
      input: {
        arr_length,
      },
      result,
    })
  );
};

task1();
