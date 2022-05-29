const express = require('express')
const router = express.Router()
const userTemplatecopy = require('../Models/UserModels')
const path = require('path')

const name={};
//post request
router.post('/',(request,response)=>{
const userinfo = new userTemplatecopy({
    fullName: request.body.fullName,
    height: request.body.height,
    email: request.body.email
})
userinfo.save()
.then(data =>{
    response.json(data)
   let name =data.fullName
    
    
})
.catch(error =>{
    response.json(error)
    
})

})

/// aggregrating data
const pipeline =([
    // getting average
      {
        '$project': {
          'height': {
            '$avg': '$height'
          }
        }
      }, {
        '$group': {
          '_id': 'getavg', 
          'average_height': {
            '$avg': '$height'
          }
        }
      }
    
  ]) ;

//get request

router.get("/getrd", async (req, res) => {
  try {
    const rdv = await userTemplatecopy.aggregate(pipeline);
    res.json(rdv);
    console.log('Fetched average');
  } catch (e) {
    res.send({ message: "Error in Fetching average:", e });
  }
});

//get 
router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../height_teller/build', 'index.html'));
});

module.exports = router