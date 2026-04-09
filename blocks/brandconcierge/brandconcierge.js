




/*
export default function decorate(block) {
  block.setAttribute('id', 'brand-concierge-mount');
}
  */

export default async function decorate(block) {
  block.setAttribute('id', 'brand-concierge-mount');

  // Wait for Alloy to be available, then bootstrap
  try {
    const result = await window.alloy("sendEvent", {
      conversation: { fetchConversationalExperience: true }
    });
    console.log("Conversation experience fetched", result);
    
    await window.alloy("bootstrapConversationalExperience", {
      selector: "#brand-concierge-mount",
      src: "/scripts/brandconciergemain.js",
      stylingConfigurations: window.styleConfiguration,
      stickySession: true,
    });
  } catch (err) {
    console.error("Brand Concierge failed to load:", err);
  }
}

