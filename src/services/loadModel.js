const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
    const modelPath = process.env.MODEL_URL;
    const handler = tf.io.fileSystem(modelPath);
    return tf.loadGraphModel(handler);
}

module.exports = loadModel;