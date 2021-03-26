var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'covid App',
  // App id
  id: 'com.covidapp',
  // Enable swipe panel
  panel: {
    swipe: true,
  },

  
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
  // ... other parameters
});