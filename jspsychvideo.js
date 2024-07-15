document.addEventListener("DOMContentLoaded", function() {
  // Load jsPsych library and plugins
  var script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/jspsych@6.3.1/jspsych.js";
  document.head.appendChild(script);

  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = "https://cdn.jsdelivr.net/npm/jspsych@6.3.1/css/jspsych.css";
  document.head.appendChild(link);

  var videoPlugin = document.createElement('script');
  videoPlugin.src = "https://cdn.jsdelivr.net/npm/jspsych@6.3.1/plugins/jspsych-video-keyboard-response.js";
  document.head.appendChild(videoPlugin);

  var preloadPlugin = document.createElement('script');
  preloadPlugin.src = "https://cdn.jsdelivr.net/npm/jspsych@6.3.1/plugins/jspsych-preload.js";
  document.head.appendChild(preloadPlugin);

  // Wait for the libraries to load
  script.onload = function() {
    videoPlugin.onload = function() {
      preloadPlugin.onload = function() {
        // Define the preload trial
        var preload_trial = {
          type: 'preload',
          auto_preload: true,
          show_progress_bar: false // Hide progress bar
        };

        // Define the video trial
        var video_trial = {
          type: 'video-keyboard-response',
          stimulus: ['https://your-video-url-here.mp4'], // Replace with your actual video URL
          width: 600,
          height: 400,
          autoplay: true,
          controls: false,
          trial_ends_after_video: true,
          choices: jsPsych.NO_KEYS // Prevent any key press during video playback
        };

        // Define the response trial
        var response_trial = {
          type: 'html-keyboard-response',
          stimulus: '<p>You can now press any key to proceed.</p>',
          choices: jsPsych.ALL_KEYS
        };

        // Initialize the experiment timeline
        var timeline = [preload_trial, video_trial, response_trial];

        // Start the experiment
        jsPsych.init({
          timeline: timeline,
          on_finish: function() {
            // Additional logic can be added here if needed
          }
        });
      };
    };
  };
});
