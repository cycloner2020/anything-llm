import React, { useEffect } from 'react';
import Sidebar from '@/components/SettingsSidebar'; // Adjust the import path as needed

export default function WorkspaceChats() {
  useEffect(() => {
    // Voiceglow Widget Configuration
    window.VG_CONFIG = {
      ID: "qk70temx7",
      region: 'na', // 'eu' or 'na' corresponding to Europe and North America
      render: 'full-width', // popup or full-width
      stylesheets: [
        "https://storage.googleapis.com/voiceglow-cdn/vg_live_build/styles.css",
        // Add your custom css stylesheets here, if any
      ],
      // userID: 'USER_ID', // If you want to use your own user_id
      // autostart: true, // Whether to autostart the chatbot with the proactive message
    };

    const vgScript = document.createElement("script");
    vgScript.src = "https://storage.googleapis.com/voiceglow-cdn/vg_live_build/vg_bundle.js";
    vgScript.defer = true;
    document.body.appendChild(vgScript);

    return () => {
      // Remove the script and the configuration on cleanup
      document.body.removeChild(vgScript);
      delete window.VG_CONFIG;
    };
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden bg-sidebar flex">
      <Sidebar />
       <div
        style={{ width: '100%', height: 'calc(100vh - 50px)' }} // Adjust the 50px if you have a header or any other offset
        id="VG_OVERLAY_CONTAINER"
      >
        {/* Voiceglow widget will render here */}
      </div>
    </div>
  );
}
