const express = require('express');
const router = express.Router();


// Candidate API routes
router.use(require('./candidateRoutes'));
// Parties API routes
router.use(require('./partyRoutes'));
// Voter API routes
router.use(require('./voterRoutes'));
// Vote Apie Routes
router.use(require('./voteRoutes'))


module.exports = router;