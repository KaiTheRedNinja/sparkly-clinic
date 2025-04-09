import { useState } from 'react';
import { medicalConditionsFlat } from '../data/medicalConditions';

const TextField = ({ placeholder, value, onChange }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 bg-white border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      {value === "" && (
        <div className="absolute top-0 left-0 p-2 pointer-events-none text-gray-400">
          {placeholder}
        </div>
      )}
    </div>
  );
};

const Dropdown = ({ placeholder, value, onChange, options }) => {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={"w-full p-2 bg-white border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none" + (value==="" ? " text-gray-400" : "")}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
};

const DatePicker = ({ placeholder, value, onChange }) => {
  return (
    <div className="w-full p-2 bg-white border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center justify-between">
      <p className={value==="" ? "text-gray-400" : ""}>{placeholder}</p>
      <input 
        aria-label="Date and time" 
        type="datetime-local" 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        className="focus:outline-none"
      />
    </div>
  );
}

const ContactMe = () => {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [patientId, setPatientId] = useState("");
  const [phone, setPhone] = useState("");
  const [condition, setCondition] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [date, setDate] = useState("");

  const relationOptions = ["Patient", "Parent/Guardian", "Other"];
  const conditionOptions = medicalConditionsFlat.map((condition) => condition.conditionName);
  const appointmentOptions = ["Consultation", "Follow-up"];

  const showOtherCondition = !conditionOptions.includes(condition) && condition!==''

  function emailMessage() {
    return `\
Hello,
${name !== "" ? ("My name is " + name + ". ") : ""}${relation !== "" ? ("I am the " + relation + ".") : ""}\
${patientId !== "" ? ("\nThe patient's Patient ID is " + patientId + ". ") : ""}${phone !== "" ? ("\nMy phone number is " + phone + ".") : ""}\

${condition !== "" ? ("I am writing to query about " + condition + ". ") : ""}\
${appointmentType !== "" ? ("I would like to schedule a " + appointmentType.toLowerCase() + " appointment. ") : ""}${date !== "" ? ("My preferred date and time is " + date + ".") : ""}
    `
  }

  function emailLink() {
    const message = emailMessage();

    const body = encodeURIComponent(message);
    const url = "mailto:hsc@mtalvernia.sg?subject=Appointment Request&body=" + body;
    
    return url
  }

  return (
    <section id="contactme" className="w-full bg-[#FAF7ED] py-8 px-4 md:py-16 md:px-8">
      <div className="p-4 lg:max-w-[50%] mx-auto">
        <div className="p-4 space-y-4 mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <TextField 
              placeholder="Your Name"
              value={name} 
              onChange={setName} 
            />
            <Dropdown 
              placeholder="Relation to Patient"
              value={relation} 
              onChange={setRelation}
              options={relationOptions}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <TextField 
              placeholder="Patient ID (if any)" 
              value={patientId} 
              onChange={setPatientId} 
            />
            <TextField 
              placeholder="Phone Number" 
              value={phone} 
              onChange={setPhone} 
            />
          </div>
          
          <div className={`grid grid-cols-${showOtherCondition ? 2 : 1} gap-4`}>
            <Dropdown 
              placeholder="Condition"
              value={condition==='' ? '' : (conditionOptions.includes(condition) ? condition : "Other")} 
              onChange={setCondition} 
              options={conditionOptions.concat(["Other"])}
            />
            {showOtherCondition && (
              <TextField 
                placeholder="Condition (if other)" 
                value={condition === "Other" ? "" : condition} 
                onChange={setCondition} 
              />
            )}
          </div>

          <div>
            <Dropdown
              placeholder="Type of Appointment"
              value={appointmentType}
              onChange={setAppointmentType}
              options={appointmentOptions}
            />
          </div>

          <div>
            <DatePicker 
              placeholder="Preferred Date and Time"
              value={date}
              onChange={setDate}
            />
          </div>

          <div className="w-full flex justify-center gap-4">
            <div className="w-fit relative p-2 bg-white border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
              <a href={emailLink()}>
                <h3 className="">
                  Open in your Email Service
                </h3>
              </a>
            </div>

            <div className="w-fit relative p-2 bg-white border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
              <button onClick={() => {
                navigator.clipboard.writeText(emailMessage());
                alert("Email body copied to clipboard!");
              }}>
                <h3 className="">
                  Copy Email Body to Clipboard
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;