const Chat = require('./models/Chat');

// @route   POST /chat/start
// @desc    Create chat or get existing one
// @body    { senderId, receiverId }

app.post('/chat/start', async (req, res) => {
  const { senderId, receiverId } = req.body;

  try {
    // Check if chat already exists between two users
    let chat = await Chat.findOne({
      members: { $all: [senderId, receiverId] }
    });

    if (!chat) {
      // Create new chat if not found
      chat = new Chat({ members: [senderId, receiverId] });
      await chat.save();
    }

    res.status(200).json(chat);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});
// @route   GET /messages/:chatId
// @desc    Get all messages in a chat

app.get('/messages/:chatId', async (req, res) => {
  try {
    const messages = await Message.find({ chatId: req.params.chatId });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch messages', error: err });
  }
});

const Message = require('./models/Message');

// @route   POST /message
// @desc    Send message in a chat
// @body    { chatId, sender, text }

app.post('/message', async (req, res) => {
  const { chatId, sender, text } = req.body;

  try {
    const message = new Message({ chatId, sender, text });
    await message.save();

    res.status(200).json(message);
  } catch (err) {
    res.status(500).json({ message: 'Message not sent', error: err });
  }
});

import ScrollToBottom from 'react-scroll-to-bottom';

function ChatMessages({ messages }) {
  return (
    <ScrollToBottom className="info--dataShow" style={{ height: '80vh' }}>
      {messages.map((msg, idx) => (
        <div key={idx} className="message">
          {msg.text}
        </div>
      ))}
    </ScrollToBottom>
  );
}

npm install react-scroll-to-bottom

::-webkit-scrollbar {
  width: 5px;
}


::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}


::-webkit-scrollbar-thumb {
  background: rgb(25, 32, 36);
  border-radius: 10px;
}
