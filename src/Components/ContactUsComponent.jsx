const ContactUsComponent = () => {
  return (
    <div className="my-10 bg-secondary rounded-3xl  py-10  items-center md:items-start justify-center md:gap-5  flex flex-col md:flex-row ">
      <h1 className="p-5 text-3xl text-center">Submit your requirements</h1>
      <div className="flex flex-col gap-5 p-2 w-[80%] items-center">
        <form
          className="flex flex-col gap-5 "
          action="https://formspree.io/f/mbjnpvkq"
          method="POST"
        >
          <input
            type="email"
            name="email"
            id="1"
            className="border border-[#383838] rounded-full p-5 md:w-[400px] h-[50px]"
            placeholder="Enter your e-mail"
          />
           <input
            type="tel"
            name="phone"
            id="2"
            className="border border-[#383838] rounded-full p-5 md:w-[400px] h-[50px]"
            placeholder="Enter your contact number"
          />
          <textarea
            type="text"
            name="message"
            placeholder="Write your message"
            className="border border-[#383838] rounded-3xl p-5"
          ></textarea>

          <button
            type="submit"
            className="bg-primary w-fit px-4 p-2 rounded-3xl"
          >
            <h1 className="text-white text-xl font-extrabold">Enquire Now</h1>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsComponent;
