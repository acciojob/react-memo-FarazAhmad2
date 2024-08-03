import React, { memo, useState } from "react";
import '../styles/App.css'
const SkillList = () => {
  const [skill, setSkill] = useState(["HTML", "CSS", "Javascript", "React"]);
  const [Inp, setInp] = useState("");

  const addSkill = () => {
    if (Inp && !skill.includes(Inp)) {
      setSkill([...skill, Inp]);
    }
    setInp("")
  };

  const deleteSkill = (skillToDelete) => {
    setSkill(skill.filter((s) => s != skillToDelete));
  };

  return (
    <div>
      <h1>React.memo</h1>
      <input id="skill-input" type="text" value={Inp} onChange={(e) => setInp(e.target.value)} />
      <button id="skill-btn" onClick={addSkill}>Add Skill</button>
      <ul>
        {skill.map((item, idx) => (
          <li onClick={()=>deleteSkill(item)} key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ReactMemo = memo(SkillList);

export default ReactMemo;
