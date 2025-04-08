
import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[400px] bg-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8970401823214!2d-58.46882242511758!3d-34.60653687295908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca07f35461a5%3A0x83f35ecb7082dfdf!2sAv.%20Gaona%201851%2C%20C1416DRG%20CABA%2C%20Argentina!5e0!3m2!1sen!2sus!4v1712612211216!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
