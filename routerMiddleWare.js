const express = require('express');
const app = express();
const router = express.Router();

// Router middleware
router.use((req, res, next) => {
  console.log('This middleware runs for routes defined in the router');
  next();
});

// Route handler for the router
router.get('/route1', (req, res) => {
  res.send('Response from route1');
});

router.get('/route2', (req, res) => {
  res.send('Response from route2');
});

// Mount the router at a specific path
app.use('/s', router);
app.use((req,res,next)=>{
    console.log('this is general');
    next();
})
app.get('/',(req,res)=>{
    res.send("hi shri")
})

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
