import { Props } from "./Props";
const Page = () => {
  const Maplay = [1, 2, 3, 4, 5];
  const students = [
    { id: 1, name: "mojuhi", nas: "21" },
    { id: 2, name: "dorjee", nas: "12" },
    { id: 3, name: "dulm", nas: "13" },
  ];
  return (
    <div>
      <Props jagsaalt={"props<="} />

      {Maplay.map((items, index) => {
        return <div key={index}>{items * 2}</div>;
      })}

      {students.map((studentName, index) => {
        return <p key={index}> ner: {studentName.name}</p>;
      })}

      {students.map((nas) => {
        return <div>nas:{nas.nas}</div>;
      })}
    </div>
  );
};
export default Page;
