import  { useState } from "react";
import PropTypes from "prop-types";



const CardExpandable = ({ image, title,  tableData }) => {
    const [expanded, setExpanded] = useState(false);


  return (
    <div className="md:w-[400px] border border-[#38383820] p-5 h-[400px] items-center w-full mx-auto relative overflow-scroll   bg-white rounded-xl  shadow-lg">
       <button
          className="flex w-full flex-col items-center justify-between  h-full"
          onClick={() => setExpanded(!expanded)}
        >
      <img className="w-full object-contain max-h-[300px]" src={image} alt="Card" />
      <h1 className="font-bold p-3 text-xl mb-2">{title}</h1>

          <div className={`absolute transition-all ease-in-out delay-400 ${expanded ? 'opacity-100 h-fit': 'opacity-0 h-[0px] overflow-hidden'}  top-0 z-50 bg-white w-full px-5 left-0 `}>
                              <h1 className="font-bold pt-2">{title} Specifications</h1>

            <table className="mt-4 m-1 w-full">
              <tbody>
                {Object.entries(tableData).map(([key, value]) => (
                  <>
                  <tr key={key}>
                    <td className="font-semibold text-start p-1 border">{key}</td>
                    <td className="border text-start p-1">{typeof value === "object" ? JSON.stringify(value) : value}</td>
                  </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
     
      </button>

    </div>
  );
};


CardExpandable.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tableData: PropTypes.arrayOf(
      PropTypes.shape({
        column1: PropTypes.string.isRequired,
        column2: PropTypes.string.isRequired,
        // Add more validations for additional columns if needed
      })
    ).isRequired,
  };
export default CardExpandable
