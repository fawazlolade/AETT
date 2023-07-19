const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const externalRoutes = require('./routes/externalRoutes');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', externalRoutes);
app.use('/generate', externalRoutes);

app.post('/result', (req, res) => {

    //inputs received from the Form on generate page
    let year = req.body.year;
    let semester = req.body.semester;
    let course1 = req.body.course1;
    let course2 = req.body.course2;
    let course3 = req.body.course3;
    let course4 = req.body.course4;
    let course5 = req.body.course5;
    let course6 = req.body.course6;
    let course7 = req.body.course7;
    let course8 = req.body.course8;
    let course9 = req.body.course9;
    let course10 = req.body.course10;
    let course11 = req.body.course11;
    let course12 = req.body.course12;
    let course13 = req.body.course13;
    let course14 = req.body.course14;
    let course15 = req.body.course15;
    
    const results = [course1, course2, course3, course4, course5, course6, course7, course8, course9, course10, course11, course12, course13, course14, course15];

    // Function to get multiple random results
    function getMultipleRandomResults(numResults) {
    // Make sure the requested number of results is not greater than the array length
    if (numResults > results.length) {
        console.log('Error: Requested number of results exceeds array length');
        return;
    }

    // Shuffle the array to randomize the order
    const shuffledResults = results.sort(() => Math.random() - 0.5);

    // Output the requested number of random results
    const randomResults = shuffledResults.slice(0, numResults);

    //getting the results at different indexes of the array 
   const courseZero = randomResults[0];
    const courseOne = randomResults[1];
    const courseTwo = randomResults[2];
    const courseThree = randomResults[3];
    const courseFour = randomResults[4];
    const courseFive = randomResults[5];
    const courseSix = randomResults[6];
    const courseSeven = randomResults[7];
    const courseEight = randomResults[8];
    const courseNine = randomResults[9];
    const courseTen = randomResults[10];
    const courseEleven = randomResults[11];
    const courseTwelve = randomResults[12];
    const courseThirteen = randomResults[13];
    const courseFourteen = randomResults[14];
   
  
    //rendering the generated results to the result page making the results accessible
    res.render('result', {
        year: year,
        semester: semester,
        result: courseZero,
        result1: courseOne,
        result2: courseTwo,
        result3: courseThree,
        result4: courseFour, 
        result5: courseFive,
        result6: courseSix,
        result7: courseSeven,
        result8: courseEight,
        result9: courseNine,
        result10: courseTen,
        result11: courseEleven,
        result12: courseTwelve,
        result13: courseThirteen,
        result14: courseFourteen,
    })
    }
    return getMultipleRandomResults(14);
    });


//Config Port
const port = 3000 || process.env.PORT;
app.listen(port, () => console.log(`server started at ${port}`))








