const Thumbnail = require("../models/thumbnail.js");
const path = require("path");
const fs = require("fs");
const util = require("util");
const { pipeline } = require("stream");
const pipelineAsync = util.promisify(pipeline);
