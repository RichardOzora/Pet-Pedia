function Title2({ text1, text2 }) {

  const customStyle = {
    fontFamily: "'Varela Round', sans-serif"
  };

    return (
      <div style={customStyle} className="inline-flex gap-2 items-center mb-3">
        <p className="w-16 md:w-24 h-[1px] bg-gray-500"></p>
        <p className="text-gray-500">{text1} <span className="text-gray-700 font-medium">{text2}</span></p>
        <p className="w-16 md:w-24 h-[1px] bg-gray-700"></p>
      </div>
    );
  }
  
  export default Title2;
  