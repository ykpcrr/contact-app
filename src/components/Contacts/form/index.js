import { useState } from "react";

const initialFormValues = {fullname : '', phone_number:''}

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]);

    setForm(initialFormValues );
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="fullname"
            placeholder="Full Name"
            onChange={onChangeInput}
            value={form.fullname}
          ></input>
        </div>
        <div>
          <input
            name="phone_number"
            placeholder="Phone Number"
            onChange={onChangeInput}
            value={form.phone_number}
          ></input>
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
