const express = require('express');
const router = express.Router();

const searchController = require('../../controller/frontend/search_controller')

router.get('/', searchController.search);

module.exports = router;