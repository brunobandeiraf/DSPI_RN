import tensorflow as tf
from tensorflowjs.converters import save_keras_model

model = tf.saved_model.load("path/to/your/saved_model")

keras_model = tf.keras.models.Model.from_saved_model(model)
keras_model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

tmp_dir = "path/to/temp/directory"
keras_model.save(tmp_dir)

save_keras_model(keras_model, "path/to/tfjs/model")