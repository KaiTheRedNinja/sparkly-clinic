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

const ContactOption = ({ icon, name, value, link }) => {
  return (
    <div className="w-full p-3 bg-white border rounded-xl shadow-md">
      <div className="flex items-center">
        {icon && (
          <img src={icon} alt={name} className="w-6 h-6 mr-2" />
        )}
        <h3>{name}</h3>
      </div>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          {value}
        </a>
      ) : (
        <p>{value}</p>
      )}
    </div>
  );
}

const ContactOptions = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="hidden lg:flex flex-col space-y-4">
        <ContactOption name="💌 Email" value="hsc@mtalvernia.sg" link="mailto:hsc@mtalvernia.sg" />
        <ContactOption name="WhatsApp" icon="./assets/whatsapp.png" value="+65 9819 1303" link="https://wa.me/6598191303" />
        <ContactOption name="☎️ Phone" value="+65 6247 6215" link="tel:6562476215" />
        <ContactOption name="📠 Fax" value="+65 6250 6481" />
      </div>

      <div className="lg:hidden flex flex-col space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <ContactOption name="💌 Email" value="hsc@mtalvernia.sg" link="mailto:hsc@mtalvernia.sg" />
          <ContactOption name="WhatsApp" icon="./assets/whatsapp.png" value="+65 9819 1303" link="https://wa.me/6598191303" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ContactOption name="☎️ Phone" value="+65 6247 6215" link="tel:6562476215" />
          <ContactOption name="📠 Fax" value="+65 6250 6481" />
        </div>
      </div>
    </div>
  )
}

const EmailBuilder = () => {
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
    <div className="space-y-4">
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

      <div className="w-full flex justify-center gap-4 text-center">
        <div className="w-fit relative p-2 bg-white border rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300">
          <a href={emailLink()} target="_blank" rel="noopener noreferrer">
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
  );
}

const ContactMe = () => {
  return (
    <section id="contactme" className="w-full bg-[#DAEBD6] py-8 px-4 md:py-16 md:px-8">
      <div className="p-4 lg:max-w-[70%] mx-auto text-left">
        <h1 className="mb-5">Contact Me</h1>

        <div class="flex flex-col lg:flex-row items-center justify-between">
          <ContactOptions />
          
          <div class="flex items-center lg:items-stretch my-4 lg:my-0 lg:mx-8 w-full lg:w-auto">
            {/* This is the horizontal "or" on smaller screens, which has lines to the left and right */}
            <div class="flex items-center w-full lg:hidden">
              <div class="flex-grow h-px bg-gray-300"></div>
              <span class="px-4 font-bold text-gray-500">OR</span>
              <div class="flex-grow h-px bg-gray-300"></div>
            </div>
            
            {/* This is the vertical "or" on larger screens, which doesn't have the lines */}
            <div class="hidden lg:flex flex-col justify-center h-full">
              <span class="py-4 font-bold text-gray-500">OR</span>
            </div>
          </div>
          
          <EmailBuilder />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;