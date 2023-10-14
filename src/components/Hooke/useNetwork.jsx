/** @format */

import React, {useEffect, useState} from "react";

export default function useNetwork() {
  let [isOnline, setIsOnline] = useState(true);


  useEffect(() => {
    detectOnline();
  }, []);


  function detectOnline() {
    window.addEventListener('online', function() {
      setIsOnline(true);
      console.log("online");
    });

    window.addEventListener('offline', function() {
      setIsOnline(false);
      console.log("offline");
    });
  }


  return (
    <>
      {isOnline?
        <div className="network">
          <h2>online</h2>
        </div>
       : 
        <div>
          <h3 className="network"> <i className="fas fa-wifi"></i>offline</h3>
        </div>
      }
    </>
  );
}
