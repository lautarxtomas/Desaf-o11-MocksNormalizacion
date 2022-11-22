const { normalize, schema } = require('normalizr')

function normalizeMsgs(msgs) {

  const chatMsgs = msgs.map((msg) => {
    return {
      author: msg.author,
      text: msg.text
    }
  })

  const authorSchema = new schema.Entity('author', {}, { idAttribute: 'id' });

  const mensajeSchema = new schema.Entity('messages', {
    author: authorSchema
  }, {idAttribute: "text"})

  const normalizedData = normalize(chatMsgs, [mensajeSchema]);
  return normalizedData;
}

module.exports = normalizeMsgs