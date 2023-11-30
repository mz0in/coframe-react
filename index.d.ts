export module coframe {
    /**
     * Initialize Coframe tracking.
     * @param id This is the page ID which tells Coframe which site variants it should load and where it should save the data collected.
     */
    export function init(id: string): void;
  
    /**
     * Track an event
     * @param name This is the name which we will log the event under.
     */
    export function logCoframeConversion(
      name: string,
    ): void;
  }
  